const dog = {
    nome: "max",
    idade: 18
}


for (const [key, value] of Object.entries(dog)) {
    console.log(key, value)
}