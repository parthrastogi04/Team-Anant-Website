(function () {
    let socials = document.querySelectorAll('.social div')
        
    socials.forEach(function(social, index) {
      social.style.animation = `moveIn .6s cubic-bezier(.51,.92,.24,1.15) forwards ${index/7 + 0.2}s`
    })
  
  let rocketPieces = document.querySelectorAll('.rocket-body span')
  
  let rocket = document.querySelector('.rocket')
  
  let triggerStart = window.innerHeight / 5;
  
  let rocketOffsetTop = rocket.offsetTop;
  
  let thirdOffsetTop = rocketPieces[2].offsetTop;
  
  
  
  }())