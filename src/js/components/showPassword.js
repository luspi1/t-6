const showPasswordButton = document.querySelector('.show-password')
const password = document.querySelector('#password')

showPasswordButton.addEventListener('click', () => {
    password.type = password.type === "password" ? "text" : "password"      
})