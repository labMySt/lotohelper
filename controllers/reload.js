const request = require("request-promise-native");
const cheerio = require('cheerio');
const lotto = require('../models/lottories');

const parser5from36 = async function(){
  const URL = "https://lotostat.ru/536/arhiv-536/100/";
  var elements = [];
   return request.get(URL)
   .then(page =>{
     if(page){
       const $ = cheerio.load(page);
       $('table#table536').find("tbody>tr").each(function( index, element ) {
         var el = {};
         $(element).find("td").each((i,v) => {
           if(i ==0){
             el["number"] = +$(v).text();
           } else {
             el[i] =  +$(v).text();
           }
         })
         elements.push(el);
         console.log(el);
        })
     }
     elements.shift();
   })
   .then(result => {
     return elements;
   })
 }

module.exports.reload = function(req, res){
  
  parser5from36()
  .then(elements =>{
    lotto.findOneAndUpdate({name:"5from36"},{currentDrowing: 4, drowing: elements}, {upsert: true})
        .exec((err, doc) => {

          if(doc) res.json(doc)
        })
      })
};
