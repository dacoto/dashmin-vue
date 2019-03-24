<template>
    <div>
        <navbar-component></navbar-component>
        <div class="d-flex">
            <sidebar-component></sidebar-component>
            <div class="content p-4">
                <h2 class="mb-4">Alerts</h2>
                <div class="card mb-4">
                    <div class="card-header bg-white font-weight-bold">
                        Sweetalert
                    </div>
                    <div class="card-body">
                        <button class="btn btn-success" v-on:click="simpleAlert();">Error Alert</button>
                        <button class="btn btn-danger" v-on:click="confirmAlert();">Confirm Alert</button>
                    </div>
                </div>
                <div class="card mb-4">
                    <div class="card-header bg-white font-weight-bold">
                        Toastr
                    </div>
                    <div class="card-body">
                        <button class="btn btn-success" v-on:click="toastrSimple();">Simple Alert</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted () {
            document.title = 'dashmin - Alerts';
        },
        methods: {
            simpleAlert: function() {
                swal ("Oops","Something went wrong!","error")
            },
            confirmAlert: function() {
                swal({
                    title: "Are you sure?",
                    text: "Once deleted, you will not be able to recover this imaginary file!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((willDelete) => {
                    if (willDelete) {
                        swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                        });
                    } else {
                        swal("Your imaginary file is safe!");
                    }
                });
            },
            toastrSimple: function() {
                toastr["success"]("My name is Inigo Montoya. You killed my father. Prepare to die!");
            }
        }
    }
</script>
