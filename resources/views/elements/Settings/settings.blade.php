<!-- Profile Content -->
<div class="profile-body margin-bottom-20">
    <div class="tab-v1">
        <ul class="nav nav-justified nav-tabs">
            <li class="active"><a data-toggle="tab" href="#tabdatosPersonales">Datos Personales</a></li>
            <li><a data-toggle="tab" href="#tabdatosAcademicos">Datos Academicos</a></li>
            <li><a data-toggle="tab" href="#tabCertificaciones">Certificaciones</a></li>
            <li><a data-toggle="tab" href="#tabexperienciaLaboral">Experiencia Laboral</a></li>
        </ul>
        <div class="tab-content">
            <div id="tabdatosPersonales" class="profile-edit tab-pane fade in active">
                @include('elements.Settings.tabsSettings.datosPersonales')
            </div>

            <div id="tabdatosAcademicos" class="profile-edit tab-pane fade">
                <h2 class="heading-md">Administra tus Datos Academicos</h2>
                <span>
                    <a class="pull-right" href="" onclick="bodyModal('div.bodyStudy','formDatosAcademicos')" data-toggle="modal" data-target=".modalStudy">
                        <i class="fa fa-plus fa-2x text-primary"></i>
                    </a>
                </span>
                <p>A continuación podras ver tus datos academicos que se encuentran ya registrados.</p>
                <br>
                @include('elements.Settings.tabsSettings.datosAcademicos')
            </div>

            <div id="tabCertificaciones" class="profile-edit tab-pane fade">
                <h2 class="heading-md">Administra tus Certificados</h2>
                <span>
                    <a class="pull-right" href="" onclick="bodyModal('div.bodyCertification','formCertificaciones')" data-toggle="modal" data-target=".modalCertification">
                        <i class="fa fa-plus fa-2x text-primary"></i>
                    </a>
                </span>
                <p>A continuación podras ver tus certificaciones que se encuentran ya registrados.</p>
                <br>
                @include('elements.Settings.tabsSettings.Certificaciones')
            </div>

            <div id="tabexperienciaLaboral" class="profile-edit tab-pane fade">
                <h2 class="heading-md">Admnistra tu experiencia laboral</h2>
                <span>
                    <a class="pull-right" href="" onclick="bodyModal('div.bodyExperience','formExperiencia')" data-toggle="modal" data-target=".modalExperience">
                        <i class="fa fa-plus fa-2x text-primary"></i>
                    </a>
                </span>
                <p>A continuación podras ver tu experiencia laboral que se encuentran ya registrados.</p>
                <br>
                @include('elements.Settings.tabsSettings.experienciaLaboral')
            </div>
        </div>
    </div>
</div>
<!-- End Profile Content -->
<script>
    $(function() {
        Unify.initScrollBar()
    })
</script>