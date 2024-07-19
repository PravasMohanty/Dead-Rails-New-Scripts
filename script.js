let inputbox = document.querySelector("#input-box");
let listContainer = document.querySelector("#list-container");
let buttonn = document.querySelector('.add-btn');

buttonn.addEventListener('click',()=>{
    if (inputbox.value === '') {
        alert('Task cannot be empty')
    } else {
        let lii = document.createElement('li');
        lii.innerHTML = inputbox.value;
        listContainer.appendChild(lii);
        // console.log(lii);
        let exit = document.createElement('span');
        exit.innerHTML = '&#10006';
        lii.appendChild(exit);
    }
    inputbox.value = '';
    saveData();
});


document.addEventListener('keypress',(e)=>{
    if (e.key == 'Enter') {
        if (inputbox.value === '') {
            alert('Task cannot be empty')
        } else {
            let lii = document.createElement('li');
            lii.innerHTML = inputbox.value;
            listContainer.appendChild(lii);
            // console.log(lii);
            let exit = document.createElement('span');
            exit.innerHTML = '&#10006';
            lii.appendChild(exit);
        }
        inputbox.value = '';
        saveData();
    }
});



listContainer.addEventListener("click",function(e){
    if (e.target.tagName === 'LI' ){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem('data',listContainer.innerHTML)
}

function ShowData() {
    listContainer.innerHTML = localStorage.getItem('data');
}

ShowData();