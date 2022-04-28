var totKm = Number(prompt("How many Km?"));
document.getElementById("totKm").innerHTML = totKm;
var age = Number(prompt("How old are you?"));
document.getElementById("age").innerHTML = age;
var price = (totKm * 0.21);
console.log("Initial Price:" + " " + price);
document.getElementById("price").innerHTML = price;
if (age < 18){
    var discount = ((price*20)/100);
    price = price - discount;
    console.log("Discount Price Under18:" + " " + price.toFixed(2));
    document.getElementById("price").innerHTML = price;
}else if (age >= 65){
    var discount = ((price*40)/100);
    price = price - discount;
    console.log("Discount Price Over65:" + " " + price.toFixed(2));
    document.getElementById("price").innerHTML = price;
}else{
    console.log("Full price:" + " " + price);
    
}