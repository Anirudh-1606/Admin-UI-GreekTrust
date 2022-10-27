import "./App.css";
import Search from "./components/SearchBar/Search";
import { useState, useEffect } from "react";
import UserTable from "./components/UserTable/UserTable";
import onLoad from "./services/OnLoad";
import performSearch from "./services/OnSearch";
import config from "./constants";

import Pages from "./components/Pagination/Pages";

function App() {
	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [page, setPage] = useState(1);
	const [selectedUsers, setSelectedUsers] = useState([]);

	//-------------------------------------------------------------------------------------------------------------------------------------
	//Intializing Onload Services
	useEffect(() => {
		const getData = async () => {
			const res = await onLoad();
			setData(res.data);
			setFilteredData(res.data);
		};
		getData();
	}, []);

	//-------------------------------------------------------------------------------------------------------------------------------------
	//Handling Search Service
	const handleSearch = (text) => {
		setFilteredData(performSearch(text, data, setPage));
	};

	//-------------------------------------------------------------------------------------------------------------------------------------
	//handling all select option
	const handleAllSelect = () => {
		if (selectedUsers.length) {
			setSelectedUsers([]);
		} else {
			setSelectedUsers(pageData);
		}
		console.log(selectedUsers);
	};

	// handle single select
	const handleSelect = (user) => {
		if (selectedUsers.includes(user)) {
			setSelectedUsers(selectedUsers.filter((ele) => ele.id !== user.id));
		} else {
			setSelectedUsers([...selectedUsers, user]);
		}
	};

	//-------------------------------------------------------------------------------------------------------------------------------------
	//User Row functionalities
	const handleDelete = (id) => {
		const newData = filteredData.filter((ele) => ele.id !== id);
		setFilteredData(newData);
		setData(newData);
	};

	const handleAllDelete = () => {
		const response = filteredData.filter((user) => {
			return !selectedUsers.includes(user);
		});
		setFilteredData(response);
		setData(response);
		setSelectedUsers([]);
	};

	const handleSave = (userData, id) => {
		const newData = filteredData.map((user) => {
			if (user.id === id) {
				return userData;
			}
			return user;
		});
		setFilteredData(newData);
		setData(newData);
	};

	//-------------------------------------------------------------------------------------------------------------------------------------
	//paging;
	const end = page * config.pageSize;
	const start = end - config.pageSize;
	const pageData = filteredData.slice(start, end);
	//change Page Function
	const handlePage = (num) => setPage(num);

	//-------------------------------------------------------------------------------------------------------------------------------------
	return (
		<div className="App">
			<Search handleSearch={handleSearch} />
			<UserTable
				data={pageData}
				handleAllSelect={handleAllSelect}
				selectedUsers={selectedUsers}
				handleDelete={handleDelete}
				handleSave={handleSave}
				handleSelect={handleSelect}
			/>
			<Pages
				handlePaginate={handlePage}
				dataLength={filteredData.length}
				handleAllDelete={handleAllDelete}
				page={page}
				setPage={setPage}
			/>
		</div>
	);
}

export default App;
