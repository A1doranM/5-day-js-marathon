const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

function dragstart(event) {
    event.target.classList.add('hold');
    setTimeout(() => {
        console.log('settimeout');
        event.target.classList.add('hide');
    }, 0);
}

function dragend(event) {
    event.target.classList.remove('hold');
    event.target.classList.remove('hide');
}

function dragover(event) {
    event.preventDefault();
}

function dragenter(event) {
    event.target.classList.add('hovered');
}

function dragleave(event) {
    event.target.classList.remove('hovered');
}

function drop(event) {
    event.target.classList.remove('hovered');
    event.target.append(item);
}

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', drop);
    console.log(placeholder);
}

item.addEventListener('dragstart', dragstart);

item.addEventListener('dragend', dragend);