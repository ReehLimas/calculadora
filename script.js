function limpar(){
document.getElementById('display').value = ' ';
}
function valor(value){
    document.getElementById('display').value += value;
}
function calculate(){
    document.getElementById('display').value = eval(document.getElementById('display').value);
}
document.addEventListener('keydown', function(event){
    const verifica = /^[0-9]$/;
    if(verifica.test(event.key)){
        valor(event.key)
}
    if((event.key == 'Enter') ){
        calculate();
    }
})