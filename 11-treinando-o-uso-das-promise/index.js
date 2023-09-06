function calculateIMC(weight, height){
    return new Promise((resolve, reject) => {
        if (typeof weight !== "number" || typeof height !== "number")
            reject("Arguments must be of type number")
        else 
            resolve( weight / (height ** 2))
    })
}

function situationIMC(IMC){
    if(IMC < 18.5) console.log("MAGREZA")
    else if(IMC < 24.9) console.log("Situação: NORMAL")
    else if(IMC < 29.9) console.log("Situação: SOBREPESO")
    else if (IMC < 39.9) console.log("Situação: OBESIDADE")
    else console.log("Situação: OBESIDADE GRAVE");
}

function showIMC(weight, height){
    calculateIMC(weight, height)
        .then((result) => {
            console.log(`O resultado do IMC foi de ${result}`)
            situationIMC(result);
        })
        .catch((err) => {
            console.log(err);
        }
    )

    console.log(`Calculando o IMC para o peso de ${weight} e a altura de ${height} `);
}

showIMC(80, 1.75)
showIMC(150, 1.75)
showIMC(60, "nul")
showIMC(70, 1.69)

