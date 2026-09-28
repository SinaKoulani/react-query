import { useState} from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {

    // save the values entered by the user
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Create the login mutation
    const loginMutation = useLogin();

    
    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {

        // turn off the default form behavior
        // Without this, the page would refresh
        event.preventDefault();

        // Execute the login mutation
        // Send the email and password to the mutation
        // The mutation sends the data to the backend
        loginMutation.mutate({
            email,
            password,
        });
    };

    return (
        <form onSubmit={handleSubmit}>

            {/* Update the email state with the value typed by the user */}
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
                Login
            </button>

            {/* Show a message while the request is running */}
            {loginMutation.isPending && <p>Logging in wait</p>}

            {/* Show a message if the request fails */}

            {loginMutation.isError && <p>it was this moment he knew he fucked up </p>}

            {/* Show a message if the request succeeds */}
            {loginMutation.isSuccess && <p> wellcome back bro </p>}

        </form>
    );
};

export default Login;



// ONLY ME AND GOD KNOWS WHAT I HAVE WRITE AND WHEN YOU READING THIS ONLY GOD KNOWS