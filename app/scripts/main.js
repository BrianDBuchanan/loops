function howMany (selectItem) {
  var numberSelected=0

  for (var i=0; i < selectItem.options.length; i++) {
     if (selectItem.options[i].selected == true)
       numberSelected++;
  }

  return numberSelected
};

var myArray = [ 1, 3, 2, 4 ];
$('div').each(function(index){
    this.innerHTML = myArray[index];
});

var arr = [ "one", "two", "three", "four", "five" ];
var obj = { one: 1, two: 2, three: 3, four: 4, five: 5 };
 
jQuery.each( arr, function( i, val ) {
  $( "#" + val ).text( "I am # " + val + "." );
 
  // Will stop running after "five"
  return ( val !== "five" );
});
 
jQuery.each( obj, function( i, val ) {
  $( "#" + i ).append( document.createTextNode( " - " + val ) );
});