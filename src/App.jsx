import { useState } from "react"

import QueueForm from "./components/QueueForm"

import QueueComponent from "./components/QueueComponent"
import "./App.css"
export default function App() {

    const [queue, setQueue] = useState([])

    const addToQueue = (Customer) => {
        // add data to queue
        setQueue([
            ...queue,
            {
                ...Customer,
                id: Date.now(),
                status: "waiting"
            }
        ])
    }

    const updateStatus = (id, newStatus) => {
        // change data in queue
        setQueue(queue.map(customer => 
             customer.id === id
                ? { ...customer, status: newStatus }
                : customer
        ))
    }

    const removeFromQueue = (id) => {
        // remove data from the queue
        setQueue(queue.filter(customer => customer.id !== id))
    }

    return (
        <div className="app">

            <header>
                <h1>Queue Management Application</h1>
                <p>Manage Your Customers Efficiently</p>
            </header>

            <main>

                <QueueForm onAdd={addToQueue} />

                <QueueComponent
                    queue={queue}
                    onUpdateStatus={updateStatus}
                    onRemove={removeFromQueue}
                />

            </main>

        </div>
    )
}