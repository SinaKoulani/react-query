import { useQuery } from "@tanstack/react-query";
import { getAbout } from "../api/aboutHandle";


// useQuery manages the server state for the about data
// queryKey identifies and caches the about query
// queryFn is the function that fetches the about data

export function useAbout(){
    return useQuery(
        {
         queryKey  : ["about"] ,
         queryFn : getAbout,
        }
    )
}