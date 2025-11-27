<script lang="ts">
  import LogoMark from "./LogoMark.svelte";
  import { theme, toggleTheme } from "../lib/stores/theme";
  import { locale, type Locale } from '../lib/stores/locale';
  import { t } from '../lib/i18n';
  import { onMount } from "svelte";
   import LocaleSelect from './LocaleSelect.svelte';
  let navOpen = false;

  // Removido export let title: string, não utilizado

  function changeLocale(event: Event) {
    const value = (event.target as HTMLSelectElement).value as Locale;
    locale.set(value);
  }
</script>

<header id="header" class="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur border-b border-gray-100 z-50">
  <div class="max-w-7xl mx-auto px-6 py-4">
    <div class="flex items-center justify-between gap-2 flex-nowrap w-full">
      <div class="flex items-center min-w-0 gap-2 flex-nowrap">
        <LogoMark />
        <h1 class="text-lg font-bold text-gray-900 tracking-tight truncate header-title">{$t('portal_title')}</h1>
      </div>
      <nav class="hidden md:flex items-center space-x-1 text-xs font-semibold text-gray-600 header-nav flex-nowrap">
        <a href="/" class="px-2 py-1 rounded hover:bg-gray-100 transition-colors">{$t('inicio')}</a>
        <a href="/premios" class="px-2 py-1 rounded hover:bg-gray-100 transition-colors">{$t('premios')}</a>
      </nav>
      <div class="flex items-center gap-1 flex-shrink-0 flex-nowrap">
        <LocaleSelect className="header-locale-select" options={[{ value: 'pt-BR', label: 'PT' }, { value: 'en', label: 'EN' }, { value: 'fr', label: 'FR' }]} compact={true} />
        <button
          class="theme-btn-header ml-1 p-1 rounded bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center"
          type="button"
          on:click={toggleTheme}
          aria-label="Alternar tema"
          style="min-width:unset;width:1.8rem;height:1.8rem;"
        >
          {#if $theme === "dark"}
            <i class="fas fa-sun text-amber-400 text-base"></i>
          {:else}
            <i class="fas fa-moon text-gray-600 text-base"></i>
          {/if}
        </button>
        <div class="md:hidden relative ml-1">
          <button
            class="p-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
            aria-label="Abrir menu"
            on:click={() => navOpen = !navOpen}
            style="width:2.1rem;height:2.1rem;"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
              style={navOpen ? 'color: #111' : ''}
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {#if navOpen}
            <div class="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-50 menu-mobile">
              <a href="/" class="block px-4 py-2 hover:bg-gray-100 rounded-t-lg text-black">{$t('inicio')}</a>
              <a href="/premios" class="block px-4 py-2 hover:bg-gray-100 text-black">{$t('premios')}</a>
            </div>
            <button
              type="button"
              class="fixed inset-0 z-40"
              style="background: transparent; border: none; padding: 0; margin: 0; cursor: default;"
              aria-label="Fechar menu"
              tabindex="0"
              on:click={() => navOpen = false}
              on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') navOpen = false; }}
            ></button>
          {/if}
        </div>
      </div>
      <style>
        .header-title {
          font-size: 1.1rem !important;
          line-height: 1.2;
          white-space: nowrap;
          margin-bottom: 0;
        }
        .header-nav a {
          font-size: 0.93rem;
          padding: 0.18rem 0.7rem;
        }
        .header-locale-select {
          min-width: 0;
          font-size: 0.85rem;
          padding: 0.1rem 0.4rem;
          background: none !important;
          color: inherit;
          border: none !important;
          height: auto;
          width: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: none !important;
        }
        .theme-btn-header {
          padding: 0.1rem 0.4rem !important;
          min-width: 1.5rem;
          height: 1.5rem;
          font-size: 0.95rem;
        }
        @media (max-width: 640px) {
          .header-title {
            font-size: 0.92rem !important;
            white-space: nowrap;
            margin-bottom: 0;
          }
          .header-nav a {
            font-size: 0.8rem;
            padding: 0.12rem 0.4rem;
          }
          .header-locale-select {
            font-size: 0.75rem;
            padding: 0.08rem 0.2rem;
          }
          .theme-btn-header {
            padding: 0.08rem 0.2rem !important;
            min-width: 1.1rem;
            height: 1.1rem;
            font-size: 0.8rem;
          }
        }
      </style>
    </div>
  </div>
  <style>
    :global([data-theme='dark']) .md\:hidden button[aria-label="Abrir menu"] svg[style*='#111'] path {
      stroke: #111 !important;
    }
    /* Garante letras pretas no menu mobile mesmo no modo dark */
    :global([data-theme='dark']) .menu-mobile a {
      color: #111 !important;
    }
    @media (max-width: 640px) {
      #header {
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      #logo-section {
        min-width: 0;
        max-width: 60vw;
      }
      #logo-section img, #logo-section .logo-wrapper {
        width: 2.2rem !important;
        height: 2.2rem !important;
        min-width: 2.2rem !important;
        min-height: 2.2rem !important;
      }
      #logo-section h1 {
        font-size: 0.95rem !important;
        max-width: 100%;
      }
    }
    :global([data-theme='dark']) .locale-select {
      background-color: #111 !important;
      color: #fff !important;
      border-color: #333 !important;
      box-shadow: none !important;
      appearance: none !important;
      -webkit-appearance: none !important;
      -moz-appearance: none !important;
    }
    :global([data-theme='dark']) .locale-select:focus {
      background-color: #222 !important;
      color: #fff !important;
      border-color: #555 !important;
      box-shadow: 0 0 0 2px #555 !important;
    }
    :global([data-theme='dark']) .locale-select option {
      background: #111 !important;
      color: #fff !important;
    }
  </style>
</header>

<style>
  :global([data-theme='dark'] #header) {
    background-color: rgba(2, 6, 23, 0.92);
    border-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 30px rgba(2, 6, 23, 0.45);
  }
  :global([data-theme='dark'] #header h1) {
    color: #f8fafc;
  }
  :global([data-theme='dark'] #header p) {
    color: #cbd5f5;
  }
  :global([data-theme='dark'] #header nav a:hover) {
    background-color: rgba(148, 163, 184, 0.2);
  }
  :global([data-theme='dark'] #header nav a) {
    color: #e2e8f0;
  }
  :global([data-theme='dark'] #user-section button) {
    background-color: rgba(148, 163, 184, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.05);
  }
</style>
