// 0. Options
var options = {
	readMoreText: "Read more",
	readLessText: "Read less",
	readMoreHeight: 75
};

$( ".read-more" ).each(function() {
	// 1. Get the options for the specific element
	// TODO: If there aren't any options set, use the defaults
	options.readMoreHeight = $( this ).data( "options" );
	console.log( options.readMoreHeight );

	// 2. Create the read-more link
	$( this ).after( '<span class="read-more-link">' + options.readMoreText +'</span>' );

	// 3. Set the initial state of the read more element to be collapsed
	$( this ).css({
		"height": options.readMoreHeight,
		"overflow": "hidden"
		});
});

// 4. Action on clicking the read-more link
$( ".read-more-link" ).click(function() {
	console.log( $( this ).text() );
    // Expand or collapse the "more" text
	if ($( this ).prev().css( "overflow" ) == "hidden" ) {
		$( this ).prev().css({
			"height": "auto",
			"overflow": "auto"
			});
	} else {
		$( this ).prev().css({
			"height": options.readMoreHeight,
			"overflow": "hidden"
			});
	};

    // Change the "read more" word accordingly
    if ( $( this ).text() == options.readMoreText ) {
        $( this ).text( options.readLessText );
    } else {
        $( this ).text( options.readMoreText );
    };

});
