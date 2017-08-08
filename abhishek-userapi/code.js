$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    $('.picture').append("<img class= 'profile'src= " + "'" + data.results[0].picture.large + "'" + "/>")
    $('.details').append("<p> Name: " + data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last + "</p>")
    $('.details').append("<p> Location: " + data.results[0].location.state + "</p>")
  }
  
});
