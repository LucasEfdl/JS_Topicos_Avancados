# Requisições GET com javascript
iremos começar com as requisições mais simples, as requisições GET, que servem para obter informações de um back-end. Como exemplo iremos utilizar a Rest Countries, uma API pública que não necessita de autenticação e nos retorna dados sobre os países do mundo.

1. Vamos criar uma função async que será responsavel para fazer a requisição e vamos execulta-la assim que a pagina for carregada:

```javascript
async function getCountries(){

}

getCoutries()
```

2. Dentro da função iremos chamar a função **fetch()**, ela faz para nós a requisição HTTP e devolve a promise de uma resposta HTTP, portanto iremos chama-lá e usar o **await** para esperar pela resposta. Também passaremos como parâmentro a url que estamos requisitando: 

```javascript
async function getCountries() {
  const response = await fetch('https://restcountries.com/v3.1/all')
  console.log(response)
}

getCountries()
```

3. Temos uma resposta, mas para usar os dados recebidos nela precisamos converter esses dados para um formato que pode ser entendido pelo javascript. Para isso, a própria resposta do **fetch()** contém um metódo especial chamado **json()**. Esse metodó serve especificamente para obter o conteúdo json da resposta de forma que pode ser manipulado. Ele também retorna uma promise, então também utilizamos o await:

```javascript
async function getCountries() {
  const response = await fetch('https://restcountries.com/v3.1/all')
  const countries = await response.json()

  console.log(countries)
}

getCountries()
```

4. Agora que vimos que já temos os dados dos países, vamos criar uma função que renderiza esses dados na tela para nós:

```javascript
function createCountryCard(country) {
  const card = document.createElement('div')
  card.classList.add('country')

  const countryName = country.name.common
  const name = document.createElement('h2')
  name.textContent = countryName

  const flag = document.createElement('img')
  flag.src = country.flags.svg
  flag.alt = countryName

  card.append(name, flag)
  document.querySelector('#countries').append(card)
}

async function getCountries() {
  const response = await fetch('https://restcountries.com/v3.1/all')
  const countries = await response.json()

  console.log(countries)
  countries.forEach(createCountryCard)
}

getCountries()
```