import { getMetals, setMetal, setOrderBuilder } from "./database.js"

const metals = getMetals()
const orderBuilder = setOrderBuilder()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        if (orderBuilder.metalId === metal.id) {
            html += `<li>
            <input type="radio" checked name="metal" value="${metal.id}" /> ${metal.metal}
            </li>`     
        }
        else {
            html +=`<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
            </li>`
        }         
    }

    html += "</ul>"
    return html
}

