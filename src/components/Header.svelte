<script lang="ts">
  import LogoMark from "./LogoMark.svelte";
  import { theme, toggleTheme } from "../lib/stores/theme";
  import { onMount } from "svelte";
  let navOpen = false;

  export let title: string = "IT Valley School Portal";
</script>

<header id="header" class="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur border-b border-gray-100 z-50">
  <div class="max-w-7xl mx-auto px-6 py-4">
    <div class="flex items-center justify-between gap-6 flex-wrap">
      <div class="flex items-center gap-8 flex-wrap">
        <div id="logo-section" class="flex items-center space-x-4 min-w-0">
          <LogoMark />
          <div class="flex items-center gap-2 truncate">
            <h1 class="text-2xl font-bold text-gray-900 tracking-tight truncate">{title}</h1>
          </div>
        </div>

        <nav class="hidden md:flex items-center space-x-2 text-sm font-semibold text-gray-600">
          <a href="/" class="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">Início</a>
          <a href="/premios" class="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">Prêmios</a>
        </nav>
        <!-- Menu hambúrguer para telas pequenas -->
        <div class="md:hidden relative">
          <button
            class="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Abrir menu"
            on:click={() => navOpen = !navOpen}
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
              style={navOpen ? 'color: #111' : ''}
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {#if navOpen}
            <div class="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-50 menu-mobile">
              <a href="/" class="block px-4 py-2 hover:bg-gray-100 rounded-t-lg text-black">Início</a>
              <a href="/premios" class="block px-4 py-2 hover:bg-gray-100 text-black">Prêmios</a>
            </div>
            <div class="fixed inset-0 z-40" style="background: transparent;" on:click={() => navOpen = false}></div>
          {/if}
        </div>
      </div>
      <div class="flex items-center">
        <button
          class="ml-2 p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
          type="button"
          on:click={toggleTheme}
          aria-label="Alternar tema"
        >
          {#if $theme === "dark"}
            <i class="fas fa-sun text-amber-400"></i>
          {:else}
            <i class="fas fa-moon text-gray-600"></i>
          {/if}
        </button>
      </div>
    </div>
  </div>
  <style>
    /* Barrinhas do hambúrguer pretas quando aberto, inclusive no modo dark */
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
