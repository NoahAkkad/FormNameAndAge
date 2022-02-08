function myFunction(){
 var age = document.getElementById("age").value;
 var lname = document.getElementById("lname").value;
 var fname = document.getElementById("fname").value;
     document.getElementById("demo").innerHTML = "<p>My Name is " + fname +" "+ lname + " and my age is " + age + " years old</p>";
}