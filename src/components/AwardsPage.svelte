<script lang="ts">
  import AwardCard from "./AwardCard.svelte";
  import { trofeus } from "../data/trofeus.js";

  export let area: string | null = null;
  export let titulo: string = "Prêmios & Troféus ItValley";
  export let descricao: string =
    "Destaques para os alunos que publicam soluções completas e elevam o padrão técnico da comunidade.";

  const filtered = area ? trofeus.filter((trofeu) => trofeu.area === area) : trofeus;
</script>

<section class="hero">
  <p class="eyebrow">Reconhecimento oficial</p>
  <h2>{titulo}</h2>
  <p class="lead">{descricao}</p>
  {#if area}
    <span class="category-pill">Categoria: {area}</span>
  {/if}
</section>

{#if filtered.length}
  <section class="awards-list">
    {#each filtered as trofeu (trofeu.id)}
      <AwardCard
        destaque={trofeu.destaque}
        titulo={trofeu.titulo}
        descricao={trofeu.descricao}
        imagem={trofeu.imagem}
        tags={trofeu.tags}
      />
    {/each}
  </section>
{:else}
  <p class="empty-state">Nenhum troféu cadastrado para esta categoria ainda.</p>
{/if}

<style>
    @media (max-width: 640px) {
      .hero {
        padding: 1.5rem 0.5rem 1rem;
      }
      h2 {
        font-size: 1.2rem !important;
      }
      .lead {
        font-size: 0.98rem !important;
      }
      .category-pill {
        font-size: 0.75rem;
        padding: 0.3rem 0.7rem;
      }
      .awards-list {
        gap: 0.7rem;
      }
    }
  .hero {
    text-align: center;
    padding: 3rem 1rem 2rem;
    color: var(--text-color);
  }
  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.3em;
    font-size: 0.8rem;
    color: var(--muted-text);
  }
  h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    margin: 0.75rem 0;
  }
  .lead {
    max-width: 680px;
    margin: 0 auto;
    color: var(--muted-text);
  }
  .category-pill {
    display: inline-flex;
    margin-top: 1rem;
    padding: 0.4rem 1rem;
    border-radius: 999px;
    border: 1px solid var(--panel-border);
    color: var(--text-color);
    font-size: 0.85rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
  .awards-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .empty-state {
    text-align: center;
    color: var(--muted-text);
    padding: 3rem 0 4rem;
    font-size: 1rem;
  }
</style>
