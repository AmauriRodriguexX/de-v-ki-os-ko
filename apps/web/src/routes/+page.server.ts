import type { PageServerLoad } from './$types';
import { loadPage } from '$lib/api/load';

export const load: PageServerLoad = ({ fetch }) => loadPage('home', fetch);
