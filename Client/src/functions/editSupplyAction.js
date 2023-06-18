import {redirect} from 'react-router-dom'

export async function action({ request }) {
    const formData = await request.formData()
    const supplies = Object.fromEntries(formData)
    console.log(supplies)
    const response = await fetch(`http://localhost:3000/editSupply/${supplies.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(supplies)
    })
    const body = await response.json()
    
    return { body }
}