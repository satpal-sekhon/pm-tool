@extends('layouts.auth')

@section('content')
    <form action="{{ route('user.authenticate') }}" method="POST" class="form-horizontal">
        @csrf
        <x-input-text name="email" label="Email Address" placeholder="Enter Email" />
        <x-input-password name="password" label="Enter Password" placeholder="Enter Password" />

        <div class="form-group row">
            <div class="col-sm-6 col-12 text-center text-sm-left">
                <x-input-checkbox name="remember_me" label="Remember Me"></x-input-checkbox>
            </div>
        </div>
        <button type="submit" class="btn btn-outline-info btn-block">
            <i class="ft-unlock"></i> Login
        </button>
    </form>
@endsection
