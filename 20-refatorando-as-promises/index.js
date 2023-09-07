async function calculateIMC(weight, height){
    if(typeof weight !== "number" || typeof height !== "number"){
        return new Promise().reject("Arguments must be of type number")
    } else {
        return (weight / (height ** 2))
    }
}

function situationIMC(IMC){
    if(IMC < 18.5) console.log("MAGREZA")
    else if(IMC < 24.9) console.log("Situação: NORMAL")
    else if(IMC < 29.9) console.log("Situação: SOBREPESO")
    else if (IMC < 39.9) console.log("Situação: OBESIDADE")
    else console.log("Situação: OBESIDADE GRAVE");
}

async function showIMC(weight, height){
    try {
        console.log(`Calculando o IMC para peso ${weight} e ${height}...`);

        const result = await calculateIMC(weight, height)

        console.log(`O resultado do IMC foi de ${result}`)

        situationIMC(result)

    } catch (error) {
        console.log(error.message)     
    }
}

showIMC(80, 1.75)
showIMC(150, 1.75)
showIMC(60, "nul")
showIMC(70, 1.69)

