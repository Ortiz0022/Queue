let queue = [];

function enqueue() {
    let input = document.getElementById('queueInput');
    let number = input.value;
    if (number !== '') {
        queue.push(number);
        input.value = '';
        updateQueue();
    }
}

function dequeue() {
    queue.shift();
    updateQueue();
}

function updateQueue() {
    let list = document.getElementById('queueList');
    list.innerHTML = '';
    for (let i = 0; i < queue.length; i++) {
        let li = document.createElement('li');
        li.textContent = queue[i];
        list.appendChild(li);
    }
}
