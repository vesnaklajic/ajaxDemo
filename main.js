//'database of the Americas presidents
//https://mysafeinfo.com/api/data?list=presidents&format=json&case=default'
//database of English minarchs
//'https://mysafeinfo.com/api/data?list=englishmonarchs&format=json&case=default'



var enMon = new Promise(function (resolve, reject) {
    var xmlXttp = new XMLHttpRequest();

    xmlXttp.open('get', 'https://mysafeinfo.com/api/data?list=englishmonarchs&format=json&case=default', true);

    xmlXttp.onreadystatechange = function () {
        if (xmlXttp.readyState == 4 && xmlXttp.status == 200) {
            resolve(JSON.parse(xmlXttp.responseText));
        }
    }
    xmlXttp.send();
})


var amPres = new Promise(function (resolve, reject) {
    var xml = new XMLHttpRequest();
    xml.open('get', 'https://mysafeinfo.com/api/data?list=presidents&format=json&case=default', true)
    xml.onreadystatechange = function () {
        if (xml.status == 200 && xml.readyState == 4) {
            resolve(JSON.parse(xml.responseText));
        }
    }
    xml.send();
})

amPres.then(function (res) {
    console.log(res);
    return enMon
}).then(function (res) {
    console.log(res);
})