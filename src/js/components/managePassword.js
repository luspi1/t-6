const showPasswordButton = document.querySelector('.show-password')
const password = document.querySelector('#password')
const submitEnterButton = document.querySelector('.submit-enter')

const resetPasswordForm = document.querySelector('.reset-password-form')
const resetPasswordButton = document.querySelector('.reset-password-button')

const smsTimer = document.querySelector('#smsTimer')
let smsSeconds = (smsTimer.innerHTML).split(":")[1]

if(showPasswordButton) {
    showPasswordButton.addEventListener('click', () => {
        password.type = password.type === "password" ? "text" : "password"      
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
