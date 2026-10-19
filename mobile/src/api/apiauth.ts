import { API_HOST } from "@/api/apiconfig";

export interface LoginResponse {
  message: string;
  token: string | null;
  user: {
    id: number;
    nome: string;
    email?: string | null;
    avatar?:string |null,
  } | null;
}

export async function authLogin(
  login: string,
  password: string,
): Promise<LoginResponse> {
  try {
    const response = await fetch(`${API_HOST}auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login,
        password,
      }),
    });

    const data = await response.json();

    console.log("Resposta API:", data);

    const reposta:LoginResponse = {
      message: data.message,
      token: data.data,
      user :{ id: data.user?.id , nome: data.user?.name }
    }
    return reposta

  } catch (error) {

    console.error("Erro ao acessar API:", error);
    
    const reposta:LoginResponse = {
      message : "Falha ao logar ...",
      token: null,  user : null
    }
    return reposta;
  }
}

export async function authRegister ( 
  {login, password,name}:{login:string, password:string, name:string}): Promise<boolean>  {
  try {
      const response = await fetch(`${API_HOST}auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login,
        password,
        name
      }),
    });

    const data = await response.json();

    if ( !data) return false

    return ( data.message  !== "sucess" )

  } catch (error) {

    console.error("Erro ao acessar API:", error);   
    return false;

  }  
    
}