<div class="modal-content profile">
    <div class="modal-header">
        <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
        <h4 id="myLargeModalLabel3" class="modal-title">Datos Academicos</h4>
    </div>
    <div class="modal-body">
        <div class="profile-body">
            <div id="bioUser" class="profile-bio">
                <div class="row">
                    <div class="col-md-4">
                        <img class="img-responsive md-margin-bottom-10" src="assets/img/team/img32-md.jpg" alt="">
                    </div>
                    <div class="col-md-8">
                        <div class="headline">
                            <h2 v-text="nameComplete"></h2>
                        </div>
                        <div class="col-md-6">
                            <span><strong class="text-primary">Cargo:</strong> @{{ roleUser }}</span>
                        </div>
                        <div class="col-md-6">
                            <span><strong class="text-primary">Cumpleaños:</strong> @{{ dateBirthday }}</span>
                        </div>
                        <div class="col-md-6">
                            <span><strong class="text-primary">Telefono Fijo:</strong> @{{ numberTelephone }}</span>
                        </div>
                        <div class="col-md-6">
                            <span><strong class="text-primary">Telefono Personal:</strong> @{{ numberMobile }}</span>
                        </div>
                        <div class="col-md-6">
                            <span><strong class="text-primary">Correo Personal:</strong> @{{ Email }}</span>
                        </div>
                        <div class="col-md-6">
                            <span><strong class="text-primary">@{{ typeDocument }}:</strong> @{{ numberDocument }}</span>
                        </div>
                        <div class="col-md-6">
                            <span><strong class="text-primary">@{{ License }}:</strong> @{{ numberLicense }}</span>
                        </div>
                        <div class="col-md-6">
                            <span><strong class="text-primary">Estado Civil:</strong> @{{ Marital }}</span>
                        </div>
                        <div class="col-md-6">
                            <span><strong class="text-primary">Fecha Nacimiento:</strong> @{{ dateBorn }}</span>
                        </div>
                        <div class="col-md-6">
                            <span><strong class="text-primary">Ubigeo:</strong> @{{ Ubigeo }}</span>
                        </div>
                        <div class="col-md-12">
                            <span><strong class="text-primary">Dirección Domicilio:</strong> @{{ nameAddress }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-md-12">
                    <div class="headline">
                        <h2>Datos Academicos</h2>
                    </div>
                    <div id="datosBioAcademicos" class="mCustomScrollbar" data-mcs-theme="minimal-dark">
                        <div v-if="academy.length == 0">
                            <div class="alert alert-info text-center">
                                <div class="row">
                                    <h2 class="text-white"><i class="fa fa-frown-o"></i> Aún no cuenta con datos academicos </h2>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <div v-for="(item, index) in academy">
                                <div class="panel panel-primary">
                                    <div class="panel-heading">
                                        <h1 class="panel-title"><i class="fa fa-university"></i> <span class="text-bold">@{{ item.name_institute }}</span></h1>
                                    </div>
                                    <div class="panel-body">
                                        <dl class="dl-horizontal">
                                            <div class="col-md-4 text-center">
                                                <img class="img-width-120 b-lazy" src="assets/img/logo.png" alt="Logo">
                                            </div>
                                            <div class="col-md-7">
                                                <dt class="text-primary">Ramas de Carrera</dt>
                                                <dd class="text-bold" v-text="nameCareer[index]"></dd>
                                                <dt class="text-primary">Situación Académica</dt>
                                                <dd class="text-bold" v-text="situationAcademy[index]"></dd>
                                                <dt class="text-primary">Fecha de Inicio</dt>
                                                <dd class="text-bold" v-text="dateBegin[index]"></dd>
                                                <dt class="text-primary">Fecha de Graduación</dt>
                                                <dd class="text-bold" v-text="dateFinish[index]"></dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-md-12">
                    <div class="headline">
                        <h2>Certificaciones</h2>
                    </div>
                    <div id="datosBioCertificaciones" class="mCustomScrollbar" data-mcs-theme="minimal-dark">
                        <div v-if="certificate.length == 0">
                            <div class="alert alert-info text-center">
                                <div class="row">
                                    <h2 class="text-white"><i class="fa fa-frown-o"></i> Aún no cuentas con certificaciones </h2>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <div v-for="(item, index) in certificate">
                                <div class="panel panel-success">
                                    <div class="panel-heading">
                                        <h1 class="panel-title"><i class="fa fa-university"></i> <span class="text-bold">@{{ item.name_institute }}</span></h1>
                                    </div>
                                    <div class="panel-body">
                                        <dl class="dl-horizontal">
                                            <div class="col-md-4 text-center">
                                                <img class="img-width-120 b-lazy" src="assets/img/logo.png" alt="Logo">
                                            </div>
                                            <div class="col-md-7">
                                                <dt class="text-primary">Certificado</dt>
                                                <dd class="text-bold" v-text="nameCertificate[index]"></dd>
                                                <dt class="text-primary">Fecha de Inicio</dt>
                                                <dd class="text-bold" v-text="dateBegin[index]"></dd>
                                                <dt class="text-primary">Fecha de Fin</dt>
                                                <dd class="text-bold" v-text="dateFinish[index]"></dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-md-12">
                    <div class="headline">
                        <h2>Experiencia Laboral</h2>
                    </div>
                    <div id="datosBioExperiencia" class="mCustomScrollbar" data-mcs-theme="minimal-dark">
                        <div v-if="experience.length == 0">
                            <div class="alert alert-info text-center">
                                <div class="row">
                                    <h2 class="text-white"><i class="fa fa-frown-o"></i> Aún no cuentas con Experiencia Laboral </h2>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <div v-for="(item, index) in experience">
                                <div class="panel panel-warning">
                                    <div class="panel-heading">
                                        <h1 class="panel-title"><i class="fa fa-building"></i> <span class="text-bold">@{{ item.name_job + ' en : ' + item.name_business }}</span></h1>
                                    </div>
                                    <div class="panel-body">
                                        <dl class="dl-horizontal">
                                            <div class="col-md-4 text-center">
                                                <dt class="text-primary">Empresa</dt>
                                                <dd class="text-bold" v-text="nameBusiness[index]"></dd>
                                                <dt class="text-primary">Puesto Laboral</dt>
                                                <dd class="text-bold" v-text="nameJob[index]"></dd>
                                            </div>
                                            <div class="col-md-7 text-center">
                                                <dt class="text-primary">Desde</dt>
                                                <dd class="text-bold" v-text="dateBegin[index]"></dd>
                                                <dt class="text-primary">Hasta</dt>
                                                <dd class="text-bold" v-text="dateFinish[index]"></dd>
                                            </div>
                                            <div class="col-md-12">
                                                <dl class="dl-horizontal"><dd></dd></dl>
                                                <div class="panel panel-warning">
                                                    <div class="panel-heading text-center">
                                                        <span class="panel-title" style="cursor:pointer;" class="accordion-toggle" data-toggle="collapse" :data-parent="'#accordion-'+item.id" :href="'#collapse-'+item.id">
                                                            Funcionalidades y Responsabilidades <i class="fa fa-unsorted"></i>
                                                        </span>
                                                    </div>
                                                    <div :id="'collapse-'+item.id" class="panel-collapse collapse">
                                                        <div class="panel-body">
                                                            <div class="row text-center">
                                                                <div class="col-md-12">
                                                                    @{{ item.review_business }}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="{!! asset('js/vuebioUser.js?version='.date('YmdHis'))!!}"></script>
<script>
    $(function() {
        $('.mCustomScrollbar').mCustomScrollbar({
            theme:"minimal",
            setHeight: '190px',
            scrollEasing: "linear",
            autoHideScrollbar: true,
            scrollButtons: true
        })
    })
    vmBio.idUser =  {{ $id }}
    vmBio.loadProfile()
    vmBioDatosAcademicos.loadAcademy()
    vmBioCertificaciones.loadCertificaciones()
    vmBioExperiencia.loadExperience()
</script>