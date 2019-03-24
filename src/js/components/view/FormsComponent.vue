<template>
    <div>
        <navbar-component></navbar-component>
        <div class="d-flex">
            <sidebar-component></sidebar-component>
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
                            <select name="select2" id="select2" class="form-control select2">
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
                                    <input type="checkbox" id="checkbox1" />
                                    <label for="checkbox1">Checkbox</label>
                                </div>
                                <div class="icheck-primary">
                                    <input type="checkbox" id="checkbox2" checked/>
                                    <label for="checkbox2">Checkbox checked</label>
                                </div>
                                <div class="icheck-primary">
                                    <input type="checkbox" id="checkbox3" checked disabled/>
                                    <label for="checkbox3">Checkbox disabled</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="icheck-primary">
                                    <input type="radio" id="radio1" />
                                    <label for="radio1">Radio</label>
                                </div>
                                <div class="icheck-primary">
                                    <input type="radio" id="radio2" checked/>
                                    <label for="radio2">Radio checked</label>
                                </div>
                                <div class="icheck-primary">
                                    <input type="radio" id="radio3" disabled checked/>
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
    export default {
        mounted () {
            document.title = 'dashmin - Forms';
            $('.select2').select2({
                width: '100%'
            });
        }
    }
</script>
