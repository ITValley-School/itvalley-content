<script lang="ts">
  import Header from "../components/Header.svelte";
  import PortalGrid from "../components/PortalGrid.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<svelte:head>
  <title>ItValley Portal</title>
</svelte:head>

<div class="relative min-h-screen overflow-hidden">
  <video
    class="absolute inset-0 w-full h-full object-cover -z-20"
    autoplay
    muted
    loop
    playsinline
    aria-hidden="true"
  >
    <source src="/images/trofeus/Futuro%20Digital%20IA.mp4" type="video/mp4" />
  </video>
  <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 -z-10"></div>

  <div class="relative">
    <Header />
    <main id="main-content" class="pt-32 pb-20 sm:pt-32 sm:pb-20 pt-20 pb-8">
      <div class="max-w-6xl mx-auto px-6 sm:px-6 px-2">
        <PortalGrid />
      </div>
    </main>
    <Footer />
  </div>

  <style>
    @media (max-width: 640px) {
      #main-content {
        padding-top: 6.5rem !important;
        padding-bottom: 2rem !important;
      }
    }
    @media (min-width: 641px) {
      #main-content {
        padding-top: 8.5rem !important;
      }
    }
  </style>
</div>
