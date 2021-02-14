var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    
    data.forEach((nation) =>{
        console.log(nation.name);
        console.log(nation.capital);
        console.log(nation.flag);
    });
}
