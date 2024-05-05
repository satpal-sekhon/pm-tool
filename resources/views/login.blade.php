@extends('layouts.auth')

@section('content')
    <form action="{{ route('user.authenticate') }}" method="POST" class="form-horizontal">
        @csrf
        <fieldset class="form-group floating-label-form-group @error('email') error @enderror">
            <label for="user-name">Email Address</label>
            <input type="text" name="email" class="form-control" id="user-name" placeholder="Your email"
                value="{{ old('email') }}">
            @error('email')
                <span>{{ $message }}</span>
            @enderror
        </fieldset>
        <fieldset class="form-group floating-label-form-group mb-1 @error('password') error @enderror">
            <label for="user-password">Enter Password</label>
            <input type="password" name="password" class="form-control" id="user-password" placeholder="Enter Password">
            @error('password')
                <span class="text-danger">{{ $message }}</span>
            @enderror
        </fieldset>
        <div class="form-group row">
            <div class="col-sm-6 col-12 text-center text-sm-left">
                <fieldset>
                    <input type="checkbox" id="remember-me" class="chk-remember">
                    <label for="remember-me"> Remember Me</label>
                </fieldset>
            </div>
        </div>
        <button type="submit" class="btn btn-outline-info btn-block">
            <i class="ft-unlock"></i> Login
        </button>
    </form>
@endsection
