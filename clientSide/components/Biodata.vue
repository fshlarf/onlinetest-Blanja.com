<template>
    <div class="">
        <h4 class="h4-biodata">Luke Skywalker</h4>
        <div class="container-biodata">
            <br>
            <div class="media">
                <div class="align-self-center mr-4">
                    <img class="img-biodata" src="../assets/images/image (2).png" alt="image not found">
                </div>
                <div class="media-body" align="left">
                    <p class="mb-1">Height: {{user.height + " cm"}} </p>
                    <p class="mb-1">Mass: {{ user.hair_color | capitalize }}</p>
                    <p class="mb-1">Hair Color: {{ user.skin_color | capitalize }}</p>
                    <p class="mb-1">Skin Color: {{ user.eye_color | capitalize }}</p>
                    <p class="mb-1">Birth Year: {{ user.birth_year }}</p>
                    <p class="mb-1">Gender: {{ user.gender | capitalize}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: []
    };
  },
  mounted() {
    axios
      .get("https://swapi.co/api/people/1", {
        crossDomain: true
      })
      .then(res => {
        this.user = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>


<style>
.h4-biodata {
  margin-bottom: 3vh;
}
.container-biodata {
  background-color: rgb(26, 25, 25);
  height: 36vh;
}
.img-biodata {
  background-color: rgb(124, 122, 122);
  padding-top: 8vh;
  padding-bottom: 8vh;
  padding-right: 3vw;
  padding-left: 3vw;
  margin-left: 2vw;
}
.media-body {
  color: white;
  padding-top: 10px;
}
.media {
  padding: 2vh;
}
@media (max-width: 350px) {
  .container-biodata {
    height: 34vh;
    padding-left: 4vw;
  }
  .media {
    padding: 0;
  }
}
@media (max-width: 800px) {
  .container-biodata {
    height: 34vh;
  }
  .img-biodata {
    padding-top: 7vh;
    padding-bottom: 7vh;
    padding-right: 8vw;
    padding-left: 8vw;
  }
  .media-body {
    padding-top: 0;
  }
}
</style>
