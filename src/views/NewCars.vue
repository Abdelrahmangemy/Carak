<template>
  <div class="usedcars">
      <div class="container">
          
        <div class="intro h-100">
            <div class="row h-100 justify-content-center align-items-center">
              <div class="col-md-6">
                    <h3>New Cars Page</h3>  
              </div>
            </div>
          </div>

          <hr>

          <div class="product-test">


            <h3 class="d-inline-block">New Cars list</h3>

            <div class="table-responsive">
              
                <table class="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Username</th>
                      <th>User Phone Number</th>
                      <th>Car Name</th>
                      <th>Car Model Name</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>address</th>
                      <th>year</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                      <tr v-for="product in products" >
                        <td>
                          {{product.id}}
                        </td>
                        <td>
                          {{product.user_name}}
                        </td>
                        <td>
                          {{product.user_phonenumber}}
                        </td>
                        <td>
                          {{product.car_name}}
                        </td>
                        <td>
                          {{product.car_model_name}}
                        </td>
                        <td>
                          {{product.title}}
                        </td>
                        <td>
                          {{product.description}}
                        </td>
                        <td>
                          {{product.address}}
                        </td>
                        <td>
                          {{product.year}}
                        </td>
                        <td>
                          {{product.price}}
                        </td>
                        <td>
                          {{product.status}}
                        </td>

                        <td>

                          <button class="btn btn-primary" @click="editProduct(product)">Edit</button>
                          <button class="btn btn-danger" @click="deleteProduct(product)">Delete</button>
                        </td>

                      </tr>


                  </tbody>
                </table>
            </div>

          </div>
      </div>

      <!-- Modal -->
      
      <div class="modal fade" id="product" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <form> 
            <div class="modal-header">
              <h5 class="modal-title" id="editLabel">Edit New Car</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

                <div class="row">
                  <div class="col-md-8">
                    
                    <div class="form-group">
                                <label for="status">New Car Status </label>
                                <div class="form-group">
                                  <label for="id">New Car ID </label>
                                  <input type="number" name="id" :class="{ 'is-invalid': form.errors.has('id') }" v-model="form.id" class="form-control" id="id" placeholder="Enter Car ID">
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" :class="{ 'is-invalid': form.errors.has('status') }" v-model="form.status" type="radio" name="status" id="status" value="0" >
                                <label class="form-check-label" for="status">
                                  0 for Rejected
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" :class="{ 'is-invalid': form.errors.has('status') }" v-model="form.status" type="radio" name="status" id="status" value="1" checked>
                                <label class="form-check-label" for="status" >
                                  1 for Pending
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" :class="{ 'is-invalid': form.errors.has('status') }" v-model="form.status" type="radio" name="status" id="status" value="2">
                                <label class="form-check-label" for="status">
                                  2 for Accepted
                                </label>
                              </div><br>
                              <div class="form-group">
                                  <input type="name" name="rejection_reason" :class="{ 'is-invalid': form.errors.has('rejection_reason') }" v-model="form.rejection_reason" class="form-control" id="rejection_reason" placeholder="Say the reason">
                              </div>
                              
                    </div>

                  </div>
                </div>




            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button @click="product_update()" type="button" class="btn btn-primary">Update</button>
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
          id:null,
          title:null,
          description:null,
          price:null,
          status:null,
          rejection_reason:null,
          images:[]
        }),
        activeItem:null,
        modal: null,
    }
  },

  methods:{
    product_update(){
      this.form.put('https://rocky-cliffs-25615.herokuapp.com/api/acceptOrRejectCar',
            {headers: { 'Authorization' : 'Bearer '+ token}})
            .then(response => {
                this.get_all_cars()
                $('#product').modal('hide')
                //console.log(response);
            })
    },
    get_all_cars(){
            axios.get('https://rocky-cliffs-25615.herokuapp.com/api/pendingNewCars',
            {headers: { 'Authorization' : 'Bearer '+ token}})
            
            .then(response => {
              localStorage.getItem('AToken',response.data.token);
              //console.log(response)
              this.products = response.data.data
            })
            .catch(error => {
                console.log(error)
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
