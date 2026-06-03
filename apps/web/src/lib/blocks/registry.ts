import type { Component } from 'svelte';
import HeroBlock from '$lib/components/blocks/HeroBlock.svelte';
import PromoSectionBlock from '$lib/components/blocks/PromoSectionBlock.svelte';
import CrossingPromosBlock from '$lib/components/blocks/CrossingPromosBlock.svelte';
import FeaturedProductsBlock from '$lib/components/blocks/FeaturedProductsBlock.svelte';
import GeolocSectionBlock from '$lib/components/blocks/GeolocSectionBlock.svelte';
import SocialFeedStripBlock from '$lib/components/blocks/SocialFeedStripBlock.svelte';
import YayaSectionBlock from '$lib/components/blocks/YayaSectionBlock.svelte';
import YayaDownloadBannerBlock from '$lib/components/blocks/YayaDownloadBannerBlock.svelte';
import WhatsAppNewsletterBlock from '$lib/components/blocks/WhatsAppNewsletterBlock.svelte';
import QuickAccessBlock from '$lib/components/blocks/QuickAccessBlock.svelte';
import ColumnsBlock from '$lib/components/blocks/ColumnsBlock.svelte';
import CtaBannerBlock from '$lib/components/blocks/CtaBannerBlock.svelte';

/**
 * Mapa: tipo de bloque de Strapi (`__component`) → componente Svelte.
 * Para añadir un bloque nuevo: créalo en components/blocks y regístralo aquí.
 */
export const registry: Record<string, Component<any>> = {
  'blocks.hero': HeroBlock,
  'blocks.promo-section': PromoSectionBlock,
  'blocks.crossing-promos': CrossingPromosBlock,
  'blocks.featured-products': FeaturedProductsBlock,
  'blocks.geoloc': GeolocSectionBlock,
  'blocks.social-feed': SocialFeedStripBlock,
  'blocks.yaya-section': YayaSectionBlock,
  'blocks.yaya-download-banner': YayaDownloadBannerBlock,
  'blocks.whatsapp-newsletter': WhatsAppNewsletterBlock,
  'blocks.quick-access': QuickAccessBlock,
  'blocks.columns': ColumnsBlock,
  'blocks.cta-banner': CtaBannerBlock
};
