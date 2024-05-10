<<<<<<< HEAD
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
=======
fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data =>  {
        console.log(data)
        console.log(data.total);
        console.log(data.products);

        document.getElementById("total").textContent = data.total;

        const productList = document.getElementById("list");
        
        data.products.forEach(product => {
            const card = document.createElement("div");
            card.classList.add("col");

            card.innerHTML = `
                <div class="card">
                    <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text">Price: ${product.price}</p>
                        <p class="card-text">Discount: ${product.discountPercentage}</p>
                        <p class="card-text">Stock: ${product.stock}</p>
                    </div>
                </div>
            `;
            
            productList.appendChild(card);
        });
    });
>>>>>>> 6a830e0d5e08faa792ea476c769b32ab532fd629
