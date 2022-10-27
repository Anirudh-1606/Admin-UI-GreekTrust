import React, { useState } from "react";
import "./User.css";

const User = ({
	user,
	handleDelete,
	handleSave,
	selectedUsers,
	handleSelect,
}) => {
	//To store selected row data
	const [isEdit, setEdit] = useState(false);
	const [saveData, setSaveData] = useState(user);

	const handleNewData = (e) => {
		setSaveData({ ...saveData, [e.target.name]: e.target.value });
	};

	return (
		<tr
			className={
				selectedUsers.includes(user) ? "select-row tableRow" : "tableRow"
			}
		>
			<td>
				<input
					type="checkbox"
					onChange={() => handleSelect(user)}
					checked={selectedUsers.includes(user) ? true : false}
				/>
			</td>
			<td>
				<input
					className={isEdit ? "inp-act" : "inp-readonly"}
					type="text"
					defaultValue={user.name}
					readOnly={!isEdit}
					name="name"
					onChange={(e) => handleNewData(e)}
				/>
			</td>
			<td>
				<input
					className={isEdit ? "inp-act" : "inp-readonly"}
					type="text"
					defaultValue={user.email}
					readOnly={!isEdit}
					name="email"
					onChange={(e) => handleNewData(e)}
				/>
			</td>
			<td>
				<input
					className={isEdit ? "inp-act" : "inp-readonly"}
					type="text"
					defaultValue={user.role.charAt(0).toUpperCase() + user.role.slice(1)}
					readOnly={!isEdit}
					name="role"
					onChange={(e) => handleNewData(e)}
				/>
			</td>
			<td className="icons-row">
				{isEdit ? (
					<i
						className="fas fa-save"
						onClick={() => {
							setEdit(!isEdit);
							handleSave(saveData, user.id);
						}}
					></i>
				) : (
					<i className="fas fa-edit" onClick={() => setEdit(!isEdit)}></i>
				)}

				<i
					className="fas fa-light fa-trash delete-icon "
					onClick={() => handleDelete(user.id)}
				></i>
			</td>
		</tr>
	);
};

export default User;
