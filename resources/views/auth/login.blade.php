@extends('layouts.login')

@section('content')
<form id="login-form" class="form-horizontal" method="POST" action="{{ route('login') }}">
    {{ csrf_field() }}

    <div class="input-group margin-bottom-20{{ $errors->has('username') ? ' has-error' : '' }}">
        <span class="input-group-addon"><i class="fa fa-user"></i></span>
        <input id="username" type="text" class="form-control username" name="username" value="{{ old('username') }}" placeholder="Username">
    </div>

    <div class="input-group margin-bottom-20{{ $errors->has('password') ? ' has-error' : '' }}">
        <span class="input-group-addon"><i class="fa fa-lock"></i></span>
        <input id="password" type="password" class="form-control password" name="password" placeholder="Password">
    </div>

    @if ($errors->has('username') || $errors->has('password'))
        <span>
            <p class="text-center text-bold textError">{{ $errors->first('username') }}</p>
            <p class="text-center text-bold textError">{{ $errors->first('password') }}</p>
        </span>
    @endif

    <div class="form-group">
        <div class="col-md-6 col-md-offset-4">
            <div class="checkbox">
                <label>
                    <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> Recordarme
                </label>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <span href="javascript:void(0)" class="btn-u btn-block btnLogin" onclick="loginSistema()">
                <i class="fa fa-sign-in"></i> Conectarse
            </span>
        </div>
    </div>
</form>
@endsection
