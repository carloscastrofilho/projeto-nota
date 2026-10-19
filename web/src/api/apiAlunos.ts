import { API_BASE_URL } from "./apiconfig";

export async function alunosGet(){
    try {
        
        const response = await fetch(`${API_BASE_URL}/alunos`,{
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