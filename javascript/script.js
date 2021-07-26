let txtnun = document.getElementById('txtnun')
let resultado = document.getElementById('result')
let numberList = document.getElementById('numberList')
let List = []


function isNumber(n) { //Para saber se é número
    if (Number(n) != 0) { //Se número for diferente de 0...
        return true //É verdadeiro
    } else { //Se não...
        return false //É falso
    }
}

function adicionar() { //Ao clicar no botão adicionar...
    if (isNumber(txtnun.value)) { //Se número for verdadeiro...
        List.push(Number(txtnun.value)) //Adicionar a lista.
        let item = document.createElement('option') //Cria novo elemento.
        item.text = `Você adicionou o número ${txtnun.value}... ` //Mostra texto no elemento criado.
        numberList.appendChild(item) //Lista de número recebe o elemento criado "item".
        resultado.innerHTML = ''
    } else { //Se campo némro estiver vazio...
        alert('Por favor adicionar um número!')
    }
    txtnun.value = '' //Limpar campo 
    txtnun.focus() //Deixar pronto para digitar novamente
}

function calcular() {
    if (List.length <1) {
        alert('Para calcular a raiz quadrada é preciso ao menos um número.\nPor favor adicionar até 5 números!')
    } else if (List.length < 2) {
        let qtdeLista = List.length //Total de itens da lista.
       for (let pos in List) { //Para cada posição na lista...
        let raiz = Math.sqrt(List[pos])
    }
        resultado.innerHTML += `Você digitou ${List.length} número (${List}).<br>`
        resultado.innerHTML += `A raiz quadrada do número digitado (${List[0]}) é ${Math.sqrt(List[0])}.<br>`
    
   } else if (List.length < 3) { //Se quantidade de itens na lista for menor que 3...
    let qtdeLista = List.length //Total de itens da lista.
    for (let pos in List) { //Para cada posição na lista...
        let raiz = Math.sqrt(List[pos]) //Variável para os números da lista
    }
        resultado.innerHTML += `Você digitou ${List.length} número (${List}).<br>`
        resultado.innerHTML += `A raiz quadrada do 1º número digitado (${List[0]}) é ${Math.sqrt(List[0])}.<br>`
        resultado.innerHTML += `A raiz quadrada do 2º número digitado (${List[1]}) é ${Math.sqrt(List[1])}.<br><br>`
    
   } else if (List.length < 4) {
       let qtdeLista = List.length 
       for (let pos in List) {
           let raiz = Math.sqrt(List[pos])
       }
       resultado.innerHTML += `Você digitou ${List.length} números (${List}).<br>`
       resultado.innerHTML += `A raiz quadrada do 1º número digitado (${List[0]}) é ${Math.sqrt(List[0])}.<br>`
       resultado.innerHTML += `A raiz quadrada do 2º número digitado (${List[1]}) é ${Math.sqrt(List[1])}.<br>`
       resultado.innerHTML += `A raiz quadrada do 3º número digitado (${List[2]}) é ${Math.sqrt(List[2])}.<br>`
   } else if (List.length < 5) {
       let qtdeLista = List.length
       for (let pos in List) {
           let raiz = Math.sqrt(List[pos])
       }
       resultado.innerHTML += `Você digitou ${List.length} números (${List}).<br>`
       resultado.innerHTML += `A raiz quadrada do 1º número digitado (${List[0]}) é ${Math.sqrt(List[0])}.<br>`
       resultado.innerHTML += `A raiz quadrada do 2º número digitado (${List[1]}) é ${Math.sqrt(List[1])}.<br>`
       resultado.innerHTML += `A raiz quadrada do 3º número digitado (${List[2]}) é ${Math.sqrt(List[2])}.<br>`
       resultado.innerHTML += `A raiz quadrada do 4º número digitado (${List[3]}) é ${Math.sqrt(List[3])}.<br>`
   } else if (List.length < 6) {
       let qtdeLista = List.length
       for (let posição in List) {
           let raiz = Math.sqrt(List[posição])
       }
       resultado.innerHTML += `Você digitou ${List.length} números (${List}).<br>`
        resultado.innerHTML += `A raiz quadrada do 1º número digitado (${List[0]}) é ${Math.sqrt(List[0])}.<br>`
        resultado.innerHTML += `A raiz quadrada do 2º número digitado (${List[1]}) é ${Math.sqrt(List[1])}.<br>`
        resultado.innerHTML += `A raiz quadrada do 3º número digitado (${List[2]}) é ${Math.sqrt(List[2])}.<br>`
        resultado.innerHTML += `A raiz quadrada do 4º número digitado (${List[3]}) é ${Math.sqrt(List[3])}.<br>`
        resultado.innerHTML += `A raiz quadrada do 5º número digitado (${List[4]}) é ${Math.sqrt(List[4])}`
   } else {
       alert(`Você digitou ${List.length} números, vamos calcular a raiz quadrada apenas dos 5 primeiros números digitados ok.`)
       let qtdeLista = List.length
       for (let eachNumber in List) {
           let raizQuadrada = Math.sqrt(List[eachNumber])
       }
       resultado.innerHTML += `<br><strong>Você digitou ${List.length} números (${List}).</strong><br>`
       resultado.innerHTML += `<strong>A raiz quadrada do 1º número digitado (${List[0]}) é ${Math.sqrt(List[0])}.</strong><br>`
       resultado.innerHTML += `<strong>A raiz quadrada do 2º número digitado (${List[1]}) é ${Math.sqrt(List[1])}.</strong><br>`
       resultado.innerHTML += `<strong>A raiz quadrada do 3º número digitado (${List[2]}) é ${Math.sqrt(List[2])}.</strong><br>`
       resultado.innerHTML += `<strong>A raiz quadrada do 4º número digitado (${List[3]}) é ${Math.sqrt(List[3])}.</strong><br>`
       resultado.innerHTML += `<strong>A raiz quadrada do 5º número digitado (${List[4]}) é ${Math.sqrt(List[4])}</strong>.`
   }
}






