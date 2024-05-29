
document.getElementById("todoForm").addEventListener("submit", handleSubmit)
const todoListDiv = document.getElementById("todos")

renderTodos()

async function handleSubmit(e) {
    e.preventDefault()
    const title = document.getElementById("title").value
    const task = document.getElementById("task").value
    document.getElementById("todoForm").reset()

    try {
        const res = await fetch("https://backend-p4xc.onrender.com/todo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                description: task,
            }),
        });

        const json = await res.json();

        alert(json.msg)

        renderTodos()
    } catch (error) {
        alert("something went wrong")
    }
}

async function renderTodos() {
    let todos = []
    try {
        const res = await fetch("https://backend-p4xc.onrender.com/todos");
        const json = await res.json();
        todos = json.todos
    } catch (error) {
        todoListDiv.innerHTML = "<h3>Failed to load todos</h3>"
        return
    }

    if (!todos.length) {
        todoListDiv.innerHTML = "<h3>No todos available</h3>"
        return
    }

    todoListDiv.innerHTML = ""
    todos.forEach(function (todo) {
        const todoDiv = document.createElement("li")
        todoDiv.innerHTML = `
        <h3>${todo.title}</h3>
        <p>${todo.description}</p>
        `;
        todoListDiv.appendChild(todoDiv)
    })
}


/*
document.getElementById("todoForm").addEventListener("submit", handleSubmit)
//document.getElementById("deleteAll").addEventListener("click", handleDeleteAll)
const todoListDiv = document.getElementById("todos")
renderTodos()
/*
if (!localStorage.getItem("todos")) {
    let todos = []
    localStorage.setItem("todos", JSON.stringify(todos))
    todoListDiv.innerHTML = "<h3>No Todos available</h3>"
} else {
    renderTodos()
}
*/
/*
async function handleSubmit(e){
    e.preventDefault()
    const title = document.getElementById("title").value
    const task = document.getElementById("task").value
    document.getElementById("todoForm").reset()
    try{
    const res= await fetch("https://backened-p4xc.onrender.com/todo",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",

        },
        body:JSON.stringify({
            title:title,
            description:task,
        })

    });
    const json = await res.json();
    alert(json.msg)
    renderTodos()
} catch(error){
    alert("something went wrong")
}
    
}

function handleSubmit(e) {
    e.preventDefault()
    const title = document.getElementById("title").value
    const task = document.getElementById("task").value
    document.getElementById("todoForm").reset()

    const todo = { title, task }
    let todos = JSON.parse(localStorage.getItem("todos"))
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))
    renderTodos()
}

async function renderTodos() {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (!todos.length) {
        todoListDiv.innerHTML = "<h3>No Todos available</h3>"
        return
    }
    todoListDiv.innerHTML = ""
    todos.forEach(function (todo) {
        const todoDiv = document.createElement("li")
        todoDiv.innerHTML = `
            <h3>${todo.title}</h3>
            <p>${todo.task}</p>
        `
        todoListDiv.appendChild(todoDiv)
    })
    async function renderTodos(){
    let todos =[]
   // fetch (sldmsd)
   try{
    const res =await fetch("https://backend-p4xc.onrender.com/todos");
    const json =await res.json();
    todos = json.todos

   }catch(error){
        todoListDiv.innerHTML="<h3>Failed</h3"
    }
    console.log(todos)


    if(!todos.length){
        todoListDiv.innerHTML="<h3>No todos available </h3>"
    }
    todoListDiv.innerHTML=""
    todos.forEach(function(todos){
        const todoDiv = document.createElement("li")
        todoDiv.innerHTML=`
        <h3>${todo.title}</h3>
        <p>${todo.description}</p>

        `
   todoListDiv.appendChild(todoDiv)
    })


    }
}

function handleDeleteAll() {
    localStorage.clear("todos")
    let todos = []
    localStorage.setItem("todos", JSON.stringify(todos))
    renderTodos()
}
//document.getElementById('fileinput').addEventListener('change',handleUpload)
//https://backend-p4xc.onrender.com/todos