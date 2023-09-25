var x=0;
function onClick(){
    console.log(x);
    if(x<10){
        x=x+1;
    }
}

function onClick1(){
        console.log(x);
        if(x>0){
            x=x-1;
        }
}

const button = document.querySelector('#Add');
button.addEventListener('Click', onClick);
const button1 = document.querySelector('#Minus');
button1.addEventListener('Click', onClick1);