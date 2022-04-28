const teamContainer = document.querySelector('.team-container');
console.log(teamContainer);

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

teamContainer.style.flexDirection = ('column');

//stampare i membri in console
for(let i = 0; i < team.length; i++){
  const currentMember = team[i];

  const div = document.createElement('div');
  div.innerHTML = `<h3>Membro: ${currentMember.name}, ${currentMember.role}, ${currentMember.image}.</h3>`;
  teamContainer.appendChild(div);
}