const sec = document.querySelector('.s'),
min = document.querySelector('.m'),
hour = document.querySelector('.h'),
hoursNumber= document.querySelector('.hours'),
minutesNumber = document.querySelector('.minutes')

function clock() {
    /* 
    new Date() - получает с пк время и дату 
    getSeconds()- получает секунды 
    getMinutes()- получает минуты
    getHours()- получает часы 
    */
   let time = new Date(),
   seconds = time.getSeconds() * 6, 
   minutes = time.getMinutes() * 6, 
   hours = time.getHours() * 30 
   hour.style = `transform : rotate(${hours}deg)`
   min.style = `transform : rotate(${minutes}deg)`
   sec.style = `transform : rotate(${seconds}deg)`
   hoursNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours(): time.getHours()
   minutesNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes(): time.getMinutes()
   
   //Рекурсия - это когда функция вызывает внутри себя 
   setTimeout(() =>clock(),1000)
}
clock()

const links = document.querySelectorAll('.tabsItem'),
content = document.querySelectorAll('.tabsContentItem')
for(let i = 0; i<links.length; i++){
    links[i].addEventListener('click', function(e) {
        e.preventDefault()
        removeActiveClass()
        addActiveClass(links[i], content[i])  
    })
}

function removeActiveClass() {
    links.forEach(link => {
        link.classList.remove('active')
    })
    content.forEach(item => {
        item.classList.remove('active')
    })
}
function addActiveClass(link, content) {
    link.classList.add('active')
    content.classList.add('active')
    
}
const watchSecond = document.querySelector('.stopwatch__seconds'),
watchMinut = document.querySelector('.stopwatch__minutes'),
watchHour = document.querySelector('.stopwatch__hours'),
stopWatch = document.querySelector('.stopwatch__btn')
 
stopWatch.addEventListener('click', function(){
    if(this.innerHTML == 'start'){
        this.innerHTML = 'stop'
        let i = 0
        setTimeout(()=> startSecond(this,i))
    } else if(this.innerHTML == 'stop'){
        this.innerHTML = 'reset' 
    } else{
        watchSecond.innerHTML = 0;
        watchHour.innerHTML = 0;
        watchMinut.innerHTML = 0;

        this.innerHTML = 'start'
    }
})
function startSecond(element, i){
    if(element.innerHTML == 'stop'){
        if(i == 60){
            i=0
            watchSecond.innerHTML = i
            if(watchMinut.innerHTML == 59){
                watchMinut.innerHTML = 0
                watchHour.innerHTML++
            } else{
                watchMinut.innerHTML++
            }
        }else{
            i++
            watchSecond.innerHTML = i
        }
        setTimeout(()=>startSecond(element, i ), 1000)
    }
}