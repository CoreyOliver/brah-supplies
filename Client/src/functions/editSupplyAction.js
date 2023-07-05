
export async function action({ request }) {
    const formData = await request.formData()
    const supplies = Object.fromEntries(formData)
    console.log(supplies)
    const response = await fetch(`https://brah-supplies.onrender.com/editSupply/${supplies.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(supplies)
    })

    
    return { response }
}

