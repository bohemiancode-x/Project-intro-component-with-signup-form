const form = document.querySelector('.claim-free-trial');
const firstname = document.querySelector('#firstname');
const forminput = document.querySelectorAll('.form-child');
const errormsg = document.querySelectorAll('.errormsg');
const email = document.querySelector('#email');
const emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


//email validation with regex
email.addEventListener('keyup', () => {
    if(emailpattern.test(email.value)){
        email.style.border = "2px solid #38cc8c"
        email.style.color = "#3bcc8c"
        email.style.backgroundSize = "0px";
        email.nextSibling.nextSibling.style.display = 'none';
    } else {
        email.style.color = "#ff7a7a"
        email.style.backgroundSize = "20px 20px";
        email.style.border = "2px solid #ff7a7a"
        email.nextSibling.nextSibling.style.display = 'block';
    }
 })

let i;
//display error for empty form fields
form.addEventListener('submit', e => {
    e.preventDefault();
    for ( let i=0; i < forminput.length; i++) {
        if(forminput[i].value == ""){
            forminput[i].style.backgroundSize = "20px 20px";
            forminput[i].style.border = "2px solid #ff7a7a"
            errormsg[i].style.display = "block";
        } else {
            forminput[i].style.backgroundSize = "0px";
            forminput[i].style.border = "2px solid #b9b6d3"
            errormsg[i].style.display = "none";
        }
    }
    
    
    for ( let i=0; i < forminput.length; i++) {
        console.log(forminput[i].value);
    }
})

//clear error when user starts typing
form.addEventListener("keypress", () => {
    for ( let i=0; i < forminput.length; i++){
        forminput[i].style.backgroundSize = "0px"
        forminput[i].style.border = "2px solid #d3d3d3"
        errormsg[i].style.display = "none";    
    }
    
})







