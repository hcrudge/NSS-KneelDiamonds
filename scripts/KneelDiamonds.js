
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Orders } from "./Orders.js"
import { Metals } from "./Metals.js"
import { addCustomOrder } from "./database.js"
import { JewelryType } from "./JewelryType.js"


document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton"){
           addCustomOrder() 
           document.getElementById("size").checked = false
           document.getElementById("style").checked = false
           document.getElementById("type").checked = false
           document.getElementById("metal").checked = false

        }
    }
)

export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${DiamondSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${JewelryStyles()}
            </section>
        </article>
        
        <article class="type">
            <section class="type_detail">
            ${JewelryType()}
            </section>
        </article>
        
        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${Orders()}
        </article>
    `
}

