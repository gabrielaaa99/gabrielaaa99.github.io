const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json' ;

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
        
        if ( towns[i].name == "Preston"|| towns[i].name == "Soda Springs" ||
          towns[i].name == "Fish Haven") {

            let div = document.createElement('div');

            let card = document.createElement('section');
            card.appendChild(div);

            let name = document.createElement('h2');
            name.textContent = towns[i].name;
            div.appendChild(name);

            let motto = document.createElement('h3');
            motto.textContent = towns[i].motto;
            motto.className = "motto";
            div.appendChild(motto);

            let year = document.createElement('p');
            year.textContent = "Year founded: " + towns[i].yearFounded;
            div.appendChild(year);

            let population = document.createElement('p');
            population.textContent = "Population: " + towns[i].currentPopulation;
            div.appendChild(population);

            let rainfall = document.createElement('p');
            rainfall.textContent = "Annual rainfall: " + towns[i].averageRainfall;
            div.appendChild(rainfall);

            let photo = document.createElement('img');
            photo.setAttribute('src', "images/" + towns[i].photo);
            photo.setAttribute('alt', "Town Picture");
            card.appendChild(photo);            
                   

            document.querySelector('div.data').appendChild(card);
          }




    }

});