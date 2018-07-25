<template>
    <div class="container">
        <h4 class="h4-biodata">Luke Skywalker</h4>
        <div class="container cont-biodata">
            <br>
            <div class="media">
                <div class="align-self-center mr-4">
                    <img class="img-biodata" src="../assets/images/image (2).png" alt="image not found">
                </div>
                <div class="media-body" align="left">
                    <p class="mb-1">Height: {{user.height + " cm"}} </p>
                    <p class="mb-1">Mass: {{ user.hair_color }}</p>
                    <p class="mb-1">Hair Color: {{ user.skin_color }}</p>
                    <p class="mb-1">Skin Color: {{ user.eye_color }}</p>
                    <p class="mb-1">Birth Year: {{ user.birth_year }}</p>
                    <p class="mb-1">Gender: {{ user.gender }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
   data() {
       return{
           user:[]
       }
   },
   mounted() {
       axios.get('https://swapi.co/api/people/1/', {
           crossDomain: true
       }).then(res => {
           this.user = res.data;
       }).catch(err => {
           console.log(err)
       })
   }
}
</script>


<style>
.h4-biodata {
    margin-bottom: 3vh;
}
.container.cont-biodata {
    background-color: rgb(26, 25, 25);
    height: 32vh;
}
.img-biodata {
    background-color: rgb(124, 122, 122);
    padding-top: 8vh;
    padding-bottom: 8vh;
    padding-right: 3vw;
    padding-left: 3vw;
}
.media-body {
    color: white
}
@media (max-width:350px) {
     .container.cont-biodata {
        height: 38vh;
    }
}
@media (max-width:800px) {
        .img-biodata {
        padding-top: 7vh;
        padding-bottom: 7vh;
        padding-right: 7vw;
        padding-left: 7vw;
    }
}
@media (max-width:2000px) {
        .img-biodata {
        padding-top: 8vh;
        padding-bottom: 8vh;
        padding-right: 3vw;
        padding-left: 3vw;
    }
}
</style>
