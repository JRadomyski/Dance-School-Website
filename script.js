//banner-text animation
const text = document.querySelector(".awesome_p");
const h1Text = text.textContent;
const split_h1 = h1Text.split("");
text.textContent="";


for(let v=0; v < split_h1.length; v++){
    text.innerHTML += "<span>" + split_h1[v] + "</span>";
}


let char = 0;
let timer = setInterval(onTick, 90);


function complete() {
    clearInterval(timer);
    timer = null;
}


function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++ 
    if(char === split_h1.length){
        complete();
        return
    }
}

// Year-Holding
const yearInFooter = document.querySelector('.footer__year');


const CurrentYear = () => {
    const year = (new Date).getFullYear();
    yearInFooter.innerText = year;
}

CurrentYear();