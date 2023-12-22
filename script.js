//html

function calculate(op) {
    document.querySelector('#op').value = op.value
    let numero1 = parseFloat(document.querySelector('#n1').value)
    let numero2 = parseFloat(document.querySelector('#n2').value)
    if(isNaN(numero1) || isNaN(numero2)){
        alert('Digite algum valor nos dois espaços')
    }else{
        let resu = document.querySelector('#result')
        switch(op.value){
            case "+":
                resu.value = numero1 + numero2
                break;
           case "-":
                resu.value = numero1 - numero2
                break;
            case "*":
                resu.value = numero1 * numero2
                break
            case "/":
                resu.value = numero1 / numero2
                break 
        }

    }
}
