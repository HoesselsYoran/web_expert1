let bikePrices =
    [
        5329,
        4999,
        2499,
        1999,
        3750,
        6415,
    ];

function averagePrices() {
    let prijs = 0;
    for (let i = 0; i < bikePrices.length; i++) {
        prijs = prijs + bikePrices[i];

        console.log(prijs);
    }

    return prijs/bikePrices.length;
}

console.log(`De gemiddelde prijs voor een fiets bedraagt ${averagePrices()} euro`);