function limpar(){
document.getElementById('display').value = ' ';
}
function valor(value){
    document.getElementById('display').value += value;
}
function calculate(){
    document.getElementById('display').value = eval(document.getElementById('display').value);
}