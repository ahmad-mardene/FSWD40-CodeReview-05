// document.getElementById("demo1").innerHTML="<br>";
//   document.write('<div class= "container">') ;
//     for (var i = 0; i < Persons.length; i++) {
//         var obj = Persons[i];
        
//         document.write('<div class="person">');
//         document.write( obj.myPhoto +
//                        "Name:<strong> " + obj.name +
//                         "</strong><br>Surname: <strong> " + obj.surname +
//                         "</strong><br>Age:<strong> " + obj.age );
//         document.write("</strong></div>")
//     };
//   document.write('<div>') ;
// document.getElementById("demo2").innerHTML="<br>";
var john = 0;
var jane = 0;
var maxina = 0;
var max = 0;

$(document).ready(function(){
	   $("#likeJohnDeo").click(function(){
                john++;
                $("#likedJohnDeo").text(john);        
});
});
$(document).ready(function(){	   
	   $("#likeJaneDeo").click(function(){
                jane++;
                $("#likedJaneDeo").text(jane);        
});
});
$(document).ready(function(){	   
	   $("#likeMaxinaMusterman").click(function(){
                maxina++;
                $("#likedMaxinaMusterman").text(maxina);        
});
});
$(document).ready(function(){	   
	   $("#likeMaxMusterman").click(function(){
                max++;
                $("#likedMaxMusterman").text(max);        
});
});
