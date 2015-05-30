(function($) {

	$.fn.readMore = function(options) {

		// 0. Options
		var defaults = {
			readMoreText: "Read more",
			readLessText: "Read less",
			readMoreHeight: 75
		};

		// Merge deafults into options
		var options = $.extend(defaults, options);

		obj = $( this );

		function addReadMoreElement(element) {
			// 1. Get the options for the specific element
			// TODO: If there aren't any options set, use the defaults
			options.readMoreHeight = obj.data( "options" );
			console.log( options.readMoreHeight );

			// 2. Create the read-more link
			obj.after( '<span class="read-more-link">' + options.readMoreText +'</span>' );

			// 3. Set the initial state of the read more element to be collapsed
			obj.css({
				"height": options.readMoreHeight,
				"overflow": "hidden"
				});
		}

		addReadMoreElement(obj);

		// 4. Action on clicking the read-more link
		$( ".read-more-link" ).click(function() {
			console.log( $( this ).text() );
		    // Expand or collapse the "more" text
			if ( $( this ).prev().css( "overflow" ) == "hidden" ) {
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
	};

})(jQuery);
