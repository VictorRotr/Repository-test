let stiatiCa = [];
let list = document.getElementById('stiatiCa');
let outputParagraph = document.getElementById('raspuns');

const inputInfo = () => {
    let result = document.getElementById('inputStiatiCa').value;
    console.log(result);
    stiatiCa.push(result);

list.innerHTML ='';

 stiatiCa.forEach((item) => {
     let li = document.createElement('li');
     li.innerText = item;
     list.appendChild(li);
});
document.getElementById('inputStiatiCa').value = '';
}
console.log(stiatiCa);
document.getElementById('addBtn').addEventListener("click", inputInfo);


const oddEven  =() => {
    let output;
    if(stiatiCa.length === 0 && stiatiCa.length % 2 === 0) {
        output = 'Lista nu contine nici-un element'
    }else if(stiatiCa.length % 2 === 0){
         output = 'Lista are un numar par de iteme'
    }else if(stiatiCa.length % 2 != 0){
        output = 'Lista are un numar impar de iteme'
    };
    
    console.log(output);
    outputParagraph.textContent = output;
};
document.getElementById('oddEvenBtn').addEventListener('click',oddEven)