(function() {
    
    function callback() {

    	alert("Hi John");

    }

    var s = document.createElement("script");

    s.addEventListener ? s.addEventListener("load", callback, !1) : s.readyState && (s.onreadystatechange = callback), s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js", document.body.appendChild(s);

})()