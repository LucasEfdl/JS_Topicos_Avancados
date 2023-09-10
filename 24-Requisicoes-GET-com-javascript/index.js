function createCard(country) {
    const card = document.createElement("div")
    card.classList.add("country")

    const title = document.createElement("h2")
    title.textContent = country.name.common

    const flag = document.createElement("img")
    flag.src = country.flags.svg
    flag.alt = country.name.common

    card.append(title, flag)
    document.getElementById("country").append(card)

}

async function getCoutries(){
    const response = await fetch("https://restcountries.com/v3.1/all")
    const coutries = await response.json()

    coutries.forEach(createCard)
}

getCoutries()