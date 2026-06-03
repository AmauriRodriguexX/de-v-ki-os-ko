import type { LayoutServerLoad } from './$types';

const AB_COOKIE = 'ab_locations';
const VARIANTS = ['sucursales', 'ubicaciones'] as const;
type Variant = (typeof VARIANTS)[number];

/**
 * Prueba A/B: nombre de la sección de tiendas → "Sucursales" vs "Ubicaciones".
 * La variante se asigna 50/50 la primera visita y se persiste en cookie (90 días),
 * por lo que el SSR y el cliente coinciden (sin parpadeo).
 */
export const load: LayoutServerLoad = async ({ cookies }) => {
  let variant = cookies.get(AB_COOKIE) as Variant | undefined;

  if (variant !== 'sucursales' && variant !== 'ubicaciones') {
    variant = Math.random() < 0.5 ? 'sucursales' : 'ubicaciones';
    cookies.set(AB_COOKIE, variant, {
      path: '/',
      maxAge: 60 * 60 * 24 * 90,
      httpOnly: false,
      sameSite: 'lax'
    });
  }

  const locationsLabel = variant === 'ubicaciones' ? 'Ubicaciones' : 'Sucursales';
  const locationsLabelSingular = variant === 'ubicaciones' ? 'Ubicación' : 'Sucursal';

  return { abLocations: variant, locationsLabel, locationsLabelSingular };
};
