const forward = document.getElementById("forward");
const backward = document.getElementById("backward");
const image = document.getElementById("caro-img");

let count = 1;

forward.addEventListener("click", ()=>{
    count++;
    if(count > 3){
        count = 1;
    }
    console.log(count);
    image.setAttribute("src", `images/img${count}.jpg`);
})

backward.addEventListener("click", ()=>{
    count--;
    if(count <1){
        count = 3;
    }
    console.log(count);
    image.setAttribute("src", `images/img${count}.jpg`);

})


setInterval(()=>{
    count++;
    if(count > 3){
        count = 1;
    }else if(count < 1){
        count = 3;
    }
    // console.log(count);
    image.classList.toggle('fade-in-img');
    image.setAttribute("src", `images/img${count}.jpg`);
    
}, 5000);

