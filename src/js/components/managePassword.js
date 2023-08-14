const showPasswordButton = document.querySelector('.show-password')
const password = document.querySelector('#password')
const submitEnterButton = document.querySelector('.submit-enter')

const resetPasswordBlock = document.querySelector('.reset-passsword-block')
const resetPasswordButton = document.querySelector('.reset-password-button')




showPasswordButton.addEventListener('click', () => {
    password.type = password.type === "password" ? "text" : "password"      
})


resetPasswordButton.addEventListener('click', () => {
    submitEnterButton.classList.add('disabled')  

    resetPasswordBlock.style.display = 'block'
})