const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json' ;

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
    
  .then(function (jsonObject) {
    console.log(jsonObject);
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
        
        if ( towns[i].name == "Preston") {

            let div = document.createElement('div');

            let card = document.createElement('section');
            card.appendChild(div);

            let first = document.createElement('p');
            first.textContent = towns[i].events["0"];
            div.appendChild(first);

            let second = document.createElement('p');
            second.textContent = towns[i].events["1"];
            div.appendChild(second);

            let third = document.createElement('p');
            third.textContent = towns[i].events["2"];
            div.appendChild(third);

            document.querySelector('div.data').appendChild(card);
          }




    }

});