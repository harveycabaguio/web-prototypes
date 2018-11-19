'use strict';

$( function() {
  var switcher = $( '#switch' );
  var desktop = $( '#state-logged-out' );
  
  switcher.click( function () {
    if (desktop.attr('id') == 'state-logged-out') {
      desktop.attr( 'id', 'state-logged-in' );
    } else {
      desktop.attr( 'id', 'state-logged-out' );
    }
  });
});