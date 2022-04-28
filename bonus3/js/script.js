const teamContainer = document.querySelector('.team-container');
const addMemeberBtn = document.getElementById('addMemberButton');

let inputName;
let inputRole;
let inputImage;

const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

//prelevare i valori
addMemeberBtn.addEventListener('click', function(){

  inputName = document.getElementById('name').value;
  inputRole = document.getElementById('role').value;
  inputImage = document.getElementById('image').value;

  //svuotare gli input
  document.getElementById('name').value = '';
  document.getElementById('role').value = '';
  document.getElementById('image').value = '';

  //creare la card e inserirla
  createCard(inputName, inputRole, inputImage)

  // console.log(inputName, inputRole, inputImage);
});

function createCard(name, role, image){
  console.log('Ciao');
  //creare il div della card
  const teamCard = document.createElement('div');
  teamCard.classList.add('team-card');

  //creare il contaìenitore dell'immagine e inserirle
  const cardImage = document.createElement('div');
  cardImage.classList.add('card-image');
  cardImage.innerHTML = `
    <img src="${image}" alt="${name}">
  `
  teamCard.appendChild(cardImage);

  //inserire le informazioni testuai
  const cardtext = document.createElement('div');
  cardtext.classList.add('card-text');
  cardtext.innerHTML = `
    <h3>${name}</h3>
    <p>${role}</p>
  `
  teamCard.appendChild(cardtext);

  //inserire la card nel team container
  teamContainer.appendChild(teamCard);
}

//creare le card e inserirle nel team container
/*
for(let i = 0; i < team.length; i++){
  const currentMember = team[i];

  const teamCard = document.createElement('div');
  teamCard.classList.add('team-card');

  //creare il contaìenitore dell'immagine e inserirle
  const cardImage = document.createElement('div');
  cardImage.classList.add('card-image');
  cardImage.innerHTML = `
    <img src="img/${currentMember.image}" alt="${currentMember.name}">
  `
  teamCard.appendChild(cardImage);

  //inserire le informazioni testuai
  const cardtext = document.createElement('div');
  cardtext.classList.add('card-text');
  cardtext.innerHTML = `
    <h3>${currentMember.name}</h3>
    <p>${currentMember.role}</p>
  `
  teamCard.appendChild(cardtext);


  //inserire la card nel team container
  teamContainer.appendChild(teamCard);
}
*/