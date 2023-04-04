
document.getElementById('header-title').style.color="red"
var headerTitle = document.getElementById('header-title');
//headerTitle.style.borderBottom='solid 3px #000'
headerTitle.innerHTML ='Hello'
console.dir(document);
var main=document.getElementsByClassName('title')[0];
main.style.fontWeight='900';
main.style.color='green'
main.style.fontStyle='italic';
var header= document.getElementById('main-header')
header.class='bg-warning';
header.style.border='solid 2px #000';
var li = document.getElementsByClassName("list-group-item")
console.log(li);
//var odd=document.querySelectorAll('class.list-group-item:nthchild( )')[0];
//console.log(odd);
li[0].innerHTML='<h6>KYA BAT HAI</h6>'
li[0].style.color='blue'
li[0].style.fontWeight='bold'
li[0].style.border='solid 2px #000'