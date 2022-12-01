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

// console.log("1");
// setTimeout(function () {
//     console.log("2");
// }, 5000);
// console.log("3");
// setTimeout(function () {
//     console.log("4");
//     setTimeout(() => {
//         console.log("5");
//     }, 4000);
// }, 2000);

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

// const API_URL_EVENTS = "https://amazing-events.herokuapp.com/api/events";

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

// // getEvents();

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

// const getEventsWithAxios = async() => {
//     //Llamamos a la librería y le indicamos el verbo HTTP que queremos utilizar
//     const getDataAxios = await axios.get(API_URL_EVENTS)
//     const dataEvents = getDataAxios.data
//     console.log("getDataAxios", getDataAxios)
//     console.log("dataAxios", dataEvents)

// }

// getEventsWithAxios()



const API_URL_GET_PRODUCTS = "https://fakestoreapi.com/products"

/**
 * This function realize a GET request to the API in FakeStoreAPI
 * @param   no use.
 * @returns return an array of products.
 */
const getProducts = async () => {
    try{
        const responseAxios = await axios.get("https://fakestoreapi.com/products");
        const dataProducts = responseAxios.data
        console.log("dataProducts", dataProducts)
        return dataProducts
    } catch(error){
        console.log("Error status", error.response.status)
        if (error.response.status === 404) {
            alert("La URL consultada parece no estar funcionando")
        }
    }
}
getProducts()

// Revisar por qué con el console.log() la promesa se resuelve y con el return no

// Example for try/catch/finally

// const functionToFail = null

const someFunction = () => {
    const gretting = "Hello dev 🐈"    
    // Intentará resolver este fragmento de código
    try{
        console.log("Esto se ejecuta antes de que falle la función")
        // functionToFail = true
        console.log("gretting", gretting)
    } 
    catch (error){
        // Si algo falla, ejecutará este fragmento de código
        console.log("Esto se ejecuta si la función falla")
        console.log("Error", error)
        console.log("Error message", error.message)
        console.log("Error name", error.name)
        throw new Error("Error personalizado")
    } 
    finally{
        //Ejecutar un fragmento de código al margen de que se ejecute el try o el catch
        console.log("Esto se ejecuta al final de la función")
    }
    console.log("Esto también se va a ejecutar")
}

someFunction()
// Este comentario si se va a poder crear
// Este comentario no se va a poder crear en formatoJSON

const toStringify = {
    name: "Tuki",
    age: 2,
    favouriteFood: "Papas Fritas",
    isCute: true,
};
console.log("toStringify", toStringify);


const stringified = JSON.stringify(toStringify)
console.log("stringified", stringified);

const parsed = JSON.parse(stringified)
console.log("parsed", parsed);

const productoToPost = {
    title: "Tuki's toy",
    price: 100,
    description: "Tuki's favourite toy",
    category: "toys",
    image: "https://images.unsplash.com/photo-1611784997869-8b8b2b2b9f9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
};

const postRequestToFakeStore = async() => {
    // En una request de tipo POST utilizando Fetch, el primer parámetro es la URL a la que queremos hacer la petición y el segundo parámetro es un objeto con las opciones de la petición
    fetch("https://fakestoreapi.com/products", {
        // El verbo HTTP que queremos utilizar a través de la key "method"
        // El content-type de la petición a través de la key "headers"
        // El body de la petición que contiene los datos que queremos crear a través de la key "body"
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(productoToPost)
    })
    .then(response => response.json())
    .then(data => console.log("data", data))
}
postRequestToFakeStore()


const usersToPost = {
    name: "Tuki",
    job: "Developer",
}
const URL_REQRES_POST = "https://reqres.in/api/users"
const postRequestToReqres = async() => {
    const response = await fetch(URL_REQRES_POST, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usersToPost)
    })
    const data = await response.json()
    console.log("Post a ReqRes", data)
} 

postRequestToReqres()