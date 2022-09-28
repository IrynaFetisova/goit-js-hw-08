import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const email = document.querySelector(".feedback-form input");
const textarea = document.querySelector(".feedback-form textarea");


const FORM_STATE = "feedback-form-state";
let formData = {};
formFillOut()

form.addEventListener('input', throttle(onInputChange, 500));
form.addEventListener('submit',  onFormSubmit)

function onInputChange(evt){

    formData[evt.target.name] = evt.target.value; //  formData.email = emailEl.value; formData.message = textareaEl.value;
    localStorage.setItem(FORM_STATE, JSON.stringify(formData));
   

}
function onFormSubmit (evt) {
    evt.preventDefault();
    console.log(JSON.parse(localStorage.getItem(FORM_STATE)))
  
    evt.target.reset();
    formData = {};
    localStorage.removeItem(FORM_STATE);
}

function formFillOut(){
const savedData = JSON.parse(localStorage.getItem(FORM_STATE));
if (savedData === null || savedData === undefined) {
    return
}
formData = savedData;

if(savedData){
    email.value = savedData.email ? savedData.email : email.value;
    textarea.value = savedData.message ? savedData.message : textarea.value;
}
};