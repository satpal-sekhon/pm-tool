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
                                        <th>Employee ID</th>
                                        <th>Name</th>
                                        <th>Last Activity</th>
                                        <th>Verified</th>
                                        <th>Role</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>300</td>
                                        <td><a href="#">dean3004</a>
                                        </td>
                                        <td>Dean Stanley</td>
                                        <td>30/04/2019</td>
                                        <td>No</td>
                                        <td>Staff</td>
                                        <td><span class="badge badge-success">Active</span></td>
                                        <td><a href="#"><i class="ft-edit-1"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td>301</td>
                                        <td><a href="#">zena0604</a>
                                        </td>
                                        <td>Zena Buckley</td>
                                        <td>06/04/2020</td>
                                        <td>Yes</td>
                                        <td>User </td>
                                        <td><span class="badge badge-success">Active</span></td>
                                        <td><a href="#"><i class="ft-edit-1"></i></a></td>
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
