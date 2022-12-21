import axios from 'axios';

export const authClient = axios.create({
	baseURL: import.meta.env.BACKEND_URL as string,
	headers: {
		'X-Requested-With': 'XMLHttpRequest'
	},
	withCredentials: true // required to handle the CSRF token
});
