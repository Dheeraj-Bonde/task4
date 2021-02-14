var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    
    var NationHavingDollar = data.filter((country)=>{
        return country.currencies[0].symbol === '$';
    })
    console.log(NationHavingDollar);
}
