<template>
  <div class="overview">
      <div class="container h-100">
        <div class="intro h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-6">
              <button @click="addNew" class="btn btn-success center">Add Adverice</button>
              
            </div>
            
          </div>
        </div>
          
      </div>
  </div>  
</template>

<script>
export default {
  name: "Overview",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
