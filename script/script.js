var size = 10;
var ugadaika = [];
var clicks = 0;
var numbers = 10;

createField(size);
generaiteNumbers(numbers);

alert(ugadaika);

function generaiteNumbers(n){
    for(let i = 0; i < n; i++) {
        let number;
        do {
            number = Math.floor(Math.random()*99)+1;
        } while(checkRandom(number));
        ugadaika.push(number);
    }     
}

function checkRandom(number) {
    for(let j = 0; j < ugadaika.length; j++){
        if(ugadaika[j] == number)
            return true;
    }
    return false;
}

function createField(size) {
    var field = document.getElementById("field");
    var number = 1;
    for(let i = 0; i < size; i++){
        var line = "<tr>";
        for(let j = 0; j < size; j++) {
            line += `<td data-number="${number++}" onclick="check(this)"></td>`;
        }
        line += "</tr>";
        field.innerHTML += line;
    }
}

function check(elem){
    //alert(elem.dataset.number);
    
    if(checkRandom(elem.dataset.number)) {
        elem.style.backgroundColor = "green";
        numbers--;
    }
    else
        elem.style.backgroundColor = "red";

    clicks++;
    if(numbers <= 0)
        alert(`Congratulation!!
        clics: ${clicks} `);
}

