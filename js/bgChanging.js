  
  function changeBg(curr_month){
    
    let current = curr_month
    let background = document.getElementById('bg')

    if(current == 'DECEMBER'){
        background.style.backgroundImage = "url('seasonal-bg/bkg_12_december.jpg')"
        
      }else if(current == 'NOVEMBER'){
        background.style.backgroundImage = "url('seasonal-bg/bkg_11_november.jpg')"
      }else if(current == 'OCTOBER'){
        background.style.backgroundImage = "url('seasonal-bg/bkg_10_october.jpg')"
      }else if(current == 'SEPTEMBER'){
        background.style.backgroundImage = "url('seasonal-bg/bkg_09_september.jpg')"
      }
      else if(current == 'AUGUST'){
        background.style.backgroundImage = "url('seasonal-bg/bkg_08_august.jpg')"
      }
      else if(current == 'JULY'){
        background.style.backgroundImage = "url('seasonal-bg/bkg_07_july.jpg')"
      }
      else if(current == 'JUNE'){
        background.style.backgroundImage = "url('seasonal-bg/bkg_06_june.jpg')"
      }
      else if(current == 'MAY'){
        background.style.backgroundImage = "url('seasonal-bg/bkg_05_may.jpg')"
      }
      else if(current == 'APRIL'){
        background.style.backgroundImage = "url('seasonal-bg/bkg_04_april.jpg')"
      }
      else if(current == 'MARCH'){
        background.style.backgroundImage = "url('seasonal-bg/bkg_03_march.jpg')"
      }
      else if(current == 'FEBRUARY'){
        background.style.backgroundImage = "url('seasonal-bg/bkg_02_february.jpg')"
      }
      else if(current == 'JANUARY'){
        background.style.backgroundImage = "url('seasonal-bg/bkg_01_january.jpg')"
      }

  }


  function changeWeather(time){

    let current = time;
    console.log(current)
    if((current < "06:00:00 PM")){
      document.getElementById('weather').src = 'weather-pix/night-removebg-preview.png'
    }else{ 
      document.getElementById('weather').src = 'weather-pix/sunny-removebg-preview.png'
    }

  }

