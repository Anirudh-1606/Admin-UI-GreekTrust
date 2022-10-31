<<<<<<< HEAD
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
=======
const performSearch = (input, data, setPage) => {
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
      setPage(1);
    }
    return res;
  }
>>>>>>> 37a853cd0bf4d671ea79f19b1dd94cf3ea788a3d
};

export default performSearch;
