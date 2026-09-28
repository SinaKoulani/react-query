import { useQuery } from "@tanstack/react-query";
import { getHome } from "../api/homeHandle";

// useQuery manages the server state for the Home data
// queryKey identifies and caches the Home query
// queryFn is the function that fetches the Home data

export function useHome() {
    return useQuery({
        queryKey: ["home"],
        queryFn: getHome,
    });
}