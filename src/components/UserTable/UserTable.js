import React from "react";
import "./UserTable.css";
import User from "../UserRow/User";
import config from "../../constants";
const UserTable = ({
	data,
	handleAllSelect,
	selectedUsers,
	handleDelete,
	handleSave,
	handleSelect,
}) => {
	return (
		<div className="table-container">
			{data.length ? (
				<table className="table">
					<thead>
						<tr>
							<th>
								<input
									type="checkbox"
									onChange={handleAllSelect}
									checked={
										selectedUsers.length === config.pageSize ? true : false
									}
								/>
							</th>
							<th>Name</th>
							<th>Email</th>
							<th>Role</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody className="table-body">
						{data &&
							data.map((user) => {
								return (
									<User
										handleDelete={handleDelete}
										user={user}
										key={user.id}
										handleSave={handleSave}
										selectedUsers={selectedUsers}
										handleSelect={handleSelect}
									/>
								);
							})}
					</tbody>
				</table>
			) : (
				<h3 className="no-user">No Users</h3>
			)}
		</div>
	);
};

export default UserTable;
