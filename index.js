let calendar = document.querySelector('.container')

const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// const month_bg= ['seasonal-bg/bkg_01_january.jpg',
//                 'seasonal-bg/bkg_02_february.jpg',
//                 'seasonal-bg/bkg_03_march.jpg',
//                 'seasonal-bg/bkg_04_april.jpg',
//                 'seasonal-bg/bkg_05_may.jpg',
//                 'seasonal-bg/bkg_06_june.jpg',
//                 'seasonal-bg/bkg_07_july.jpg',
//                 'seasonal-bg/bkg_08_august.jpg',
//                 'seasonal-bg/bkg_09_september.jpg',
//                 'seasonal-bg/bkg_10_october.jpg',
//                 'seasonal-bg/bkg_11_november.jpg',
//                 'seasonal-bg/bkg_12_december.jpg'
// ]

isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}

generateCalendar = (month, year) => {

  let calendar_days = calendar.querySelector('.calendar-days')
  let calendar_header_year = calendar.querySelector('h1')
  let month_today = calendar.querySelector('.current-month')


  let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  calendar_days.innerHTML = ''

  let currDate = new Date()
  if(month ===null || month === undefined) month = currDate.getMonth()
  if (!year) year = currDate.getFullYear()

  let curr_month = `${month_names[month]}`

  month_picker.innerHTML = curr_month
  calendar_header_year.innerHTML = year
  month_today.innerHTML = curr_month

  let background = document.getElementById('bg')
  
  if(curr_month == 'December'){
    background.style.backgroundImage = "url('seasonal-bg/bkg_12_december.jpg')"
  }else if(curr_month == 'November'){
    background.style.backgroundImage = "url('seasonal-bg/bkg_11_november.jpg')"
  }else if(curr_month == 'October'){
    background.style.backgroundImage = "url('seasonal-bg/bkg_10_october.jpg')"
  }else if(curr_month == 'September'){
    background.style.backgroundImage = "url('seasonal-bg/bkg_09_september.jpg')"
  }
  else if(curr_month == 'August'){
    background.style.backgroundImage = "url('seasonal-bg/bkg_08_august.jpg')"
  }
  else if(curr_month == 'July'){
    background.style.backgroundImage = "url('seasonal-bg/bkg_07_july.jpg')"
  }
  else if(curr_month == 'June'){
    background.style.backgroundImage = "url('seasonal-bg/bkg_06_june.jpg')"
  }
  else if(curr_month == 'May'){
    background.style.backgroundImage = "url('seasonal-bg/bkg_05_may.jpg')"
  }
  else if(curr_month == 'April'){
    background.style.backgroundImage = "url('seasonal-bg/bkg_04_april.jpg')"
  }
  else if(curr_month == 'March'){
    background.style.backgroundImage = "url('seasonal-bg/bkg_03_march.jpg')"
  }
  else if(curr_month == 'February'){
    background.style.backgroundImage = "url('seasonal-bg/bkg_02_february.jpg')"
  }
  else if(curr_month == 'January'){
    background.style.backgroundImage = "url('seasonal-bg/bkg_01_january.jpg')"
  }
 
  // get first day of month
  
  let first_day = new Date(year, month, 1)

  for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
      let day = document.createElement('div')
      if (i >= first_day.getDay()) {
          day.innerHTML = i - first_day.getDay() + 1
          day.innerHTML += `<span></span>
                          <span></span>
                          <span></span>
                          <span></span>`
          if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
              day.classList.add('curr-date')
          }
      }
      calendar_days.appendChild(day)
  }
}

let month_list = calendar.querySelector('.month-list')

month_names.forEach((e, index) => {
  let month = document.createElement('div')
  month.innerHTML = `<div data-month="${index}">${e}</div>`
  month.querySelector('div').onclick = () => {

    var x = document.getElementById('myDays')
    var y = document.getElementById('myMonth')
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none"; 
       
      } 
      y.style.display = "none";
      month_list.classList.remove('show')
      curr_month.value = index
      generateCalendar(index, curr_year.value)
  }
  month_list.appendChild(month)
})

let month_picker = calendar.querySelector('.month-picker')

month_picker.onclick = () => {
  month_list.classList.add('show')

  var x = document.getElementById('myDays')
  var y = document.getElementById('myMonth')

    if (x.style.display === "none" && y.style.display === "block") {
      x.style.display = "block";
    }
    else {
      x.style.display = "none";
      y.style.display = "block";
    }
}

let currDate = new Date()

let curr_month = {value: currDate.getMonth()}
let curr_year = {value: currDate.getFullYear()}


generateCalendar(curr_month.value, curr_year.value)

// document.getElementById('next-year').onclick = () => {
//   ++curr_year.value
//   generateCalendar(curr_month.value, curr_year.value)
// }
