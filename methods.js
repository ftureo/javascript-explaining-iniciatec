const arrayUsers = ["Fabi", "Leo", "Andi", "Cata", "Isa"];

console.log("Qué indice le corresponde a Andi?", arrayUsers.indexOf("Andi"));

console.log("Es true o false?", arrayUsers.includes("Silvi"));

console.log("Es true o false?", arrayUsers.includes("Cata"));

const number = 15;
console.log("number", number);
console.log("number to string", typeof number.toString());

const arrayUsers2 = ["Leo", "Rochius", "Jose", "Cami", "Franco"];
const arrayUsers3 = ["Esteban", "Brisa", "Juan", "Ivan"];

const orderOneConcat = arrayUsers.concat(arrayUsers3, arrayUsers2);
console.log("Veamos como concatenar arrays", orderOneConcat);

const orderTwoConcat = arrayUsers.concat(arrayUsers2, arrayUsers3);
console.log("Veamos como concatenar arrays", orderTwoConcat);

const orderThreeConcat = arrayUsers2.concat(arrayUsers3, arrayUsers);
console.log("Veamos como concatenar arrays", orderThreeConcat);

// ECMA6 Implementa el SPREAD OPERATOR
const orderOneSpread = [
    ...arrayUsers,
    ...arrayUsers3,
    ...arrayUsers2,
    "Sher",
    "Maxi",
];
console.log("A ver que onda el spread", orderOneSpread);

const orderWithoutSpread = [arrayUsers, arrayUsers3, arrayUsers2];
console.log("A ver sin spread", orderWithoutSpread);

const newOrderOneSpread = ["Sher", ...orderOneSpread];
console.log("New Order", newOrderOneSpread);

const userFabi = {
    name: "Fabi",
    lastName: "Tureo",
    age: 28,
    isWorking: true,
};

userFabi.havePets = true;

console.log(userFabi);

const updateFabi = {
    ...userFabi,
    havePets: true,
};
console.log(updateFabi);

for (i = 0; i < updateFabi.length; i++) {
    console.log(updateFabi[i]);
}

const usersIniciatec = [
    ...arrayUsers, // 5 elementos
    ...arrayUsers2, // 5 elementos
    ...arrayUsers3, // 4 elementos
];

console.log("usersIniciatec", usersIniciatec);
console.log("usersIniciatec length", usersIniciatec.length);

const usersWithMap = usersIniciatec.map((userIniciatec) => {
    return {
        username: userIniciatec,
    };
});
console.log("usersWithMap", usersWithMap);
