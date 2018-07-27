<template>
    <div>
        <img src="~/assets/images/Return-of-the-Jedi.jpg" alt="Card image cap" class="card-img-top">
        <div class="card-body">
            <h4 style="color: dodgerblue">{{film.title}}</h4>
            <p><small class="text-muted">Director: {{film.director}}</small></p>
            <p>{{film.opening_crawl}}</p>
            <br>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      film: []
    };
  },
  mounted() {
    axios
      .get("https://swapi.co/api/films/3", {
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
