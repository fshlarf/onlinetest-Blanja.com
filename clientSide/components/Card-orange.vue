<template>
    <div class="module">
        <div class="card main-content">
            <img class="card-img-top orange" src="../assets/images/image (1).png" alt="Card image cap">
            <div class="card-body orange">
                <nuxt-link class="nuxtlink-card" to="/details/revenge-ots">
                    <p class="card-text"><b>{{film.title}}</b></p>
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

