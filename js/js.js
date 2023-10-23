 let show = document.querySelector('.show')
 let password = document.querySelector('.password')


 show.addEventListener('click', () => {
    if (password.type == 'password'){
    password.type = 'text';
    show.innerHTML = `<i class="bi bi-eye"></i>`;
    }else{
        password.type = 'password';
        show.innerHTML = '<i class="bi bi-eye-slash"></i>';
    }
 })




 let increment = document.querySelector('.increment')
 let box = document.querySelector('.box')


 increment.addEventListener('click', () => {
    box.value = Number(box.value) + 1;
 })

 let decrement = document.querySelector('.decrement')

 decrement.addEventListener('click', () => {
    if (box.value > 1) {box.value = Number(box.value) - 1;
    }
 })




 let range = document.querySelector('.range')
 let output = document.querySelector('.output')

 range.addEventListener('input', () => {
    output.innerHTML = range.value;
 })



 let btn = document.querySelector('.btn')
 let main = document.querySelector('main')


 btn.addEventListener('click', () => {
    const red = Math.round(Math.random() *255);
    const green = Math.round(Math.random() *255);
    const blue = Math.round(Math.random() *255);

    main.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
 })