<template>
    <div class="login mt-5" >
        <div class="card m-auto w-50">
            <div class="card-header">
                <h2>User Login</h2>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label for="Email">Email </label>
                    <input v-model="user.email" type="email" class="form-control" id="Email" placeholder="Enter Email" >
                    <!--<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                </div>
                <div class="form-group">
                    <label for="Pass">Password</label>
                    <input v-model="user.password" type="password" class="form-control" id="Pass" placeholder="Enter password">
                </div>
                
                <button type="submit" @click="userLogin()" class="btn btn-primary">Login</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import router from '../router'

export default {
  name: "Login",
  props: {
    msg: String
  },
  data(){
      return {
          user:{
            email    : "admin@gmail.com",
		    password : "password"
          },
      }
  },

  methods: {
        userLogin(){
            axios.post('https://rocky-cliffs-25615.herokuapp.com/api/login ', {
                email:    this.user.email,
                password: this.user.password,
            })
            .then(function (response) {
                localStorage.setItem('AToken',response.data.token);
                console.log(response);
                router.replace( '/admin/overview' );
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
