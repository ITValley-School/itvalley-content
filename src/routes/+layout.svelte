<script>
  import Chatbot from '../components/Chatbot.svelte';
  import { onMount } from 'svelte';
  let showChat = false;

  onMount(() => {
    const timer = setTimeout(() => {
      showChat = true;
    }, 10000);
    return () => clearTimeout(timer);
  });
</script>


<slot />

<!-- Botão flutuante -->
<button
  on:click={() => showChat = !showChat}
  style="
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 1000;
    background: #1976d2;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 56px;
    height: 56px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    font-size: 2rem;
    cursor: pointer;
  "
  aria-label="Abrir chatbot"
>
  💬
</button>

{#if showChat}
  <div style="
    position: fixed;
    bottom: 5.5rem;
    right: 2rem;
    z-index: 1001;
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.18);
    padding: 0.5rem;
  ">
    <Chatbot />
  </div>
{/if}
