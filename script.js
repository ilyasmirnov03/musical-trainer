window.addEventListener('DOMContentLoaded', function () {

    const beginBtn = document.getElementById('begin-training');
    const noteLines = document.getElementsByClassName('note-line');
    const answerBtns = document.getElementsByClassName('btn-answer');
    const trebleMode = document.getElementById('treble-clef-btn');
    const bassMode = document.getElementById('bass-clef-btn');
    const clefImg = document.getElementById('treble-clef');
    const alertText = document.getElementById('alert-text');

    //initial mode: treble clef
    
    let notesEn = ['g', 'f', 'e', 'd', 'c', 'b', 'a', "g", "f", 'e', 'd'];
    let notesAlt = ['sol', 'fa', 'mi', 're', 'do', 'si', 'la', "sol", "fa", 'mi', 're'];
    let notesRu = ['соль', 'фа', 'ми', 'ре', 'до', 'си', 'ля', "соль", "фа", 'ми', 'ре'];

    function disappearAfterAlert (text) {
        alertText.innerText = text;
        setTimeout(() => alertText.innerText = null, 2000);
    }

    trebleMode.addEventListener('click', function () {
        if (clefImg.id === 'treble-clef') {
            disappearAfterAlert(`You're already in Treble Clef!`);
            return;
        } else {
            clefImg.id = 'treble-clef';
            clefImg.setAttribute('src', './pictures/treble-clef.svg');
            notesEn = ['g', 'f', 'e', 'd', 'c', 'b', 'a', "g", "f", 'e', 'd'];
            notesAlt = ['sol', 'fa', 'mi', 're', 'do', 'si', 'la', "sol", "fa", 'mi', 're'];
            notesRu = ['соль', 'фа', 'ми', 'ре', 'до', 'си', 'ля', "соль", "фа", 'ми', 'ре'];
            disappearAfterAlert(`Treble Clef Activated`);
        }
    });

    bassMode.addEventListener('click', function () {
        if (clefImg.id === 'bass-clef') {
            disappearAfterAlert(`You're already in Bass Clef!`);
            return;
        } else {
            clefImg.id = 'bass-clef';
            clefImg.setAttribute('src', './pictures/bass-clef.png');
            notesEn = ['b', 'a', 'g', 'f', 'e', 'd', 'c', "b", "a", 'g', 'f'];
            notesAlt = ['si', 'la', 'sol', 'fa', 'mi', 're', 'do', "si", "la", 'sol', 'fa'];
            notesRu = ['си', 'ля', 'соль', 'фа', 'ми', 'ре', 'до', "си", "ля", 'соль', 'фа'];
            disappearAfterAlert(`Bass Clef Activated`);
        }
    });

    let note = document.createElement('div');
    note.className = "note";

    const randomLine = () => Math.floor(Math.random() * 11);

    let x = randomLine();

    beginBtn.addEventListener('click', function () {
        noteLines[x].insertAdjacentElement("afterbegin", note);
        for (let i = 0; i < answerBtns.length; i++) {
            answerBtns[i].style.display = "inline";
        }
        beginBtn.remove();
    });

    for (let i = 0; i < answerBtns.length; i++) {
        answerBtns[i].addEventListener('click', function () {
            let userInput = answerBtns[i].innerText.toLowerCase();
            if (userInput === notesAlt[x] || userInput === notesEn[x] || userInput === notesRu[x]) {
                answerBtns[i].style.backgroundColor = 'rgb(103, 221, 103)';
                setTimeout(() => answerBtns[i].style.backgroundColor = '#efefef', 1000);
                x = randomLine();
                noteLines[x].insertAdjacentElement("afterbegin", note);
            } else {
                answerBtns[i].style.backgroundColor = 'red';
                setTimeout(() => answerBtns[i].style.backgroundColor = '#efefef', 1000);
            }
        });
    }

});