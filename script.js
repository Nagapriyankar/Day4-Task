console.log("Hello Nagapriyanka");


var request= new XMLHttpRequest();     //01
request.open("GET","https://restcountries.com/v3.1/all");  //02
request.send();                    //03
request.onload=function(){
var jsonObject = JSON.parse(request.response);
console.log(jsonObject);

// Getting country flag from Rest API

for(country of jsonObject){
    console.log(jsonObject.map(country => country.flag).join(' '));
}


// Getting country name, population,  region, sub region from Rest API

for(country of jsonObject){
    console.log(`Name : ${country.name.common},Population :${country.population},Region : ${country.region},Sub-region : ${country.subregion}`);
}


}

