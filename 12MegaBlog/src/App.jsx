import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		authService
			.getCurrentUser()
			.then((userData) => {
				if (userData) {
					dispatch(login({ userData }));
				} else {
					dispatch(logout());
				}
			})
			.finally(() => setLoading(false));
	}, []);

	return !loading ? (
		<div className="min-h-screen  flex flex-col justify-between bg-gradient-to-r from-gray-400 to-gray-600 text-white">
			<Header />
			<main className="flex-grow flex justify-center items-center">
				<p className="text-xl">Loading...</p>
			</main>
			<Footer />
		</div>
	) : null;
}

export default App;
