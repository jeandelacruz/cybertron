<!doctype html>
<html lang="{{ app()->getLocale() }}">
    @include('layouts.login.header')
    <div class="container">
        <!--Reg Block-->
        <div class="reg-block">
            <div class="reg-block-header">
                <h2>
                    <img class="img-responsive img-width-200 img-center b-lazy" src="assets/img/logo.png">
                </h2>
            </div>
            @yield('content')
        </div>
        <!--End Reg Block-->
    </div><!--/container-->
    @include('layouts.login.footer')
</html>