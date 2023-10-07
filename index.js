const toggles = document.querySelector(".toggle");
const toggleMenu = document.querySelector(".nav-menu");

toggles.addEventListener("click", () => {
    toggles.classList.toggle("active");
    toggleMenu.classList.toggle("active");
})

// welcoming website
// alert("Welcome to the website");

// function 
// function click_me(){
//     let names = document.getElementById("name").value;
//     alert("good morning " +names);
// }

// calculator
// function cal() {
//     var first1 = document.getElementById("first").value;
//     var second2 = document.getElementById("second").value;
//     var opr = document.getElementById("operator").value;
//     if (opr == '+') {
//         var res = parseInt(first1) + parseInt(second2);
//     }

//     if(opr == '-'){
//         var res = parseInt(first1) - parseInt(second2);
//     }
//     if(opr == '*'){
//         var res = parseInt(first1) * parseInt(second2);
//     }
//     if(opr == '/'){
//         var res = parseInt(first1) / parseInt(second2);
//     }
//     if(opr == '%'){
//         var res = parseInt(first1) % parseInt(second2);
//     }
//     document.getElementById('result').value = res;

// }

// prompt function
// function enter() {
//     var name = prompt("enter your name");
//     document.getElementById('box').innerHTML = name;
// }

// if else conditions
// var age = 19;
// if(age >=21){
//     document.write("Yes you can vote");
// }
// else{
//     document.write("You can't vote");
// }

// 15. looping for loop
// for(var count = 1; count<=10; count++){
//     document.write(count +"<br/>");
// }

// while loop
// var num=0;
// while(num<=10){

//     document.write(num +"<br/>");
//     num++;
// }

// for each loop
// var cars = ["car1", "car2", "car3", "car4"];
// cars.forEach(car)
// function car(item, index, array){
//     document.write(item + "<br/>");
// }

//continue loop
// for(var count=1; count<=10; count++){
//     // document.write(count);
//     if(count%2!=0){
//         continue;
//     }
//     document.write(count+ " ");
// }

// break case
// for(var count = 1; count<=10; count++){
//     document.write(count);
//     if(count== '8'){
//         break;
//     }
// }

// switch case
// var days=0;
// switch (days) {
//     case 1:
//         document.write("sunday");
//         break;
//     case 2:
//         document.write("monday");
//         break;
//     case 3:
//         document.write("tuesday");
//         break;
//     case 4:
//         document.write("wednesday");
//         break;
//     case 5:
//         document.write("thursday");
//         break;
//     case 6:
//         document.write("friday");
//         break;
//     case 7:
//         document.write("saturday");
//         break;
//     default:
//         document.write("no days");
//         break;

// }

// 21 some importatn arrays methods

// var arr = ["Mango", "Apple", "Banana", "Pineapple", "Guvava"];
// var veg = ["potato", "brinjal", "ladyfinger"];
// var shop = arr.concat(veg);

// alert(Array.valueOf(arr));
// var flag = arr.valueOf();
// var flag = arr.join(" : ");
// var index = arr.indexOf("Banana");
// document.write(index);

// date methods
// var date = new Date();
// function getDate(){
//     document.getElementById('res').innerText = date;
// }
// function year(){
//     document.getElementById('res').innerText = date.getFullYear();
// }

// typeof
// var a = "omkashyap";
// document.write(typeof a);

// setinterval

// function test() {
//     setInterval(() => {
//         alert("hii om ");
//     }, 5000);

// }

// settimeout method

// function test() {
//     setTimeout(
//         function () {
//             document.write("good morning");
//         }, 5000
//     );
// }

// clock logic


// function showTime() {
//     var d = new Date();
//     var h = d.getHours();
//     var m = d.getMinutes();
//     var s = d.getSeconds();
//     // var ms = d.getMilliseconds();
//     var session = "AM";

//     if (h > 12) {
//         h = h - 12;
//     }
//     if (h >= 12) {
//         session = "PM";
//     }
//     h = h < 10 ? "0" + h : h;
//     m = m < 10 ? "0" + m : m;
//     s = s < 10 ? "0" + s : s;
//     var time = h + " : " + m + " : " + s + " : " + session;
//     document.getElementsByTagName('h1')[0].innerText = time;
//     setTimeout(showTime, 1000);
// }


// function to make logo bigger

// function modify() {
//     document.getElementById('lining').style.fontSize = "100px";
//     document.getElementById('lining').style.color = "pink";
// }

// function unmodify(){
//     document.getElementById('lining').style.fontSize = "40px";
//     document.getElementById('lining').style.color = "blue";
// }
// var x;
// function start(){
//     x = setTimeout(
//     function(){
//         document.write("om");
//     },5000);
// }
// function stop(){
//     clearTimeout(x);
// }

//clear Interval
// var x = setInterval(count,1000);
// var y = 0;
// function count() {
//     document.getElementById('h1').innerText = y;
//     y++;
// }

// function stop() {
//     clearInterval(x);
// }
// var x; 
// function win(){
//     x = window.open("https://www.github.com/omkashyap7");
// }
// function closewin(){
//     x.close();
// }

function about__me() {
    window.open("https://www.github.com/omkashyap7");
}

// video pause and play logic

var video = document.getElementById("myvideo");
var btn = document.getElementById("myBTN");

function my_btn_func() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    }
    else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

