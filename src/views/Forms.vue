<template>
  <div>
    <navbar></navbar>
    <div class="d-flex">
      <sidebar></sidebar>
      <div class="content p-4">
        <h2 class="mb-4">Forms</h2>
        <div class="card mb-4">
          <div class="card-header bg-white font-weight-bold">
            Select2
          </div>
          <div class="card-body">
            <div class="form-group">
              <label for="select2">Select Options</label>
              <br>
              <select id="select2" class="form-control select2" name="select2">
                <option>Option</option>
                <option>Option</option>
                <option>Option</option>
                <option>Option</option>
              </select>
            </div>
          </div>
        </div>
        <div class="card mb-4">
          <div class="card-header bg-white font-weight-bold">
            iCheck Bootstrap
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <div class="icheck-primary">
                  <input id="checkbox1" type="checkbox" />
                  <label for="checkbox1">Checkbox</label>
                </div>
                <div class="icheck-primary">
                  <input id="checkbox2" checked type="checkbox" />
                  <label for="checkbox2">Checkbox checked</label>
                </div>
                <div class="icheck-primary">
                  <input id="checkbox3" checked disabled type="checkbox" />
                  <label for="checkbox3">Checkbox disabled</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="icheck-primary">
                  <input id="radio1" type="radio" />
                  <label for="radio1">Radio</label>
                </div>
                <div class="icheck-primary">
                  <input id="radio2" checked type="radio" />
                  <label for="radio2">Radio checked</label>
                </div>
                <div class="icheck-primary">
                  <input id="radio3" checked disabled type="radio" />
                  <label for="radio3">Radio disabled</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jQuery from "jquery"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

export default {
  components: { Sidebar, Navbar },
  mounted () {
    document.title = "dashmin - Forms"
    let $ = jQuery
    $(".select2").select2({
      width: "100%"
    })
  }
}
</script>
