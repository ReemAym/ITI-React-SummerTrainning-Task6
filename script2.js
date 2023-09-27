

// function fun(){
//     window.location.assign("index2.html");
// }


 var n=location.search.split("&")[0].split("=")[1].replaceAll('+',' ');
 var mail=location.search.split("&")[1].split("=")[1].replaceAll('%40','@');

document.getElementById("n").innerHTML=n;
document.getElementById("mail").innerHTML=mail;


// console.log(location.search.split("&")[0].split("=")[1]);
//  var mail=console.log(location.search.split("&")[1].split("=")[1]);
