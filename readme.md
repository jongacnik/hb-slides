# Harp Slides Boilerplate

Make slide presentations with Harp.

## Usage

```
npm i harp -g
harp init my-slides --boilerplate jongacnik/hb-slides
harp server my-slides
```

Now visit [localhost:9000](http://localhost:9000) in your browser.

## Slides

All slides are contained in [index.jade](https://github.com/jongacnik/hb-slides/public/index.jade):

```jade
.slide#title
  h1 Slide 1

.slide
  h1 Slide 2

.slide
  h1 Slide 3

.slide
  h1 Slide 4
```

etc...

## Navigation

Slides are navigated by using the left and right arrow keys. **At the moment there is no mobile solution.**

An index hash is added to the url for direct linking to slides:

```
http://localhost:9000/#2
```

## Customization

Add custom css to your presentation in [theme.css](https://github.com/jongacnik/hb-slides/public/theme.css). You also have all the utility classes from [gr8](https://github.com/jongacnik/gr8) at your disposal as well.

Add custom javascript to your presentation in [theme.js](https://github.com/jongacnik/hb-slides/public/theme.js). You can hook onto a `slidechange` event for triggering custom js per slide:

```js
window.addEventListener('slidechange', function (e) {
  console.log(e.detail.slide)
})
```

If you really wanna overwrite the base css/js, take a peek in [base](https://github.com/jongacnik/hb-slides/public/base).