
async function search() {

    try {

        const input = document.getElementById("pokemon").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);

        const sample = fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        console.log(sample)

        if (!response.ok) {
            throw new Error("Pokemon not found")
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;

        const imageDisplay = document.getElementById('imageDisplay');

        imageDisplay.style.display = 'none';
        imageDisplay.style.animation = 'none';

        void imageDisplay.offsetWidth;

        imageDisplay.src = pokemonSprite;

        imageDisplay.style.display = 'block';
        imageDisplay.style.animation = 'fade-in 1.5s ease forwards';

        const pokemonName = document.getElementById('pokemonname');
        pokemonName.textContent = data.name.toUpperCase();


        //---getting pokemon properties using span tag

        let properties = document.querySelectorAll("span");
        properties[0].textContent = "Ability-1: " + data.abilities[0].ability.name.charAt(0).toUpperCase() + data.abilities[0].ability.name.slice(1);
        properties[1].textContent = "Ability-2: " + data.abilities[1].ability.name.charAt(0).toUpperCase() + data.abilities[1].ability.name.slice(1);

        properties[2].textContent = "Height: " + data.height + " dm";
        properties[3].textContent = "Weight: " + data.weight + " hg";

        properties[4].textContent = "Base Experience: " + data.base_experience;

        properties[5].textContent = "ID: " + data.id;

        properties[6].textContent = "Number of Moves: " + data.moves.length;

        properties[7].textContent = "Held Item: " + (data.held_items[0] ? data.held_items[0].item.name : "None");

        const cryLink = document.getElementById('crylink');
        cryLink.href = data.cries.latest;
        cryLink.textContent = "Click to hear Cry";

    }
    catch(error) {
        console.log(error);
    }
}
async function sample() {
    const sample =await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")

    const data = await sample.json();
    console.log(data);
}

sample();
