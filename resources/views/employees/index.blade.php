@extends('layouts.app')
@section('title', 'Employees')

@section('content')
    <section class="users-list-wrapper">
        <div class="users-list-filter px-1">
            <form>
                <div class="row border border-light rounded py-2 mb-2">
                    <div class="col-12 col-sm-6 col-lg-3">
                        <label for="users-list-verified">Verified</label>
                        <div class="form-group">
                            <select class="form-control" id="users-list-verified">
                                <option value="">Any</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3">
                        <label for="users-list-role">Role</label>
                        <div class="form-group">
                            <select class="form-control" id="users-list-role">
                                <option value="">Any</option>
                                <option value="User">User</option>
                                <option value="Staff">Staff</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3">
                        <label for="users-list-status">Status</label>
                        <div class="form-group">
                            <select class="form-control" id="users-list-status">
                                <option value="">Any</option>
                                <option value="Active">Active</option>
                                <option value="Close">Close</option>
                                <option value="Banned">Banned</option>
                            </select>
                        </div>
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
                                        <td>
                                            <a href="#" class="btn btn-sm btn-primary"><i class="ft-edit-1"></i></a>
                                            <a href="#" class="btn btn-sm btn-danger"><i class="ft-trash"></i></a>
                                        </td>
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
