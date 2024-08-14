// import React, { useEffect, useState } from 'react'
import { useLoaderData } from "react-router-dom";

function Github() {
	const data = useLoaderData();
	// const [data, setData] = useState([])
	// useEffect(() => {
	//  fetch('https://api.github.com/users/hiteshchoudhary')
	//  .then(response => response.json())
	//  .then(data => {
	//     console.log(data);
	//     setData(data)
	//  })
	// }, [])

	return (
		<div className="text-center m-4 bg-gray-700 text-white p-4 text-3xl">
			Github followers: {data.followers}
			<img src={data.avatar_url} alt="GitHub avatar" width={300} />
		</div>
	);
}

export default Github;

export const githubInfoLoader = async () => {
	try {
		const response = await fetch(
			"https://api.github.com/users/hiteshchoudhary"
		);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	} catch (error) {
		console.error("Error fetching GitHub data:", error);
		return null;
	}
};
