const showPasswordButton = document.querySelector('.show-password')
const password = document.querySelector('#password')
const submitEnterButton = document.querySelector('.submit-enter')

const resetPasswordBlock = document.querySelector('.reset-passsword-block')
const resetPasswordButton = document.querySelector('.reset-password-button')

const smsTimer = document.querySelector('#smsTimer')
let smsSeconds = (smsTimer.innerHTML).split(":")[1]


showPasswordButton.addEventListener('click', () => {
    password.type = password.type === "password" ? "text" : "password"      
})


resetPasswordButton.addEventListener('click', () => {
    submitEnterButton.classList.add('disabled')  

    resetPasswordBlock.style.display = 'block'

    const smsIntervalId = setInterval(() => {
        smsSeconds --;
        if(smsSeconds === 0) clearInterval(smsIntervalId);
        smsTimer.innerHTML = `0:${smsSeconds}`;                
        
    }, 1000)
})