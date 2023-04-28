const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

// функция, добавляющая ноль в начале, если передаваемое число одноразрядное
const addZeroPrepend = (num) => {
    if (String(num).length == 1) {
        return '0' + num
    } else {
        return num
    }
}

let isMuted = true
const playClockSound = () => {
    const clockSound = new Audio()
    clockSound.src = 'audio/clock-sound.mp3'
    clockSound.volume = 0.1
    clockSound.autoplay = true    
}

// функция, скрывающая элемент, если он виден и делающая элемент видимым, если он скрыт
const toggleHidden = (element) => {
    if (element.hasAttribute('hidden')) {
        element.removeAttribute('hidden')
    } else {
        element.setAttribute('hidden', '')        
    }
}

// кнопка выключения звука
turnSoundOff.addEventListener('click', function() {
    isMuted = true
    toggleHidden(turnSoundOff)
    toggleHidden(turnSoundOn)
})
// кнопка включения звука
turnSoundOn.addEventListener('click', function() {
    isMuted = false
    toggleHidden(turnSoundOff)
    toggleHidden(turnSoundOn)
})

const getTimeNow = () => {
    const time = new Date()

    document.getElementById('day').innerText = days[time.getDay()]
    document.getElementById('hours').innerText = addZeroPrepend(time.getHours() % 12)
    document.getElementById('minutes').innerText = addZeroPrepend(time.getMinutes()) 
    document.getElementById('seconds').innerText = addZeroPrepend(time.getSeconds())
    document.getElementById('ampm').innerText = time.getHours() >= 12 ? 'PM' : 'AM'

    if (!isMuted) {
        playClockSound()
    }
}
getTimeNow()
setInterval(getTimeNow, 1000)

// =============================== меняем цвет фона
// массив, в котором хранятся цвета градиента
const gradientsArr = [
    {
        colors: 'purple-blue',
        code: 'linear-gradient(to right bottom, #d3308c, #c651aa, #b46bc1, #b46bc1, #a280d0, #73a7e1, #69b0e0, #48b7df)'
    },
    {
        colors: 'purple-orange-yellow',
        code: 'linear-gradient(to right bottom, #d65db1, #d65db1, #d65db1, #e861a2, #ff827b, #ff8f73, #ffbe66, #ffd166, #ffe469, #ffe469)'
    },
    {
        colors: 'purple-pink-orange',
        code: 'linear-gradient(to right bottom, #845ec2, #8f59c1, #9953bf, #a44dbd, #af45b9, #c92e9e, #d2228f, #d91a75, #d62f43, #d62f43)'
    },    
    {
        colors: 'blue-green',
        code: 'linear-gradient(to right bottom, #845ec2, #845ec2, #00a9da,#00b1a4, #05ac8c, #048266, #005b44,#005b44)'
    },
    {
        colors: 'blue-green',
        code: 'linear-gradient(to right top, #051937, #004d7a, #008793, #a8eb12)'
    }
]

// переменная указывает на выбранную цветовую гамму
let colorIndex = 0

// див, у когорого на фоне градиент
const gradient = document.getElementById('gradient') 

const changeColor = () => {
    colorIndex += 1 
    if (colorIndex >= gradientsArr.length) {
        colorIndex = 0
    }
    
    console.log(gradientsArr[colorIndex].colors)
    gradient.style.backgroundImage = gradientsArr[colorIndex].code
}   
document.getElementById('change-color-theme').addEventListener('click', changeColor)