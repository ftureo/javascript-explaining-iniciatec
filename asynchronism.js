// console.log("1")
// console.log("2")
// console.log("3")
// console.log("user", user) // User nunca fue definido por lo cual no se puede mostrar por consola
// console.log("4") // No se ejecuta - Se rompió el hilo de ejecución
// console.log("5") // No se ejecuta - Se rompió el hilo de ejecución

// Entonces, aparece el concepto de asincronismo
// Asincronismo refiere a las operaciones que se ejecutan en segundo plano y que podemos controlar de alguna manera
// Asincronismo es la capacidad de ejecutar código sin bloquear el hilo de ejecución

// setTimeout(function(){
//     console.log("Soy el primer timeout y también el primer callback llamado como tal")
// }, 5000) // El console.log() se ejecuta después de 5 segundos

// setTimeout(() => {
//     console.log("Soy el segundo timeout y también el segundo callback llamado como tal")
// }, 3000) // El console.log() se ejecuta después de 3 segundos

// setTimeout(() => {
//     console.log(1)
//     setTimeout(() => {
//         console.log(2)
//         setTimeout(() => {
//             console.log(3)
//         }, 3000)
//     }, 7000)
// }, 1000)
// Output: 1, 2, 3 - De acuerdo a los tiempos de cada setTimeout()

console.log("1");
setTimeout(function () {
    console.log("2");
}, 5000);
console.log("3");
setTimeout(function () {
    console.log("4");
    setTimeout(() => {
        console.log("5");
    }, 4000);
}, 2000);

// Output: 1, 3, 4, 2

// https://jsonplaceholder.typicode.com/users

const API_URL = "https://jsonplaceholder.typicode.com/users";

const getUser = () => {
    fetch(API_URL)
        // .then(response => console.log(response))
        .then((response) => response.json())
        .then((data) => data);
};
getUser();

// Promises using async await
const getUserAsync = async () => {
    const getFetch = await fetch(API_URL);
    const getData = await getFetch.json();
    showDataInDOM(getData);
    // console.log("getFetch", getFetch)
    // console.log("getData", getData)
    // return getData
};
getUserAsync();

const showDataInDOM = (perrito) => {
    console.log("perrito en showDataInDOM", perrito);
    //ESCRIBO LO QUE QUIERO RENDERIZAR EN EL DOM
};
showDataInDOM();

const API_URL_EVENTS = "https://amazing-events.herokuapp.com/api/events";

// const getEvents = async () => {
//     const response = await fetch(API_URL_EVENTS);
//     const dataEvents = await response.json();
//     // console.log("response", response)
//     console.log("events", dataEvents);
//     console.log("array de eventos", dataEvents.events);

//     // Utilizamos spread operator para agregarle una nueva key a la respuesta de la API
//     const newData = {
//         ...dataEvents,
//         havePerrito: false,
//     };

//     eventsInDOM(newData);
// };

// getEvents();

// const eventsInDOM = (dataEvents) => {
//Cambiar nombre a newData cuando prueben con la key nueva por cuestiones de semántica
//     // Working with destructuring

//     // //Esto sería con la forma clásica de asignar una variable para cada key que obtenemos de nuestro objeto.
//     // const events = dataEvents.events
//     // const currentDate = dataEvents.currentDate

//     // const { events } = dataEvents // Output - El array de los eventos
//     // const { currentDate } = dataEvents // Output - La fecha de comparación de la API
//     // const { tuki } = dataEvents // Output - undefined - Porque "tuki" no es una key definida en dataEvents

//Destructuring - Option #1
// const { events, currentDate, havePerrito } = dataEvents

//     console.log("Información para pintar en el DOM", dataEvents)
//     console.log("events with destructuring", events)
//     console.log("currentDate with destructuring", currentDate)
//     // console.log("Tuki", tuki) // undefined
//     console.log("Tiene perrito?", havePerrito)
// }


// Destructuring - Option #2 - Destruturing in parameter
// const eventsInDOM = ({ events, currentDate, havePerrito }) => {
//     // // Esto se puede reemplazar por poner el nombre de las keys dentro del parámetro de la función entre llaves
//     // const { events, currentDate, havePerrito } = dataEvents;

//     console.log("events with destructuring", events)
//     console.log("currentDate with destructuring", currentDate)
//     console.log("Tiene perrito?", havePerrito)
// };

// Tres formas de hacer peticiones asíncronas (Por ahora)
// Option #1 - Fetch + .then()
// Optión #2 - Fetch + Async/Await
// Option #3 - Utilizando la librería AXIOS + Async / Await
// Resource: https://axios-http.com/

const getEventsWithAxios = async() => {
    //Llamamos a la librería y le indicamos el verbo HTTP que queremos utilizar
    const getDataAxios = await axios.get(API_URL_EVENTS)
    const dataEvents = getDataAxios.data
    console.log("getDataAxios", getDataAxios)
    console.log("dataAxios", dataEvents)

}

getEventsWithAxios()