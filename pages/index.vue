<template>
  <div>
    <Biodata/>
    <br>
    <div class="">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-8">
          <div>
            <span style="font-size: 20px; color: red">
              Skywalker Movie's
            </span>
            <span style="float: right">
              <nuxt-link to='skywalker-movies'>See More</nuxt-link>
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

