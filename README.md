# jReadMore
This is a simple jQuery plugin that provides the usual read more functionality.
## How it works
It adds an element with a link, just right after the element you want to be collapsed.
You can click this link to expand or collapse the previous element.
## Installation
Include the plugin in your html page. You need to put the following line in your HTML:

```html
    <script src="path/to/your/scipts/folder/jreadmore.min.js"></script>
```

## Usage
To implement the read more functionality to any element, just put the following in a script tag, for the corresponding element.
```html
<script>
    $('.read-more').readMore();
</script>
```

If you like you can change some of the default options like this:
```html
<script>
    $('.read-more').readMore({
        readMoreHeight: 90
    });
</script>
```
### Options
* `readMoreLinkClass: "read-more__link"` The class for the read more link element
* `readMoreText: "Read more"` The text to display for collapsed state
* `readLessText: "Read less"` The text to display for expanded state
* `readMoreHeight: 75` The height of collapsed state

You can modify collapsed height per element, by setting it in the `data-options` attribute for each element separately.


```html
<div class="read-more" data-options="90">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit metus, facilisis eu odio et, tempor vehicula augue.
        Sed lacinia at orci ut commodo. Mauris mattis tortor quis eros facilisis ullamcorper. Donec venenatis, nulla ac luctus condimentum, justo enim ullamcorper ligula, quis convallis nunc libero at lorem.
        Nam lobortis ligula eu placerat egestas. Praesent erat felis, pellentesque et tristique efficitur, euismod a leo. Donec venenatis, nulla ac luctus condimentum, justo enim ullamcorper ligula, quis convallis nunc libero at lorem.
    </p>
</div>
```

## TODO
- Use the line-height attribute as the parameter to calculate the element's collapsed height.

The user will have to give the number of lines to show. Furthermore, if the user provide and some units, then they will be used instead.

(e.g. height: 5, to show five lines or  height: 120px to show 120px)
