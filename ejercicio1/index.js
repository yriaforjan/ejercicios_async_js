const getCharacters = async () => {
    try {
        const res = await fetch("https://thronesapi.com/api/v2/Characters");
        const data = await res.json();
        mapCharacters(data);
    } catch (error) {
        alert("Unable to fetch characters.");
    }
};

const mapCharacters = (data) => {
    const characters = data.map((character) => {
        return {
            name: character.fullName,
            image: character.imageUrl
        };
    });
    renderCharacters(characters);
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
    }

    changeImage();
};

const changeImage = () => {
    const select = document.getElementById("character-list");
    const img = document.querySelector(".character-image");

    select.addEventListener("change", (event) => {
        const defaultOption = select.querySelector("option[value='']");
        if (defaultOption) {
        defaultOption.remove();
        }

        img.src = event.target.value || "";
        img.alt = select.options[select.selectedIndex].text;
    });
}

window.addEventListener("DOMContentLoaded", () => {
    getCharacters();
});