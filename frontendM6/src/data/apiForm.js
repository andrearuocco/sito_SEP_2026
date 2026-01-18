const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5001"

export async function sendContactMessage(payload) {
  const res = await fetch(`${API_URL}/contacts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  if (!res.ok) throw new Error(`Request failed: ${res.status}`)
  return res.json()
}
