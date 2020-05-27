function gerar(){
    let tabela = document.getElementById('tabela')
    tabela.innerHTML = ''
    let num1 = document.getElementById('num1')
    let num2 = document.getElementById('num2')
    num1 = Number(num1.value)
    num2 = Number(num2.value)
    soma(num1,num2)
    subtracao(num1, num2)
    produto(num1, num2)
    divisao(num1, num2)
    resto(num1, num2)

    function soma(num1, num2){
        let item = document.createElement('option')
        soma = num1+num2
        item.text = `Soma: ${num1} + ${num2} = ${soma}`
        item.value = 0
        tabela.appendChild(item)
    }
    function subtracao(num1, num2){
        let item = document.createElement('option')
        subtracao = num1-num2
        item.text = `Subtração: ${num1} - ${num2} = ${subtracao}`
        item.value = 0
        tabela.appendChild(item)

    }
    function produto(num1, num2){
        let item = document.createElement('option')
        produto = num1*num2
        item.text = ` Produto: ${num1} * ${num2} = ${produto}`
        item.value = 1
        tabela.appendChild(item)
    }
    function divisao(num1, num2){
        let item = document.createElement('option')
        divisao = num1/num2
        item.text = `Divisão: ${num1} / ${num2} = ${divisao}`
        item.value = 2
        tabela.appendChild(item)
    }
    function resto(num1, num2){
        let item = document.createElement('option')
        resto = num1%num2
        item.text = ` Resto: ${num1} % ${num2} = ${resto}`
        item.value = 3
        tabela.appendChild(item)

    }
    
    
    

}