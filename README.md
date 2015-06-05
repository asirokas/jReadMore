# jReadMore
This is a simple jQuery plugin that provides the read more functionality.

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
* `readMoreLink: "read-more__link"` The text to display for collapsed state
* `readMoreText: "Read more"` The text to display for collapsed state
* `readLessText: "Read less"` The text to display for expanded state
* `readMoreHeight: 75` The height of collapsed state

You can modify collapsed height per element, by setting it in the `data-options` attribute for each element separately.


```html
<div class="read-more" data-options="90">
    <p>
        Sed lacinia at orci ut commodo. Mauris mattis tortor quis eros facilisis ullamcorper. Donec venenatis, nulla ac luctus condimentum, justo enim ullamcorper ligula, quis convallis nunc libero at lorem.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit metus, facilisis eu odio et, tempor vehicula augue. Aenean ut diam ultricies, imperdiet metus tincidunt, condimentum ante.
        Nam lobortis ligula eu placerat egestas. Praesent erat felis, pellentesque et tristique efficitur, euismod a leo. Sed lacinia at orci ut commodo.
        Mauris mattis tortor quis eros facilisis ullamcorper. Donec venenatis, nulla ac luctus condimentum, justo enim ullamcorper ligula, quis convallis nunc libero at lorem.
    </p>
</div>
```

## TODO
- [ ] Use the line-height for calculating the element's collapsed height. The user will have to give the lines to show. This way it will be quicker and more accurate to set it correctly.

- [ ]
