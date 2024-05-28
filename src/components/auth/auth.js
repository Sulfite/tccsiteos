import { isNUllorEmpty } from '../../_ultils/Ultils';

export const isAuthenticated = () => {

	const token = localStorage.getItem('token');

	if (isNUllorEmpty(token))
		return false;

	return true;
}