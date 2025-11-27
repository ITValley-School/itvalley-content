<script>
  export let href = '';
  export let target = '';
  export let rel = '';
  export let type = 'button';
  export let onClick = null;
  export let className = '';
  export let style = '';
  export let background = '';
  export let hoverBackground = '';
  export let styleType = null; // null = padrão, 'Video' = botão vídeo

  import { theme } from '../lib/stores/theme';


  // Definições de cor para o tipo 'Video'
  const videoBg = 'linear-gradient(135deg, #2563eb, #38bdf8)';
  const videoHover = 'linear-gradient(135deg, #38bdf8, #2563eb)';

  let computedStyle = style;
  $: computedStyle = background
    ? `${style};background:${background}`
    : styleType === 'Video'
      ? `${style};background:${videoBg}`
      : style;
  let isHovered = false;
  function handleMouseOver() { isHovered = true; }
  function handleMouseOut() { isHovered = false; }
  function handleFocus() { isHovered = true; }
  function handleBlur() { isHovered = false; }
  $: hoverStyle = (isHovered && (hoverBackground || styleType === 'Video'))
    ? `${style};background:${hoverBackground || videoHover}`
    : computedStyle;
</script>

{#if href}
  <a
    href={href}
    target={target}
    rel={rel}
    class={className + ($theme === 'dark' ? ' dark-btn' : '')}
    style={hoverStyle}
    on:click={onClick}
    on:mouseover={handleMouseOver}
    on:mouseout={handleMouseOut}
    on:focus={handleFocus}
    on:blur={handleBlur}
  >
    <slot />
  </a>
{:else}
  <button
    type={type === 'submit' ? 'submit' : type === 'reset' ? 'reset' : 'button'}
    class={className + ($theme === 'dark' ? ' dark-btn' : '')}
    style={hoverStyle}
    on:click={onClick}
    on:mouseover={handleMouseOver}
    on:mouseout={handleMouseOut}
    on:focus={handleFocus}
    on:blur={handleBlur}
  >
    <slot />
  </button>
{/if}

<style>
  a, button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    padding: 0.85rem 1.75rem;
    border-radius: 999px;
    font-weight: 600;
    background: linear-gradient(135deg, #8b5cf6, #a855f7);
    color: #fff;
    border: none;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    text-decoration: none;
  }
  a:hover, button:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 25px rgba(168, 85, 247, 0.35);
  }
  .dark-btn {
    background: #111 !important;
    color: #fff !important;
    border: 1px solid #333;
  }
  .dark-btn:hover {
    background: #222 !important;
    color: #fff !important;
    box-shadow: 0 15px 25px rgba(0,0,0,0.35);
  }
  :global([data-theme='dark']) button,
  :global([data-theme='dark']) a {
    color: #fff !important;
  }
</style>
