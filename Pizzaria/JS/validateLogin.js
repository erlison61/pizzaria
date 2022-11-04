const Element=(...queries)=>document.querySelector(...queries)
const btnEntrar=Element('#btnEntrar')

const nome= Element('#name')
const pass= Element('#pass')


const eyeSenha= Element('#verSenha')

function validFields(){
    const validName= isNameValid()
    const validPassword= isPasswordValid()


    btnEntrar.disabled= !validName || !validPassword
}

function isNameValid(){
    if(!nome.value) return false

    return true
}

function isPasswordValid(){
    if(!pass.value) return false

    return true
}



function entrar(e){
    e.preventDefault();

    let users= []
    let usersValid={
        nome:'',
        email:'',
        senha:''
    }
    const sucess= document.querySelector('.msgsucess')
    const error= document.querySelector('.msgError')

    users = JSON.parse(localStorage.getItem('users'))
    users.forEach(element => {
        if (nome.value=== element.nomeCad 
            && pass.value === element.senhaCad){
            usersValid={
                nome:element.nomeCad,
                senha:element.senhaCad
            }
        }
    });
   
    if (nome.value.trim() === usersValid.nome && pass.value.trim() === usersValid.senha) {
        sucess.innerHTML='entrando...'
        
        const location='../html/inicio.html'
        window.location.href=location
        
        const token= Math.random().toString(16).substring(2)
        localStorage.setItem('token',token)

    } else {
        error.innerHTML="[error]por favor preencha os campos corretamente"
    }
}


function showPass(){
    if (pass.getAttribute('type')==='password') {
        pass.setAttribute('type','text')
    }else{
        pass.setAttribute('type','password')
    }
}

btnEntrar.addEventListener('click',entrar)
eyeSenha.addEventListener('click',showPass)
