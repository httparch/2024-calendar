let Sun = document.getElementById('daycolor0')
let Mon = document.getElementById('daycolor1')
let Tue = document.getElementById('daycolor2')
let Wed = document.getElementById('daycolor3')
let Thu = document.getElementById('daycolor4')
let Fri = document.getElementById('daycolor5')
let Sat = document.getElementById('daycolor6')
let toggle = document.getElementById('toggleDark');
let btn_toggle = document.getElementById('time-icon');
let body = document.querySelector('body')
let header = document.getElementById('year')
let monthToday = document.getElementById('month-picker')

function white(){
    Sun.style.color = 'white'
    Sun.style.transition = '1s'
    Mon.style.color = 'white'
    Mon.style.transition = '1s'
    Tue.style.color = 'white'
    Tue.style.transition = '1s'
    Wed.style.color = 'white'
    Wed.style.transition = '1s'
    Thu.style.color = 'white'
    Thu.style.transition = '1s'
    Fri.style.color = 'white'
    Fri.style.transition = '1s'
    Sat.style.color = 'white'
    toggle.style.color = 'white'
    toggle.style.transition = '1s'
    Sat.style.transition = '1s'
    header.style.color = 'white';
    body.style.color = 'white';
    monthToday.style.color = 'white';
    monthToday.style.transition = '1s';
    header.style.transition = '1s';
    body.style.transition = '1s';
}

function black(){
    Sun.style.color = 'black'
    Sun.style.transition = '1s'
    Mon.style.color = 'black'
    Mon.style.transition = '1s'
    Tue.style.color = 'black'
    Tue.style.transition = '1s'
    Wed.style.color = 'black'
    Wed.style.transition = '1s'
    Thu.style.color = 'black'
    Thu.style.transition = '1s'
    Fri.style.color = 'black'
    Fri.style.transition = '1s'
    Sat.style.color = 'black'
    Sat.style.transition = '1s'
    toggle.style.color = 'black'
    toggle.style.transition = '1s'
    body.style.color = 'black';
    header.style.color = 'black';
    header.style.transition = '1s';
    body.style.transition = '1s';
    monthToday.style.color = 'black';
    monthToday.style.transition = '1s';
  
}