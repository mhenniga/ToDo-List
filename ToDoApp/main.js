/*document.addEventListener('DOMContentLoaded', () => {

        //By default, submit button is disabled
        document.querySelector('#submit').disabled = true;

        document.querySelector('#task').onkeyup = () => {
            if (document.querySelector('#task').value.length > 0) {
                document.querySelector('#submit').disabled = false;
            } else {
                document.querySelector('#submit').disabled = true;
            }
        };
        {
        }

        /*const mySpan = document.createElement('span');
        mySpan.innerHTML = 'x';
        myLi.appendChild(mySpan);
                 }
                 const close = document.querySelectorAll('span');
                 for (let i = 0; i < close.length; i++) {
                    close[i].parentElement.style.opacity |
                    close[i].parentElement.style.display = "none";
                 }
                 inputText.value = ""; 
        document.querySelector('form').onsubmit = () => {
            const task = document.querySelector('#task').value;
            const li = document.createElement('li');
            li.innerHTML = task;

            document.querySelector('#tasks').append(li);

            document.querySelector('#task').value = '';
            document.querySelector('#submit').disabled = true;

            //stop form from submitting
            return false;
        };
    } */

    let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
});
    
    
    
   /* function myFunction() {
      document.getElementById('#task').style.textDecorationLine = "line-through";
    } */
    p.addEventListener('click', function(){
        p.style.textDecoration = "line-through";
    })
    p.addEventListener('dblclick', function(){
        toDoContainer.removeChild(p);
    });