if(localStorage.getItem('token')===null){
    alert('você precisa estar logado para acessar essa pagina')
    const local='../html/index.html'
    window.location.href=local
}
