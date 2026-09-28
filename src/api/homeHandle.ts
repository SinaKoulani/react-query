import axios from "axios";
import type { Home } from "../types/dataTypes";
import { URL_API } from "../config/url";


export async function getHome(): Promise<Home>{
    const response = await axios.get<Home>(`${URL_API}/home`);
    return response.data;
}