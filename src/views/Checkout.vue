<template>

  <div class="checkout" id="checkout">
      <Navbar></Navbar>
      <div class="container mt-5 pt-5">
          <div class="row">
              <div class="col-md-9">
                  <h4 class="py-4">Checkout Page </h4>
                  <!--
                  <ul>
                    <li v-for="item in this.$store.state.cart" class="media">
                      <img :src="item.productImage" width="80px" class="align-self-center mr-3" alt="">
                      <div class="media-body">
                        <h5 class="mt-0">{{item.productName}}

                          <span class='float-right' @click="$store.commit('removeFromCart',item)">X</span>
                        </h5>
                        <p class="mt-0">{{item.productPrice | currency}}</p>
                        <p class="mt-0">Quantity : {{item.productQuantity }}</p>
                      </div>
                    </li>

                  </ul>
                  -->
              </div>
              <div class="col-md-3">
                  <h4 class="">Checkout Page </h4>
              </div>
              
          </div>
      </div>
    
  </div>
</template>

<script>
export default {
  name: "Checkout",
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
