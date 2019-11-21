let tmp = location.search;
document.bgColor = "#" + (tmp.substr(tmp.indexOf("bgColor") + 8, 6) || "ffffff");

function changeBackgroundColor()
   {var colors = document.getElementsByName("color");
    for (var i = 0; i < colors.length; i++) {if (colors[i].checked) {document.bgColor = colors[i].value}}};

function show()
   {document.getElementsByClassName("close")[0].style.display = "initial";
    document.getElementsByClassName("change_background")[0].style.display = "initial"
   };

function Close() 
   {document.getElementsByClassName("close")[0].style.display = "none";
    document.getElementsByClassName("change_background")[0].style.display = "none"
   };

function SaveColor(href) {window.open(href + ".html?bgColor=" + document.bgColor.slice(1), "_self")}
