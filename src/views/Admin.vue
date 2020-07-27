<template>
  <div class="admin">
<div class="page-wrapper default-theme sidebar-bg bg1 toggled">
        <a id="show-sidebar" @click="closeMenu" class="btn btn-sm btn-dark" href="#">
            <i class="fas fa-bars"></i>
        </a>
        <nav id="sidebar" class="sidebar-wrapper">
            <div class="sidebar-content">
                <!-- sidebar-brand  -->
                <div class="sidebar-item sidebar-brand">
                    <a href="#">Carak</a>
                    <div id="close-sidebar" @click="closeMenu">
                        <i class="fas fa-times"></i>
                    </div>
                </div>
                

                <!-- sidebar-menu  -->
                <div class=" sidebar-item sidebar-menu">
                    <ul>
                        <li class="header-menu">
                            <span>Menu</span>
                        </li>

                        <li>
                            <router-link to="/admin/overview">
                                <i class="fa fa-chart-line"></i>
                                <span>Overview</span>
                            </router-link>
                        </li>
                        <li>
                        <li>
                            <router-link to="/admin/spareparts">
                                <i class="fab fa-amazon"></i>
                                <span>Spare Parts</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/carmodel">
                                <i class="fab fa-amazon"></i>
                                <span>Car Models</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/usedcars">
                                <i class="fab fa-amazon"></i>
                                <span>Used Cars</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/newcars">
                                <i class="fab fa-amazon"></i>
                                <span>New Cars</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/offers">
                                <i class="fab fa-amazon"></i>
                                <span>Offers</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/maintancecenter">
                                <i class="fab fa-amazon"></i>
                                <span>Maintance Center</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/advertice">
                                <i class="fab fa-amazon"></i>
                                <span>Advertice</span>
                            </router-link>
                        </li>

                       
                    </ul>
                </div>
                <!-- sidebar-menu  -->
            </div>
       
        </nav>
        <!-- sidebar-content  -->
        <main class="page-content">
            <router-view/>
        </main>
        <!-- page-content" -->
    </div>
    <!-- page-wrapper -->




  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";

export default {
  name: "admin",
  
  components: {
    Hero
  },
  methods:{
      closeMenu(){
        $(".page-wrapper").toggleClass("toggled");
      }
      //Here's the logout function .. 
  }
};
</script>

<style>

</style>

