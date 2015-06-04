(function($) {

	$.fn.readMore = function(options) {

		// 0. Options
		var defaults = {
			readMoreLinkClass: "read-more__link",
			readMoreText: "Read more",
			readLessText: "Read less",
			readMoreHeight: 150
		};

		// Merge deafults into options
		var options = $.extend(defaults, options);

		obj = $( this );

		/** Create the read more link for each element selected.
		 *
		 *  @param {$object} element - An array of elements.
		 */
		function addReadMoreElement(element) {

			element.each( function() {

				// 1. Get the options for the specific element
				var elementHeight = $( this ).data( "options" );

                // 2. Set which options to use
				if ( typeof elementHeight !== "undefined" ) {
                    var collapsedHeight = elementHeight;
				} else {
                    var collapsedHeight = options.readMoreHeight;
				};

				// 3. Create the read-more link
				$( this ).after( '<span>' + options.readMoreText +'</span>' )
						 .next().addClass( options.readMoreLinkClass );
				// 4. Set the initial state of the read more element to be collapsed
				$( this ).css({
					"height": collapsedHeight,
					"overflow": "hidden"
					});
			})
		}

		addReadMoreElement(obj);

		// 4. Action on clicking the read-more link
		$( ".read-more__link" ).click(function() {

		    // Expand or collapse the "more" text
			if ( $( this ).prev().css( "overflow" ) == "hidden" ) {
				$( this ).prev().css({
					"height": "auto",
					"overflow": "auto"
					});
			} else {
				// TODO If the element has a data options use this instead of options.readMoreHeight.
				// Make a function for getting the data options and decide (return) what to use e.g. function hasData(element)
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
