<template>
  <div>
    <navbar></navbar>
    <div class="d-flex">
      <sidebar></sidebar>
      <div class="content p-4">
        <h2 class="mb-4">Home</h2>
        <div class="row mb-4">
          <div class="col-md">
            <div class="d-flex border">
              <div class="bg-primary text-light p-4">
                <div class="d-flex align-items-center h-100">
                  <i class="fa fa-3x fa-fw fa-cog"></i>
                </div>
              </div>
              <div class="flex-grow-1 bg-white p-4">
                <p class="text-uppercase text-secondary mb-0">Usage</p>
                <h3 class="font-weight-bold mb-0">10%</h3>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="d-flex border">
              <div class="bg-success text-light p-4">
                <div class="d-flex align-items-center h-100">
                  <i class="fa fa-3x fa-fw fa-comments"></i>
                </div>
              </div>
              <div class="flex-grow-1 bg-white p-4">
                <p class="text-uppercase text-secondary mb-0">Tickets</p>
                <h3 class="font-weight-bold mb-0">374</h3>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="d-flex border">
              <div class="bg-danger text-light p-4">
                <div class="d-flex align-items-center h-100">
                  <i class="fa fa-3x fa-fw fa-shopping-cart"></i>
                </div>
              </div>
              <div class="flex-grow-1 bg-white p-4">
                <p class="text-uppercase text-secondary mb-0">Sales</p>
                <h3 class="font-weight-bold mb-0">73,829</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
export default {
  components: { Sidebar, Navbar },
  mounted () {
    document.title = "dashmin"
  }
}
</script>
