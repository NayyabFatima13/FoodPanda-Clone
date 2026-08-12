import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function Dashboard() {

    const { user, logout } = useAuth();

    const navigate = useNavigate();


    const handleLogout = () => {

        logout();

        navigate("/login");
    };


    return (
        <div className="dashboard">

            <h1>Welcome, {user?.name}! 👋</h1>

            <p>
                Welcome to your Foodpanda dashboard.
            </p>

            <div className="dashboard-card">

                <h2>Account Information</h2>

                <p>
                    <strong>Name:</strong>{" "}
                    {user?.name}
                </p>

                <p>
                    <strong>Email:</strong>{" "}
                    {user?.email}
                </p>

            </div>


            <button onClick={handleLogout}>
                Logout
            </button>

        </div>
    );
}

export default Dashboard;