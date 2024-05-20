const form = document.getElementById('quiz');
const resultDiv = document.getElementById('r');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let score = 0;

    const questions = [
        { answer: 'correct' },
        { answer: 'correct' },
        { answer: 'correct' },
        { answer: 'correct' },
    ];

    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        const selectedAnswer = getSelectedValue(form, `question${i + 1}`);

        if (selectedAnswer === question.answer || (question.answers && question.answers.includes(selectedAnswer))) {
            score++;
        }
    }

    const percentage = (score / questions.length) * 100;

    let resultText;
    if (percentage >= 80) {
        resultText = `Izcili! Jūs esat atbildējis pareizi uz ${score} no ${questions.length} jautājumiem. Jūsu zināšanas par Mercedes-AMG E 63 S ir iespaidīgas!`;
    } else if (percentage >= 60) {
        resultText = `Labi! Jūs esat atbildējis pareizi uz ${score} no ${questions.length} jautājumiem. Jums ir labas zināšanas par Mercedes-AMG E 63 S.`;
    } else if (percentage >= 40) {
        resultText = `Vidēji. Jūs esat atbildējis pareizi uz ${score} no ${questions.length} jautājumiem. Jums ir zināmas zināšanas par Mercedes-AMG E 63 S, bet varētu uzzināt vairāk.`;
    } else {
        resultText = `Slikti. Jūs esat atbildējis pareizi uz ${score} no ${questions.length} jautājumiem. Jums ir nepieciešams uzzināt vairāk par Mercedes-AMG E 63 S.`;
    }

    resultDiv.innerHTML = `<p>${resultText}</p>`;
});
function getSelectedValue(form, name) {
const radios = form.querySelectorAll(`input[name="${name}"]`);
for (const radio of radios) {
if (radio.checked) {
    return radio.value;
}
}
return null;
}

function getSelectedAnswers(form, name) {
const checkboxes = form.querySelectorAll(`input[name="${name}"]`);
const selectedAnswers = [];
for (const checkbox of checkboxes) {
if (checkbox.checked) {
    selectedAnswers.push(checkbox.value);
}
}
return selectedAnswers;
}


const canvasAplis = document.getElementById('canvasAplis');
const ctxAplis = canvasAplis.getContext('2d');

const canvasZimejums = document.getElementById('canvasZimejums');
const ctxZimejums = canvasZimejums.getContext('2d');

const canvasKvadrats = document.getElementById('canvasKvadrats');
const ctxKvadrats = canvasKvadrats.getContext('2d');

const canvasTrijsturis = document.getElementById('canvasTrijsturis');
const ctxTrijsturis = canvasTrijsturis.getContext('2d');



function aprekinatAplis() {
    const radiuss = parseFloat(document.getElementById('radiuss').value);
    const laukums = Math.PI * radiuss * radiuss;
    const apkartmērs = 2 * Math.PI * radiuss;

    const rezultatsHTML = `
        <p>Rādiuss: ${radiuss}</p>
        <p>Laukums: ${laukums.toFixed(2)}</p>
        <p>Apkārtmērs: ${apkartmērs.toFixed(2)}</p>
    `;
    document.getElementById('aplisRezultats').innerHTML = rezultatsHTML;
}

function zimet() {
    const canvasZimejums = document.getElementById('canvasZimejums');
    const ctxZimejums = canvasZimejums.getContext('2d');

    const krassa = document.getElementById('krassa').value;
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);
    const r = parseFloat(document.getElementById('r').value);

    ctxZimejums.clearRect(0, 0, canvasZimejums.width, canvasZimejums.height);
    ctxZimejums.fillStyle = krassa;
    ctxZimejums.beginPath();
    ctxZimejums.arc(x, y, r, 0, 2 * Math.PI);
    ctxZimejums.fill();
}


function aprekinatTrijsturi() {
    const katete1 = parseFloat(document.getElementById('katete1').value);
    const katete2 = parseFloat(document.getElementById('katete2').value);

    const hipotenuza = Math.sqrt(katete1 * katete1 + katete2 * katete2);

    const rezultatsHTML = `
        <p>Katete 1: ${katete1}</p>
        <p>Katete 2: ${katete2}</p>
        <p>Hipotenūza: ${hipotenuza.toFixed(2)}</p>
    `;
    document.getElementById('trijsturisRezultats').innerHTML = rezultatsHTML;
    const canvasTrijsturis = document.getElementById('canvasTrijsturis');
    const ctxTrijsturis = canvasTrijsturis.getContext('2d');


    ctxTrijsturis.clearRect(0, 0, canvasTrijsturis.width, canvasTrijsturis.height);

    const randomColorTrijsturis = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    ctxTrijsturis.fillStyle = randomColorTrijsturis;

    const attieciba = katete1 / katete2;


    ctxTrijsturis.beginPath();
    ctxTrijsturis.moveTo(canvasTrijsturis.width / 2, canvasTrijsturis.height);
    ctxTrijsturis.lineTo(canvasTrijsturis.width / 2 - katete1, canvasTrijsturis.height);
    ctxTrijsturis.lineTo(canvasTrijsturis.width / 2 - katete1 * attieciba, canvasTrijsturis.height - katete2);
    ctxTrijsturis.closePath();
    ctxTrijsturis.fill();
}



document.addEventListener('DOMContentLoaded', function() {

    if (document.getElementById('aplisForm')) {
        document.getElementById('aplisForm').addEventListener('submit', function(event) {
            event.preventDefault();
            aprekinatAplis();
        });
    }

    if (document.getElementById('zimejumsForm')) {
        document.getElementById('zimejumsForm').addEventListener('submit', function(event) {
            event.preventDefault();
            zimet();
        });
    }

    if (document.getElementById('kvadratsForm')) {
        document.getElementById('kvadratsForm').addEventListener('submit', function(event) {
            event.preventDefault();
            zimetKvadrātu();
        });
    }

    if (document.getElementById('trijsturisForm')) {
        document.getElementById('trijsturisForm').addEventListener('submit', function(event) {
            event.preventDefault();
            aprekinatTrijsturi();
        });
    }
});