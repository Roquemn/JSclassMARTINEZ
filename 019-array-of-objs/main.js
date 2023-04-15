const updateDOM = (input, id) => {
  const divEl = document.getElementById(id);
  const p = document.createElement("p");
  p.textContent = input;
  divEl.appendChild(p);
};

const myArrObjs = [
  {
    name: "Roque",
    hairColor: "brown",
  },
  {
    name: "Erica",
    hairColor: "brown",
  },
  {
    name: "Paul",
    hairColor: "black",
  },
];

myArrObjs.forEach((obj) => {
  const str = `${obj.name} has ${obj.hairColor} hair color`;
  updateDOM(str, "output");
});
