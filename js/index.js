let clickToday = document.getElementById('click_today')
let calendar = document.querySelector('.container')

const month_names = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
const day_names = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY']

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
  let day_today = calendar.querySelector('.current-day')
  let time_today = calendar.querySelector('.current-time')
  
 
  let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  calendar_days.innerHTML = ''

  let currDate = new Date()
  if(month ===null || month === undefined) month = currDate.getMonth()
  if (!year) year = currDate.getFullYear()
  const day = String(currDate.getDate()).padStart(2,'0');

  let curr_month = `${month_names[month]}`

  month_picker.innerHTML = curr_month
  calendar_header_year.innerHTML = year
  month_today.innerHTML = month_names[currDate.getMonth()]

  setInterval(() =>{
    let d = new Date()
    time_today.innerHTML = d.toLocaleTimeString()
  },1000)

  day_today.innerHTML = day

  

  var toDay = day_names[currDate.getDay()]
  
  clickToday.textContent = toDay

  // changeWeather(currDate.toLocaleTimeString())
  changeBg(curr_month)

  // get first day of month
  let first_day = new Date(year, month, 1)

  for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
      let day = document.createElement('div')
      if (i >= first_day.getDay()) {
          day.innerHTML = i - first_day.getDay() + 1
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
        y.style.display = "none";
      } else {
        x.style.display = "none"; 
      }
            
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
      x.style.display = "none";
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

document.getElementById('next').onclick = () => {
  ++curr_year.value
  generateCalendar(curr_month.value, curr_year.value)
}

document.getElementById('prev').onclick = () => {
  --curr_year.value
  generateCalendar(curr_month.value, curr_year.value)
}

