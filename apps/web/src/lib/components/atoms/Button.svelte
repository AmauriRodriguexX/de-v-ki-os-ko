<script lang="ts">
  import type { Snippet } from 'svelte';

  type Variant = 'primary' | 'danger' | 'encuentralo' | 'ghost';
  type Size = 'sm' | 'lg';

  let {
    variant = 'primary',
    size = 'lg',
    class: className = '',
    style = '',
    children,
    icon,
    ...rest
  }: {
    variant?: Variant;
    size?: Size;
    class?: string;
    style?: string;
    children: Snippet;
    icon?: Snippet;
    [key: string]: unknown;
  } = $props();

  const variants: Record<Variant, string> = {
    primary: 'background:#1387C7; color:#fff; font-weight:700; border:none',
    danger: 'background:#FF0200; color:#fff; font-weight:700; border:none',
    encuentralo: 'background:#FCD700; color:#1A1D2E; font-weight:700; border:none',
    ghost: 'background:transparent; color:#1387C7; border:2px solid #1387C7; font-weight:600'
  };
  const sizes: Record<Size, string> = {
    sm: 'padding:10px 20px; font-size:14px; border-radius:16px',
    lg: 'padding:16px 28px; font-size:16px; border-radius:16px'
  };
</script>

<button
  class={`inline-flex cursor-pointer items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-px ${className}`}
  style={`${variants[variant]}; ${sizes[size]}; ${style}`}
  {...rest}
>
  {#if icon}<span>{@render icon()}</span>{/if}
  {@render children()}
</button>
