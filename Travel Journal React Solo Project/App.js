import React from "react"
import Card from "./components/Card"
import Header from "./components/Header"
import data from "./data"
console.log(data)

export default function App() {
    const cardDetails = data.map(item => {
        return (
            <Card
                key={item.key}
                {...item}
            />      
        )
    })
    return (
        <div className="container">
            <Header />
            <div className="content">
                {cardDetails}
            </div>
        </div>
    )
}