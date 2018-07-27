<template>
  <div class="mt-3">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="card detail">
          <img src="~/assets/images/revenge_of_the_sith.jpg" alt="Card image cap" class="card-img-top">
          <div class="card-body">
            <h4 style="color: dodgerblue">{{film.title}}</h4>
            <p><small class="text-muted">Director: {{film.director}}</small></p>
            <p>{{film.opening_crawl}}</p>
            <nuxt-link to='/' style="float: right">
              <b>Back</b>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  transition: 'bounce',
  data() {
    return {
      film: []
    };
  },
  mounted() {
    axios
      .get("https://swapi.co/api/films/6", {
        crossDomain: true
      })
      .then(res => {
        this.film = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
.card.detail {
  width: 50%;
}
@media (max-width: 350px) {
  .card.detail {
    width: 100%;
  }
}
@media (max-width: 800px) {
  .card.detail {
    width: 100%;
  }
}
</style>
