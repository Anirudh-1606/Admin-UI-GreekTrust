import config from "../constants";
import axios from "axios";
<<<<<<< HEAD

=======
>>>>>>> 37a853cd0bf4d671ea79f19b1dd94cf3ea788a3d
const onLoad = async () => {
	try {
		const res = await axios.get(config.endpoint);
		return res;
	} catch (e) {
		console.log(e);
<<<<<<< HEAD
		window.alert(e.message);
=======
>>>>>>> 37a853cd0bf4d671ea79f19b1dd94cf3ea788a3d
	}
};

export default onLoad;
