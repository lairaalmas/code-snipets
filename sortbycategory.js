let data = [
  { categ: "dia", nome: "sol" },
  { categ: "dia", nome: "praia" },
  { categ: "noite", nome: "lua" },
  { categ: "dia", nome: "piscina" },
  { categ: "noite", nome: "dormir" },
];
let dataByCateg = {};

console.log(data);
console.log(dataByCateg);

data.forEach((item) => {
  if (dataByCateg.hasOwnProperty(item.categ))
    dataByCateg[item.categ].push(item.nome);
  else dataByCateg[item.categ] = [item.nome];
});

console.log(dataByCateg);
