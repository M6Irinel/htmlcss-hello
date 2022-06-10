let write_the_title = document.querySelector("h1");
let bottone = document.querySelector("button");

let write = write_the_title.textContent;
let add_letters = null;
let i = 0;

bottone.onclick = function() {
    i = 0;
    write_the_title.innerHTML = "";
    if(add_letters){
        clearInterval(add_letters);
    }
    add_letters = setInterval(writing, 100);
};

function writing() {
    write_the_title.textContent += write[i];
    i++;

    stop(add_letters);
}

function stop(add_letters) {
    if (i >= write.length) {
        clearInterval(add_letters);
    }
}


