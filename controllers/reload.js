const request = require("request-promise-native");
const cheerio = require('cheerio');
const lotto = require('../models/lottories');

const parser5from36 = async function(){
  const URL = "https://lotostat.ru/536/arhiv-536/";
  var result = [];
   return request.get(URL)
   .then(page =>{
     if(page){
       const $ = cheerio.load(page);
       $('table#table536').find("tbody>tr").each(function( index, element ) {
         var el = {};
         $(element).find("td").each((i,v) => {
           if(i == 0){
             el["number"] = +$(v).text();
           } else {
             if(!$(v).hasClass("dop"))
             el[i] =  +$(v).text();
           }
         })
         if(index > 0){
           result.push(el);
           lotto.findOneAndUpdate({'number': el["number"]},el, {upsert: true},function(err, obj){
             if(err) console.log(err);
           })
         }
      })
     }
   })
   .then(res => {
     return result;
   })
 }
module.exports.reload = function(req, res){
  parser5from36()
  .then(doc =>{
    console.log("doc", doc);
          if(doc) res.json(doc);
          res.send("no");
        })
};
