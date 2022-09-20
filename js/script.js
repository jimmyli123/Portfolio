document.querySelector('.toggle-theme-button').addEventListener('click', () =>{
    document.body.classList.toggle('dark')
    let button = document.querySelector('.toggle-theme-button')
    console.log(button.innerHTML)
    button.innerHTML === "Dark Mode" ? button.innerHTML = "Light Mode" : button.innerHTML = "Dark Mode"
})