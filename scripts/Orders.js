import { getOrders, getMetals, getSizes, getStyles, getTypes} from "./database.js"


export const Orders = () => {
    const orders = getOrders()
    /*
    Can you explain why the state variable has to be inside
    the component function for Orders, but not the others?
    */
   let html = "<ul>"
   
   const listItems = orders.map(buildOrderListItem)
   
   html += listItems.join("")
   html += "</ul>"
   
   return html
}


const buildOrderListItem = (order) => {
    const metals = getMetals()
    const sizes = getSizes()
    const styles = getStyles()
    const types = getTypes()
    
    // Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
            } 
        )
    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
            }   
        )
    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )
    const foundType = types.find(
        (type) => {
            return type.id === order.typeId
        }
    )
                
    let totalCost = 0
                
    if (foundType.id === 1) {
        totalCost = foundMetal.price + foundStyle.price + foundSize.price
        
    }
    
    if (foundType.id === 2) {
        totalCost = (foundMetal.price + foundStyle.price + foundSize.price) * foundType.price
        
    }
    
    if (foundType.id === 3) {
        totalCost = (foundMetal.price + foundStyle.price + foundSize.price) * foundType.price
    
    }
                
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>
        Order #${order.id} cost ${costString}   
    </li>`
}
                
                