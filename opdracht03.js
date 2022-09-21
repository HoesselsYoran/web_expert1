let teams = [
    "team1",
    "team2",
    "team3",
    "team4",
    "team5",
    "team6",
];

alert("Aantal teams: " + teams.length + ". Volgend jaar meer.")
alert(`Aantal teams: ${teams.length}. Volgend jaar meer.`)

teams.forEach((team) => {
   console.log(team);
});

for (let i = 0; i < teams.length; i++) {
    if (teams[i] === "team3") {
        teams.splice(i, 1);
    }
}

console.log(teams);