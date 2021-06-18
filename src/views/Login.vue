<template>
  <div class="my-login-page">
    <section class="h-100">
      <div class="container h-100">
        <div class="row justify-content-md-center">
          <div class="col-md-7 col-lg-5">
            <router-link to="/">
              <div class="brand">
                <img alt="Icon" src="../assets/images/icon.png">
              </div>
            </router-link>
            <div class="card fat">
              <div class="card-body">
                <h4 class="card-title">Login</h4>
                <form action="/">
                  <div class="form-group">
                    <label for="email">E-Mail Address</label>
                    <input id="email" autofocus class="form-control" type="email">
                  </div>
                  <div class="form-group">
                    <label for="password">Password
                      <a class="float-right" href="#">
                        Forgot Password?
                      </a>
                    </label>
                    <input id="password" class="form-control" data-eye type="password">
                  </div>
                  <div class="form-group">
                    <div class="icheck-primary">
                      <input id="checkbox1" type="checkbox" />
                      <label for="checkbox1">Remember Me</label>
                    </div>
                  </div>
                  <div class="form-group no-margin">
                    <button class="btn btn-primary btn-block" type="submit">
                      Login
                    </button>
                  </div>
                  <div class="margin-top20 text-center">
                    Don't have an account?
                    <router-link to="/register">Create One</router-link>
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
    document.title = "dashmin - Login"
  }
}
</script>
