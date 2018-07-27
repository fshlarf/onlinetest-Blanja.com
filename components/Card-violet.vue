<template>
    <div class="module">
        <div class="card main-content">
            <img class="card-img-top violet" src="../assets/images/image (1).png" @click="toDetail" alt="Images not found">
            <div class="card-body violet">
                <nuxt-link class="nuxtlink-card" to="/details/empire-strikes">
                  <p class="card-text truncate"><b>{{film.title}}</b></p>
                </nuxt-link>
                <p class="card-text parent">Director:</p>
                <p class="card-text">{{film.director}}</p>
                <p class="card-text parent">Released:</p>
                <p class="card-text">{{film.release_date}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      film: [],
    };
  },
  mounted() {
    axios
      .get("https://swapi.co/api/films/2", {
        crossDomain: true
      })
      .then(res => {
        this.film = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    toDetail() {
      this.$router.replace({path: '/details/empire-strikes'})
    }
  }
};
</script>

<style>
/* Truncate */
.card-text.truncate {
  width: 165px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
@media (max-width: 350px) {
    .card-text.truncate {
    width:auto;
    white-space: normal;
    overflow:auto;
    text-overflow: unset;
  }
}
@media (max-width: 800px) {
    .card-text.truncate {
    width: auto;
    white-space:normal;
    overflow:auto;
    text-overflow:unset;
  }
}
</style>


