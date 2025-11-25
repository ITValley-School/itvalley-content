<script lang="ts">
  export let titulo: string;
  export let hashtags: string[] = [];
  export let texto: string;
  export let data: string;
  export let buttonLabel: string = "Acessar";
  export let link: string | null = null;
</script>

<article class="card rounded-2xl p-8 transition-shadow">
  <h3 class="card-title text-xl font-bold mb-4">
    {titulo}
  </h3>

  {#if hashtags.length}
    <div class="flex flex-wrap gap-2 mb-4">
      {#each hashtags as tag}
        <span class="tag-pill">{tag}</span>
      {/each}
    </div>
  {/if}

  <p class="card-text leading-relaxed mb-6">
    {texto}
  </p>

  <div class="flex items-center justify-between">
    <span class="card-date text-sm font-medium">{data}</span>

    {#if link}
      <a
        href={link}
        class="px-6 py-2 bg-itvalley-purple text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
      >
        {buttonLabel}
      </a>
    {:else}
      <button
        type="button"
        class="px-6 py-2 bg-itvalley-purple text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
      >
        {buttonLabel}
      </button>
    {/if}
  </div>
</article>

<style>
  .card {
    background: var(--panel-bg);
    border: 1px solid var(--panel-border);
    box-shadow: var(--panel-shadow);
    padding: 2rem;
  }
  .card:hover {
    box-shadow: 0 25px 50px rgba(15, 23, 42, 0.2);
  }
  .card-title {
    color: var(--text-color);
  }
  .card-text {
    color: var(--muted-text);
  }
  .card-date {
    color: var(--muted-text);
  }
  .tag-pill {
    display: inline-flex;
    padding: 0.35rem 0.85rem;
    border-radius: 999px;
    background: var(--tag-bg);
    color: var(--tag-text);
    font-size: 0.85rem;
    font-weight: 600;
  }
  @media (max-width: 640px) {
    .card {
      padding: 1rem;
    }
    .card-title {
      font-size: 1.1rem;
    }
    .card-text {
      font-size: 0.98rem;
    }
    .tag-pill {
      font-size: 0.8rem;
      padding: 0.25rem 0.7rem;
    }
    .card-date {
      font-size: 0.85rem;
    }
    .px-6 {
      padding-left: 1rem !important;
      padding-right: 1rem !important;
    }
    .py-2 {
      padding-top: 0.5rem !important;
      padding-bottom: 0.5rem !important;
    }
  }
</style>
