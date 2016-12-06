/**
 * Created by jhous on 10/31/2016.
 */
const max_hotel_price = 800;
const max_flight_price= 1500;




function CheckPrices(){
    var maxPriceHotel = document.getElementById("maxPriceHotel").value;
    if (IsValid(maxPriceHotel)){
        maxPriceHotel = parseFloat(maxPriceHotel);
        if(maxPriceHotel>= max_hotel_price){
            SetError(maxPriceHotel, "Hotel price must be less than " +max_hotel_price);
            return;
        }
    }else{
        SetError(maxPriceHotel, "Input is not valid");
        return;
    }
    var maxPriceFlight = document.getElementById("maxPriceFlight").value;
    if (IsValid(maxPriceFlight)){
        maxPriceFlight = parseFloat(maxPriceFlight);
        if(maxPriceFlight>= max_flight_price){
            SetError(maxPriceFlight, "Flight price must be less than " +max_flight_price);
            return;
        }
    }else{
        SetError(maxPriceFlight, "Input is not valid");
        return;
    }
}
function SetError(element, message){
    document.getElementById("divOutput").innerHTML='*' + message;
}
function IsValid(value){
    var valid = true;
    if (isNaN(value)|| value ==""){
        valid = false;
    }
    return valid;
}
function $(x){
    return document.getElementById(x);
}
function DisplayHotel(){
    if (localStorage.getItem("hotelPrice")<300&&(localStorage.getItem("selectedDest").value='hongKong')){
        document.getElementById('hotel2').style.display='none';
        document.getElementById('hotel3').style.display='none';
        document.getElementById("hotel4").style.display='none';
        document.getElementById("hotel5").style.display='none';
        document.getElementById("hotel6").style.display='none';
        document.getElementById("hotel7").style.display='none';
    }
}
function StoreName(){
    var userName=$("username").value;
    localStorage.setItem('userName', userName);
    var password=$("password").value;
    localStorage.setItem('password', password);
}
function StoreSelections(){
    var destination=document.getElementsByName('destination');
    for (var i = 0; i < destination.length; i++) {
        if (destination[i].checked==true) {
            selectedDest=destination[i].value;
            localStorage.setItem('selectedDest', selectedDest);
        }}
    var hotelPrice=$("maxPriceHotel").value;
    localStorage.setItem('hotelPrice', hotelPrice);

        var flightPrice=$("maxPriceFlight").value;
        localStorage.setItem('flightPrice', flightPrice);
}
function DisplayName(){
if(localStorage.getItem('userName')){
    $("usersName").innerHTML="Hello  "+localStorage.getItem('userName');
}
}
function CheckName(){
    var storedName = localStorage.getItem('userName');
    var storedPass = localStorage.getItem('password');
    var userName = $('name');
    var userPass = $('pass');

    if(userName.value == storedName && userPass.value == storedPass) {
    alert('You are logged in.');
}else {
    alert('Please try logging in again.');
}
}