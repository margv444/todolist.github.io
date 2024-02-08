document.addEventListener('DOMContentLoaded', function () {
    const username = localStorage.getItem('username');
    document.getElementById('username').innerText = username;
});

function addTask() 
{
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') 
    {
        const taskList = document.getElementById('taskList');
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `<input type="checkbox" onchange="showMotivationalQuote(this)"> ${taskText}`;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

function removeCompletedTasks() 
{
    const taskList = document.getElementById('taskList');
    const completedTasks = taskList.querySelectorAll('li input[type="checkbox"]:checked');

    completedTasks.forEach(task => 
    {
        task.parentElement.remove();
    });
}

function showMotivationalQuote(checkbox)
{
    if (checkbox.checked) {
        const quotes = [
            "The only way to do great work is to love what you do. - Steve Jobs",
            "Don't watch the clock. do what it does. Keep going. - Sam Levenson",
            "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
            "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
            "Believe you can and you're halfway there. - Theodore Roosevelt",
            "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
            "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson"
                       ];

        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        alert(randomQuote);
                          }
}