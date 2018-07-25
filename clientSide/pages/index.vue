<template>
  <div>
    <Biodata/>
    <br>
    <div class="container ">
      
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
            <div class="module">
              <p><img src="http://ximg.es/60/666666/ffffff&text=1" alt="" />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sequi sint ipsa alias amet. Numquam voluptatum maiores. Ab repellat dolores quo quas quam quasi voluptatem delectus aperiam. Deleniti accusamus dolore!</p>
            </div>
            <div class="module">
              <p><img src="http://ximg.es/60/666666/ffffff&text=2" alt="" />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quis veniam accusantium molestias rerum distinctio a quidem numquam illo veritatis recusandae odit consectetur esse nobis alias earum quia omnis sed!</p>
            </div>
            <div class="module">
              <p><img src="http://ximg.es/60/666666/ffffff&text=3" alt="" />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem repellendus pariatur esse vel ex iure id sunt voluptatibus atque ut commodi ad aliquam assumenda. Facilis soluta cumque mollitia officiis dolorum!</p>
            </div>
            <div class="module">
              <p><img src="http://ximg.es/60/666666/ffffff&text=4" alt="" />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis harum suscipit ducimus quisquam doloremque dolorum tenetur dolore libero optio quam delectus blanditiis dicta fuga impedit commodi adipisci aperiam?</p>
            </div>
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
import axios from "axios";
import AnotherMovie from "~/components/AnotherMovie.vue";
import Biodata from "~/components/Biodata.vue";
export default {
  components: {
    Biodata,
    AnotherMovie
  },
  data() {
    return {};
  },
  mounted() {
    // axios.get("https://swapi.co/api/people/1/", {
    //     crossDomain: true
    //   })
    //   .then(res => {
    //     this.user = res.data;
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
};
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

