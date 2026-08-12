import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { register } = useAuth();

    const navigate = useNavigate();


    const handleRegister = (event) => {

        event.preventDefault();

        register(name, email, password);

        navigate("/dashboard");
    };


    return (
        <div className="auth-page">

            <div className="auth-card">

                <h1>Create account</h1>

                <p>Join Foodpanda</p>


                <form onSubmit={handleRegister}>

                    <input
                        type="text"
                        placeholder="Full name"
                        value={name}
                        onChange={(event) =>
                            setName(event.target.value)
                        }
                    />


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


                    <button type="submit">
                        Register
                    </button>

                </form>


                <p>
                    Already have an account?{" "}

                    <span
                        onClick={() => navigate("/login")}
                        className="auth-link"
                    >
                        Login
                    </span>
                </p>

            </div>

        </div>
    );
}

export default Register;