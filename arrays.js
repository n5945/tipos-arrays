const notas = [5, 8, 9.5, 10]

console.log(notas.length); //Verifica o total de elementos de um array

console.log(notas.length - 1); //Retorna o indice do ultimo elemento do array

console.log(notas[2]); //Retorna o valor de uma posição dentro do array

notas.push(7.5) //Adiciona um novo valor ao final do array original
console.log(notas); 

notas.shift() //Remove o primeiro elemento de um array
console.log(notas);

notas.pop() //Remove o ultimo elemento de um array
console.log(notas);

notas.unshift(5) //Adiciona um elemento ao inicio de um array
console.log(notas);

console.log(notas.map(nota => nota * 2)) //Mapeia os elementos do array e permite altera-los individualmente

notas.forEach(nota => console.log(nota * 2));

console.log(notas.join("; "))

console.log(notas.reduce((acumulador, valorAtual) => acumulador + valorAtual))