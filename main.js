var btn1=document.getElementById('btn');
var mainUl1=document.getElementById('mainUl');
var text="";


btn1.addEventListener('click',function(){
  //in var we will iniciate XMLHttp object through the method XMLHttp()
//XMLHttp to comunicate with a server without reload of the page
var xmlXttp =new XMLHttpRequest();
xmlXttp.onreadystatechange = function(){
//server will send readyState; if 4 our request is succesfull/ return of our req is success 
//and if the file is successfully find and send from a server(200)
if(xmlXttp.readyState == 4 && xmlXttp.status ==200){
//our function data with a xmlXttp parametar
    data(xmlXttp);
}
}
//we open the request
xmlXttp.open('get','https://mysafeinfo.com/api/data?list=presidents&format=json&case=default',true);
//send the request to a server ;from this momonet listen to onreadystatement
xmlXttp.send();  
})

function data(dataJson){
    //our json file is in the textFile,text format so we need to parse it in JSON
var allData=JSON.parse(dataJson.responseText);
//loop through all the data in the array
allData.forEach((e,i) => {
    text +="<li>"+e.FullName+"</li>"
});
//give all the text to our Ul 
mainUl1.innerHTML=text;
}


