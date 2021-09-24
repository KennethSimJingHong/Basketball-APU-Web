//hamburger menubar
$(document).ready(function(){
    $(".menu").click(function(){
        $("ul").toggleClass("active");
    })
})


//navigation bar effect
window.onscroll = function() {navFunction(),backtopFunction()};

function navFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navi").classList.add("black");
  } else {
    document.getElementById("navi").classList.remove("black");
  }
}

//back to top button
function backtopFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById("BUTton").style.display ="block";
    }
    else{
        document.getElementById("BUTton").style.display = "none";
    }
}
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


/*font size increase when scroll down*/
$(window).scroll(function(){
    var mass = Math.min(30, 0+0.08 *$(this).scrollTop()) + 'px';
        $('.quoteitalic').css({'font-size': mass});
});
$(window).scroll(function(){
    var mass = Math.min(20, 0+0.07 *$(this).scrollTop()) + 'px';
        $('.authoritalic').css({'font-size': mass});
});

//slider
var slideNo = 1;
showsdiv(slideNo);

function press(n){
    showsdiv(slideNo += n);
}

function showsdiv(n){
    var i;
    var x = document.getElementsByClassName("sld");
    if (n > x.length){slideNo = 1};
    if (n < 1){slideNo = x.length};
    for (i = 0; i < x.length; i++){
        x[i].style.display="none";
    }
    x[slideNo-1].style.display = "block";    
}

//hide or show video
function videofunction(){
    var x  = document.getElementById("togglevideo");
    if(x.style.display == "none")
    {
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
}

//validation form for feedback
function validateForm(){
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["femail"].value;
    var c = document.forms["myForm"]["fphone"].value;
    var z = document.forms["myForm"]["ffeedback"].value;
    var inputVal = document.getElementById("name");
    var inputVal2 = document.getElementById("email");
    var inputVal3 = document.getElementById("phone");
    var inputVal4 = document.getElementById("feedback");

    if (y == ""){
    inputVal2.style.backgroundColor = "red";
    }
    
    if (x == ""){
    inputVal.style.backgroundColor = "red";
    }

    if (c == ""){
        inputVal3.style.backgroundColor = "red";
    }
    
    if (z == ""){
        inputVal4.style.backgroundColor = "red";
        return false;
    }
    if (y != "" && x != "" && c != "" && z != ""){
        window.alert("Feedback Submitted")
    }
}

//validation form for registration 
function validate1Form(){
    var a = document.forms["registerForm"]["rname"].value;
    var b = document.forms["registerForm"]["rtpnumber"].value;
    var c = document.forms["registerForm"]["rage"].value;
    var d = document.forms["registerForm"]["rphone"].value;
    var e = document.forms["registerForm"]["raddress"].value;
    var f = document.forms["registerForm"]["rpostcode"].value;
    var g = document.forms["registerForm"]["rstates"].value;
    var h = document.forms["registerForm"]["rnationality"].value;
    var i = document.forms["registerForm"]["remail"].value;
    var a1 = document.getElementById("name");
    var b1 = document.getElementById("stdid");
    var c1 = document.getElementById("age");
    var d1 = document.getElementById("phonenum");
    var e1 = document.getElementById("address");
    var f1 = document.getElementById("postcode");
    var g1 = document.getElementById("states");
    var h1 = document.getElementById("nationality");
    var i1 = document.getElementById("email");
    if (a == ""){
        a1.style.backgroundColor = "red";
    }
    if (b == ""){
        b1.style.backgroundColor = "red";
    }
    if (c == ""){
        c1.style.backgroundColor = "red";
    }
    if (d == ""){
        d1.style.backgroundColor = "red";
    }
    if (e == ""){
        e1.style.backgroundColor = "red";
    }
    if (f == ""){
        f1.style.backgroundColor = "red";
    }
    if (g == ""){
        g1.style.backgroundColor = "red";
    }
    if (h == ""){
        h1.style.backgroundColor = "red";
    }
    if (i == ""){
        i1.style.backgroundColor = "red";
        return false;
    }
    if (a != "" && b != "" && c != "" && d != "" && e != "" && f != "" && g != "" && h != "" && i != ""){
        window.alert("Feedback Submitted")
    }
}