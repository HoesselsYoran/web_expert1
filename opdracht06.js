// Deel 1

let parent = document.getElementById('main');

let heading = document.createElement('h2');
heading.innerText = "populaire eleketrische fietsen";


let fietsen = [
    {
        merk: "BigBicycle",
        prijs: 1249,
        score: 9.899,
    },
    {
        merk: "Kalkhoff",
        prijs: 2499,
        score: 8.7,
    },
    {
        merk: "Vyber",
        prijs: 2749,
        score: 8.1,
    },
    {
        merk: "Hercules",
        prijs: 3249,
        score: 7.9,
    },
    {
        merk: "BananaBike",
        prijs: 2199,
        score: 7.5,
    },
]
//*
let ul = document.createElement('ul');
for (let i = 0; i < fietsen.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = fietsen[i].merk;
    if(fietsen[i].score > 8) {
        li.style.color = "green";
        li.style.fontWeight = "bold";
    }
    ul.appendChild(li);
}
document.getElementById('content').appendChild(ul)



