$(() => {


  const animationSpeed= 2400

  $('.colorFade > div:gt(0)').hide()
  $('.timeFade > div:gt(0)').hide()


  $('.toggle').click(() => {
    $('.timeFade').toggleClass('hidden')
  })

  colorFade = () => {
    $('.colorFade > div:first')
      .fadeOut(animationSpeed)
      .next()
      .fadeIn()
      .end()
      .appendTo('.colorFade')
  }

  timeFade = () => {
    $('.timeFade > div:first')
      .fadeOut(animationSpeed)
      .next()
      .fadeIn(animationSpeed)
      .end()
      .appendTo('.timeFade')
  }

  setInterval(colorFade, animationSpeed)
  setInterval(timeFade, animationSpeed)

})
