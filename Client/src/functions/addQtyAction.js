export async function action(id, newQty) {
    try {
      const res = await fetch(`https://brah-supplies.onrender.com/count/${id}/${newQty}`, {
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