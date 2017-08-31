var currentNavLink = '#home-page'

$('nav ul li').on('click', function(event) {
  // console.log($(event.target).parent())
  if(!$(event.target).parent().hasClass('active')) {
    $(currentNavLink).removeClass('active')
    
  }
})
