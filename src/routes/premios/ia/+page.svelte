
<script lang="ts">
  import AwardsPage from "../../../components/AwardsPage.svelte";
  import { t } from '../../../lib/i18n';
</script>

<svelte:head>
  <title>{$t('premios_ia_titulo')} • ItValley Portal</title>
</svelte:head>

<div class="min-h-screen transition-colors">
  
  <main class="pt-32 pb-16">
    <div class="max-w-5xl mx-auto px-6">
      <AwardsPage
        area="IA"
        titulo={$t('premios_ia_titulo')}
        descricao={$t('premios_ia_desc')}
      />
    </div>
  </main>
  
</div>
