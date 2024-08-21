import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import "./App.css";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ArticlesScreen from "./screens/ArticlesScreen";
import SeriesScreen from "./screens/SeriesScreen";
import TechsScreen from "./screens/TechsScreen";
import Navbar from "./components/navbar/Navbar";

function App() {
	return (
		<>
			<BrowserRouter>
				<div className="container-lg bg-light">
					<Navbar />
					<main className="mt-5">
						<Routes>
							<Route path="/" element={<HomeScreen />} />
							<Route path="/login" element={<LoginScreen />} />
							<Route path="/register" element={<RegisterScreen />} />
							<Route path="/articles" element={<ArticlesScreen />} />
							<Route path="/series" element={<SeriesScreen />} />
							<Route path="/techs" element={<TechsScreen />} />
						</Routes>
					</main>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
