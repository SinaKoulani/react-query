import { useMutation } from "@tanstack/react-query";
import { postLogin } from "../api/authHandle";

export function useLogin (){
    return useMutation({
        mutationFn: postLogin,

        onSuccess: () => {
        
        },
    });
}

// Create a mutation and call postLogin when the mutation is executed
//useMutation is for management wthings like POST → Login
//POST → Signup
// POST → Create Product
// DELETE → Delete Product
// PUT/PATCH → Update Product