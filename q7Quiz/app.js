/**
 * Question 
 * . You are designing an HTML quiz application that has “fill in the blanks” questions, where
 * each question has an input text box as a blank for the user to answer. Can you write a
 * function that will enable the submit button only after answers have been entered for all
 * the questions (ensure none of the input text boxes are empty)? Also, anytime one of the
 * text boxes is emptied - submit should be disabled again.
 */

//init basic dom handling after initial page rendered
document.addEventListener("DOMContentLoaded",initialRender);

function initialRender(){
    let q1Dom = document.querySelector("#q1");
    let q2Dom = document.querySelector("#q2");
    let q3Dom = document.querySelector("#q3");
    
    //get all question dom using totalQuestions
    q1Dom.addEventListener("keyup",(e)=>handleInput(e,"q1"));
    q2Dom.addEventListener("keyup",(e)=>handleInput(e,"q2"));
    q3Dom.addEventListener("keyup",(e)=>handleInput(e,"q3"));

    function handleInput(e,type){
        checkSubmitButtonStatus();
    };

    //initial button checking
    checkSubmitButtonStatus();

    function checkSubmitButtonStatus(){
        let submitBtn = document.querySelector(".submit");
        if(q1Dom.value && q2Dom.value && q3Dom.value){
            //Eligable to submit
            submitBtn.disabled = false;
        } else {
            //Not eligable to submit
            submitBtn.disabled = true;
        }
    }

}
