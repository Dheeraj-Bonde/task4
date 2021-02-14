var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    
    var totalPop = data.reduce((tot,nam)=>{
        let pop = +nam.population;
        return tot + pop},0);
    console.log(totalPop);
}
