/**
 * Created by jhous on 10/31/2016.
 */
const max_hotel_price = 800;
const max_flight_price= 1500;



function StartOver(){
    localStorage.removeItem('selectedDest');
    localStorage.removeItem('hotelPrice');
    localStorage.removeItem('flightPrice');
}
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
function DisplayHotel() {
    if (localStorage.getItem("hotelPrice") < 400 && (localStorage.getItem("selectedDest").value = 'newYork')) {
        document.getElementById('hotel4').style.display = 'none';
        document.getElementById('hotel5').style.display = 'none';
        document.getElementById("hotel6").style.display = 'none';
        document.getElementById("hotel7").style.display = 'none';
        document.getElementById("hotel8").style.display = 'none';
        document.getElementById("hotel9").style.display = 'none';
        document.getElementById("hotel10").style.display = 'none';
        document.getElementById("hotel11").style.display = 'none';
        document.getElementById("hotel12").style.display = 'none';
        document.getElementById("hotel13").style.display = 'none';
        document.getElementById("hotel14").style.display = 'none';
        document.getElementById("hotel15").style.display = 'none';
        document.getElementById("hotel16").style.display = 'none';
        document.getElementById("hotel17").style.display = 'none';
        document.getElementById("hotel18").style.display = 'none';
    } else if (localStorage.getItem("hotelPrice") >= 400 && (localStorage.getItem("selectedDest").value = 'newYork')) {
        document.getElementById('hotel1').style.display = 'none';
        document.getElementById('hotel2').style.display = 'none';
        document.getElementById("hotel3").style.display = 'none';
        document.getElementById("hotel7").style.display = 'none';
        document.getElementById("hotel8").style.display = 'none';
        document.getElementById("hotel9").style.display = 'none';
        document.getElementById("hotel10").style.display = 'none';
        document.getElementById("hotel11").style.display = 'none';
        document.getElementById("hotel12").style.display = 'none';
        document.getElementById("hotel13").style.display = 'none';
        document.getElementById("hotel14").style.display = 'none';
        document.getElementById("hotel15").style.display = 'none';
        document.getElementById("hotel16").style.display = 'none';
        document.getElementById("hotel17").style.display = 'none';
        document.getElementById("hotel18").style.display = 'none';
    }  else if (localStorage.getItem("hotelPrice") < 400 && (localStorage.getItem("selectedDest").value = 'london')) {
        document.getElementById('hotel1').style.display = 'none';
        document.getElementById('hotel2').style.display = 'none';
        document.getElementById("hotel3").style.display = 'none';
        document.getElementById("hotel4").style.display = 'none';
        document.getElementById("hotel5").style.display = 'none';
        document.getElementById("hotel6").style.display = 'none';
        document.getElementById("hotel10").style.display = 'none';
        document.getElementById("hotel11").style.display = 'none';
        document.getElementById("hotel12").style.display = 'none';
        document.getElementById("hotel13").style.display = 'none';
        document.getElementById("hotel14").style.display = 'none';
        document.getElementById("hotel15").style.display = 'none';
        document.getElementById("hotel16").style.display = 'none';
        document.getElementById("hotel17").style.display = 'none';
        document.getElementById("hotel18").style.display = 'none';
    }  else if (localStorage.getItem("hotelPrice") >= 400 && (localStorage.getItem("selectedDest").value = 'london')) {
        document.getElementById('hotel1').style.display = 'none';
        document.getElementById('hotel2').style.display = 'none';
        document.getElementById("hotel3").style.display = 'none';
        document.getElementById("hotel4").style.display = 'none';
        document.getElementById("hotel5").style.display = 'none';
        document.getElementById("hotel6").style.display = 'none';
        document.getElementById("hotel7").style.display = 'none';
        document.getElementById("hotel8").style.display = 'none';
        document.getElementById("hotel9").style.display = 'none';
        document.getElementById("hotel13").style.display = 'none';
        document.getElementById("hotel14").style.display = 'none';
        document.getElementById("hotel15").style.display = 'none';
        document.getElementById("hotel16").style.display = 'none';
        document.getElementById("hotel17").style.display = 'none';
        document.getElementById("hotel18").style.display = 'none';
    } else if (localStorage.getItem("hotelPrice") < 400 && (localStorage.getItem("selectedDest").value = 'paris')) {
        document.getElementById('hotel1').style.display = 'none';
        document.getElementById('hotel2').style.display = 'none';
        document.getElementById("hotel3").style.display = 'none';
        document.getElementById("hotel4").style.display = 'none';
        document.getElementById("hotel5").style.display = 'none';
        document.getElementById("hotel6").style.display = 'none';
        document.getElementById("hotel7").style.display = 'none';
        document.getElementById("hotel8").style.display = 'none';
        document.getElementById("hotel9").style.display = 'none';
        document.getElementById("hotel10").style.display = 'none';
        document.getElementById("hotel11").style.display = 'none';
        document.getElementById("hotel12").style.display = 'none';
        document.getElementById("hotel16").style.display = 'none';
        document.getElementById("hotel17").style.display = 'none';
        document.getElementById("hotel18").style.display = 'none';
    } else if (localStorage.getItem("hotelPrice") >= 400 && (localStorage.getItem("selectedDest").value = 'paris')) {
        document.getElementById('hotel1').style.display = 'none';
        document.getElementById('hotel2').style.display = 'none';
        document.getElementById("hotel3").style.display = 'none';
        document.getElementById("hotel4").style.display = 'none';
        document.getElementById("hotel5").style.display = 'none';
        document.getElementById("hotel6").style.display = 'none';
        document.getElementById("hotel7").style.display = 'none';
        document.getElementById("hotel8").style.display = 'none';
        document.getElementById("hotel9").style.display = 'none';
        document.getElementById("hotel10").style.display = 'none';
        document.getElementById("hotel11").style.display = 'none';
        document.getElementById("hotel12").style.display = 'none';
        document.getElementById("hotel13").style.display = 'none';
        document.getElementById("hotel14").style.display = 'none';
        document.getElementById("hotel15").style.display = 'none';
    }
}
function DisplayFlights(){
    if (localStorage.getItem("flightPrice") < 800 && (localStorage.getItem("selectedDest").value = 'newYork')) {
        document.getElementById('flight4').style.display = 'none';
        document.getElementById('flight5').style.display = 'none';
        document.getElementById("flight6").style.display = 'none';
        document.getElementById("flight7").style.display = 'none';
        document.getElementById("flight8").style.display = 'none';
        document.getElementById("flight9").style.display = 'none';
        document.getElementById("flight10").style.display = 'none';
        document.getElementById("flight11").style.display = 'none';
        document.getElementById("flight12").style.display = 'none';
        document.getElementById("flight13").style.display = 'none';
        document.getElementById("flight14").style.display = 'none';
        document.getElementById("flight15").style.display = 'none';
    }else if (localStorage.getItem("flightPrice") >= 800 && (localStorage.getItem("selectedDest").value = 'newYork')) {
        document.getElementById('flight1').style.display = 'none';
        document.getElementById('flight2').style.display = 'none';
        document.getElementById("flight3").style.display = 'none';
        document.getElementById("flight7").style.display = 'none';
        document.getElementById("flight8").style.display = 'none';
        document.getElementById("flight9").style.display = 'none';
        document.getElementById("flight10").style.display = 'none';
        document.getElementById("flight11").style.display = 'none';
        document.getElementById("flight12").style.display = 'none';
        document.getElementById("flight13").style.display = 'none';
        document.getElementById("flight14").style.display = 'none';
        document.getElementById("flight15").style.display = 'none';
    }
}
function StoreName() {
    var userName = $("username").value;
    localStorage.setItem('userName', userName);
    var password = $("password").value;
    localStorage.setItem('password', password);
}
function StoreHotel(){
    var destination=document.getElementsByName('hotel');
    var destination_value;
    for(var i = 0; i < destination.length; i++){
        if(destination[i].checked){
            destination_value = destination[i].value;

        }
        localStorage.setItem('hotelDest',destination_value);
    }
}
function StoreFlight(){
    var destination=document.getElementsByName('flights');
    var destination_value;
    for(var i = 0; i < destination.length; i++){
        if(destination[i].checked){
            destination_value = destination[i].value;

        }
        localStorage.setItem('flightDest',destination_value);
    }
}
function Confirmation(){
    if(localStorage.getItem("hotelDest").value='hotel1'){
        $('hotelConfirm').innerHTML="Mariott Hotels"
    }else
    if(localStorage.getItem("hotelDest").value='hotel2'){
        $('hotelConfirm').innerHTML="Ramada Hotels"
    }else
    if(localStorage.getItem("hotelDest").value='hotel3'){
        $('hotelConfirm').innerHTML="Marco Polo Hotels"
    }else
    if(localStorage.getItem("hotelDest").value='hotel4'){
        $('hotelConfirm').innerHTML="Starwood Hotels"
    }else
    if(localStorage.getItem("hotelDest").value='hotel5'){
        $('hotelConfirm').innerHTML="Hyatt Hotels"
    }else
    if(localStorage.getItem("hotelDest").value='hotel6'){
        $('hotelConfirm').innerHTML="The Ritz-Carlton"
    }
    if(localStorage.getItem("selectedDest").value='newYork'){
        $('destConfirm').innerHTML="New York"
    }
    if(localStorage.getItem("flightDest").value='flight1'){
        $('flightConfirm').innerHTML="American Airlines"
    }else
    if(localStorage.getItem("flightDest").value='flight2'){
        $('flightConfirm').innerHTML="United Airlines"
    }else
    if(localStorage.getItem("flightDest").value='flight3'){
        $('flightConfirm').innerHTML="Southwest Airlines"
    }else
    if(localStorage.getItem("flightDest").value='flight4'){
        $('flightConfirm').innerHTML="Frontier Airlines"
    }else
    if(localStorage.getItem("flightDest").value='flight5'){
        $('flightConfirm').innerHTML="Spirit Airlines"
    }else
    if(localStorage.getItem("flightDest").value='flight6'){
        $('flightConfirm').innerHTML="Delta Airlines"
    }
}
function TotalPrice(){
    var totalPrice=0;
    if(localStorage.getItem("flightDest").value='flight1'&& (localStorage.getItem("hotelDest").value='hotel1')){
        totalPrice=2700;
        $('totalCost').innerHTML='$'+totalPrice;
    }

}
function StoreSelections(){
    var destination=document.getElementsByName('destination');
    var destination_value;
    for(var i = 0; i < destination.length; i++){
        if(destination[i].checked){
            destination_value = destination[i].value;

        }
        localStorage.setItem('selectedDest',destination_value);
    }

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
function BookingPlaced(){
    alert('Your booking has been placed.');
}