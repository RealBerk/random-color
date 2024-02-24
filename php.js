let generateBtn = document.getElementById('generate');
let copyBtn = document.getElementById('copy');

let text = document.getElementById('color');

generateBtn.addEventListener('click',() => {
    let random1 = Math.floor(Math.random() * 256);
    let random2 = Math.floor(Math.random() * 256);
    let random3 = Math.floor(Math.random() * 256);

    let msg = text.innerText =  "rgba(" + random1 + "," + random2 + "," + random3 + ")";
    document.body.style.backgroundColor = `rgba(${random1},${random2},${random3})`;
    
});

generateBtn.addEventListener('click',() => {
    navigator.clipboard.writeText(text.innerText);
});