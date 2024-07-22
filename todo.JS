document.addEventListener('DOMContentLoaded', () => {
    let input = document.querySelector('#inputBox'); 
    let list = document.querySelector('#list');
    let totalWork = document.querySelector('#text');
    let button = document.querySelector('#btn');


    input.addEventListener('keyup', function(event) {
        if (this.value === " ") {
            document.getElementById("err").innerHTML = "Please type your work !";
        }else if (event.key == "Enter"){
            addItem(this.value);
            this.value = "";
            error.innerHTML = "";
        }
    });

    button.addEventListener('click', () =>{
        let totalItems = list.getElementsByTagName('li').length;
        totalWork.textContent = `Total Task: ${totalItems}`;


    });

    const addItem = (inputValue) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${inputValue} <button class="delete-btn">X</button>`;
    
        listItem.querySelector(".delete-btn").addEventListener('click', () => {
            listItem.remove();
        });
    
        listItem.addEventListener('click', () => {
            listItem.classList.toggle('complete');
        });
    
        list.appendChild(listItem);
    };
    
});

    


