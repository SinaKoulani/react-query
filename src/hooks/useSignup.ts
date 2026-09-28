import { useMutation } from "@tanstack/react-query";
import { postSignup } from "../api/authHandle";

// Create a mutation and call postSignup when the mutation is executed

export function useSignup (){
    return useMutation({
        mutationFn: postSignup,
    });
}
