document.write("");
if (document.domain !== "about:blank"){
  clamp();
}
  function clamp(){
/* create css */
var css = document.createElement("link");  
css.setAttribute("rel", "stylesheet");  
css.setAttribute("href", "https://andrewthecoolalias.github.io/clamp/style.css"); 
document.body.appendChild(css);
console.log("css created");

/* create h1 */
var innerhead = "Clamp for Securly";
var header = document.createElement("h1"); 
header.innerHTML = innerhead;
document.body.appendChild(header);
console.log("header created");

/* create subtext*/
var introtext = "A thing made for Securly inspired by r/k12sysadmin. Made by AndrewTheCoolAlias#8503.";
var intro = document.createElement("p"); 
intro.innerHTML = introtext;
intro.id = "introtext";
document.body.appendChild(intro);
console.log("subtext made");
  };
