import {database} from "./database.js"





export const getStyles = () => {
    return database.styles.map(style => ({...style}))
}
export const getSizes = () => {
    return database.sizes.map(size => ({...size}))
}
export const getMetals = () => {
    return database.metals.map(metal => ({...metal}))
}
export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}
export const getTypes = () => {
    return database.jewelryType.map(type => ({...type}))
}


export const setMetal = (id) => {
    database.orderBuilder.metalId = id
}

export const setSize = (id) => {
    database.orderBuilder.sizeId = id
}

export const setStyle = (id) => {
    database.orderBuilder.styleId = id
}

export const setType = (id) => {
    database.orderBuilder.typeId = id
}

export const setOrderBuilder = () => database.orderBuilder


