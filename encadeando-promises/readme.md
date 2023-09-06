Para encadear promises, basta chamar a função que retorna uma promises, como:

getAge(bithDay).then()

e, dentro do bloco then(), você captura o retorno da promise e usa esse retorno para passar para dentro de outra função que retorna uma promise, veja:

getAge(bithDay).then(age => {
  return checkAge(age)
}).then(....

Dessa forma, pode-se encadear varias promises em sequencia. Um detalhe, não devemso esquecer o bloco catch() no final do utlimo bloco then().