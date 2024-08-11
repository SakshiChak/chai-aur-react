import { useState, useCallback, useEffect, useRef } from "react";

function App() {
	const [length, setLength] = useState(8);
	const [numberAllowed, setNumberAllowed] = useState(false);
	const [charAllowed, setCharAllowed] = useState(false);
	const [password, setPassword] = useState("");

	//useRef hook
	const passwordRef = useRef(null);

	const passwordGenerator = useCallback(() => {
		let pass = "";
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		if (numberAllowed) str += "0123456789";
		if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

		for (let i = 1; i <= length; i++) {
			let char = Math.floor(Math.random() * str.length + 1);
			pass += str.charAt(char);
		}

		setPassword(pass);
	}, [length, numberAllowed, charAllowed, setPassword]);

	const copyPasswordToClipboard = useCallback(() => {
		passwordRef.current?.select();
		passwordRef.current?.setSelectionRange(0, 51);
		window.navigator.clipboard.writeText(password);
	}, [password]);

	useEffect(() => {
		passwordGenerator();
	}, [length, numberAllowed, charAllowed, passwordGenerator]);
	return (
		<div className="w-full max-w-xl min-h-48 mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-900 text-orange-300">
			<h1 className="text-center text-4xl my-5 font-serif">
				Password Generator
			</h1>
			<div className="flex shadow rounded-lg overflow-hidden mb-6 text-xl">
				<input
					type="text"
					value={password}
					className="outline-none w-full py-1 px-3 text-orange-100 bg-gray-700 border-b-2 border-orange-500"
					placeholder="Password"
					readOnly
					ref={passwordRef}
				/>
				<button
					onClick={copyPasswordToClipboard}
					className="outline-none shrink-0 bg-blue-500 hover:bg-blue-700 text-orange-100 font-semibold py-2 px-4 rounded"
				>
					Copy
				</button>
			</div>
			<div className="flex text-xl gap-x-2">
				<div className="flex items-center gap-x-2">
					<input
						type="range"
						min={8}
						max={50}
						value={length}
						className="cursor-pointer accent-blue-500"
						onChange={(e) => {
							setLength(e.target.value);
						}}
					/>
					<label className="text-orange-200 ">Length: {length}</label>
				</div>
				<div className="flex items-center gap-x-2 p-2">
					<input
						type="checkbox"
						defaultChecked={numberAllowed}
						id="numberInput"
						className="accent-blue-500 h-5 w-5 cursor-pointer hover:accent-blue-700 focus:ring-2 focus:ring-blue-300"
						onChange={() => {
							setNumberAllowed((prev) => !prev);
						}}
					/>
					<label
						htmlFor="numberInput"
						className="text-orange-200 cursor-pointer hover:text-orange-400 transition-colors duration-200"
					>
						Numbers
					</label>
				</div>

				<div className="flex items-center gap-x-2 p-2">
					<input
						type="checkbox"
						defaultChecked={charAllowed}
						id="characterInput"
						className="accent-blue-500 h-5 w-5 cursor-pointer hover:accent-blue-700 focus:ring-2 focus:ring-blue-300"
						onChange={() => {
							setCharAllowed((prev) => !prev);
						}}
					/>
					<label
						htmlFor="characterInput"
						className="text-orange-200 cursor-pointer hover:text-orange-400 transition-colors duration-200"
					>
						Characters
					</label>
				</div>
			</div>
		</div>
	);
}

export default App;
