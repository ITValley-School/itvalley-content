<svelte:head>
  <title>Prêmios &amp; Troféus • ItValley Portal</title>
</svelte:head>

<div class="min-h-screen flex flex-col transition-colors relative overflow-hidden">
  <video class="background-video" autoplay loop muted playsinline>
    <source src="/images/trofeus/Glória%20e%20Reconhecimento.mp4" type="video/mp4" />
    Seu navegador não suporta vídeo em background.
  </video>
  <div class="content-overlay">
    
    <main class="flex-1 flex items-center justify-center">
      <div class="main-content">
        <section class="text-center mb-16 section-light-text">
          
          <h2 class="title big-title">Premiações</h2>
          <p class="lead big-lead">
            Escolha entre as conquistas focadas em Inteligência Artificial ou os destaques da trilha de Dados.
          </p>
        </section>

        <section class="text-center mb-6 section-light-text">
        <p class="eyebrow">Selecione a trilha</p>
        </section>
        
        <section class="grid gap-12 md:grid-cols-2">
          <a href="/premios/ia" class="cta-card ia big-card">
            <div>
              <p class="eyebrow">Categoria</p>
              <h3 class="big-h3">Inteligência Artificial</h3>
              <p class="big-p">Reconhecimentos para quem domina pipelines, agentes e produtos completos de IA.</p>
            </div>
            <span>Ver Placas</span>
          </a>

          <a href="/premios/dados" class="cta-card dados big-card">
            <div>
              <p class="eyebrow">Categoria</p>
              <h3 class="big-h3">Dados &amp; Analytics</h3>
              <p class="big-p">Reconhecimentos para projetos de dados, engenharia e visualização.</p>
            </div>
            <span>Ver Placas</span>
          </a>
        </section>
      </div>
    </main>
   
  </div>
</div>
<style>
    @media (max-width: 640px) {
      .main-content {
        padding: 1rem 0.25rem;
      }
      .section-light-text .title,
      .section-light-text .big-title {
        font-size: 2rem !important;
      }
      .lead, .big-lead {
        font-size: 1rem !important;
      }
      .cta-card, .big-card {
        min-height: 180px;
        padding: 1.2rem 0.7rem;
        gap: 1rem;
      }
      .cta-card h3, .big-h3 {
        font-size: 1.2rem !important;
      }
      .cta-card p, .big-p {
        font-size: 0.95rem !important;
      }
      .cta-card span {
        font-size: 0.95rem !important;
      }
      .eyebrow {
        font-size: 0.85rem;
      }
    }
  .background-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: 0;
    pointer-events: none;
    filter: brightness(0.45) blur(1.5px);
    background: #000;
  }
  .content-overlay {
    position: relative;
    z-index: 1;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .main-content {
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.3em;
    font-size: 1rem;
    color: var(--muted-text);
  }
  .title {
    font-size: clamp(2.5rem, 7vw, 4.5rem);
    margin: 1.5rem 0 1rem 0;
    font-weight: 800;
  }
  .big-title {
    font-size: clamp(3rem, 8vw, 5.5rem);
  }
  .lead {
    color: var(--muted-text);
    max-width: 700px;
    margin: 0 auto;
    font-size: 1.35rem;
  }
  .big-lead {
    font-size: 1.5rem;
    max-width: 800px;
  }
  .cta-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    padding: 3rem 2.5rem;
    border-radius: 2rem;
    border: 1px solid var(--panel-border);
    text-decoration: none;
    color: var(--text-color);
    background: var(--panel-bg);
    box-shadow: var(--panel-shadow);
    position: relative;
    overflow: hidden;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
    align-items: center;
    min-height: 260px;
  }
  .big-card {
    min-height: 320px;
    padding: 3.5rem 2.5rem;
  }
  .cta-card::after {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0.4;
    pointer-events: none;
    transition: opacity 0.25s ease;
  }
  .cta-card h3 {
    font-size: 2rem;
    margin: 0.75rem 0;
    font-weight: 700;
  }
  .big-h3 {
    font-size: 2.5rem;
  }
  .cta-card p {
    color: var(--muted-text);
    font-size: 1.1rem;
  }
  .big-p {
    font-size: 1.25rem;
  }
  .cta-card span {
    font-weight: 700;
    letter-spacing: 0.07em;
    font-size: 1.1rem;
  }
  .cta-card:hover {
    transform: translateY(-8px) scale(1.03);
    border-color: rgba(255, 255, 255, 0.45);
    box-shadow: 0 30px 60px rgba(15, 23, 42, 0.22);
  }
  .cta-card.ia {
    border-color: rgba(129, 140, 248, 0.5);
  }
  .cta-card.ia::after {
    background: radial-gradient(circle at top, rgba(129, 140, 248, 0.55), transparent 60%);
  }
  .cta-card.dados {
    border-color: rgba(45, 212, 191, 0.5);
  }
  .cta-card.dados::after {
    background: radial-gradient(circle at top, rgba(45, 212, 191, 0.55), transparent 60%);
  }

.section-light-text,
.section-light-text .eyebrow,
.section-light-text .title,
.section-light-text .big-title,
.section-light-text .lead,
.section-light-text .big-lead {
  color: #fff !important;
  text-shadow: 0 2px 16px rgba(0,0,0,0.18), 0 1px 2px rgba(0,0,0,0.12);
}

</style>


