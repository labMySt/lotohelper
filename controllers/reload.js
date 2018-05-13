const request = require("request-promise-native");
const cheerio = require('cheerio')

const parser = async function(){
  const URL = "https://lotostat.ru/536/arhiv-536/100/";
  var elements = {};
   return request.get(URL)
   .then(page =>{
     if(page){
       const $ = cheerio.load(page);
       $('table#table536').find("tbody>tr").each(function( index, element ) {
         var number = 0;
         $(element).find("td").each((i,v) => {
           if(i == 0){
             number = $(v).text();
             elements[number] = [];
           }
          elements[number].push(+$(v).text());
         })
        })
     }
     delete elements["№ Тиража"];
   })
   .then(result => {
     return elements;
   })
 }

module.exports.reload = function(req, res){

  parser()
  .then(elements => res.send(elements));

}
