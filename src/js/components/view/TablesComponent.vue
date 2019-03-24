<template>
    <div>
        <navbar-component></navbar-component>
        <div class="d-flex">
            <sidebar-component></sidebar-component>
            <div class="content p-4">
                <h2 class="mb-4">Tables</h2>
                <div class="card mb-4" id="table">
                    <div class="card-header bg-white">
                        <div class="row align-items-center">
                            <div class="col-md-7 font-weight-bold">
                                List.js Table
                            </div>
                            <div class="col-md-5">
                                <div class="input-group">
                                    <input class="form-control search" placeholder="Search" />
                                    <div class="input-group-append">
                                        <button class="btn btn-primary sort" data-sort="name">Sort by name</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th width="80%">Name</th>
                                    <th width="20%">Born</th>
                                </tr>
                            </thead>
                            <tbody class="list">
                                <tr>
                                    <td class="name">Jonny Stromberg</td>
                                    <td class="born">1986</td>
                                </tr>
                                <tr>
                                    <td class="name">Jonas Arnklint</td>
                                    <td class="born">1985</td>
                                </tr>
                                <tr>
                                    <td class="name">Martina Elm</td>
                                    <td class="born">1986</td>
                                </tr>
                                <tr>
                                    <td class="name">Gustaf Lindqvist</td>
                                    <td class="born">1983</td>
                                </tr>
                            </tbody>
                        </table>
                        <ul class="pagination justify-content-end"></ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted () {
            var options = {
                valueNames: [ 'name', 'born' ],
                page: 10,
                pagination: true
            };
            var tableList = new List('table', options);
            document.title = 'dashmin - Tables';
        }
    }
</script>
