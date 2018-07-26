<template>
  <div>
    <Biodata/>
    <br>
    
    <div class="">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-8">
          <div style="margin-bottom: 1.5vh">
            <span style="color: red">
              Skywalker Movie's
            </span>
            <span style="float: right">
              <nuxt-link to='skywalker-movies'>see more</nuxt-link>
            </span>
          </div>
          <div class="autowide">
            <CardViolet/>
            <CardOrange/>
            <CardViolet/>
            <CardOrange/>
          </div>
        </div>

        <div class="col-md-4">
          <AnotherMovie/>
        </div>

      </div>
    </div> 
  </div>
</template>

<script>
import axios from 'axios'
import AnotherMovie from '~/components/AnotherMovie.vue'
import Biodata from '~/components/Biodata.vue'
import CardViolet from '~/components/Card-violet.vue'
import CardOrange from '~/components/Card-orange.vue'
export default {
  components: {
    Biodata,
    AnotherMovie,
    CardViolet,
    CardOrange,
  }
}
</script>

<style>
.subtitle {
  font-weight: 300;
  font-size: 42px;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
@media (max-width: 768px) {
  .card {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .card {
    width: 100%;
  }
}
body {
  font-family: sans-serif;
  font-size: 0.9rem;
}

</style>

