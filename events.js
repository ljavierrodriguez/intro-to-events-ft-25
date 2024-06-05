function saludar(name){
    alert(`Hola ${name} como estas?`)
}

function cambiarEstilo(elem){
    console.log(this)
    console.log(elem)
    if(elem.style.backgroundColor === 'gray'){
        elem.style.backgroundColor = ''
    } else {
        elem.style.backgroundColor = 'gray'
    }
}

let p2 = document.querySelector('.p2')
p2.addEventListener('mouseover', function(evento){
    const { target } = evento;
    console.log(target)
    if(target.style.backgroundColor === 'gray'){
        target.style.backgroundColor = ''
    } else {
        target.style.backgroundColor = 'gray'
    }
    console.log(evento)
})

function salirDelParrafo({ target }){
    /* const { target } = evento; // destructuring
    console.log(target) */
    if(target.style.backgroundColor === 'gray'){
        target.style.backgroundColor = ''
    } else {
        target.style.backgroundColor = 'gray'
    }
    //console.log(evento)
}

const salirDelParrafo2 = function({ target }){
    /* const { target } = evento; // destructuring
    console.log(target) */
    if(target.style.backgroundColor === 'gray'){
        target.style.backgroundColor = ''
    } else {
        target.style.backgroundColor = 'gray'
    }
    //console.log(evento)
}

p2.addEventListener('mouseout', salirDelParrafo )

p2.addEventListener('dblclick', () => {
    alert('Haciendo doble click')
})

let links = document.querySelectorAll('a')
console.log(links)

links.forEach((elem, index, arr) => {
    //alert('Encontre un valor')
    elem.addEventListener('click', (evento) => {
        evento.preventDefault() // deteniene el evento
        console.log(evento.type)
    })
})

function enviarFormulario(){

    let enviar = true
    let email = document.querySelector('input[name=email]')
    if(email.value === ''){
        email.classList.add('is-invalid')
        email.classList.remove('is-valid')
        enviar = false
    }else {
        email.classList.remove('is-invalid')
        email.classList.add('is-valid')
    }

    return enviar
}

let formRegister = document.querySelector('#register')
formRegister.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const { username, password } = evento.target;

    let enviar = true;

    if(username.value === ''){
        username.classList.add('is-invalid')
        username.classList.remove('is-valid')
        enviar = false
    }else {
        username.classList.remove('is-invalid')
        username.classList.add('is-valid')
    }

    if(password.value === ''){
        password.classList.add('is-invalid')
        password.classList.remove('is-valid')
        enviar = false
    }else {
        password.classList.remove('is-invalid')
        password.classList.add('is-valid')
    }

    if(enviar){
        evento.target.submit()
    }

    //alert('Enviando Formulario')
})

let valorInput = document.querySelector('#valorInput');

let email = document.querySelector('input[name=email]')
email.addEventListener('keyup', (evento) => {
    console.log(evento.target.value)
    valorInput.innerHTML = evento.target.value
})


document.addEventListener('mousemove', (evento) => {
    console.log(evento)
    const x = document.querySelector('.x')
    const y = document.querySelector('.y')
    x.innerHTML = `X: ${evento.x}`
    y.innerHTML = `Y: ${evento.y}`
})

document.addEventListener('click', (evento) => {
    console.log(`X: ${evento.x}, Y: ${evento.y}`)
})