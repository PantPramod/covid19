var card=document.querySelector('.card');
var body=document.querySelector('body');
card.style.display="none";
var a=document.querySelector('.a');
var b=document.querySelector('.b');
var c=document.querySelector('.c');
var d=document.querySelector('.d');
var e=document.querySelector('.e');
var f=document.querySelector('.f');
var g=document.querySelector('.g');
var h=document.querySelector('.h');
(function fun(){
    fetch("https://api.covid19api.com/summary")
    .then(o => o.json())
    .then(r => {

for(let i=0; i<r.Countries.length; i++){
       
    
       var card2=document.createElement('div');
       card2.className="card2";
       body.appendChild(card2);


       var p1=document.createElement('p');
       p1.className="a"
       p1.textContent= r.Countries[i].Country;
       card2.appendChild(p1);

       var p7=document.createElement('p');
       p7.textContent="Date: "+r.Countries[i].Date;
       p7.className="g";
       card2.appendChild(p7);
       
       var p2=document.createElement('p');
       p2.textContent="Total Confirmed: "+r.Countries[i].TotalConfirmed;
       p2.className="b";
       card2.appendChild(p2);
       
       var p3=document.createElement('p');
       p3.textContent="Total Deaths: "+r.Countries[i].TotalDeaths;
       p3.className="c";
       card2.appendChild(p3);
       
       var p4=document.createElement('p');
       p4.textContent="Total Recovered: "+r.Countries[i].TotalRecovered;
       p4.className="d";
       card2.appendChild(p4);
       
       var p5=document.createElement('p');
       p5.textContent="New Confirmed: "+r.Countries[i].NewConfirmed;
       p5.className="e";
       card2.appendChild(p5);
       
       var p6=document.createElement('p');
       p6.textContent="New Deaths: "+r.Countries[i].NewDeaths;
       p6.className="f";
       card2.appendChild(p6);

       var pp=document.createElement('p');
       var active=r.Countries[i].TotalConfirmed-r.Countries[i].TotalDeaths-r.Countries[i].TotalRecovered;
       pp.textContent="Total Active: "+active;
       pp.className="c";
       card2.appendChild(pp);

    
        
}
    });
})();


function search(){
    var search= document.getElementById('country').value;
    if(search==""){
        alert("Enter Name of Country")
    }else{
    
    card.style.display="block"; 
    var searchsplit=search.split('');
    searchsplit[0]=searchsplit[0].toUpperCase();
    for(let i=1; i<searchsplit.length; i++){
        searchsplit[i]=searchsplit[i].toLowerCase();
    }
   var searches= searchsplit.join('');
   console.log(searches);
   
     fetch("https://api.covid19api.com/summary")
     .then(o => o.json())
     .then(r => {
        
          var arr=r.Countries.filter(function(element){
             if(element.Country.indexOf(searches)>-1)
             return element
             
     })
     
    

        
        a.textContent=arr[0].Country;
        
        
        b.textContent="Total Confirmed: "+arr[0].TotalConfirmed;
        
        
        c.textContent="Total Deaths: "+arr[0].TotalDeaths;
        
        
        d.textContent="Total Recovered: "+arr[0].TotalRecovered;
        
        
        e.textContent="New Confirmed: "+arr[0].NewConfirmed;
        
        f.textContent="New Deaths: "+arr[0].NewDeaths;
        
        
        g.textContent="Updated: "+arr[0].Date;
    
     
 
 })
}
}

