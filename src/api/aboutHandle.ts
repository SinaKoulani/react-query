import axios from "axios";
import type { About } from "../types/dataTypes";
import { URL_API } from "../config/url";


// axios request for getting about content
export async function getAbout (): Promise<About>{
    const response = await axios.get<About>(`${URL_API}/home`)

    return response.data;
}