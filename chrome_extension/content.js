
var element = document.getElementsByClassName("LC20lb")[0];
var Fake_News = ["https://pubs.usgs.gov/of/2002/of02-368/seg98/gm98_74stk.sgy"];
var i, len, text;
var Search_Page_Link_List = document.getElementsByClassName("iUh30");

// element.appendChild(para);
function insertAfter(newNode, referenceNode) {
   referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

var F_img = document.createElement("IMG");
F_img.setAttribute("src", "static/icon.png");
F_img.setAttribute("width", "25");
F_img.setAttribute("height", "25");
F_img.setAttribute("alt", "Good News");
F_img.style.verticalAlign="middle";
F_img.style.margin = "50px 10px ";

// var element = document.getElementById("LC20lb");
// element.appendChild(x);
// document.body.insertAfter(x, element);
var Search_Page_Link_List = document.getElementsByClassName("iUh30");

for (i = 0, len = Search_Page_Link_List.length, text = ""; i < len; i++) {
   var x = Search_Page_Link_List[i].textContent;
   for (M = 0; M < Fake_News.length; M++) {
       if (x.toLowerCase() == Fake_News[M].toLowerCase()){
           element.parentNode.insertBefore(F_img, element.nextSibling);

       }
   }
}

alert(Fake_News);
