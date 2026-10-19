import { API_BASE_URL } from "./apiconfig";

export async function roleGet(){
    try {
        console.log( API_BASE_URL);
        const response = await fetch(`${API_BASE_URL}/roles`,{
            method: "GET"
        })
        
        const data = await response.json();
        
        return data.data;
    } catch (error) {
        if  ( error)
            return {
                "message": "error",
                "data": []
            }
    }
}