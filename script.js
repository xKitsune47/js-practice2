'use strict';

function readValue(howManyBlocks) {
    howManyBlocks = parseInt(howManyBlocks);
    document.querySelector('#wynik').innerHTML = howManyBlocks;
    if (
        howManyBlocks <
        document.querySelector('.mainContent').getElementsByTagName('div')
            .length
    ) {
        removeBlocks(howManyBlocks);
    } else {
        addBlocks(howManyBlocks);
    }
}

function addBlocks(howManyBlocks) {
    const parentElement = document.querySelector('.mainContent');
    // if (howManyBlocks > parentElement.getElementsByTagName('div').length) {
    parentElement.innerHTML = '';
    const createDiv = document.createElement('div');
    for (let i = 0; i < howManyBlocks; i++) {
        let blockNumber = i;
        createDiv.setAttribute('class', `contentBlock`);
        createDiv.innerHTML = `<h1>Content block ${
            blockNumber + 1
        }</h1> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec nibh gravida, lobortis erat ut, venenatis elit. Class aptent taciti.`;
        divsArray.push(createDiv);
    }
    const itsworkingokay = 50;
    if (divsArray.length > itsworkingokay) {
        console.log(divsArray.splice(itsworkingokay));
    }
    console.log(divsArray.length, divsArray);
    divsArray.forEach((element) => parentElement.append(element));
}

function removeBlocks(howManyBlocks) {
    while (divsArray.length > howManyBlocks) {
        divsArray.pop();
    }
    addBlocks(howManyBlocks);
}

let divsArray = [];
