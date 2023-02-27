const rightAnswers = ["c", "b", "a", "a", "d", "c", "a", "c", "d"];

const form = document.querySelector("form");
const resultsElem = document.querySelector("#results");

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

    resultsElem.innerHTML = `Правильних відповідей: ${9 - wrongAnswers.length}/9. Запитання на які було дано неправильну відповідь: ${wrongAnswers.join(", ")}.`;
    resultsElem.style.display = "block";
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
    })

    console.log(wrongAnswers);
}