var header = document.getElementById("header")
var ms = document.getElementById("models")
var m3 = document.getElementById("model3")
var mx = document.getElementById("modelx")
var my= document.getElementById("modely")
var ml= document.getElementById("model")
var st= document.getElementById("st")
var st1= document.getElementById("st1")
var sp= document.getElementById("sp")
var mi=document.getElementById("mi")

ms.onclick=function(){
    header.style.backgroundImage='url(images/Mercedes1.jpeg)';
    ml.innerHTML="Mercedes-Benz AMG"
    st.innerHTML="1.9 s"
    st1.innerHTML="60 mph"
    sp.innerHTML="200 mph"
    mi.innerHTML="396 mi"
}
m3.onclick=function(){
    header.style.backgroundImage='url(images/Mercedes2.jpg)';
    ml.innerHTML="Mercedes-Benz A-ClassF"
    st.innerHTML="2.9 s"
    st1.innerHTML="70 mph"
    sp.innerHTML="220 mph"
    mi.innerHTML="350 mi"
}
mx.onclick=function(){
    header.style.backgroundImage='url(images/Mercedes3.jpg)';
    ml.innerHTML="Mercedes Maybach S-Class"
    st.innerHTML="3.9 s"
    st1.innerHTML="80 mph"
    sp.innerHTML="240 mph"
    mi.innerHTML="546 mi"
}
my.onclick=function(){
    header.style.backgroundImage='url(images/Mercedes4.jpg)';
    ml.innerHTML="Mercedes E-Class Long Wheelbase"
    st.innerHTML="4.9 s"
    st1.innerHTML="50 mph"
    sp.innerHTML="230 mph"
    mi.innerHTML="496 mi"
}


