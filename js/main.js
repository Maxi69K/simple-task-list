// Simple Task List with Animations
const enterBtn = document.getElementById('enter');
const input = document.getElementById('userInput');
const unorderedList = document.getElementById('uList');
const items = document.querySelectorAll('li');

enterBtn.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', (event) => {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
});

function inputLength() {
    return input.value.length;
}

function createListElement() {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    unorderedList.appendChild(li);
    input.value = '';

    function crossOut() {
        li.classList.toggle('done');
    }
    li.addEventListener('click', crossOut);
    // Create Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', deleteListItem);

    function deleteListItem() {
        li.classList.add('delete');
        setTimeout(function () {
            li.style.display = 'none';
        }, 500);
    }
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}