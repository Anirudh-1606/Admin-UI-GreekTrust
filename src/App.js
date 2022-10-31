import "./App.css";
import Search from "./components/SearchBar/Search";
import { useState, useEffect } from "react";
import UserTable from "./components/UserTable/UserTable";
import onLoad from "./services/OnLoad";
import performSearch from "./services/OnSearch";
import config from "./constants";
import { useSnackbar } from "notistack";
import Pages from "./components/Pagination/Pages";

function App() {
	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [page, setPage] = useState(1);
	const [selectedUsers, setSelectedUsers] = useState([]);
	const { enqueueSnackbar } = useSnackbar();
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
		const res = performSearch(text, data);
		console.log("search->", res, data);
		setFilteredData(res);
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
		window.confirm("Are you sure, you want to delete this? ");
		const newData = filteredData.filter((ele) => ele.id !== id);
		const newOriData = data.filter((ele) => ele.id !== id);
		setFilteredData(newData);
		setData(newOriData);
	};

	const handleAllDelete = () => {
		if (selectedUsers.length) {
			window.confirm("Are you sure, you want to delete selected users? ");
		}

		const response = filteredData.filter((user) => {
			return !selectedUsers.includes(user);
		});
		const oriResponse = data.filter((user) => {
			return !selectedUsers.includes(user);
		});
		setFilteredData(response);
		setData(oriResponse);
		setSelectedUsers([]);
	};

	const handleSave = (userData, id) => {
		const index = filteredData.findIndex((user) => user.id === id);
		const oriInd = data.findIndex((user) => user.id === id);

		filteredData[index] = userData;
		data[oriInd] = userData;
	};

	const validateEdit = (user) => {
		if (user.name === "" && user.email === "" && user.role === "") {
			enqueueSnackbar("Please enter all the fields", { variant: "error" });
			return false;
		} else if (user.name === "") {
			enqueueSnackbar("Please enter the name field", { variant: "error" });
			return false;
		} else if (user.email === "") {
			enqueueSnackbar("Please enter the email field", { variant: "error" });
			return false;
		} else if (user.role === "") {
			enqueueSnackbar("Please enter the role field", { variant: "error" });
			return false;
		}
		return true;
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
		<div className="container">
			<Search handleSearch={handleSearch} />
			<UserTable
				data={pageData}
				handleAllSelect={handleAllSelect}
				selectedUsers={selectedUsers}
				handleDelete={handleDelete}
				handleSave={handleSave}
				handleSelect={handleSelect}
				validateEdit={validateEdit}
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
