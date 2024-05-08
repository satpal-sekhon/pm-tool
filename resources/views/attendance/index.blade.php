@extends('layouts.app')
@section('title', 'Attendance')

@section('content')
    <section class="users-list-wrapper">
        <div class="users-list-filter px-1">
            <form>
                <div class="row border border-light rounded py-2 mb-2">
                    <div class="col-12 col-sm-6 col-lg-3">
                        <x-input-text name="user_name" label="Employee Name"></x-input-text>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3">
                        <label for="month">Select Month</label>
                        <div class="form-group">
                            <select name="month" class="form-control" id="month">
                                @for ($month = 1; $month <= 12; $month++)
                                    <option value="{{ $month }}" @selected(date('n') == $month)>
                                        {{ date('F', mktime(0, 0, 0, $month, 1)) }}
                                    </option>
                                @endfor
                            </select>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3">
                        <label for="year">Select Year</label>
                        @php
                            $currentYear = date('Y');
                        @endphp
                        <div class="form-group">
                            <select class="form-control" id="year">
                                <option value="">{{ $currentYear }}</option>
                                @for ($year = $currentYear; $year > $currentYear - 5; $year--)
                                    <option value="{{ $year }}">{{ $year }}</option>
                                @endfor
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
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table mb-0">
                                <thead>
                                    <tr>
                                        <th>Employee</th>
                                        @for ($day = 1; $day <= $numberOfDays; $day++)
                                            <th>{{ $day }}</th>
                                        @endfor
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">Satpal Singh</td>
                                        @for ($day = 1; $day <= $numberOfDays; $day++)
                                            <td><i class="text-success la la-check"></i></td>
                                        @endfor
                                    </tr>
                                    <tr>
                                        <td scope="row">Satwinder Singh</td>
                                        @for ($day = 1; $day <= $numberOfDays; $day++)
                                            <td><i class="text-success la la-check"></i></td>
                                        @endfor
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
