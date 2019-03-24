<template>
    <div class="my-login-page">
        <section class="h-100">
            <div class="container h-100">
                <div class="row justify-content-md-center">
                    <div class="col-md-7 col-lg-5">
                        <div class="brand">
                            <img src="dist/img/brand/icon.png">
                        </div>
                        <div class="card fat">
                            <div class="card-body">
                                <h4 class="card-title">Register</h4>
                                <form action="/">
                                    <div class="form-group">
                                        <label for="name">Name</label>
                                        <input id="name" type="text" class="form-control" autofocus>
                                    </div>
                                    <div class="form-group">
                                        <label for="email">E-Mail Address</label>
                                        <input id="email" type="email" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input id="password" type="password" class="form-control" data-eye>
                                    </div>
                                    <div class="form-group">
                                        <div class="icheck-primary">
                                            <input type="checkbox" id="checkbox1" />
                                            <label for="checkbox1">I agree to the Terms and Conditions</label>
                                        </div>
                                    </div>
                                    <div class="form-group no-margin">
                                        <button type="submit" class="btn btn-primary btn-block">
                                            Register
                                        </button>
                                    </div>
                                    <div class="margin-top20 text-center">
                                        Already have an account? <router-link to="/login">Login</router-link>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="footer">
                            Copyright &copy; Your Company 2018
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        mounted () {
            document.title = 'dashmin - Register';
        }
    }
</script>
