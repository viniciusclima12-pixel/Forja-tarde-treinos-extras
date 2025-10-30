function contar() {

    const num = parseFloat(document.getElementById('numeroInput').value)

    if(isNaN(num)) {
        document.getElementById('result').textContent = 'digite um numero valido'
        return
    }

    var resultadoStr = ""
    
    if(num <= 10000){
    for(var cont = 1; cont <= num; cont++) {
        resultadoStr = resultadoStr + cont + "<br>"
    }
    document.getElementById('result').innerHTML = resultadoStr

    

    } else {
        document.getElementById('result').textContent = 'digite um numero menor que 10.000'

}

}