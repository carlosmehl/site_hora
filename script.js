function carregar(){
var hora = window.document.getElementById('hora')
var img = window.document.getElementById('imagem')
var agora = new Date()
var hr = agora.getHours()
var min = agora.getMinutes()
    hora.innerHTML = `Agora são ${hr} horas e ${min} minutos`
if (hr >= 06 && hr < 12){
    img.src = 'imagens/manha_peq.jpg'
    document.body.style.background = '#919cb2'
    document.body.style.color = 'black'
}else if(hr >= 12 && hr <= 18){
    img.src = 'imagens/tarde_peq.jpg'
    document.body.style.background = '#bba695'
}else{
    img.src = 'imagens/noite_peq.jpg'
    document.body.style.background = '#08526d'
}
}