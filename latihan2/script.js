fetch("https://mapi.mobilelegends.com/hero/list")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        console.log(data.length);

        document.getElementById("code").innerHTML = data.length;

        const heroList = data;

        for (const hero of heroList) {
            const nameWithoutSpace = hero.name.replace(/\s/g, "");

            // Create a new list item element
            const listItem = document.createElement("li");

            // Create a div element for the hero details
            const heroDetailsDiv = document.createElement("div");

            // Create an h3 element for the hero name
            const heroNameHeading = document.createElement("h3");
            heroNameHeading.textContent = hero.name; // Set the text content

            // Append the h3 element to the hero details div
            heroDetailsDiv.appendChild(heroNameHeading);

            // Create an image element for the hero image
            const heroImage = document.createElement("img");
            heroImage.src = hero.key; // Set the image source
            heroImage.alt = nameWithoutSpace; // Set the alt attribute

            // Append the hero details div and hero image to the list item
            listItem.appendChild(heroDetailsDiv);
            listItem.appendChild(heroImage);

            // Append the list item to the list
            document.getElementById("list").appendChild(listItem);
        }
    })
    .catch(error => console.error('Error fetching data:', error));
