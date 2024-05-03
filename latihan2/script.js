fetch("https://pokeapi.co/api/v2/pokemon")
    .then(res => res.json())
    .then(data => {
        const speciesUrl = data.species.url;
        return fetch(speciesUrl);
    })
    .then(res => res.json())
    .then(speciesData => {
        const flavorTextEntries = speciesData.flavor_text_entries;
        const englishFlavorText = flavorTextEntries.find(entry => entry.language.name === "en").flavor_text;
        console.log(englishFlavorText);
        document.getElementById("total").innerHTML = englishFlavorText;
    })
    .catch(error => console.error('Error fetching data:', error));
