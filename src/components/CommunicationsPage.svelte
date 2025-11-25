<script lang="ts">
  import Card from "./Card.svelte";
  import { comunicados } from "../data/comunicados.js";
</script>

<section id="page-title" class="mb-12 text-center">
  <h2 class="text-4xl font-bold text-primary mb-4">Comunicados</h2>
  <p class="subtitle text-lg font-medium max-w-2xl mx-auto">
    Convites, avisos importantes e oportunidades para alunos da IT Valley School.
  </p>
</section>

<section id="comunicados-list" class="space-y-6">
  {#each comunicados as comunicado (comunicado.id)}
    <Card
      titulo={comunicado.titulo}
      hashtags={comunicado.hashtags}
      texto={comunicado.texto}
      data={comunicado.data}
      buttonLabel={comunicado.buttonLabel}
      link={comunicado.link}
    />
  {/each}
</section>

<style>
  .text-primary {
    color: var(--text-color);
  }
  .subtitle {
    color: var(--muted-text);
  }
  @media (max-width: 640px) {
    #page-title h2 {
      font-size: 1.5rem;
    }
    .subtitle {
      font-size: 1rem;
    }
    #comunicados-list {
      gap: 1rem !important;
    }
  }
</style>
