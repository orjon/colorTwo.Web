$(() => {

  const fadeOut= 1500
  const fadeIn= 500
  const animSpeed = 3500


  const currentPage = document.querySelector('.navText').innerHTML
  const navIcons = document.querySelectorAll('.navIcon')
  const navText = document.querySelector('.navText')

  navIcons.forEach(icon => {
    icon.addEventListener('mouseover', (e) => {
      resetNavIcons()
      if ($(e.target).hasClass('code')) {
        $('.navText').css('text-align', 'left')
        navText.innerHTML='code'
        $(e.target).attr('src', './images/nav/navCodeColor3.png')
      } else if ($(e.target).hasClass('design')) {
        $('.navText').css('text-align', 'left')
        navText.innerHTML='design & visualisation'
        $(e.target).attr('src', './images/nav/navDesignColor2.png')
      } else if ($(e.target).hasClass('electronics')) {
        $('.navText').css('text-align', 'left')
        navText.innerHTML='electronics'
        $(e.target).attr('src', './images/nav/navElectronicsColor5.png')
      } else if ($(e.target).hasClass('face')) {
        $('.navText').css('text-align', 'right')
        navText.innerHTML='about me'
        $(e.target).attr('src', './images/nav/navFaceColor.png')
      }
    })

    icon.addEventListener('mouseout', () => {
      navText.innerHTML= currentPage
      resetNavIcons()
      $('.code.current').attr('src', './images/nav/navCodeColor3.png')
      $('.design.current').attr('src', './images/nav/navDesignColor2.png')
      $('.electronics.current').attr('src', './images/nav/navElectronicsColor5.png')
      $('.face.current').attr('src', './images/nav/navFaceColor.png')
      $('.navText.aboutMe').css('text-align', 'right')

    })
  })
  // //
  function resetNavIcons() {
    $('.navText').css('text-align', 'left')
    $('.code').attr('src', './images/nav/navCode.png')
    $('.design').attr('src', './images/nav/navDesign.png')
    $('.electronics').attr('src', './images/nav/navElectronicsColor0.png')
    $('.face').attr('src', './images/nav/navFace.png')
  }

  $('.explode > div:gt(0)').hide()


  function explode() {
    $('.explode > div:first')
      .fadeOut(fadeOut)
      .next()
      .fadeIn(fadeIn)
      .end()
      .appendTo('.explode')
  }

  setInterval(explode, animSpeed)

})
