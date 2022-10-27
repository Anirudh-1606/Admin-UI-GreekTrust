import config from "../constants";
import axios from "axios";
const onLoad = async () => {
	try {
		const res = await axios.get(config.endpoint);
		return res;
	} catch (e) {
		console.log(e);
	}
};

export default onLoad;
