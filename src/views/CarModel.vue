<template>
  <div class="usedcars">
      <div class="container">
          
        <div class="intro h-100">
            <div class="row h-100 justify-content-center align-items-center">
              <div class="col-md-6">
                    <h3>Car Models Page</h3>  
              </div>
            </div>
          </div>

          <hr>

          <div class="product-test">


            <h3 class="d-inline-block">Car Models list</h3>
            <button @click="addNew" class="btn btn-success float-right">Add Car</button>
            <button @click="addNewModel" class="btn btn-success float-right mr-2">Add Car Model</button>
            <button @click="addNewPrice" class="btn btn-success float-right mr-2">Add Car Price</button>
            <div class="table-responsive">
              
                <table class="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Car Model Name</th>
                    </tr>
                  </thead>

                  <tbody>
                      <tr v-for="product in products" >
                        <td>
                          {{product.id}}
                        </td>
                        <td>
                          {{product.name}}
                        </td>

                      </tr>


                  </tbody>
                </table>
            </div>

          </div>
      </div>

      <!-- Car Modal -->
      
      <div class="modal fade" id="product4" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <form>
            <div class="modal-body">

                <div class="row">
                  <div class="col-md-8">
                    <div class="form-group">
                                <label for="image">Product Image </label> <br>
                                <!--<img :src="form.image" alt="" class="img-fluid">-->
                                <div class="custom-file">
                                <input  type="file" class="custom-file-input" id="photo" name="photo"  :class="{ 'is-invalid': form.errors.has('photo ') }"  >
                                <label class="custom-file-label" for="photo">Choose file...</label>
                                </div>                   
                    </div>
                  </div>
                </div>




            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button @click="car_add()" type="button" class="btn btn-primary" >Add Car Model</button>
            </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Car Model model -->

      <div class="modal fade" id="product2" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <form>
            <div class="modal-header">
              <h5 class="modal-title" id="editLabel">Add Car Model</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

                <div class="row">
                  <div class="col-md-8">
                    <div class="form-group">
                        <label for="name">Car Name </label>
                        <input type="text" name="car_name" :class="{ 'is-invalid': form.errors.has('name') }" v-model="form.name" class="form-control" id="name" placeholder="Enter Car Name">
                    </div>
                    <div class="form-group" >
                        <label for="car_id">Car ID </label>
                        <!--<select v-model="form.car_id">
                            <option  disabled value="form.car_id">Please select one</option>
                            <option v-for="product in products" >{{product.name}}</option>
                        </select>-->
                        <input type="text" name="car_id" :class="{ 'is-invalid': form.errors.has('car_id') }" v-model="form.car_id" class="form-control" id="car_id" placeholder="Enter Car ID">
                    </div>
                  </div>
                </div>




            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button @click="car_model_add()" type="button" class="btn btn-primary" >Add Car Model</button>
            </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Car Price model -->

      <div class="modal fade" id="product3" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <form>
            <div class="modal-header">
              <h5 class="modal-title" id="editLabel">Add Car Price</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

                <div class="row">
                  <div class="col-md-8">
                    <div class="form-group">
                        <label for="category">Category </label>
                        <input type="text" name="category" :class="{ 'is-invalid': form.errors.has('category') }" v-model="form.category" class="form-control" id="category" placeholder="Enter Category">
                    </div>
                    <div class="form-group">
                        <label for="price">Price </label>
                        <input type="text" name="price" :class="{ 'is-invalid': form.errors.has('price') }" v-model="form.price" class="form-control" id="price" placeholder="Enter Price">
                    </div>
                    <div class="form-group">
                        <label for="car_id">Car ID </label>
                        <input type="number" name="car_id" :class="{ 'is-invalid': form.errors.has('car_id') }" v-model="form.car_id" class="form-control" id="car_id" placeholder="Enter Car ID">
                    </div>
                    <div class="form-group">
                        <label for="car_model_id">Car Model ID </label>
                        <input type="number" name="car_model_id" :class="{ 'is-invalid': form.errors.has('car_model_id') }" v-model="form.car_model_id" class="form-control" id="car_model_id" placeholder="Enter Car Model ID">
                    </div>
                  </div>
                </div>




            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button @click="car_price_add()" type="button" class="btn btn-primary" >Add Car Price</button>
            </div>
            </form>
          </div>
        </div>
      </div>
     

    
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import axios from 'axios'
import Form from 'vform'

export default {
  name: "usedcars",
  components: {
    VueEditor
  },
 

  data(){
    return {
        products: [],
        form: new Form ({
          car_id:null,
          car_model_id:null,
          category:null,
          name:null,
          title:null,
          description:null,
          price:null,
          images:[]
        }),
        activeItem:null,
        modal: null,
    }
  },

  methods:{
    get_all_cars(){
            axios.get('https://rocky-cliffs-25615.herokuapp.com/api/showCarModel',
            {headers: { 'Authorization' : 'Bearer '+ token}})
            
            .then(response => {
              localStorage.getItem('AToken',response.data.token);
              console.log(response)
              this.products = response.data
            })
            .catch(error => {
                console.log(error)
            });
        },
        
         car_add() {
            this.form.post('https://rocky-cliffs-25615.herokuapp.com/api/addCar/',
            {headers: { 'Authorization' : 'Bearer '+ token}})
            .then(response => {
                this.get_all_cars();
                $('#product').modal('hide')
                //this.$router.push({name:'all-product'});
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        car_model_add() {
            this.form.post('https://rocky-cliffs-25615.herokuapp.com/api/addCarModel',
            {headers: { 'Authorization' : 'Bearer '+ token}})
            .then(response => {
                this.get_all_cars();
                $('#product2').modal('hide')
                //this.$router.push({name:'all-product'});
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        car_price_add() {
            this.form.post('https://rocky-cliffs-25615.herokuapp.com/api/addCarPrice',
            {headers: { 'Authorization' : 'Bearer '+ token}})
            .then(response => {
                this.get_all_cars();
                $('#product3').modal('hide')
                //this.$router.push({name:'all-product'});
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        },
         add_advertice() {
            this.form.post('https://rocky-cliffs-25615.herokuapp.com/api/addCarPrice',
            {headers: { 'Authorization' : 'Bearer '+ token}})
            .then(response => {
                this.get_all_cars();
                $('#product3').modal('hide')
                //this.$router.push({name:'all-product'});
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        },

    reset(){
      this.product = {
          name:null,
          description:null,
          price:null,
          tags:[],
          images:[]
      }
    },

    addNew(){
        this.modal = 'new';
        this.reset();
        $('#product').modal('show');
    },
    addNewModel(){
        this.modal = 'new';
        this.reset();
        $('#product2').modal('show');
    },
    addNewPrice(){
        this.modal = 'new';
        this.reset();
        $('#product3').modal('show');
    },
    addNewAdvertice(){
        this.modal = 'new';
        this.reset();
        $('#product4').modal('show');
    },

    editProduct(product){
      this.modal = 'edit';
      this.product = product;
      $('#product').modal('show');
    },

deleteProduct(doc){

        Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
        if (result.value) {

          //Here you must access to pro_id 

          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
        
    },

    addProduct(){
      
      //this.$firestore.products.add(this.product);
      
          Toast.fire({
            type: 'success',
            title: 'Product created successfully'
          })

      $('#product').modal('hide');
    }

  
  },
  created(){
  this.get_all_cars();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.img-wrapp{
  position: relative;
}
.img-wrapp span.delete-img{
    position: absolute;
    top: -14px;
    left: -2px;
}
.img-wrapp span.delete-img:hover{
  cursor: pointer;
}

</style>
