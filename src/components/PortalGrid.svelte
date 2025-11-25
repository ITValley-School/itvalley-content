<section id="portal-grid" class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
  <div id="estagio-internacional-card" class="portal-card md:col-span-2">
    <div class="portal-header">
      <div class="portal-icon bg-gradient-to-br from-cyan-500 to-blue-700 text-white">
          <i class="fas fa-globe-americas text-2xl"></i>
      </div>
      <div>
        <h3 class="portal-title">Estágio Internacional</h3>
        <p class="portal-description">Participe de projetos reais com empresas internacionais - sem sair de casa. Quando o aluno pode participar? A partir do mês 6 de pós-graduação, o aluno já pode participar de projetos do estágio, para construir um portfólio forte, atualizado e alinhado ao que o mercado internacional exige. Nossa ferramenta oficial para gestão das demandas do estágio é o Task Demand.</p>
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
        <h3 class="portal-title">Academia de Dados &amp; IA</h3>
        <p class="portal-description">As academias são cursos que constituem trilhas práticas, que vão do básico ao avançado, com projetos reais e robustos que preparam você para atuar com segurança nas principais demandas do mercado. A cada curso finalizado, o aluno recebe um certificado em seu e-mail.</p>
      </div>
    </div>
    <div class="portal-action">
      
      <a
        class="portal-cta"
        href="https://potenza.memberkit.com.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fas fa-play-circle mr-2"></i>
        Vídeo Explicativo
      </a>

      <a
        class="portal-cta"
        href="https://potenza.memberkit.com.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fas fa-sign-in-alt mr-2"></i>
        Fazer Login
      </a>

    </div>
  </div>

  <div id="pos-graduacao-card" class="portal-card">
    <div class="portal-header">
      <div class="portal-icon bg-gradient-to-br from-purple-600 to-pink-500 text-white">
          <i class="fas fa-university text-2xl"></i>
      </div>
      <div>
        <h3 class="portal-title">Pós-graduação ItValley</h3>
        <p class="portal-description">Nossas pós-graduações são em parceria com a Anhanguera, instituição de ensino superior que garante certificados chancelados pelo MEC. As pós-graduações são atualizadas para profissionais de TI que querem dominar IA, Machine Learning, Engenharia de Dados e tecnologias globais. </p>
      </div>
    </div>
    <div class="portal-action">
            <a
        class="portal-cta"
        href="https://infoprod.platosedu.io/v2/lms/login"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fas fa-play-circle mr-2"></i>
        Vídeo Explicativo
      </a>

      <a
        class="portal-cta"
        href="https://infoprod.platosedu.io/v2/lms/login"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fas fa-sign-in-alt mr-2"></i>
       Área do aluno
      </a>
    </div>
  </div>

  <div id="premios-card" class="portal-card">
    <div class="portal-header">
      <div class="portal-icon bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
          <i class="fas fa-trophy text-2xl"></i>
      </div>
      <div>
        <h3 class="portal-title">Prêmios &amp; Troféus</h3>
        <p class="portal-description">Certificados e placas de premiação
        Ao finalizar um projeto do estágio internacional remoto, o aluno poderá solicitar seu certificado - assinado pelo dono ou gestor da empresa. Outros projetos também podem entregar placas de premiação, conforme aviso prévio da IT Valley School. Participe, publique no LinkedIn (não se esqueça de marcar a IT Valley School) e aumente sua visibilidade com conquistas reconhecidas pelo mercado.</p>
      </div>
    </div>
    <div class="portal-action">
      <a href="/premios" class="portal-cta">
        Acessar <i class="fas fa-arrow-right ml-2"></i>
      </a>
    </div>
  </div>

  <div id="task-demand-card" class="portal-card">
    <div class="portal-header">
      <div class="portal-icon bg-gradient-to-br from-green-500 to-teal-500 text-white">
          <i class="fas fa-tasks text-2xl"></i>
      </div>
      <div>
        <h3 class="portal-title">Task Demand</h3>
        <p class="portal-description">O Task Demand é a plataforma oficial da IT Valley School para gerir as demandas do Estágio Internacional Remoto. Ali, as empresas inserem seus projetos e o aluno envia as demandas do(s) projeto(s) que escolheu. Você pode acessar, participar e construir experiência internacional de verdade.</p>
      </div>
    </div>
    <div class="portal-action">
            <a
        class="portal-cta"
        href="https://infoprod.platosedu.io/v2/lms/login"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fas fa-play-circle mr-2"></i>
        Vídeo Explicativo
      </a>

      <a
        class="portal-cta"
        href="https://taskdemand.itvalleyschool.com/login"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fas fa-sign-in-alt mr-2"></i>
       Fazer Login
      </a>
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
  .portal-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    padding: 0.85rem 1.75rem;
    border-radius: 999px;
    font-weight: 600;
    background: linear-gradient(135deg, #8b5cf6, #a855f7);
    color: #fff;
    border: none;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    text-decoration: none;
  }
  .portal-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 25px rgba(168, 85, 247, 0.35);
  }
</style>

