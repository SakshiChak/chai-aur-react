import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
	const [input, setInput] = useState("");
	const dispatch = useDispatch();

	const addTodoHandler = (e) => {
		e.preventDefault();
		dispatch(addTodo(input));
		setInput("");
	};

	return (
		<form onSubmit={addTodoHandler} className="flex items-center justify-center mt-12 space-x-4 mb-5">
			<input
				type="text"
				className="bg-gray-300 text-gray-900 border border-gray-600 placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-600 rounded-lg py-2 px-4 shadow-lg outline-none transition-all duration-300 ease-in-out transform focus:scale-105"
				placeholder="Enter a Todo..."
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button
				type="submit"
				className="bg-purple-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-700 transform transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
			>
				Add Todo
			</button>
		</form>
	);
}

export default AddTodo;
