

const requestURL = 'https://gabrielaaa99.github.io/term-project/guides.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);
    const guides = jsonObject['guides'];
    console.log(jsonObject);
    
    for (let i = 0; i < guides.length; i++ ) {
        
        if ( guides[0].name == "Meghan Clark") {

            let div = document.createElement('div');

            let card = document.createElement('section');
            card.appendChild(div);

            let name = document.createElement('p');
            name.textContent = guides["0"].name;
            div.appendChild(name);

            let experience = document.createElement('p');
            experience.textContent = guides["0"].experience;
            div.appendChild(experience);

            let third = document.createElement('p');
            third.textContent = guides[0].events["2"];
            div.appendChild(third);

            document.querySelector('div.data').appendChild(card);
          }




    }

});