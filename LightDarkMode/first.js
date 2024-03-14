
let body = document.querySelector("body");
let mode = false;

let div1 = document.querySelector(".div1");

div1.addEventListener("mouseover", () => {
    if(mode === false){
        darkToLight();
    } else{
        lightToDark();
    }
});

const darkToLight = () => {
    mode = true;
    body.classList.add("dark");
    body.classList.remove("light");
    div1.classList.add("dark");
    div1.classList.remove("light");
    div1.innerText = "Dark mode Enabled";
}

const lightToDark = () => {
    mode = false;
    body.classList.add("light");
    body.classList.remove("dark");
    div1.classList.add("light");
    div1.classList.remove("dark");
    div1.innerText = "Light mode Enabled";
}
div1.addEventListener("mouseout", () => {
    if(mode === false){
        darkToLight();
    } else{
        lightToDark();
    }
})

