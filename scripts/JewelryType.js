import { getTypes, setType, setOrderBuilder } from "./dataAccess.js"


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "type") {
            setType(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
    )
    
    export const JewelryType = () => {
        let html = "<ul>"
        
        const type = getTypes()
        const orderBuilder = setOrderBuilder()
        // Use .map() for converting objects to <li> elements
        const listItems = type.map(type => {
            if (orderBuilder.typeId === type.id) {
                return `<li>
                <input type="radio" checked id="type" name="type" value="${type.id}" /> ${type.type}
                </li>`     
            }
            else {
                return `<li>
                <input type="radio" id="type" name="type" value="${type.id}" /> ${type.type}
                </li>`
            } 
        } 
        )
        
        // Join all of the strings in the array into a single string
        html += listItems.join("")
        
        html += "</ul>"
        return html
    }