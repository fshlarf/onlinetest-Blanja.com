<template>
     <nav class="navbar navbar-padding navbar-expand-lg navbar-light">
        <div class="container">
            <a class="navbar-brand"
                style="color: white" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >Skywalker Movies</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <i class="fa fa-navicon" style="color: white"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active" style="background-color: transparent">
                        <!-- home -->
                        <nuxt-link to='/' class="nav-link" style="color: white" href="" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Home</nuxt-link>
                    </li>
                </ul>
             </div>
        </div>
    </nav>
</template>

<script>
export default {
    
};
</script>

<style>
.navbar-brand:hover {
  opacity: none;
  background: none;
}
.navbar {
  background-color: rgb(19, 19, 19);
  color: white;
}
a:hover {
  opacity: 0.7;
  background: rgba(221, 221, 221, 0.363);
  cursor: pointer;
}
</style>
