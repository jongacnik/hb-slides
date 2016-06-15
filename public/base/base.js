var Cycle = function (list, index) {
  index = index || 0
  return {
    next : function () {
      index++
      index = (index >= list.length) ? index = 0 : index
      var item = list[index]
      return item
    },
    prev : function () {
      index--
      index = (index < 0) ? index = list.length - 1 : index
      var item = list[index]
      return item
    }
  }
}

var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'))
var slideshow = Cycle(slides.map(function (v, i) { return i }), (window.location.hash.match(/\d+/) | 0))

var progress = function () {
  window.location.hash = slideshow.next()
}

var regress = function () {
  window.location.hash = slideshow.prev()
}

var showSlide = function () {
  slides.forEach(function (e) { e.classList.add('inactive') })
  var activeSlide = slides[(window.location.hash.match(/\d+/) | 0)]
  activeSlide.classList.remove('inactive')
  window.dispatchEvent(new CustomEvent('slidechange', { detail: { slide : activeSlide } }))
}

setTimeout(showSlide, 0)
window.addEventListener('hashchange', showSlide)

document.body.onkeyup = function (e) {
  if (e.keyCode == 39) progress()
  if (e.keyCode == 37) regress()
}