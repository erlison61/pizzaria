const getElement=(...queries)=>document.querySelector(...queries)

const container=getElement('.modal-container')
const modal=getElement('.modal')

function openModal(){
    container.classList.toggle("modal-show");
}

setTimeout(openModal,1000)
