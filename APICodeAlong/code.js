var key = "039ebe4eaefc11df77105acc62a6b29e";
var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?";

$.ajax(
    {
        url: weatherUrl + "zip=11420,us&APPID=" + key,
        success: function(data){
            console.log(data);
        }
    }
    
)