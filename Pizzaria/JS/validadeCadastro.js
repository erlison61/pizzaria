const nome= document.querySelector('#name')
const email=document.querySelector('#email')
const pass=document.querySelector('#pass')



const eye=document.querySelector('.fa-eye')

const btn=document.querySelector('#btnCadastrar')

function validFieldsCadastro(){
    const validName= isNameValid()
    const validPassword= isPasswordValid()
    const validEmail= isEmailValid()

    btn.disabled= !validName || !validPassword || !validEmail
}

function isNameValid(){
    if(!nome.value) return false

    return true
}

function isPasswordValid(){
    if(!pass.value) return false

    return true
}
function isEmailValid(){
    if(!email.value) return false

    return validateEmail(email.value)
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}


function cadastar(e){
    
    e.preventDefault();
    //if (!nome.value && !email.value && !pass.value ) return
    const sucess= document.querySelector('.msgsucess')
    const users=JSON.parse(localStorage.getItem('users')||'[]')

    users.push({
        nomeCad:nome.value.trim(),
        emailCad:email.value.trim(),
        senhaCad:pass.value.trim()
    })

    localStorage.setItem('users',JSON.stringify(users))
    sucess.innerHTML='cadastrando usuario...'

    const local='../html/index.html'
    window.location.href=local


    
}

 
function showPass(){
    if (pass.getAttribute('type')==='password') {
        pass.setAttribute('type','text')
    }else{
        pass.setAttribute('type','password')
    }
}


eye.addEventListener('click',showPass)
btn.addEventListener('click',cadastar)