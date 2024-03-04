console.log(
    "Hello world"
)

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if(!response.ok) {
//             throw new Error("Could not fetch resource")
//         }
//         return response.json()
//     })
//     .then(response => console.log(response))
//     .catch(err => console.log(err))

async function fetchData() {
    try {
        const response = await fetch("http://localhost:3000/courses")
        console.log(response)
        if(!response.ok) {
            throw new Error("Could not fetch resources")
        }

        const data = response.json()
        console.log(data)
    } catch(error) {
        console.log("Error Type:", error)
    }
}

fetchData()