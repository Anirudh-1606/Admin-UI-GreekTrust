const performSearch = (input, data) => {
	if (input === "") {
		return data;
	} else {
		let text = input.toLowerCase();
		const res = data.filter((user) => {
			if (
				user.name.toLowerCase().includes(text) ||
				user.email.toLowerCase().includes(text) ||
				user.role.toLowerCase().includes(text)
			) {
				return user;
			}
		});

		return res;
	}
};

export default performSearch;
