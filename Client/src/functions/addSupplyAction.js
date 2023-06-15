

export async function action({ request }) {
    const formData = await request.formData()
    const supplies = Object.fromEntries(formData)
    const response = await fetch("http://localhost:3000/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(supplies)
    })
    const body = await response.json()
    console.log(body)
    return { body }
}