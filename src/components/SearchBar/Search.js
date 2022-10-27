import React from "react";
import "./Search.css";
const Search = ({ handleSearch, data }) => {
	return (
		<div className="search-bar">
			<input
				type="text"
				className="search-inp"
				placeholder="Seach by name, email or role"
				onChange={(e) => handleSearch(e.target.value)}
			/>
		</div>
	);
};

export default Search;
