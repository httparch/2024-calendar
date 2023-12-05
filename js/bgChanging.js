let background = document.getElementById('bg')

function changeBg(curr_month){

    // sun()
    let current = curr_month
    
      if(current == 'DECEMBER'){
        background.style.backgroundImage = "url('seasonal-bg/bkg_12_december.jpg')"
      }else if(current == 'NOVEMBER'){
        background.style.backgroundImage = "url('seasonal-bg/bkg_11_november.jpg')"    
      }else if(current == 'OCTOBER'){
        background.style.backgroundImage = "url('seasonal-bg/bkg_10_october.jpg')"
      }else if(current == 'SEPTEMBER'){
        background.style.backgroundImage = "url('seasonal-bg/bkg_09_september.jpg')"
      }else if(current == 'AUGUST'){
        background.style.backgroundImage = "url('seasonal-bg/bkg_08_august.jpg')"
      }else if(current == 'JULY'){
        background.style.backgroundImage = "url('seasonal-bg/bkg_07_july.jpg')"
      }else if(current == 'JUNE'){
        background.style.backgroundImage = "url('seasonal-bg/bkg_06_june.jpg')"
      }else if(current == 'MAY'){
        background.style.backgroundImage = "url('seasonal-bg/bkg_05_may.jpg')"
      }else if(current == 'APRIL'){
        background.style.backgroundImage = "url('seasonal-bg/bkg_04_april.jpg')"
      }else if(current == 'MARCH'){
        background.style.backgroundImage = "url('seasonal-bg/bkg_03_march.jpg')"
      }else if(current == 'FEBRUARY'){
        background.style.backgroundImage = "url('seasonal-bg/bkg_02_february.jpg')"
      }else if(current == 'JANUARY'){
        background.style.backgroundImage = "url('seasonal-bg/bkg_01_january.jpg')"
      }

  // toggle.addEventListener('click', function(){
  //   this.classList.toggle('bi-moon')
  //   console.log(this);
  //     if(this.classList.toggle('bi-brightness-high-fill')){
  //         black()
          
  //         changeBg(curr_month)
  //     }else{
  //         background.style.backgroundImage = "url('seasonal-bg/depositphotos_132368254-stock-illustration-starry-night-sky-sunset-dawn.jpg')"
  //         background.style.transition = '2s';
  //         white()
  //     }
  //     console.log(curr_month);
   
  // });

  
btn_toggle.onclick = () => {
  toggle.classList.toggle('bi-moon')
      if(toggle.classList.toggle('bi-brightness-high-fill')){
          black()
          changeBg(curr_month)
      }else{
          background.style.backgroundImage = "url('seasonal-bg/depositphotos_132368254-stock-illustration-starry-night-sky-sunset-dawn.jpg')"
          background.style.transition = '2s';
          white()
      }
} 

  
}
  var currentTime = new Date().getHours();
  console.log(currentTime)
  if ( currentTime > 7 && currentTime< 16) { //morning
    document.getElementById('weather').src = 'weather-pix/sunny-removebg-preview.png'
  }
  else if (currentTime > 18) { //night
    document.getElementById('weather').src = 'weather-pix/night-removebg-preview.png'
  }
  else if (currentTime > 5 &&currentTime < 7) { //sunrise
    document.getElementById('weather').src = 'weather-pix/sunrise-removebg-preview.png'
  }
  else if (currentTime > 16 && currentTime < 18){ //sunset
    document.getElementById('weather').src = 'weather-pix/sunset-removebg-preview.png'
  }else{
    document.getElementById('weather').src = 'weather-pix/night-removebg-preview.png'
  }

  function sun(){
    document.getElementById('toggleDark').className = 'bi-brightness-high-fill'
    console.log(document.getElementById('toggleDark'))
    background.style.transition = '2s';
    black()
  }

 




  
