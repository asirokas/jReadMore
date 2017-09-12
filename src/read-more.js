(function($) {

	$.fn.readMore = function(options) {

		// Options
		var defaults = {
			readMoreLinkClass: "read-more__link",
			readMoreText: "Read more",
			readLessText: "Read less",
            readMoreHeight: 150,
			readMoreInitClass: "read-more__init"
		};

		// Merge deafults into options
		options = $.extend(defaults, options);

		var obj = $( this );

        // Action on clicking the read-more link
        function clickHandler() {

            var $target = $(this).prev();

            var refElementOptions = new getRefElementOptions($target);

            // Expand or collapse the "more" text
            if ($target.css("overflow") === "hidden") {

                $target.css({
                    "height": "auto",
                    "overflow": "auto"
                });
                $target.addClass("expanded");
            } else {

                $target.css({
                    "height": refElementOptions.collapsedHeight,
                    "overflow": "hidden"
                });
                $target.removeClass("expanded");
            }

            // Change the "read more" word accordingly
            if ($(this).text() === options.readMoreText) {
                $(this).text(options.readLessText);
            } else {
                $(this).text(options.readMoreText);
            }

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

		/** Create the read more link for each element selected.
		 *
		 *  @param {object} element - An array of elements.
		 */
		function addReadMoreElement(element) {

			element.each( function() {

				// Get the options for the specific element
                var $target = $(this);
				
                var refElementOptions = new getRefElementOptions($target);

                // Check if element has already been initialized
                if ( $target.hasClass( options.readMoreInitClass ) )
                    return;

				// Create the read-more link
                var $linkElem = $target
                    .after("<span>" + options.readMoreText + "</span>")
                    .next();
                $linkElem.addClass(options.readMoreLinkClass);
                $linkElem.click(clickHandler);

				// Set the initial state of the read more element to be collapsed
                $target
					.css({
					"height": refElementOptions.collapsedHeight,
					"overflow": "hidden"
					});
				
				$target.addClass(options.readMoreInitClass);
			});
		}

		addReadMoreElement(obj);
		
	};

})(jQuery);
