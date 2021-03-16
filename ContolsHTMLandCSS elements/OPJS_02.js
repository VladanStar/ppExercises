var mainOut = document.getElementById('main-out');

var main = document.createElement("div");
main.setAttribute("class", "main");
mainOut.appendChild(main);

var page = document.createElement("div");
page.setAttribute("class", "page");
main.appendChild(page);

var top1 = document.createElement("div");
top1.setAttribute("class", "top");
page.appendChild(top1);

var header1 = document.createElement("div");
header1.setAttribute("class", "header");
top1.appendChild(header1);

var headerTop = document.createElement("div");
headerTop.setAttribute("class", "header-top");
header1.appendChild(headerTop);

var headerTopH1 = document.createElement("h1");
headerTopH1.innerHTML = "Your ";
headerTop.appendChild(headerTopH1);

var headerTopH1Span = document.createElement("span");
headerTopH1Span.innerHTML = " Company";
headerTopH1.appendChild(headerTopH1Span);

var headerTopParagraf = document.createElement("p");
headerTopParagraf.innerHTML = "Call Us: 000 0000 000";
headerTop.appendChild(headerTopParagraf);

var topMenu = document.createElement("div");
topMenu.setAttribute("class", "topmenu");
header1.appendChild(topMenu);

var topMenuUl = document.createElement("ul");
topMenu.appendChild(topMenuUl);

var UlLi1 = document.createElement("li");
topMenuUl.appendChild(UlLi1);

var UlLi1A = document.createElement("a");
UlLi1A.setAttribute("href", "index.html");
UlLi1A.innerHTML = "Home";
UlLi1.appendChild(UlLi1A);

var UlLi2 = document.createElement("li");
topMenuUl.appendChild(UlLi2);

var UlLi2A = document.createElement("a");
UlLi2A.setAttribute("href", "#");
UlLi2A.innerHTML = "About Us";
UlLi2.appendChild(UlLi2A);

var UlLi3 = document.createElement("li");
topMenuUl.appendChild(UlLi3);

var UlLi3A = document.createElement("a");
UlLi3A.setAttribute("href", "#");
UlLi3A.innerHTML = "What's New";
UlLi3.appendChild(UlLi3A);

var UlLi4 = document.createElement("li");
topMenuUl.appendChild(UlLi4);

var UlLi4A = document.createElement("a");
UlLi4A.setAttribute("href", "#");
UlLi4A.innerHTML = "Services";
UlLi4.appendChild(UlLi4A);

var UlLi5 = document.createElement("li");
topMenuUl.appendChild(UlLi5);

var UlLi5A = document.createElement("a");
UlLi5A.setAttribute("href", "#");
UlLi5A.innerHTML = "Contact";
UlLi5.appendChild(UlLi5A);

var UlLi6 = document.createElement("li");
topMenuUl.appendChild(UlLi6);

var UlLi6A = document.createElement("a");
UlLi6A.setAttribute("href", "#");
UlLi6A.innerHTML = "Recourses";
UlLi6.appendChild(UlLi6A);

var UlLi7 = document.createElement("li");
topMenuUl.appendChild(UlLi7);

var UlLi7A = document.createElement("a");
UlLi7A.setAttribute("href", "#");
UlLi7A.innerHTML = "Links";
UlLi7.appendChild(UlLi7A);

var headerImg = document.createElement("div");
headerImg.setAttribute("class", "header-img");
header1.appendChild(headerImg);

var slogan = document.createElement("h2");
slogan.innerHTML = "Slogan goes here";
headerImg.appendChild(slogan);

var content = document.createElement("div");
content.setAttribute("class", "content");
top1.appendChild(content);

var contentLeft = document.createElement("div");
contentLeft.setAttribute("class", "content-left");
content.appendChild(contentLeft);

var leftRow1 = document.createElement("div");
leftRow1.setAttribute("class", "row1");
contentLeft.appendChild(leftRow1);

var row1Img = document.createElement("div");
row1Img.setAttribute("class", "img");
leftRow1.appendChild(row1Img);

var row1ImgS = document.createElement("img");
row1ImgS.setAttribute("src", "images/img1.jpg");
row1ImgS.setAttribute("alt", "''");
row1ImgS.setAttribute("height", "101");
row1ImgS.setAttribute("width", "157");
row1Img.appendChild(row1ImgS);

var row1Welcome = document.createElement("div");
row1Welcome.setAttribute("class", "welcome");
leftRow1.appendChild(row1Welcome);

var welcomeTitle = document.createElement("h1");
welcomeTitle.setAttribute("class", "title");
welcomeTitle.innerHTML = "Welcome to";
row1Welcome.appendChild(welcomeTitle);

var welcomeTitleSpan = document.createElement("span");
welcomeTitleSpan.innerHTML = " Your Company";
welcomeTitle.appendChild(welcomeTitleSpan);

var welcomeParagraf = document.createElement("p");
welcomeParagraf.innerHTML = "<strong>Lorem Ipsum is simply dummy text of the printing and " +
    "typesetting industry.</strong><br>" +
    "Lorem Ipsum has been the industry's standard dummy text ever since the " +
    "1500s, when an unknown printer took a galley of type and scrambled it " +
    "to make a type specimen book. It has survived not only five centuries, " +
    "but also the leap into electronic typesetting, remaining essentially " +
    "unchanged. sn book. It has survived not only five centuries, but also " +
    "the leap into electronic typesetting, remaining essentially unchanged.";
row1Welcome.appendChild(welcomeParagraf);

var leftRow2 = document.createElement("div");
leftRow2.setAttribute("class", "row2");
contentLeft.appendChild(leftRow2);

var section1 = document.createElement("div");
section1.setAttribute("class", "section1");
leftRow2.appendChild(section1);

var section1H2 = document.createElement("h2");
section1H2.setAttribute("class", "subtitle");
section1H2.innerHTML = "What's New";
section1.appendChild(section1H2);

var section1paragraf = document.createElement("p");
section1paragraf.innerHTML = "<strong>Lorem Ipsum is simply dummy text of the<br>" +
    "printing and typesetting industry.</strong><br>" +
    "Lorem Ipsum has been the industry's standard<br>" +
    "dummy text ever since the 1500s, when an<br>" +
    "unknown printer took a galley of type and";
section1.appendChild(section1paragraf);

var section1paragraf1 = document.createElement("p");
section1paragraf1.innerHTML = "&nbsp;";
section1.appendChild(section1paragraf1);

var section1paragraf2 = document.createElement("p");
section1paragraf2.innerHTML = "&nbsp;";
section1.appendChild(section1paragraf2);

var section1paragraf3 = document.createElement("p");
section1.appendChild(section1paragraf3);

var paragraf3link = document.createElement("a");
paragraf3link.setAttribute("href", "#");
paragraf3link.setAttribute("class", "more");
paragraf3link.innerHTML = "read more";
section1paragraf3.appendChild(paragraf3link);

var section2 = document.createElement("div");
section2.setAttribute("class", "section2");
leftRow2.appendChild(section2);

var section2H2 = document.createElement("h2");
section2H2.setAttribute("class", "subtitle");
section2H2.innerHTML = "Resources";
section2.appendChild(section2H2);

var section2paragraf = document.createElement("p");
section2paragraf.innerHTML = "<strong>Lorem Ipsum is simply dummy text of the printing and " +
    "typesetting industry.</strong><br>" +
    "Lorem Ipsum has been the industry's standard dummy text ever since the " +
    "1500s, when an unknown printer took a galley of type and scrambled it " +
    "to make a type specimen book. It has survived not only five centuries, " +
    "but";
section2.appendChild(section2paragraf);

var section2paragraf1 = document.createElement("p");
section2paragraf1.innerHTML = "&nbsp;";
section2.appendChild(section2paragraf1);

var section2paragraf2 = document.createElement("p");
section2.appendChild(section2paragraf2);

var paragraf2link = document.createElement("a");
paragraf2link.setAttribute("href", "#");
paragraf2link.setAttribute("class", "more");
paragraf2link.innerHTML = "read more";
section2paragraf2.appendChild(paragraf2link);

var contentRight = document.createElement("div");
contentRight.setAttribute("class", "content-right");
content.appendChild(contentRight);

var contentRightH2 = document.createElement("h2");
contentRightH2.innerHTML = "Main Menu";
contentRight.appendChild(contentRightH2);

var contentRightUl = document.createElement("ul");
contentRight.appendChild(contentRightUl);

var rightUlLi1 = document.createElement("li");
rightUlLi1.setAttribute("style", "border-top: medium none;");
contentRightUl.appendChild(rightUlLi1);

var rightUlLi1A = document.createElement("a");
rightUlLi1A.setAttribute("href", "#");
rightUlLi1A.innerHTML = "Link 1";
rightUlLi1.appendChild(rightUlLi1A);

var rightUlLi2 = document.createElement("li");
contentRightUl.appendChild(rightUlLi2);

var rightUlLi2A = document.createElement("a");
rightUlLi2A.setAttribute("href", "#");
rightUlLi2A.innerHTML = "Link 2";
rightUlLi2.appendChild(rightUlLi2A);

var rightUlLi3 = document.createElement("li");
contentRightUl.appendChild(rightUlLi3);

var rightUlLi3A = document.createElement("a");
rightUlLi3A.setAttribute("href", "#");
rightUlLi3A.innerHTML = "Link 3";
rightUlLi3.appendChild(rightUlLi3A);

var rightUlLi4 = document.createElement("li");
contentRightUl.appendChild(rightUlLi4);

var rightUlLi4A = document.createElement("a");
rightUlLi4A.setAttribute("href", "#");
rightUlLi4A.innerHTML = "Link 4";
rightUlLi4.appendChild(rightUlLi4A);

var rightUlLi5 = document.createElement("li");
contentRightUl.appendChild(rightUlLi5);

var rightUlLi5A = document.createElement("a");
rightUlLi5A.setAttribute("href", "#");
rightUlLi5A.innerHTML = "Link 5";
rightUlLi5.appendChild(rightUlLi5A);

var rightUlLi6 = document.createElement("li");
contentRightUl.appendChild(rightUlLi6);

var rightUlLi6A = document.createElement("a");
rightUlLi6A.setAttribute("href", "#");
rightUlLi6A.innerHTML = "Link 6";
rightUlLi6.appendChild(rightUlLi6A);

var rightUlLi7 = document.createElement("li");
contentRightUl.appendChild(rightUlLi7);

var rightUlLi7A = document.createElement("a");
rightUlLi7A.setAttribute("href", "#");
rightUlLi7A.innerHTML = "Link 7";
rightUlLi7.appendChild(rightUlLi7A);

var rightUlLi8 = document.createElement("li");
contentRightUl.appendChild(rightUlLi8);

var rightUlLi8A = document.createElement("a");
rightUlLi8A.setAttribute("href", "#");
rightUlLi8A.innerHTML = "Link 8";
rightUlLi8.appendChild(rightUlLi8A);

var rightUlLi9 = document.createElement("li");
contentRightUl.appendChild(rightUlLi9);

var rightUlLi9A = document.createElement("a");
rightUlLi9A.setAttribute("href", "#");
rightUlLi9A.innerHTML = "Link 9";
rightUlLi9.appendChild(rightUlLi9A);

var rightUlLi10 = document.createElement("li");
contentRightUl.appendChild(rightUlLi10);

var rightUlLi10A = document.createElement("a");
rightUlLi10A.setAttribute("href", "#");
rightUlLi10A.innerHTML = "Link 10";
rightUlLi10.appendChild(rightUlLi10A);

var contentRightP1 = document.createElement("p");
contentRightP1.innerHTML = "&nbsp;";
contentRight.appendChild(contentRightP1);

var contentRightP2 = document.createElement("p");
contentRightP2.innerHTML = "&nbsp;";
contentRight.appendChild(contentRightP2);

var contentRightP3 = document.createElement("p");
contentRightP3.innerHTML = "&nbsp;";
contentRight.appendChild(contentRightP3);

var bottom = document.createElement("div");
bottom.setAttribute("class", "bottom");
page.appendChild(bottom);

var bottomUl = document.createElement("ul");
bottom.appendChild(bottomUl);

var bottomUlLi1 = document.createElement("li");
bottomUlLi1.setAttribute("style", "border-left: medium none;");
bottomUl.appendChild(bottomUlLi1);

var bottomUlLi1A = document.createElement("a");
bottomUlLi1A.setAttribute("href", "index.html");
bottomUlLi1A.innerHTML = "Home";
bottomUlLi1.appendChild(bottomUlLi1A);

var bottomUlLi2 = document.createElement("li");
bottomUl.appendChild(bottomUlLi2);

var bottomUlLi2A = document.createElement("a");
bottomUlLi2A.setAttribute("href", "#");
bottomUlLi2A.innerHTML = "About Us";
bottomUlLi2.appendChild(bottomUlLi2A);

var bottomUlLi3 = document.createElement("li");
bottomUl.appendChild(bottomUlLi3);

var bottomUlLi3A = document.createElement("a");
bottomUlLi3A.setAttribute("href", "#");
bottomUlLi3A.innerHTML = "What's New";
bottomUlLi3.appendChild(bottomUlLi3A);

var bottomUlLi4 = document.createElement("li");
bottomUl.appendChild(bottomUlLi4);

var bottomUlLi4A = document.createElement("a");
bottomUlLi4A.setAttribute("href", "#");
bottomUlLi4A.innerHTML = "Services";
bottomUlLi4.appendChild(bottomUlLi4A);

var bottomUlLi5 = document.createElement("li");
bottomUl.appendChild(bottomUlLi5);

var bottomUlLi5A = document.createElement("a");
bottomUlLi5A.setAttribute("href", "#");
bottomUlLi5A.innerHTML = "Contact";
bottomUlLi5.appendChild(bottomUlLi5A);

var bottomUlLi6 = document.createElement("li");
bottomUl.appendChild(bottomUlLi6);

var bottomUlLi6A = document.createElement("a");
bottomUlLi6A.setAttribute("href", "#");
bottomUlLi6A.innerHTML = "Recourses";
bottomUlLi6.appendChild(bottomUlLi6A);

var bottomUlLi7 = document.createElement("li");
bottomUl.appendChild(bottomUlLi7);

var bottomUlLi7A = document.createElement("a");
bottomUlLi7A.setAttribute("href", "#");
bottomUlLi7A.innerHTML = "Links";
bottomUlLi7.appendChild(bottomUlLi7A);

var bottomP = document.createElement("p");
bottomP.innerHTML = "&copy; Copyright 2014. Designed by ";
bottom.appendChild(bottomP);

var bottomPa = document.createElement("a");
bottomPa.setAttribute("target", "_blank");
bottomPa.setAttribute("href", "http://www.htmltemplates.net");
bottomPa.innerHTML = "HTML Templates";
bottomP.appendChild(bottomPa);

var bottomA = document.createElement("a");
bottomA.setAttribute("target", "_balnk");
bottomA.setAttribute("href", "http://www.htmltemplates.net");

var bottomAImg = document.createElement("img");
bottomAImg.setAttribute("src", "images/footnote.gif");
bottomAImg.setAttribute("class", "copyright");
bottomAImg.setAttribute("alt", "HTML Templates");
bottomA.appendChild(bottomAImg);
