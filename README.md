# jReadMore
This is a simple jQuery plugin that provides the read more functionality.

## Installation
To use the plugin you need to put the following line in your HTML:

```html
    <script src="/path/to/your/scipts/folder/jreadmore.min.js"></script>
```

If you want, you can load the script conditionally. For example only if there is a corresponding class that needs to be collapsed. In that case you can use the following code in a script and load it instead of the original:

```javascript
var element = $('.read-more');

if( element.length > 0 ) {
    $('body').append('<script src="js/read-more.js"></script>');
}
```


```html
    <script src="/path/to/your/scipts/folder/main.js"></script>
```
## Usage
Just put the class `read-more` to any element that you want to have the read more functionality.

### Options
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
