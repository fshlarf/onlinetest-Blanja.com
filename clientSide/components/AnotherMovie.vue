<template>
    <div class="another-movie">
        <h6 style="color: red">Related Another Movies</h6>
        <div class="card another-movie">
            <div class="card-header another-movie">
                <h5 class="h5 another-movie">{{film.title}}</h5>
                <p class="p another-movie">Director: {{film.director}}</p>
                <p class="p another-movie">Producer: {{film.producer}}</p>
                <p class="p another-movie">Release Date: {{film.release_date}}</p>
            </div>
            <div class="card-body">
                <p>{{film.opening_crawl}}</p>
                <nuxt-link style="float: right" to="/another-movies">See More</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
export default {
    data() {
        return {
            film: []
        }
    },
    mounted() {
        axios.get('https://swapi.co/api/films/7/', {
            crossDomain: true
        })
        .then(res => {
            this.film = res.data;
        })
        .catch(err => {
            console.log(err);
        });
    }
}
</script>

<style>
.card-header.another-movie {
    background-color: rgb(26, 25, 25);
    color: white
}
.card.another-movie {
    margin-bottom: 5vh;
}
.h5.another-movie {
    line-height: 5vh;
}
.p.another-movie {
    margin-bottom: 0
}
</style>
