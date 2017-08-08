var key = "039ebe4eaefc11df77105acc62a6b29e";
var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?";
$('document').ready(function(){
    function getTemp(zip){
        $.ajax(
            {
                url: weatherUrl + "zip=" + zip +",us&APPID=" + key,
                success: function(data){
                    handleData(data);
                }
            }
        )
    }
    function handleData(input){
        fTemp = Math.round(input.main.temp * (9/5) -459.67);
        $('.weather').empty();
        $('.weather').append("<h1 style='text-align:center;'class= 'temperature'>" + fTemp + "</h1>");
    }
    $('.btn').click(function(){
        zip = $('.form-control').val();
        getTemp(zip)
    })
});