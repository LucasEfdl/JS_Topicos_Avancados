Já vimos que podemos utilizar funções async dentro do Promise.all(), afinal elas retornam uma promise. Porém, como o próprio Promise.all() retorna uma promise também podemos utilizar o await com ele. No código abaixo vemos que a função .map() está retornando um array de promises pendentes:
    
Obs.: a função waitFor() é apenas uma forma simples de fazer o código esperar por uma quantidade arbitrária de tempo, assim simulamos um código que demora a ser executado.

```c
function waitFor(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, seconds * 1000)
  })
}

const numbers = [4, 5, 9, 13, 77]

const squares = numbers.map(async number => {
    await waitFor(2)
    return number * number
})
console.log(squares)
```

Poderiamos usar o Promise.all() para esperar pelos resultados e exibi-los atraves do .then():

```c
Promise.all(squares).then(results => {
    console.log(results)
})
```

Mas se estivermos trabalhando com uma função async podemos usar o await no próprio Promise.all():

```c
async function execute() {
    const squares = await Promise.all(numbers.map(async (number) => {
        await WaitFor(2)
        return number * number
    }))
}

console.log(squares)

```