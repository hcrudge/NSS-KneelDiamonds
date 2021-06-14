import { getSizes, setOrderBuilder, setSize } from "./dataAccess.js"


document.addEventListener(
    "change",
    (event) => { 
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
            
        } 
    }
    )
    
    export const DiamondSizes = () => {
        let html = "<ul>"
        
        const sizes = getSizes()
        const orderBuilder = setOrderBuilder()
    
        // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        if (orderBuilder.sizeId === size.id) {
            return `<li>
            <input type="radio" id="size" checked name="size" value="${size.id}" /> ${size.carets}
            </li>`     
        }
        else {
            return `<li>
            <input type="radio" id ="size" name="size" value="${size.id}" /> ${size.carets}
            </li>`
        }  
    }      
    )
    html += listItems.join("")

    html += "</ul>"

    return html
}

