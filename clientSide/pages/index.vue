<template>
  <div class="container-fluid">
    <Biodata/>
    <br>
    <div class="container ">
        <h5 style="color: red">
          Skywalker Movie's
        </h5>
      <div class="row">
        <div class="col-12 col-sm-6 col-md-8">
          
          <div class="card-columns">
            <div class="card col-md-8">
              <img class="card-img-top" src="../assets/images/image (1).png" alt="">
              <div class="card-body">
                <h6 class="card-title">Card title</h6>
              </div>
            </div>
          </div>
          

        </div>
        <div class="col-6 col-md-4">.col-6 .col-md-4
          
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import Biodata from "~/components/Biodata.vue";
export default {
  components: {
    Biodata
  },
  data() {
    return {

    }
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
</style>

