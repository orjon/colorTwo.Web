$(() => {

  const fadeOut= 1000
  const fadeIn= 500
  const animSpeed = 2500

  $('.explode > div:gt(0)').hide()

  explode = () => {
    $('.explode > div:first')
      .fadeOut(fadeOut)
      .next()
      .fadeIn(fadeIn)
      .end()
      .appendTo('.explode')
  }

  setInterval(explode, animSpeed)

})
