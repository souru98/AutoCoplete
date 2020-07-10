var squad = [{
        name: "Sourabh",
        bio: "I am a ProGrad",
    },
    {
        name: "Anamika",
        bio: "Proud to be a ProGrad",
    },
    {
        name: "Venkata Rajesh",
        bio: "ProGrad is a lifestyle",
    },
];

function showSquad() {
    let tpl = "";
    squad.forEach((prograd) => {
        tpl += `
          <ul>
      <li>${prograd.name}</li>
      <li>${prograd.bio}</li>
  </ul>`;
    });
    document.body.innerHTML = tpl;
}
createPrograd({
    name: "Anthony",
    bio: "My name is Anthony and I am a Prograd",
});
showSquad();

function createPrograd(prograd) {
    setTimeout(function() {
        squad.push(prograd);
    }, 1000);
}