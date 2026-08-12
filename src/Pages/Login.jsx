import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const { login } = useAuth();

    const navigate = useNavigate();


    const handleLogin = (event) => {

        event.preventDefault();

        const success = login(email, password);

        if (success) {

            navigate("/dashboard");

        } else {

            setError("Invalid email or password");

        }
    };


    return (
        <div className="auth-page">

            <div className="auth-card">

                <h1>Welcome back</h1>

                <p>Login to your Foodpanda account</p>


                <form onSubmit={handleLogin}>

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(event) =>
                            setEmail(event.target.value)
                        }
                    />


                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) =>
                            setPassword(event.target.value)
                        }
                    />


                    {error && (
                        <p className="auth-error">
                            {error}
                        </p>
                    )}


                    <button type="submit">
                        Log in
                    </button>

                </form>


                <p>
                    Don't have an account?{" "}
                    <span
                        onClick={() => navigate("/register")}
                        className="auth-link"
                    >
                        Register
                    </span>
                </p>

            </div>

        </div>
    );
}

export default Login;