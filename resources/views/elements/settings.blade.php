<!-- Profile Content -->
<div class="profile-body margin-bottom-20">
    <div class="tab-v1">
        <ul class="nav nav-justified nav-tabs">
            <li class="active"><a data-toggle="tab" href="#datosPersonales">Datos Personales</a></li>
            <li><a data-toggle="tab" href="#datosAcademicos">Datos Academicos</a></li>
            <li><a data-toggle="tab" href="#Certificaciones">Certificaciones</a></li>
            <li><a data-toggle="tab" href="#experienciaLaboral">Experiencia Laboral</a></li>
        </ul>
        <div class="tab-content">
            <div id="datosPersonales" class="profile-edit tab-pane fade in active">
                <h2 class="heading-md">Administra tus Datos Personales</h2>
                <p>A continuación podras ver tus datos que se encuentran ya registrados.</p>
                <br>
                @include('elements.formularios.datosPersonales')
            </div>

            <div id="datosAcademicos" class="profile-edit tab-pane fade">
                <h2 class="heading-md">Administra tus Datos Academicos</h2>
                <span>
                    <a class="pull-right" href="javascript:void(0)">
                        <i class="fa fa-plus fa-2x"></i>
                    </a>
                </span>
                <p>A continuación podras ver tus datos academicos que se encuentran ya registrados.</p>
                <br>
                @include('elements.formularios.datosAcademicos')
            </div>

            <div id="Certificaciones" class="profile-edit tab-pane fade">
                <h2 class="heading-md">Administra tus Certificados</h2>
                <span>
                    <a class="pull-right" href="javascript:void(0)">
                        <i class="fa fa-plus fa-2x"></i>
                    </a>
                </span>
                <p>A continuación podras ver tus certificaciones que se encuentran ya registrados.</p>
                <br>
                @include('elements.formularios.Certificaciones')
            </div>

            <div id="experienciaLaboral" class="profile-edit tab-pane fade">
                <h2 class="heading-md">Admnistra tu experiencia laboral</h2>
                <span>
                    <a class="pull-right" href="javascript:void(0)">
                        <i class="fa fa-plus fa-2x"></i>
                    </a>
                </span>
                <p>A continuación podras ver tu experiencia laboral que se encuentran ya registrados.</p>
                <br>
                @include('elements.formularios.experienciaLaboral')
            </div>
        </div>
    </div>
</div>
<!-- End Profile Content -->
<script src="{!! asset('js/vueCybertron.js?version='.date('YmdHis'))!!}"></script>