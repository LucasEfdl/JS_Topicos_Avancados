Funções async são uma forma mais conveniente de se trabalhar com promises no javascript moderno. Elas permitem criar funções que automaticamente retornam uma promise, sem que nós precisemos instanciá-la:

```c
async function asyncSum(a, b) {
    return a + b
}

asyncSum(1, 1).then(result => console.log(`1 + 1 é igual a ${result}`))
```

