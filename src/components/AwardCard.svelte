<script lang="ts">
  export let destaque: string;
  export let titulo: string;
  export let descricao: string;
  export let imagem: string;
  export let tags: string[] = [];
</script>

<article class="award-card">
  <div class="image-wrapper">
    <img src={imagem} alt={`Troféu ${titulo}`} loading="lazy" />
  </div>
  <div class="content">
    <p class="pill">{destaque}</p>
    <h3>{titulo}</h3>
    <p class="description">{descricao}</p>
    {#if tags.length}
      <div class="tags">
        {#each tags as tag}
          <span>{tag}</span>
        {/each}
      </div>
    {/if}
  </div>
</article>

<style>
    @media (max-width: 640px) {
      .award-card {
        padding: 0.7rem;
        grid-template-columns: 1fr;
        gap: 0.7rem;
      }
      .content h3 {
        font-size: 1.05rem;
      }
      .description {
        font-size: 0.95rem;
      }
      .pill {
        font-size: 0.7rem;
        padding: 0.25rem 0.5rem;
      }
      .tags span {
        font-size: 0.7rem;
        padding: 0.25rem 0.5rem;
      }
    }
  .award-card {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.25rem;
    padding: 1.5rem;
    border-radius: 1.25rem;
    background: var(--panel-bg);
    backdrop-filter: blur(8px);
    border: 1px solid var(--panel-border);
    box-shadow: var(--panel-shadow);
  }
  .image-wrapper {
    border-radius: 1rem;
    overflow: hidden;
    border: 1px solid var(--panel-border);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .content h3 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    color: var(--text-color);
  }
  .description {
    color: var(--muted-text);
    margin-bottom: 1rem;
  }
  .pill {
    display: inline-flex;
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    background: var(--pill-bg);
    color: var(--pill-text);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 0.75rem;
    font-size: 0.75rem;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .tags span {
    padding: 0.35rem 0.65rem;
    border-radius: 0.6rem;
    background: var(--tag-bg);
    color: var(--tag-text);
    font-size: 0.8rem;
  }
</style>
