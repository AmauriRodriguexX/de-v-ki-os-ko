import type { PageLoad } from './$types';
import { loadPage } from '$lib/api/load';

export const load: PageLoad = ({ fetch }) => loadPage('home', fetch);
