import _ from "lodash";

const $form = document.querySelector("form.feedback-form");

const feedbackFromState = {
    email: null,
    message: null,
};

$form.elements.email.addEventListener("input", _.throttle((ev) => {
    feedbackFromState.email = ev.target.value;
    localStorage.setItem('feedback-from-state', JSON.stringify(feedbackFromState));
}, 500));

$form.elements.message.addEventListener("input", _.throttle((ev) => {
        feedbackFromState.message = ev.target.value;
        localStorage.setItem("feedback-from-state", JSON.stringify(feedbackFromState));
}, 500));

$form.lastElementChild.addEventListener("click", (ev) => {
    ev.preventDefault();
    localStorage.clear();
    $form.reset();
    console.log(feedbackFromState);
});

let parsedForm = JSON.parse(localStorage.getItem("feedback-from-state"));

if (parsedForm !== null) {
    $form.elements.email.value = parsedForm.email;
    $form.elements.message.value = parsedForm.message;
}