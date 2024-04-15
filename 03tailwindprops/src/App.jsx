import "./App.css";
import Card from "./components/Card";

function App() {
	return (
		<>
			<h1 className="bg-red-300 text-black p-2 rounded-xl mb-4">Tailwind CSS</h1>
			<Card userName = "chaiaurcode" btnText="click me"/>
			<Card userName= "hitesh"/>
		</>
	);
}

export default App;
