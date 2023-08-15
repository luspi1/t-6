const showPasswordButton = document.querySelector('.show-password')
const password = document.querySelector('#password')
const submitEnterButton = document.querySelector('.submit-enter')

const resetPasswordForm = document.querySelector('.reset-password-form')
const resetPasswordButton = document.querySelector('.reset-password-button')

const smsTimer = document.querySelector('#smsTimer')
let smsSeconds = (smsTimer.innerHTML).split(":")[1]

if(showPasswordButton) {
    showPasswordButton.addEventListener('click', () => {         
        if(password.type === 'password') {
            password.type = 'text'
            showPasswordButton.classList.add("_is-shown-password")
        } else {
            password.type = 'password'
            showPasswordButton.classList.remove("_is-shown-password")
        }
    })
}

if(resetPasswordButton) {
    resetPasswordButton.addEventListener('click', () => {
        submitEnterButton.classList.add('disabled')  
    
        resetPasswordForm.style.display = 'block'
    
        const smsIntervalId = setInterval(() => {
            smsSeconds --;
            if(smsSeconds === 0) clearInterval(smsIntervalId);
            smsTimer.innerHTML = `0:${smsSeconds}`;                
            
        }, 1000)
    })
}
