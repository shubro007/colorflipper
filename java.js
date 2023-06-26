const colors=["red","blue","green"];

const btn=document.getElementById("btn");
const content = document.getElementById("content");




btn.addEventListener('click',function(){
    let a=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let c=Math.floor(Math.random()*255);
    let d=(Math.random());
    let color="rgba("+a+','+b+','+c+','+d+")";
    document.body.style.backgroundColor=color;
    console.log(color);

    content.textContent=color;
})

const title=document.getElementById("title");
console.log(title.textContent)

