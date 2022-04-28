var totKm = Number(prompt("How many Km?"));
document.getElementById("totKm").innerHTML = totKm;
var age = Number(prompt("How old are you?"));
document.getElementById("age").innerHTML = age;
var price = (totKm * 0.21);
console.log("Initial Price:" + " " + price.toFixed(2));
document.getElementById("price").innerHTML = price.toFixed(2);
if (age < 18){
    var discount = ((price*20)/100);
    price = price - discount;
    console.log("Discount Price Under18:" + " " + price.toFixed(2));
    document.getElementById("price").innerHTML = price.toFixed(2);
}else if (age >= 65){
    var discount = ((price*40)/100);
    price = price - discount;
    console.log("Discount Price Over65:" + " " + price.toFixed(2));
    document.getElementById("price").innerHTML = price.toFixed(2);
}else{
    console.log("Full price:" + " " + price);
    
}