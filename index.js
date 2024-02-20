let saveEle = document.getElementById("save-el")
let countEle = document.getElementById("count-el")
let count = 0

function increment(){
    count +=1
    countEle.textContent = count
}

function save(){
    countRecord =  count + " - " 
    saveEle.textContent +=countRecord
    countEle.textContent = 0
    count = 0

}