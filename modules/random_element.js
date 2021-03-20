function randomElement(lowAndCopy) {

    const countCopy = lowAndCopy.length;

    //если результат === 0, то просто возвратится самое малозаполненное место
    let result = lowAndCopy[0];
    let randElem = 0;

    if (countCopy !== 0) {
        randElem = Math.round(Math.random() * countCopy);
        result = lowAndCopy[randElem];
    }

    return result;
};

module.exports = function getRelevantPlace(input) {

    const sorted = input.sort((a, b) => (a.peopleCount > b.peopleCount) ? 1 : (-1));

    const veryLow = sorted[0].peopleCount;

    let lowAndCopy = [];

    //забираем первый(ые) повотряющийся(иеся) элемент(ы)
    for (let place of sorted) {

        if (veryLow === place.peopleCount) {
            lowAndCopy.push(place);
        }
        else break;
    };

    // бросаем монетку, или не бросаем
    result = randomElement(lowAndCopy).id;

    console.log(result);

    return result;
};