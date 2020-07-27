<template>
    <div class="users">
        <div class="container">
            <div class="intro h-100">
                <div class="row h-100 justify-content-center align-items-center">
                <div class="col-md-6">
                        <h3>Users Page</h3>
                        
                    <p>
                    Here you can Create,Edit,Delete Users ..
                    </p>
                </div>
                <div class="col-md-6">
                    <img src="/img/svg/users.svg" alt="" class="img-fluid">
                </div>
                </div>
            </div>

            <hr>

            <div class="user-test">
                <h3 class="d-inline-block">Users list</h3>
                <button @click="addNew" class="btn btn-primary float-right">Add User</button>
                
                
                <div class="table-responsive">
                    <table class="table">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Modify</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(user,index) in users" :key="index">
                            <td>
                            {{user.name}}
                            </td>

                            <td>
                            {{user.email}}
                            </td>

                            <td>
                            {{user.password}}
                            </td>

                            <td>

                            <button class="btn btn-primary" @click="editUser(user)">Edit</button>
                            <button class="btn btn-danger" @click="deleteUser(user)">Delete</button>
                            </td>

                        </tr>


                    </tbody>
                    </table>
                </div>
            </div>

        </div>

        <!-- Modal -->
      <div class="modal fade" id="user" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="editLabel">Add User</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body">

                        <div class="row">
                        <!-- main user -->
                        <div class="col-md-8">
                            <div class="form-group">
                            <input type="text" placeholder="user Name" v-model="user.name" class="form-control">
                            </div>

                            <div class="form-group">
                            <vue-editor v-model="user.email"></vue-editor>
                            </div>
                        </div>
                        <!-- user sidebar -->
                        <div class="col-md-4">
                            <h4 class="display-6">user Details</h4>
                            <hr>

                            <div class="form-group">
                            <input type="text" placeholder="user price" v-model="user.password" class="form-control">
                            </div>

                            <div class="form-group">
                            <label for="user_image">user Images</label>
                            <input type="file" @change="" class="form-control">
                            </div>

                            <div class="form-group d-flex">
                            <div class="p-1" v-for="(image, index) in user" :key="index">
                                <div class="img-wrapp">
                                    <img :src="image" alt="" width="80px">
                                    <span class="delete-img" @click="">X</span>
                                </div>
                            </div>
                            </div>

                        </div>
                        </div>




                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button @click="" type="button" class="btn btn-primary" v-if="modal == 'new'">Save changes</button>
                    <button @click="" type="button" class="btn btn-primary" v-if="modal == 'edit'">Apply changes</button>
                    </div>
                </div>
                </div>
            </div>
    </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {

    name: "Users",
    components: {
        VueEditor
    },
    props: {
        msg: String
    },
    data(){
        return{
            users:[],
            user: {
                name:null,
                email:null,
                password:null
            }
        }
    },
    methods:{
        addNew(){
            this.modal = 'new';
            this.reset();
            $('#user').modal('show');
        },
        reset(){
            this.user = {
                name:null,
                email:null,
                password:null,
                
            }
        },
        updateUser(){

        },

        editUser(user){
        this.modal = 'edit';
        this.user = user;
        $('#user').modal('show');
        },
        deleteUser(doc){

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
    }
}
</script>