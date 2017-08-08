var x ='';
function getData(handleData){
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function (data) {
            handleData(data);
        },
    });
};
getData(function(output){
    console.log(output);
    x = output;
    $('.picture').append("<img class= ' img-circle profile'src= " + "'" + x.results[0].picture.large + "'" + "/>")
    $('.name').append("<p> Name: " + x.results[0].name.title + " " + x.results[0].name.first + " " + x.results[0].name.last + "</p>")
    $('.name').append("<p> Location: " + x.results[0].location.state + "</p>")
    $('.name').append("<p> Date of birth: " + x.results[0].dob + "</p>")
    y = x.results[0].nat
    $.ajax({
        url: 'https://restcountries.eu/rest/v2/alpha?codes=' + y,
        dataType: 'json',
        success: function(data){
            console.log(data)
            console.log(data[0].name)
            $('.name').append("<p> Country: " + data[0].name + "</p>")
        }
    })
})