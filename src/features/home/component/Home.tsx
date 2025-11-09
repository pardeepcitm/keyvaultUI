import { useEffect, useState } from "react";
import api from "../../../api/api.ts";

type ProfileResponse = {
    userId: string;
    username: string;
    email: string;
};

type Product = {
    id: string;
    name: string;
    imageUrl: string;
};

const Home = () => {
    const [profile, setProfile] = useState<ProfileResponse | null>(null);
    const [products, setProducts] = useState<Product[]>([]);

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

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get("/orders/api/Profile/products");
                setProducts(response.data);
            } catch (err) {
                console.error("Failed to load products data", err);
            }
        };
        fetchProducts();
    }, []);

    if (!profile)
        return (
            <p className="text-white text-xl text-center mt-10">Loading...</p>
        );

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Top bar with username aligned right */}
            <header className="flex justify-end items-center p-4 bg-gray-800 shadow-md">
        <span className="text-white font-semibold">
          Welcome, {profile.username}
        </span>
            </header>

            {/* Page content */}
            <div className="p-8">
                {/* Products Title */}
                <h1 className="text-4xl font-bold text-white text-center mb-8">
                    Products
                </h1>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden w-48 hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4 text-center">
                                <h3 className="text-lg font-semibold mb-4">{product.name}</h3>
                                <button
                                    onClick={() => alert(`Buying ${product.name}`)}
                                    className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded transition-colors duration-200"
                                >
                                    Buy
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
