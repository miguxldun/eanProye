const form = document.querySelector('form')
const validUsers = ['aleonmo67650', 'geral12']
const validPass = ['saxhe3-sijCuv-wuhmeh', 'geral12']
form.addEventListener('submit', (e)=>{
    const user = document.querySelector('#user-input')
    const pass = document.querySelector('#pass')

    if(!validUsers.includes(user.value) || !validPass.includes(pass.value)){
        e.preventDefault();
        const err = document.querySelector('#error')
        user.style.borderColor = 'red'
        pass.style.borderColor = 'red'
        error.style.display = 'block'
    } else{
        console.log('exito')
    }
})
