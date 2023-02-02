const ham = document.getElementById('ham');
const nav = document.getElementById('nav');
let myfunc = () => {
    if (nav.style.visibility !== "visible"){
        nav.style.visibility = "visible";
    } else {
        nav.style.visibility = "hidden";
    }
    // nav.classList.toggle("open")
 };
ham.addEventListener('click', myfunc);



// const nav.bar = document.getElementById('nav');
