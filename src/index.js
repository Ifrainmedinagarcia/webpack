import './style.css'
import i from './assets/683867.jpg'
import image from './assets/2841847.jpg'

console.log('Hi world, without with webpack')

const arr = [1, 2, 3]

const codeESNex = () => {
	console.log(...arr);
}

codeESNex()

//document.getElementById('app').innerHTML = `<img src=${logo} alt="logo" >`


const app = document.getElementById('app')
const h1 = document.createElement('h1')
const logo = document.createElement('img')
const images = document.createElement('img')

h1.textContent = 'Hi world with webpack'
logo.src = i
logo.classList.add('icon')
images.src = image

app.appendChild(h1)
app.appendChild(logo)
app.appendChild(images)
