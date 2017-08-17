@include('layouts.recursos.header')
    <body class="header-fixed header-fixed-space-default">
        <div class="wrapper">
            <!--=== Header ===-->
            <div class="header header-sticky">
                <div class="container">
                    <!-- Logo -->
                    <a class="logo" href="javascript:void(0)">
                        <img class="img-width-60 b-lazy" src="assets/img/logo.png" alt="Logo">
                    </a>
                    <!-- End Logo -->

                    <!-- Topbar -->
                    <div class="topbar">
                        <ul class="loginbar pull-right">
                            <li class="topbar-devider"></li>
                            <li><a href="javascript:void(0)"><i class="fa fa-user"></i> Bienvenido, {{ Auth::user()->username }}</a></li>
                            <li class="topbar-devider"></li>
                            <li class="hoverSelector">
                                <i class="fa fa-wrench"></i>
                                <a>Administrar Cuenta</a>
                                <ul class="languages hoverSelectorBlock">
                                    <li>
                                        <a class="settingsProfile" href="javascript:void(0)">
                                            <i class="fa fa-cog"></i> Editar Perfil
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" onclick="logoutSistema()">
                                            <i class="fa fa-sign-out"></i> Desconectarse
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <!-- End Topbar -->

                    <!-- Toggle get grouped for better mobile display -->
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="fa fa-bars"></span>
                    </button>
                    <!-- End Toggle -->
                </div><!--/end container-->

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse mega-menu navbar-responsive-collapse">
                    <div class="container">
                        <ul class="nav navbar-nav">
                            <!-- Home -->
                            <li>
                                <a class="myProfile" href="javascript:void(0);">
                                    <i class="fa fa-home"></i> Inicio
                                </a>
                            </li>
                            @if(Auth::user()->authorizeRoles(['admin']))
                                <li class="dropdown">
                                    <a href="javascript:void(0)" class="dropdown-toggle" data-target="dropdown">
                                        <i class="fa fa-wrench"></i> Gestionar Sistema
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="javascript:void(0);" class="viewUsers"><i class="fa fa-eye"></i> Visualizar a todos los Usuarios</a>
                                        </li>
                                    </ul>
                                </li>
                            @endif
                            <!-- End Home -->
                        </ul>
                    </div><!--/end container-->
                </div><!--/navbar-collapse-->
            </div>
            <!--=== End Header ===-->

            <!--=== Content Part ===-->
            <div class="container content height-500">
                <div class="profile">
                    <div class="row">
                        @include('layouts.recursos.leftsidebar')
                        @yield('content')
                    </div>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                        {{ csrf_field() }}
                    </form>
                </div>
            </div><!--/container-->
            <!-- End Content Part -->
        </div><!--/wrapper-->
    </body>
@include('layouts.recursos.footer')
@include('layouts.recursos.modals')
<script>
    loadingCss()
    loadingSystem('profile/myProfile')
</script>