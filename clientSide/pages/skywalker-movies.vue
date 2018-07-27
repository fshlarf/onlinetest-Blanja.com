<template>
  <div class="mt-3">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="card detail">
            <TheForceAwakens/>
            <TheEmpireStrikesBack/>
            <RevengeOfTheSith/>
            <ReturnOfTheJedi/>
            <AnewHope/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheEmpireStrikesBack from '~/components/SkywalkerMovies/TheEmpireStrikesBack.vue'
import RevengeOfTheSith from '~/components/SkywalkerMovies/RevengeOfTheSith.vue'
import ReturnOfTheJedi from '~/components/SkywalkerMovies/ReturnOfTheJedi.vue'
import AnewHope from '~/components/SkywalkerMovies/AnewHope.vue'
import TheForceAwakens from '~/components/SkywalkerMovies/TheForceAwakens.vue'
export default {
    layout: 'navigation-footer',
    components: {
        TheEmpireStrikesBack,
        RevengeOfTheSith,
        ReturnOfTheJedi,
        AnewHope,
        TheForceAwakens
    }
}
</script>