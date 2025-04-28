
const tablica = ['Jabłko', 'Banan', 'Pomarańcza', 'Gruszka', 'Śliwka'];
document.getElementById("element-z-tablicy").innerHTML = "Jeden z elementów: " + tablica[2];

tablica[tablica.length - 1] = 'Winogrono';
document.getElementById("zmieniony-element").innerHTML = "Zmieniony ostatni element: " + tablica[tablica.length - 1];

tablica.push('Ananas', 'Mango');
tablica.unshift('Truskawka');
document.getElementById("nowe-elementy").innerHTML = "Nowa długość tablicy: " + tablica.length;


const nowaTablica = ['Czerwony', 'Zielony', 'Niebieski'];
const div2 = document.getElementById("druga-tablica");
div2.innerHTML += `<p>Pierwszy element: <strong>${nowaTablica[0]}</strong></p>`;
div2.innerHTML += `<p>Ostatni element: <strong>${nowaTablica[nowaTablica.length - 1]}</strong></p>`;
nowaTablica.unshift('Żółty');
div2.innerHTML += `<p>Po unshift – pierwszy: <strong>${nowaTablica[0]}</strong></p>`;


const licznikFormularzy = document.forms.length;
document.getElementById("liczenie-elementow").innerHTML =
    `Na stronie znajduje się ${licznikFormularzy} formularz(e) – zostały policzone elementy <code>&lt;form&gt;</code>`;

document.getElementById("dane-osobowe").innerHTML = "Imię i nazwisko: Jan Kowalski, Nr indeksu: 12345";

document.getElementById("z-tablicy-1").innerHTML = "Z tablicy (1): " + tablica[0];
document.getElementById("z-tablicy-2").innerHTML = "Z tablicy (2): " + tablica[1];


let i = 0;
const petla1 = document.getElementById("petla-while");
petla1.innerHTML = "<strong>While loop:</strong><ul>";
while (i < tablica.length / 2) {
    petla1.innerHTML += `<li>${tablica[i]}</li>`;
    i++;
}
petla1.innerHTML += "</ul>";

const petla2 = document.getElementById("petla-for");
petla2.innerHTML = "<strong>For loop:</strong><ul>";
for (let j = 0; j < tablica.length / 2; j++) {
    petla2.innerHTML += `<li>${tablica[j]}</li>`;
}
petla2.innerHTML += "</ul>";

function pokazDane() {
    let dane = document.getElementById("dane-osobowe").innerText;
    alert("Dane z DOM:\n" + dane);
}

const questions = [
    ['Ile księżyców ma Ziemia?', 1],
    ['Ile księżyców ma Saturn?', 62],
    ['Ile księżyców ma Wenus?', 0]
];

let current = 0;
let score = 0;

const quizContainer = document.getElementById("quiz");
const wynikContainer = document.getElementById("wynik");

function showQuestion() {
    if (current < questions.length) {
        quizContainer.innerHTML = `
      <p>${questions[current][0]}</p>
      <input type="number" id="answer">
      <button onclick="checkAnswer()">Sprawdź</button>
    `;
    } else {
        quizContainer.innerHTML = "";
        wynikContainer.innerHTML = `<strong>Twój wynik: ${score}/${questions.length}</strong>`;
    }
}

function checkAnswer() {
    const answer = parseInt(document.getElementById("answer").value);
    if (answer === questions[current][1]) {
        alert("Prawidłowa odpowiedź!");
        score++;
    } else {
        alert("Błędna odpowiedź. Poprawna to: " + questions[current][1]);
    }
    current++;
    showQuestion();
}

showQuestion();
