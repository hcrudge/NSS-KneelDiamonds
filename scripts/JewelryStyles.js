import { getStyles, setOrderBuilder, setStyle} from "./dataAccess.js"



document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
    )
    
    export const JewelryStyles = () => {
        let html = "<ul>"
        
        const styles = getStyles()
        const orderBuilder = setOrderBuilder()
    
        // Use .map() for converting objects to <li> elements
    const listItems = styles.map(style => {
        if (orderBuilder.styleId === style.id) {
            return `<li>
            <input type="radio" checked id="style" name="style" value="${style.id}" /> ${style.style}
            </li>`     
        }
        else {
            return `<li>
            <input type="radio" id="style" name="style" value="${style.id}" /> ${style.style}
            </li>`
        }          
    }
    )
    
    // Join all of the strings in the array into a single string
    html += listItems.join(" ")
    
    html += "</ul>"
    return html
}

