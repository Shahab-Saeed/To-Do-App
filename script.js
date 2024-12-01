const textBox=document.querySelector("#text-box")
const listContainer=document.querySelector(".list-container")

let entc=document.querySelector("#getEnter")
entc.addEventListener("click",()=>{
    if (textBox.value===" ") {
        alert("you must write something")
    }
    else{
        let li=document.createElement("li")
        li.innerHTML=textBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }

    textBox.value=" "
    saveData();
})
// function addTask(){
//     if (textBox.value===" ") {
//         alert("you must write something")
//     }
//     else{
//         let li=document.createElement("li")
//         li.innerHTML=textBox.value;
//         listContainer.appendChild(li);
//         let span=document.createElement("span")
//         span.innerHTML="\u00d7";
//         li.appendChild(span);
//     }

//     textBox.value=" "
//     saveData();

// }

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        saveData();

    }

    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
})

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data")
}

showTask();

let ent=document.querySelector("#text-box")
ent.addEventListener("keypress",function(event){
    if(event.key==="Enter"){
        if (textBox.value===" ") {
            alert("you must write something")
        }
        else{
            let li=document.createElement("li")
            li.innerHTML=textBox.value;
            listContainer.appendChild(li);
            let span=document.createElement("span")
            span.innerHTML="\u00d7";
            li.appendChild(span);
        }
    
        textBox.value=" "
        saveData();
    }
})