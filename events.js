const buttonCounter = document.getElementById("button-counter");
const counterView = document.getElementById("counter-view");

console.log(buttonCounter);
console.log(counterView);

let counter = 0

buttonCounter.addEventListener("click", (event) => {
    console.log("event", event);
    console.log("click");
    counter++
    console.log(counter);
    counterView.textContent = counter;
})

const inputName = document.getElementById("input-name")
const inputContent = document.getElementById("input-content")

console.log(inputName);
console.log(inputContent);

inputName.addEventListener("change", (event) => {
    console.log("event", event.target.value);
    const content = event.target.value.toLowerCase();
    console.log("change");
    inputContent.textContent = content;
})


// practice for checkbox

const listItems = document.getElementById("list-items");
const buttonForm = document.getElementById("button-form");
const inputsCheckbox = document.querySelectorAll(".inputs-checkbox");

// console.log(listItems);
// console.log(buttonForm);
// console.log(inputCheckbox);

buttonForm.addEventListener("click", () => {
    // console.log("event", event);
    listItems.innerHTML = "";
    inputsCheckbox.forEach((inputCheckbox) => {
        if (inputCheckbox.checked) {
            console.log("A ver que onda los inputs")
            console.log(inputCheckbox)
            const li = document.createElement("li");
            li.textContent = inputCheckbox.value;
            listItems.appendChild(li);
        }
    });
})


// ---------------------------- Lista de usuarios con filtro de búsqueda ----------------------------

const usersArray = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496",
            },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
        },
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
                lat: "-43.9509",
                lng: "-34.4618",
            },
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains",
        },
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
            geo: {
                lat: "-68.6102",
                lng: "-47.0653",
            },
        },
        phone: "1-463-123-4447",
        website: "ramiro.info",
        company: {
            name: "Romaguera-Jacobson",
            catchPhrase: "Face to face bifurcated interface",
            bs: "e-enable strategic applications",
        },
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        address: {
            street: "Hoeger Mall",
            suite: "Apt. 692",
            city: "South Elvis",
            zipcode: "53919-4257",
            geo: {
                lat: "29.4572",
                lng: "-164.2990",
            },
        },
        phone: "493-170-9623 x156",
        website: "kale.biz",
        company: {
            name: "Robel-Corkery",
            catchPhrase: "Multi-tiered zero tolerance productivity",
            bs: "transition cutting-edge web services",
        },
    },
    {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        address: {
            street: "Skiles Walks",
            suite: "Suite 351",
            city: "Roscoeview",
            zipcode: "33263",
            geo: {
                lat: "-31.8129",
                lng: "62.5342",
            },
        },
        phone: "(254)954-1289",
        website: "demarco.info",
        company: {
            name: "Keebler LLC",
            catchPhrase: "User-centric fault-tolerant solution",
            bs: "revolutionize end-to-end systems",
        },
    },
    {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        address: {
            street: "Norberto Crossing",
            suite: "Apt. 950",
            city: "South Christy",
            zipcode: "23505-1337",
            geo: {
                lat: "-71.4197",
                lng: "71.7478",
            },
        },
        phone: "1-477-935-8478 x6430",
        website: "ola.org",
        company: {
            name: "Considine-Lockman",
            catchPhrase: "Synchronised bottom-line interface",
            bs: "e-enable innovative applications",
        },
    },
    {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
        address: {
            street: "Rex Trail",
            suite: "Suite 280",
            city: "Howemouth",
            zipcode: "58804-1099",
            geo: {
                lat: "24.8918",
                lng: "21.8984",
            },
        },
        phone: "210.067.6132",
        website: "elvis.io",
        company: {
            name: "Johns Group",
            catchPhrase: "Configurable multimedia task-force",
            bs: "generate enterprise e-tailers",
        },
    },
    {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
        address: {
            street: "Ellsworth Summit",
            suite: "Suite 729",
            city: "Aliyaview",
            zipcode: "45169",
            geo: {
                lat: "-14.3990",
                lng: "-120.7677",
            },
        },
        phone: "586.493.6943 x140",
        website: "jacynthe.com",
        company: {
            name: "Abernathy Group",
            catchPhrase: "Implemented secondary concept",
            bs: "e-enable extensible e-tailers",
        },
    },
    {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
        address: {
            street: "Dayna Park",
            suite: "Suite 449",
            city: "Bartholomebury",
            zipcode: "76495-3109",
            geo: {
                lat: "24.6463",
                lng: "-168.8889",
            },
        },
        phone: "(775)976-6794 x41206",
        website: "conrad.com",
        company: {
            name: "Yost and Sons",
            catchPhrase: "Switchable contextually-based project",
            bs: "aggregate real-time technologies",
        },
    },
    {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        address: {
            street: "Kattie Turnpike",
            suite: "Suite 198",
            city: "Lebsackbury",
            zipcode: "31428-2261",
            geo: {
                lat: "-38.2386",
                lng: "57.2232",
            },
        },
        phone: "024-648-3804",
        website: "ambrose.net",
        company: {
            name: "Hoeger LLC",
            catchPhrase: "Centralized empowering task-force",
            bs: "target end-to-end models",
        },
    },
];

const userList = document.getElementById("user-list");

const renderUsers = () => {
    usersArray.map((user) => {
        const userItem = document.createElement("li")
        userItem.textContent = `Este es el nombre del usuario: ${user.name}`
        userList.appendChild(userItem)
    })
}
renderUsers()

// ---------------------------- Lista de animales con filtro de búsqueda ----------------------------

const animals = [
    "perro", "gato", "conejo", "tortuga", "Ajolote", "pingüino", "carpincho", "Loro", "cobayo", "foca", "atún", "Oso Polar", "mantarraya", "dragón", "elefante", "tero", "Puerco Espin", "panda", "quirquincho"
]

const inputSearchAnimal = document.getElementById("input-search-animal");
console.log("inputSearchAnimals", inputSearchAnimal)


const animalList = document.getElementById("animal-list");


const renderAnimals = () => {
    animals.map((animal) => {
        const animalItem = document.createElement("li");
        animalItem.classList.add("animal-item");
        animalItem.textContent = animal;
        animalList.appendChild(animalItem);
    });
};
renderAnimals();


const animalListItems = document.querySelectorAll(".animal-item");
console.log("animalListItems", animalListItems);
inputSearchAnimal.addEventListener("keyup", (event) => {
    // console.log("event", event) // Devuelve todo el evento de la tecla presionada
    console.log("event.target.value", event.target.value) // Devuelve contenido del input
    // console.log("event.key", event.key) // Devuelve la tecla presionada
    // console.log({ animalListItems }) // Funciona OK ✔️
    animalListItems.forEach((animalItem) => {
        // console.log("veamos el animalito", animalItem.textContent) // Funciona OK ✔️
        animalItem.textContent
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
            ? animalItem.classList.remove("hidden") // Si cae en true la sentencia anterior, ocurre esto
            : animalItem.classList.add("hidden");  // Si cae en false la sentencia anterior, ocurre esto
        // SI NO ENCUENTRA RESULTADOS; ESTARÍA RE BUENO MOSTRAR UN MENSAJE EN LA PANTALLA
    })
})


console.log("Está andando events?")