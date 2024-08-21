import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
import { useState } from "react";

function Todos() {
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();
	const [isEditing, setIsEditing] = useState(null); // Track the todo being edited
	const [editInput, setEditInput] = useState("");   // Store updated text input

	const startEditing = (todo) => {
		setIsEditing(todo.id); // Set the id of the todo being edited
		setEditInput(todo.text); // Prefill the input with the current todo text
	};

	const updateTodoHandler = (e, id) => {
		e.preventDefault();
		dispatch(updateTodo({ id, text: editInput })); // Dispatch updateTodo with the new text
		setIsEditing(null); // Reset editing state
		setEditInput("");   // Clear input field
	};

	return (
		<>
			<ul className="list-none space-y-4">
				{todos.map((todo) => (
					<li
						className="flex justify-between items-center bg-gray-900 px-6 py-3 rounded-lg shadow-lg "
						key={todo.id}
					>
						{/* Check if this todo is being edited */}
						{isEditing === todo.id ? (
							<form
								onSubmit={(e) => updateTodoHandler(e, todo.id)}
								className="flex items-center space-x-4 w-full"
							>
								<input
									type="text"
									className="bg-gray-800 text-gray-100 border border-gray-600 placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-600 rounded-lg py-2 px-4 outline-none w-full"
									value={editInput}
									onChange={(e) => setEditInput(e.target.value)}
								/>
								<button
									type="submit"
									className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded-lg"
								>
									Save
								</button>
							</form>
						) : (
							<>
								<div className="text-lg text-gray-200">{todo.text}</div>
								<div className="flex space-x-4">
									<button
										onClick={() => startEditing(todo)}
										className="text-blue-400 hover:text-blue-600 transition-colors duration-200 focus:outline-none"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M16.862 3.487a2.25 2.25 0 113.182 3.182L7.06 19.653a4.5 4.5 0 01-1.686 1.07l-4.271 1.539 1.539-4.271a4.5 4.5 0 011.07-1.686L16.862 3.487z"
											/>
										</svg>
									</button>
									<button
										onClick={() => dispatch(removeTodo(todo.id))}
										className="text-red-400 hover:text-red-600 transition-colors duration-200 focus:outline-none"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
											/>
										</svg>
									</button>
								</div>
							</>
						)}
					</li>
				))}
			</ul>
		</>
	);
}

export default Todos;
