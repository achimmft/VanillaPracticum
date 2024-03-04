// TODO: Wire up the app's behavior here.
// NOTE: The TODOs are listed in index.html

const select = document.getElementById("course")
async function fetchCourses() {
    try {
        const response = await fetch("http://localhost:3000/courses")
        // console.log(response)
        if(!response.ok) {
            throw new Error("Could not fetch resources")
        }

        const data = await response.json()
        console.log(data)
        for (const course of data) {
            console.log("course", course)
            const option = document.createElement("option")
            option.innerHTML = course.display
            select.appendChild(option)
        }
    } catch(error) {
        console.log("Error Type:", error)
    }
}

fetchCourses()