<script lang="ts">
  import LogoMark from "./LogoMark.svelte";
  import { theme, toggleTheme } from "../lib/stores/theme";

  export let title: string = "IT Valley School Portal";
  export let subtitle: string = "Academia de Dados & IA • Pós-graduação • Oportunidades";
</script>

<header id="header" class="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur border-b border-gray-100 z-50">
  <div class="max-w-7xl mx-auto px-6 py-4">
    <div class="flex items-center justify-between gap-6">
      <div class="flex items-center gap-8">
        <div id="logo-section" class="flex items-center space-x-4">
          <LogoMark />
          <div>
            <h1 class="text-2xl font-bold text-gray-900 tracking-tight">{title}</h1>
            <p class="text-sm text-gray-600 font-medium">{subtitle}</p>
          </div>
        </div>

        <nav class="hidden md:flex items-center space-x-2 text-sm font-semibold text-gray-600">
          <a href="/" class="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">Início</a>
          <a href="/premios" class="px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">Prêmios</a>
        </nav>
      </div>
      <div id="user-section" class="flex items-center space-x-4">
        <button
          class="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
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
        <!-- <button class="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors" aria-label="Configurações">
          <i class="fas fa-cog text-gray-600"></i>
        </button> -->
        <!-- <div class="w-10 h-10 rounded-full bg-gradient-to-br from-purple-itvalue to-purple-light flex items-center justify-center">
          <i class="fas fa-user text-white text-sm"></i>
        </div> -->
      </div>
    </div>
  </div>
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
