import axios from "axios";
import type { Login, Signup } from "../types/dataTypes";
import { URL_API } from "../config/url";

// POST request for sending login
// data: Login => receives login data and sends it to the backend
// TypeScript checks the Login type and makes sure the data matches its fields

export async function postLogin(data: Login): Promise<Login> {
    const response = await axios.post<Login>(
        `${URL_API}/login`,
        data
    );

    return response.data;
}

// post req for sending signup 
// data: signup => receives signup data and sends it to the backend

export async function postSignup(data: Signup): Promise<Signup> {
    const response = await axios.post<Signup>(
        `${URL_API}/signup`,
        data
    );

    return response.data;
}




