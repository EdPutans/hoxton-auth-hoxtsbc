import { User, RequestBody } from "./types";

export const host = `http://localhost:3000/`

// complete me
export const sendRequest = async (endpoint: string, method: string, bodyParam?: RequestBody) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  const body = bodyParam ? JSON.stringify(bodyParam) : undefined

  const result = await fetch(`${host}/${endpoint}`, {
    method,
    headers,
    body,
  });

  return result.json()
}

export const handleLogout = async () => {
  await sendRequest('logout', 'POST')
  // complete me
};

export const handleLogin = async (body: Body) => {
  await sendRequest('login', 'POST', body);
  // complete me
}

export const signInWithJWT = async () => {
  return { data: null }
  // await
  // complete me
}
