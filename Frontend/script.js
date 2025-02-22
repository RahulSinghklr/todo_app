const API_URL = "http://localhost:5000/api";  // Make sure your backend is running

// Fetch and display todos
async function fetchTodos() {
    const res = await fetch(`${API_URL}/todos`);
    const todos = await res.json();

    document.getElementById("todoList").innerHTML = todos.map(todo => 
        `<li>${todo.text} 
            <button onclick="deleteTodo('${todo._id}')">Delete</button>
        </li>`
    ).join("");
}

// Add a new todo
async function addTodo() {
    const text = document.getElementById("todoInput").value;
    if (text.trim() === "") return; // Prevent empty todos

    await fetch(`${API_URL}/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
    });

    document.getElementById("todoInput").value = ""; // Clear input
    fetchTodos(); // Refresh list
}

// Delete a todo
async function deleteTodo(id) {
    await fetch(`${API_URL}/delete/${id}`, { method: "DELETE" });
    fetchTodos(); // Refresh list
}

fetchTodos();  // Load todos when page loads
