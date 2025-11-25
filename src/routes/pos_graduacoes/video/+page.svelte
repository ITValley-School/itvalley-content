<script>
  import Header from '../../../components/Header.svelte';
  import Footer from '../../../components/Footer.svelte';
  // Link do vídeo do Google Drive no modo "preview"
  const videoUrl = 'https://drive.google.com/file/d/1FalD9p_3k_Fota0vWFGGSamI7vTQod6-/preview';
</script>

<Header />

<section class="video-section">
  <h1 class="video-title">Vídeo Especial - Pós Graduações</h1>
  <div class="video-container">
    <iframe
      src={videoUrl}
      width="100%"
      height="480"
      allow="autoplay; encrypted-media"
      allowfullscreen
      frameborder="0"
      title="Vídeo Especial Prêmios"
    ></iframe>
  </div>
</section>

<Footer />

<style>
body, .video-section {
  min-height: 100vh;
}
.video-section {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  background: var(--panel-bg, #fff);
  border-radius: 1.5rem;
  box-shadow: var(--panel-shadow, 0 4px 24px rgba(0,0,0,0.08));
}
.video-title {
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: var(--text-color, #222);
  text-align: center;
}
.video-container {
  width: 100%;
  max-width: 1100px;
  aspect-ratio: 16/9;
  background: #000;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
iframe {
  width: 100%;
  height: 100%;
  min-height: 480px;
  max-height: 70vh;
  border: none;
  border-radius: 1rem;
}
</style>
