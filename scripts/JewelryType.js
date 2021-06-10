import { getTypes, setType } from "./database.js"

const type = getTypes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "type") {
            setType(parseInt(event.target.value))
        }
    }
)

    export const JewelryType = () => {
        let html = "<ul>"
        
        // Use .map() for converting objects to <li> elements
        const listItems = type.map(type => {
            return `<li>
            <input type="radio" name="type" value="${type.id}" /> ${type.type}
            </li>`          
        }
        )
        
        // Join all of the strings in the array into a single string
        html += listItems.join("")
        
        html += "</ul>"
        return html
    }