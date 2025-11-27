
<script>
  import { t } from '../../../lib/i18n';
  // Link do vídeo do Google Drive no modo "preview"
  const videoUrl = 'https://drive.google.com/file/d/1FalD9p_3k_Fota0vWFGGSamI7vTQod6-/preview';
</script>



<section class="video-section">
  <h1 class="video-title">{$t('video_pos_graduacoes')}</h1>
  <div class="video-container">
    <iframe
      src={videoUrl}
      width="100%"
      height="480"
      allow="autoplay; encrypted-media"
      allowfullscreen
      frameborder="0"
      title={$t('video_pos_graduacoes')}
    ></iframe>
  </div>
</section>


<style>
@media (max-width: 640px) {
  .video-section {
    padding: 0.5rem 0.1rem;
    border-radius: 0.7rem;
  }
  .video-title {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
  .video-container {
    max-width: 100vw;
    border-radius: 0.5rem;
    aspect-ratio: 16/9;
    min-height: unset;
  }
  iframe {
    min-height: 180px;
    border-radius: 0.5rem;
  }
}
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
