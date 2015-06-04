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

				// Get the options for the specific element
				var elementHeight = $( this ).data( "options" );

                // Set which options to use
				if ( typeof elementHeight !== "undefined" ) {
                    var collapsedHeight = elementHeight;
				} else {
                    var collapsedHeight = options.readMoreHeight;
				};

				// Create the read-more link
				$( this ).after( '<span>' + options.readMoreText +'</span>' )
						 .next().addClass( options.readMoreLinkClass );
				// Set the initial state of the read more element to be collapsed
				$( this ).css({
					"height": collapsedHeight,
					"overflow": "hidden"
					});
			})
		}

		/** Get the options of the selected element.
		*
		*  @param {object} refElement - An array of elements.
		*/
		function getRefElementOptions(refElement) {

			if ( typeof refElement.data( "options" ) !== "undefined" ) {
				this.collapsedHeight = refElement.data( "options" );
			} else {
				this.collapsedHeight = options.readMoreHeight;
			}

		}

		addReadMoreElement(obj);

		// 4. Action on clicking the read-more link
		$( "." + options.readMoreLinkClass ).click(function() {

		    // Expand or collapse the "more" text
			if ( $( this ).prev().css( "overflow" ) == "hidden" ) {
				$( this ).prev().css({
					"height": "auto",
					"overflow": "auto"
					});
			} else {

				var refElementOptions = new getRefElementOptions( ( $( this ).prev() ) );

				$( this ).prev().css({
					"height": refElementOptions.collapsedHeight,
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
