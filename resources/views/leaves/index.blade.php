@extends('layouts.app')
@section('title', 'Leaves')

@section('content')
    <section class="users-list-wrapper">
        <div class="users-list-filter px-1">
            <form>
                <div class="row border border-light rounded py-2 mb-2">
                    <div class="col-12 col-sm-6 col-lg-3">
                        <x-input-text name="user_name" label="Employee Name"></x-input-text>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3">
                        <x-input-date name="leave_from" label="From"></x-input-date>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3">
                        <x-input-date name="leave_to" label="To"></x-input-date>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3 d-flex align-items-center">
                        <button class="btn btn-block btn-primary glow">Search</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="users-list-table">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table data-table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Employee</th>
                                        <th>Leave Type</th>
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Reason</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td><a href="#">Satpal Singh</a></td>
                                        <td>Medical Leave</td>
                                        <td>15 Jan 2024</td>
                                        <td>25 Jan 2024</td>
                                        <td>Going to Hospital</td>
                                        <td><span class="badge badge-success">Approved</span></td>
                                        <td>
                                            <a href="#" class="btn btn-sm btn-primary"><i class="ft-edit-1"></i></a>
                                            <a href="#" class="btn btn-sm btn-danger"><i class="ft-trash"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td><a href="#">Satwinder Singh</a></td>
                                        <td>Hospitalisation</td>
                                        <td>15 Jan 2024</td>
                                        <td>25 Jan 2024</td>
                                        <td>Personnal</td>
                                        <td><span class="badge badge-success">Approved</span></td>
                                        <td>
                                            <a href="#" class="btn btn-sm btn-primary"><i class="ft-edit-1"></i></a>
                                            <a href="#" class="btn btn-sm btn-danger"><i class="ft-trash"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection

@section('head')
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/vendors/css/pickers/pickadate/pickadate.css') }}">
@endsection

@section('script')
    <script src="{{ asset('assets/vendors/js/pickers/pickadate/picker.js') }}"></script>
    <script src="{{ asset('assets/vendors/js/pickers/pickadate/picker.date.js') }}"></script>

    <script>
        $('.datepicker').pickadate();
    </script>
@endsection
