<template>

  <div class="checkout" id="checkout">
      <Navbar></Navbar>
      <div class="container">
          <h1 class="text-center p-5">About Us</h1>
          <div class="row">
              
              

              
          </div>
      </div>
 <login></login>
 <mini-cart></mini-cart>

  </div>
</template>

<script>
import Login from "@/components/Login.vue";

export default {
  name: "Checkout",
  components: {
    Login
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .about{
        margin-top: 0;
        background: #f2f2f2;
        padding-bottom: 3rem;
    }
</style>
