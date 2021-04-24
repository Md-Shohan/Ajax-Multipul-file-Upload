@extends('layout.app')

@section('title','Home')

@section('content')
<div class="container-fluid">
    <div class="row">
        <div class="col-md-12">

            <div class="card">
                <div class="card-header">
                    <h4>Laravel Axious Multiple file upload</h4>
                </div>
                <div class="card-body">
                    <button class="addBtn btn btn-primary my-3 btn-sm">Add New</button>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>File</th>                            
                                <th>File Size</th>                            
                                <th>Cancel</th>                            
                                <th>Upload</th>                            
                                <th>Upload(MB)</th>                            
                                <th>Upload(%)</th>                            
                                <th>Status</th>                            
                            </tr>
                        </thead>
                        <tbody class="fileList">
                           
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </div>
</div>


@endsection