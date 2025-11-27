<script lang="ts">
  import { locale, type Locale } from '../lib/stores/locale';
  import { theme } from '../lib/stores/theme';
  import { onMount, onDestroy } from 'svelte';
  import { get } from 'svelte/store';


  export let className: string = '';
  export let options: { value: Locale; label: string }[] = [
    { value: 'pt-BR', label: 'Português (BR)' },
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'Français' }
  ];
  export let compact: boolean = false;

  let open = false;
  let selectEl: HTMLDivElement;

  function selectLocale(value: Locale) {
    locale.set(value);
    open = false;
  }


  function handleClickOutside(event: MouseEvent) {
    if (selectEl && !selectEl.contains(event.target as Node)) {
      open = false;
    }
  }

  onMount(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
</script>

<div class={`locale-select-wrapper ${className}`} bind:this={selectEl}>
  <button
    class="locale-btn {open ? 'active' : ''} {$theme === 'dark' ? 'dark' : ''} {compact ? 'compact' : ''}"
    type="button"
    aria-haspopup="listbox"
    aria-expanded={open}
    on:click={() => (open = !open)}
  >
    {options.find(o => o.value === $locale)?.label}
    {#if !compact}
      <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
    {/if}
  </button>
  {#if open}
    <ul class="locale-dropdown {$theme === 'dark' ? 'dark' : ''}" role="listbox">
      {#each options as opt}
        <li
          class="locale-option {opt.value === $locale ? 'selected' : ''}"
          role="option"
          aria-selected={opt.value === $locale}
          tabindex="0"
          on:click={() => selectLocale(opt.value)}
        >
          {opt.label}
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
.locale-select-wrapper {
  position: relative;
  display: inline-block;
}
  .locale-btn {
    min-width: 140px;
    padding: 0.5rem 1.2rem;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    background: #fff;
    color: #222;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: background 0.2s, color 0.2s, border 0.2s;
  }
  .locale-btn.compact {
    min-width: 0;
    width: 2.7rem;
    height: 2.1rem;
    font-size: 0.95rem;
    padding: 0.2rem 0.7rem;
    border-radius: 0.4rem;
    justify-content: center;
  }
.locale-btn.dark {
  background: #111;
  color: #fff;
  border: 1px solid #333;
}
.locale-btn.active, .locale-btn:focus {
  border-color: #888;
}
  .locale-dropdown {
    position: absolute;
    top: 110%;
    left: 0;
    min-width: 100%;
    background: rgba(255,255,255,0.90);
    color: #222;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
    z-index: 100;
    margin-top: 0.2rem;
    padding: 0.2rem 0;
  }
.locale-dropdown.dark {
  background: #111;
  color: #fff;
  border: 1px solid #333;
}
.locale-option {
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.15s, color 0.15s;
}
.locale-option.selected {
  font-weight: 700;
  background: #f3f4f6;
}
.locale-dropdown.dark .locale-option.selected {
  background: #222;
}
.locale-option:hover, .locale-option:focus {
  background: #e5e7eb;
}
.locale-dropdown.dark .locale-option:hover, .locale-dropdown.dark .locale-option:focus {
  background: #222;
}
</style>
