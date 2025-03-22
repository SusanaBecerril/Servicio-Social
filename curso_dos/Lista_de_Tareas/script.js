const dateNumber = document.getElementById('dateNumber');/*crear variables numero*/
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

const tasksContainer = document.getElementById('tasksContainer');

const setDate = () => {/* dar la fecha*/
    const date = new Date();/*dar la fecha actual*/
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });/*el dia*/
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });/*el dia de la semana*/
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });/* el mes*/
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });/* el año */
};

const addNewTask = event => {/*agrega una nueva tareay evalua*/
    event.preventDefault();/*eviya llebvar a otra pagina*/
    const { value } = event.target.taskText;/* si ingreso un valor*/
    if(!value) return;/* si no ha valor*/
    const task = document.createElement('div');/*crear un elemnto*/
    task.classList.add('task', 'roundBorder');/* crear */
    task.addEventListener('click', changeTaskState)/* llamar la funcion de cambiar el listado*/
    task.textContent = value;/*lee texto que ingreso el usuario*/
    tasksContainer.prepend(task);/* se agraga la tarrea uno tras otro*/
    event.target.reset();
};

const changeTaskState = event => {/*lista*/
    event.target.classList.toggle('done');/*accede la lista de elmentos*/
};

const order = () => {/*ordena la lista de elementos o tareas*/
    const done = [];/*mostrat todas las tareas que hacer*/
    const toDo = [];
    tasksContainer.childNodes.forEach( el => {/*acceder a cada tarea*/
        el.classList.contains('done') ? done.push(el) : toDo.push(el)/*agrega el elemnto al final*/
    })
    return [...toDo, ...done];/*muestra las treas que estan por hacer y las hechas al final*/
}

const renderOrderedTasks = () => {/*llama a este btonn de ordenar */
    order().forEach(el => tasksContainer.appendChild(el))/*poner los elemntos uno por uno*/
}

setDate();