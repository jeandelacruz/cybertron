@include('layout.recursos.header')
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
                            <li><a href="javascript:void(0)"><i class="fa fa-user"></i> Bienvenido, </a></li>
                            <li class="topbar-devider"></li>
                            <li class="hoverSelector">
                                <i class="fa fa-wrench"></i>
                                <a>Administrar Cuenta</a>
                                <ul class="languages hoverSelectorBlock">
                                    <li><a href="javascript:void(0)">
                                            <i class="fa fa-cog"></i> Editar Perfil
                                        </a>
                                    </li>
                                    <li><a href="javascript:void(0)" onclick="logoutSistema()">
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
                                <a href="javascript:void(0);">
                                    <i class="fa fa-home"></i> Inicio
                                </a>
                            </li>
                            <li class="dropdown">
                                <a href="javascript:void(0)" class="dropdown-toggle" data-target="dropdown">
                                    <i class="fa fa-wrench"></i> Gestionar Sistema
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a href="javascript:void(0);" class="viewCP"><i class="fa fa-eye"></i> Visualizar a todos los Usuarios</a>
                                    </li>
                                </ul>
                            </li>
                            <!-- End Home -->
                        </ul>
                    </div><!--/end container-->
                </div><!--/navbar-collapse-->
            </div>
            <!--=== End Header ===-->

            <!--=== Content Part ===-->
            @yield('content')
            <!-- End Content Part -->
        </div><!--/wrapper-->
    </body>
@include('layout.recursos.footer')