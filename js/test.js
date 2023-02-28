const rightAnswers = ["c", "b", "a", "a", "d", "c", "a", "c", "d"];

const form = document.querySelector("form");
const resultsElem = document.querySelector("#results");
const wrongAnswersElem = document.querySelector(".wrong-answers");

form.onsubmit = (e) => {
    e.preventDefault();

    const answers = form.elements;
    let wrongAnswers = [];

    for (let i = 0; i < 9; i++) {
        if (answers[`question-${i+1}`].value !== rightAnswers[i]) {
            wrongAnswers.push(i+1);
        }
    }

    form.reset();

    resultsElem.innerHTML = `Правильних відповідей: ${9 - wrongAnswers.length}/9`;
    resultsElem.style.display = "block";

    if (wrongAnswers.length > 0) {
        wrongAnswersElem.innerHTML = `Запитання на які було дано неправильну відповідь: ${wrongAnswers.join(", ")}.`

        wrongAnswersElem.style.display = "block"
    }

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
    })

    console.log(wrongAnswers);
}