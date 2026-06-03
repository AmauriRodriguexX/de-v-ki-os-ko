import type { LayoutLoad } from './$types';

const AB_KEY = 'ab_locations';
const VARIANTS = ['sucursales', 'ubicaciones'] as const;
type Variant = (typeof VARIANTS)[number];

/**
 * Prueba A/B: nombre de la sección de tiendas.
 * En modo estático (GitHub Pages) se persiste en localStorage.
 */
export const load: LayoutLoad = () => {
  let variant: Variant | null = null;

  if (typeof localStorage !== 'undefined') {
    variant = localStorage.getItem(AB_KEY) as Variant | null;
  }

  if (variant !== 'sucursales' && variant !== 'ubicaciones') {
    variant = Math.random() < 0.5 ? 'sucursales' : 'ubicaciones';
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(AB_KEY, variant);
    }
  }

  const locationsLabel = variant === 'ubicaciones' ? 'Ubicaciones' : 'Sucursales';
  const locationsLabelSingular = variant === 'ubicaciones' ? 'Ubicación' : 'Sucursal';

  return { ablocations: variant, locationsLabel, locationsLabelSingular };
};
