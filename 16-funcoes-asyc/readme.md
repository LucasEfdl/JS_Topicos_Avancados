Funções async são uma forma mais conveniente de se trabalhar com promises no javascript moderno. Elas permitem criar funções que automaticamente retornam uma promise, sem que nós precisemos instanciá-la:

```c
async function asyncSum(a, b) {
    return a + b
}

asyncSum(1, 1).then(result => console.log(`1 + 1 é igual a ${result}`))
```

Podemos ver através do exemplo da anterior que elas funcionam da mesma forma, mesmo quando utilizamos o Promise.all():

```c
async function asyncSubtract(a, b) {
    return a - b
}

const sumResult = asyncSum(50, 33)
const subtractResult = asyncSubtract(50, 33)

Promise.all([sumResult, subtractResult]).then(results => {
    console.log(results)
})
```

É importante lembrar que as funções async também permitem rejeitar uma promise. Podemos fazer isso através do objeto global Promise e seu método .reject():

```c
async function asyncSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('arguments must be of type number')
    }
    return a + b
}

asyncSum(50, null).then(result => {
    console.log(result)
}).catch(err => {
    console.log(err)
})
```
