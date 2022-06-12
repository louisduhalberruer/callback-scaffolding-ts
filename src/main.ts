import './index.css'

let sidenav = document.getElementById('sidenav')
let openBtn = document.getElementById('button-open')

let counter = 0
console.log(openBtn)

openBtn.onclick = openNav

function openNav() {
  if (counter === 0) {
    sidenav?.classList.remove('hidden')

    counter++
  } else if (counter === 1) {
    sidenav?.classList.add('hidden')
    counter--
  }
}
