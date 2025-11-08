import { useEffect, useState } from "react";
import api from "../../../api/api.ts";

type ProfileResponse = {
    userId: string;
    username: string;
    email: string;
};

const Home = () => {
    const [profile, setProfile] = useState<ProfileResponse | null>(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await api.get("/orders/api/Profile/me");
                setProfile(response.data);
            } catch (err) {
                console.error("Failed to load profile", err);
            }
        };

        fetchProfile();
    }, []);

    if (!profile) return <p className="text-white text-xl">Loading...</p>;

    return (
        <div className="p-10 text-white">
            <h1 className="text-3xl font-bold mb-4">Welcome {profile.username} </h1>

        </div>
    );
};

export default Home;
