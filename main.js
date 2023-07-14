const inputInfo = () => {
    let result = document.getElementById('inputStiatiCa').value;
    console.log(result);
    return result;
}

document.getElementById('addBtn').addEventListener("click", inputInfo)
const astaImiDa = inputInfo();
const list1 = document.getElementById('li1');
list1.textContent = astaImiDa;
