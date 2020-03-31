const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   
  const data = jsonObject['data'];

  for (let i = 0; i < data.length; i++ ) {

    let card = document.createElement('section');

    let h2 = document.createElement('h2');
    h2.textContent = data[i].name + ' ' + data[i].lastname;
    card.appendChild(h2);

    let p = document.createElement('p');
    p.textContent = "Date of Birth: " + data[i].birthdate;
    card.appendChild(p);

    let p2 = document.createElement('p');
    p2.textContent ='Place of Birth: ' +  data[i].birthplace;
    card.appendChild(p2);

    let image =  document.createElement('img');
    image.setAttribute('src', data[i].imageurl);
    image.setAttribute('alt', data[i].name + ' ' + data[i].lastname + "-" + data[i].order);
    card.appendChild(image);
    
    document.querySelector('div.cards').appendChild(card);

    
  } });