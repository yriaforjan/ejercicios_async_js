const getCharacters = async () => {
    try {
        const res = await fetch("https://thronesapi.com/api/v2/Characters");
        const characters = await res.json();
        mapCharacters(characters);
    } catch (error) {
        alert("Unable to fetch characters.");
    }
};

const mapCharacters = (characters) => {
    const mappedCharacters = characters.map((character) => {
        return {
            name: character.fullName,
            image: character.imageUrl
        };
    });
    renderCharacters(mappedCharacters); 
}

const renderCharacters = (characters) => {
    const select = document.getElementById("character-list");
    const img = document.querySelector(".character-image");

    const defaultOption = document.createElement("option");
    defaultOption.innerText = "Select a character";
    defaultOption.value = "";
    select.appendChild(defaultOption);

    for (const character of characters) {
        const option = document.createElement("option");
        option.innerText = `${character.name}`;
        option.value = `${character.image}`;
        select.appendChild(option);
        img.alt = `${character.name}`;
    }

    select.addEventListener("change", (event) => {
        img.src = event.target.value || "";
    });
};

window.addEventListener("DOMContentLoaded", () => {
    getCharacters();
});