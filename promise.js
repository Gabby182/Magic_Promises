// troque por true or false para ver o que acontece!!!
let letSequence = true;

const sequence = (res, rej) => {
    if(letSequence){
        let title = document.getElementById("title").textContent = "JAVASCRIPT ASSÍNCRONO";
        res(title);
    }else{
        let title = document.getElementById("title").textContent = "PROMISE FALHOU";
        rej(title);
    }
};

const promise = new Promise(sequence);

promise
.then(() =>{
    let magic = document.getElementById("magic").textContent = "Parece até magia!!!";
})
.catch(() =>{
    let magic = document.getElementById("magic").textContent = "Algo está errado!!";
})
.then(() =>{

});

/*let buttonSort = document.getElementById("buttonSort")
    .addEventListener("click", changeSequence);

function changeSequence(){
    if(this.letSequence === true){
        this.letSequence = false;
        console.log(this.letSequence);
    }else{
        this.letSequence = true;
        console.log(this.letSequence);
    }
}*/
