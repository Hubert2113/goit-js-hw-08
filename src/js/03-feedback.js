import _ from "lodash";

const $form = document.querySelector("form.feedback-form");

const feedbackFromState = {
    email: null,
    message: null,
};

$form.elements.email.addEventListener("input", _.throttle((ev) => {
    try {
        feedbackFromState.email = ev.currentTarget.value;
        localStorage.setItem('feedback-from-state', JSON.stringify(feedbackFromState));
    }catch{}
}, 500));

$form.elements.message.addEventListener("input", _.throttle((ev) => {
    try {
        feedbackFromState.message = ev.currentTarget.value;
        localStorage.setItem("feedback-from-state", JSON.stringify(feedbackFromState));
    }catch{}
}, 500));

$form.lastElementChild.addEventListener("click", (ev) => {
        ev.preventDefault();
        localStorage.clear();
        $form.reset();
        console.log(feedbackFromState);
});

let parsedForm = JSON.parse(localStorage.getItem("feedback-from-state"));
try {
    $form.elements.email.value = parsedForm.email;
    $form.elements.message.value = parsedForm.message;
} catch { }