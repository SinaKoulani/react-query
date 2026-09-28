import { useState} from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {

    // save the values entered by the user
    const [name , setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Create the Signup mutation
    const signupMutation = useSignup();

    
    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {

        // turn off the default form behavior
        // Without this, the page would refresh
        event.preventDefault();

        // Execute the Signup mutation
        // Send the email and password to the mutation
        // The mutation sends the data to the backend
        signupMutation.mutate({
            name,
            email,
            password,

        });
    };

    return (
        <form onSubmit={handleSubmit}>

        {/* the input field we have in sigup is name the others are same as login */ }
            <input
            
                type="text"
                value={name}
                onChange={(event)=> setName(event.target.value)}
             />



            <input
                type="email"
                value={email}
                
                onChange={(event) => setEmail(event.target.value)}
                
                placeholder="Email"
            />

            <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
            />


            <button type="submit">
                come in
            </button>

            {signupMutation.isPending && <p>create your damn account wait a minute</p>}
            {signupMutation.isError && <p>we coocked you cant come in </p>}
            {signupMutation.isSuccess && <p>wellcome brother</p>}

        </form>
    );
};

export default Signup;