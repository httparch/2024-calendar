let calendar = document.querySelector('.container')

const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

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
