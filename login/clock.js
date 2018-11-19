$( function() {
  
  if ( $( '#time' ).length > 0 ) {
    var timeElement = $( '#time' );
  } else {
    console.log('no such element #time');
  }
  var dateElement = $( '#date' );

  var today = new Date();
  var hour = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11',
              '12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
  var hours = hour[today.getHours()];
  var minutes = addZero(today.getMinutes());
  var ampm;
  if (today.getHours() > 11) {
    ampm = 'pm';
  } else {
    ampm = 'am';
  }

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',  'September', 'October', 'November', 'December'];
  var month = months[today.getMonth()];

  var weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var weekday = weekdays[today.getDay()];
  var day = today.getDate();

  timeElement.html( hours + ":" + minutes + "<span class=\"ampm\"> " + ampm + "</span>" );
  dateElement.html( weekday + ", " + month + " " + day );
});

function addZero(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}