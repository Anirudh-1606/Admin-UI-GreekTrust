const performSearch = (input, data, setpage) => {
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
		if (res.length) {
			setpage(1);
		}

		return res;
	}
};

export default performSearch;
