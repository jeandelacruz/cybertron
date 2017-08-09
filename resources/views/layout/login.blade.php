<!doctype html>
<html lang="{{ app()->getLocale() }}">
    @include('layout.login.header')
    <div class="container">
        <!--Reg Block-->
        <div class="reg-block">
            <div class="reg-block-header">
                <h2>
                    <img class="img-responsive img-width-200 img-center b-lazy" src="assets/img/logo.png">
                </h2>
            </div>

            <div class="input-group margin-bottom-20">
                <span class="input-group-addon"><i class="fa fa-user"></i></span>
                <input type="text" class="form-control username" placeholder="Username">
            </div>
            <div class="input-group margin-bottom-20">
                <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                <input type="password" class="form-control password" placeholder="Password">
            </div>
            <hr>

            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <button type="submit" class="btn-u btn-block btnLogin" onclick="loginSistema()"><i class="fa fa-sign-in"></i> Conectarse</button>
                </div>
            </div>
        </div>
        <!--End Reg Block-->
    </div><!--/container-->
    @include('layout.login.footer')
</html>