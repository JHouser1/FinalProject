/**
 * Created by jhous on 10/31/2016.
 */
const max_hotel_price = 800;
const max_flight_price= 1500;
var maxPriceHotel = document.getElementById("maxPriceHotel").value;



function CheckPrices(){

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
    if (document.getElementById("hongKong").checked){
        document.getElementById('hotel2').style.display='none';
        document.getElementById('hotel3').style.display='none';
        document.getElementById("hotel4").style.display='none';
        document.getElementById("hotel5").style.display='none';
        document.getElementById("hotel6").style.display='none';
        document.getElementById("hotel7").style.display='none';
    }
}
