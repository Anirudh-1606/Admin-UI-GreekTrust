import React from "react";
import "./UserTable.css";
import User from "../UserRow/User";
import Table from "react-bootstrap/Table";
const UserTable = ({
	data,
	handleAllSelect,
	selectedUsers,
	handleDelete,
	handleSave,
	handleSelect,
	validateEdit,
}) => {
	return (
		<div>
			{data.length ? (
				<Table responsive className="table-hover">
					<thead>
						<tr>
							<th>
								<input
									type="checkbox"
									onChange={handleAllSelect}
									checked={selectedUsers.length === data.length ? true : false}
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
										validateEdit={validateEdit}
									/>
								);
							})}
					</tbody>
				</Table>
			) : (
				<h3 className="no-user">No Users</h3>
			)}
		</div>
	);
};

export default UserTable;
