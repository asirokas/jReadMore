// Code to load a script, only if a specific class exists.
var element = $('.read-more');

if( element.length > 0 ) {
    $('body').append('<script src="js/read-more.js"></script>');
}
