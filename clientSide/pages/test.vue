<template>
  <div class="container-fluid">
    <Biodata/>
    <br>
    <div class="container ">
      <div class="row">
        
        <div class="card-columns col-md-6">
          <div class="card" >
            <img class="card-img-top" src="../assets/images/image (1).png" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
            </div>
          </div>
          <div class="card" >
            <img class="card-img-top" src="../assets/images/image (1).png" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
            </div>
          </div>
          <div class="card" >
            <img class="card-img-top" src="../assets/images/image (1).png" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
            </div>
          </div>
          <div class="card" >
            <img class="card-img-top" src="../assets/images/image (1).png" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
            </div>
          </div>
        </div>
          
      </div>
    </div> 
  </div>
</template>

<script>
import Biodata from '~/components/Biodata.vue'
export default {
  components: {
    Biodata
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
@media (max-width:768px) {
     .card {
        width: 100%;
    }
}


</style>

