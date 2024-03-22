import {EXPO_IP, EXPO_PUBLIC_BACKEND_PORT} from "@env"; // Don't worry about this env error!

// Fetcher: Uses fetch to communicate to the server
export const fetcher = async (path: string) => {
  try {
    const serverUrl = `${EXPO_IP}:${EXPO_PUBLIC_BACKEND_PORT}`
    const response = await fetch(`http://${serverUrl}/${path}`, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      referrerPolicy: "same-origin",
    })
    console.log(serverUrl, path)
    if (response.status !== 200) throw new Error(`Request returned with status ${response.status}`)
    return response.json()
    
  } catch (error) {
    console.log("Error running fetcher():", error)
  }
}
