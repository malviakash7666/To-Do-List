
let inputs = document.querySelector('#inp');
let text = document.querySelector('.text');

function Add(){
    if(inputs.value === ''){
        alert("Plese Enter Task");
    }
    else{
        let newEle = document.createElement('ul');
        newEle.innerHTML=`${inputs.value} <i class="fa-solid fa-delete-left"></i>`;
        text.appendChild(newEle);
        
        inputs.value="";
        newEle.querySelector('i').addEventListener('click',remove);
        function remove(){
            newEle.remove();
        }
    }

}