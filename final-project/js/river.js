// River Guide one
const requestURL = 'https://gabrielaaa99.github.io/term-project/guides.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const guides = jsonObject['guides'];
    console.log(jsonObject);
    
    for (let i = 0; i < guides.length; i++ ) {
        
      if (guides[i].name == "Meghan Clark" || guides[i].name == "Richard Perez" || guides[i].name == "Katheryne Marin") {

        let div = document.createElement('div');

        let card = document.createElement('section');
        card.appendChild(div);

        let photo = document.createElement('img');
        photo.setAttribute('src', "images/" + guides[i].photo);
        photo.setAttribute('alt', "Fake river guide picture");
        card.appendChild(photo);

        let name = document.createElement('p');
        name.textContent = guides[i].name;
        div.appendChild(name);

        let experience = document.createElement('p');
        experience.textContent = "Experience: " + guides[i].experience;
        div.appendChild(experience);

        let mail = document.createElement('p');
        mail.textContent = "E-mail address: " + guides[i].email;
        div.appendChild(mail);

        let level = document.createElement('p');
        level.textContent = "Certification level: " + guides[i].level;
        div.appendChild(level);

        let bio = document.createElement('p');
        bio.textContent = "About the guide: " + guides[i].bio;
        div.appendChild(bio);

        document.querySelector('div.data').appendChild(card);
      }
    }
});



