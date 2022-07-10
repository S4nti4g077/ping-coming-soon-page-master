const notifyForm = document.querySelector('#notify-form')
const button = document.querySelector('#notify-button')
const input = document.querySelector('#email')
const errorDiv = document.querySelector('#errorDiv')
const errorP = document.querySelector('#error-p')
function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}


notifyForm.addEventListener('submit', function(e){
    e.preventDefault();
    const check = input.value
    const validation = emailIsValid(check)
    if (validation === true){
        console.log('well done!')
    }
    else{
        console.log('wrong email')        
        errorP.innerText = `Please provide a valid email address`;
        errorP.style.color = 'red'
        input.style.borderColor = 'red'
    }
    input.value = ``;
})

