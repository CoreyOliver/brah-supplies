export async function action(id, newQty) {
    try {
      const res = await fetch(`http://localhost:3000/count/${id}/${newQty}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json()
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };