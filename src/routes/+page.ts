import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	return {
		'id': 'root',
		'type': 'logo',
	}
}