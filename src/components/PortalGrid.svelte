<script>
// @ts-nocheck
import Button from './Button.svelte';
import { t } from '../lib/i18n';
</script>
<section id="portal-grid" class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
  <div id="estagio-internacional-card" class="portal-card md:col-span-2">
    <div class="portal-header">
      <div class="portal-icon bg-gradient-to-br from-cyan-500 to-blue-700 text-white">
          <i class="fas fa-globe-americas text-2xl"></i>
      </div>
      <div>
        <h3 class="portal-title">{$t('estagio_internacional_title')}</h3>
        <p class="portal-description">{$t('estagio_internacional_desc')}</p>
      </div>
    </div>
    <div class="portal-action">
    </div>
  </div>

  <div id="academia-card" class="portal-card">
    <div class="portal-header">
      <div class="portal-icon bg-gradient-to-br from-blue-500 to-purple-600 text-white">
          <i class="fas fa-brain text-2xl"></i>
      </div>
      <div>
        <h3 class="portal-title">{$t('academia_title')}</h3>
        <p class="portal-description">{$t('academia_desc')}</p>
      </div>
    </div>
    <div class="portal-action">
      
      <Button
        className="portal-cta"
        href="/area_membros/video"
        styleType="Video"
      >
        <i class="fas fa-play-circle mr-2"></i>
        {$t('video_explicativo')}
      </Button>
      <Button
        className="portal-cta"
        href="https://potenza.memberkit.com.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fas fa-sign-in-alt mr-2"></i>
        {$t('fazer_login')}
      </Button>

    </div>
  </div>

  <div id="pos-graduacao-card" class="portal-card">
    <div class="portal-header">
      <div class="portal-icon bg-gradient-to-br from-purple-600 to-pink-500 text-white">
          <i class="fas fa-university text-2xl"></i>
      </div>
      <div>
        <h3 class="portal-title">{$t('posgraduacao_title')}</h3>
        <p class="portal-description">{$t('posgraduacao_desc')}</p>
      </div>
    </div>
    <div class="portal-action">
            <Button
              className="portal-cta"
              href="/pos_graduacoes/video"
              rel="noopener noreferrer"
              styleType="Video"
            >
              <i class="fas fa-play-circle mr-2"></i>
              {$t('video_explicativo')}
            </Button>
            <Button
              className="portal-cta"
              href="https://infoprod.platosedu.io/v2/lms/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fas fa-sign-in-alt mr-2"></i>
             {$t('area_aluno')}
            </Button>
    </div>
  </div>

  <div id="premios-card" class="portal-card">
    <div class="portal-header">
      <div class="portal-icon bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
          <i class="fas fa-trophy text-2xl"></i>
      </div>
      <div>
        <h3 class="portal-title">{$t('premios_title')}</h3>
        <p class="portal-description">{$t('premios_desc')}</p>
      </div>
    </div>
    <div class="portal-action">
      <Button className="portal-cta" href="/premios">
        {$t('acessar')} <i class="fas fa-arrow-right ml-2"></i>
      </Button>
    </div>
  </div>

  <div id="task-demand-card" class="portal-card">
    <div class="portal-header">
      <div class="portal-icon bg-gradient-to-br from-green-500 to-teal-500 text-white">
          <i class="fas fa-tasks text-2xl"></i>
      </div>
      <div>
        <h3 class="portal-title">{$t('taskdemand_title')}</h3>
        <p class="portal-description">{$t('taskdemand_desc')}</p>
      </div>
    </div>
    <div class="portal-action">
      <Button
        className="portal-cta"
        href="/taskdemand/video"
        rel="noopener noreferrer"
        styleType="Video"
      >
        <i class="fas fa-play-circle mr-2"></i>
        {$t('video_explicativo')}
      </Button>
      <Button
        className="portal-cta"
        href="https://taskdemand.itvalleyschool.com/login"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i class="fas fa-sign-in-alt mr-2"></i>
        {$t('fazer_login')}
      </Button>
    </div>
  </div>
</section>

<!-- Seção de Suporte e Comunidade -->
<section id="suporte-comunidade" class="mt-16 mb-8 w-full flex flex-col items-center">
  <div class="portal-card max-w-2xl w-full flex flex-col items-center gap-8" style="padding:2.5rem 2rem;">
    <h2 class="text-2xl font-bold flex items-center gap-2 mb-2" style="color: var(--text-color)">
      <i class="fas fa-hands-helping"></i>
      {$t('suporte_comunidade_title')}
    </h2>
    <p class="text-center mb-4" style="color: var(--muted-text)">{$t('suporte_comunidade_desc')}</p>
    <div class="flex flex-col sm:flex-row gap-6 w-full justify-center">
      <Button
        className="portal-cta flex-1 flex items-center justify-center text-lg"
        href="https://wa.me/554499161570"
        target="_blank"
        rel="noopener noreferrer"
        background="linear-gradient(135deg, #22c55e, #16a34a)"
        hoverBackground="linear-gradient(135deg, #16a34a, #22c55e)"
      >
        <i class="fab fa-whatsapp mr-2 text-xl"></i>
        {$t('suporte_aluno')}
      </Button>
      <Button
        className="portal-cta flex-1 flex items-center justify-center text-lg"
        href="https://chat.whatsapp.com/DfNfn2eME6E7GtV1omy0W2"
        target="_blank"
        rel="noopener noreferrer"
        background="linear-gradient(135deg, #fbbf24, #f59e42)"
        hoverBackground="linear-gradient(135deg, #f59e42, #fbbf24)"
      >
        <i class="fas fa-users mr-2 text-xl"></i>
        {$t('comunidade_ia')}
      </Button>
    </div>
  </div>
</section>

<style>
  .portal-card {
    border-radius: 1.5rem;
    background: var(--panel-bg);
    border: 1px solid var(--panel-border);
    box-shadow: var(--panel-shadow);
    padding: 2rem;
    min-height: 16rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden;
  }
  @media (max-width: 640px) {
    .portal-card {
      padding: 1rem;
      min-height: 10rem;
    }
    .portal-header {
      gap: 0.75rem;
    }
    .portal-icon {
      width: 40px;
      height: 40px;
      font-size: 1.25rem;
    }
    .portal-title {
      font-size: 1.1rem;
    }
    .portal-description {
      font-size: 0.95rem;
    }
    .portal-action {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
    }
    #suporte-comunidade .flex-col, #suporte-comunidade .flex {
      flex-direction: column !important;
      gap: 0.7rem !important;
    }
    .portal-cta {
      width: 100% !important;
      font-size: 1rem !important;
    }
  }
    .portal-card::before {
      content: "";
      position: absolute;
      inset: 0;
      opacity: 0.18;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }
    #estagio-internacional-card::before {
      background: radial-gradient(circle at top left, #22d3ee, transparent 55%);
    }
    #academia-card::before {
      background: radial-gradient(circle at top, #818cf8, transparent 60%);
    }
    #pos-graduacao-card::before {
      background: radial-gradient(circle at top, #ec4899, transparent 60%);
    }
    #premios-card::before {
      background: radial-gradient(circle at top, #fbbf24, transparent 60%);
    }
    #task-demand-card::before {
      background: radial-gradient(circle at top, #34d399, transparent 60%);
    }
  .portal-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 30px 50px rgba(15, 23, 42, 0.25);
  }
  .portal-header {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    flex-wrap: wrap;
  }
  .portal-icon {
    width: 64px;
    height: 64px;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.2);
  }
  .portal-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-color);
  }
  .portal-description {
    color: var(--muted-text);
    margin-top: 0.35rem;
  }
  .portal-action {
    margin-top: auto;
  }

</style>

