<div class="modal-content profile">
    <div class="modal-header">
        <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
        <h4 id="myLargeModalLabel3" class="modal-title">Vista del Usuario</h4>
    </div>
    <div class="modal-body">
        <div class="profile-body">
            <div id="bioUser" class="profile-bio">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-responsive md-margin-bottom-10" :src="routeAvatar" alt="">
                    </div>
                    <div class="col-md-9">
                        <div class="col-md-12">
                            <div class="headline pull-left" style="margin: 0px 0 10px 0 !important;">
                                <h2 v-text="nameComplete"></h2>
                            </div>
                            <div class="pull-right">
                                <a :href="routeCV" target="_blank" v-if="routeCV != ''">
                                    <span><strong class="text-info"><i class="fa fa-file-pdf-o"></i> Descargar CV</strong></span>
                                </a>
                            </div>
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
                    <div id="datosBioAcademicos" class="scrollAcademy" data-mcs-theme="minimal-dark">
                        <template v-if="academy.length == 0">
                            <div class="alert alert-sea text-center">
                                <div class="row">
                                    <h2 class="text-white"><i class="fa fa-frown-o"></i> Aún no cuenta con datos academicos Registrados </h2>
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            <div v-for="(item, index) in academy">
                                <div class="profile-blog blog-border-v2">
                                    <img class="rounded-md" src="assets/img/universidad.png">
                                    <div class="name-location pull-left">
                                        <div class="margin-bottom-5">
                                            <strong>@{{ nameCareer[index] }}</strong>
                                        </div>
                                        <div class="margin-bottom-5">
                                            <span><i class="fa fa-university"></i>@{{ item.name_institute }}</span>
                                        </div>
                                        <div class="margin-bottom-5">
                                            <span><i class="fa fa-sitemap"></i>@{{ ' Situación Academica : ' + situationAcademy[index] }}</span>
                                        </div>
                                        <div class="margin-bottom-5">
                                            <span><i class="fa fa-calendar-check-o"></i>@{{ ' Inicio : ' + dateBegin[index] }}</span>&nbsp;
                                            <template v-if="situationAcademy[index] != 'Cursando'"><span><i class="fa fa-calendar"></i>@{{ ' Fin : ' + dateFinish[index] }}</span></template>
                                        </div>
                                    </div>
                                    <div class="pull-right">
                                        <template v-if="viewAcademy == 'academico-' + item.id">
                                            <a class="tooltips" data-toggle="tooltip" data-placement="bottom" data-original-title="Descargar Sustento" @click="Repositories('academico-' + item.id)" style="cursor: pointer" download>
                                                <i style="cursor:pointer;" class="fa fa-download fa-lg text-primary"></i>
                                            </a>
                                        </template>
                                        <template v-else-if="viewAcademy == 'not-academico-' + item.id">
                                            <a class="tooltips" data-toggle="tooltip" data-placement="bottom" data-original-title="No Tiene Sustento" @click="Repositories('academico-' + item.id)" style="cursor: pointer" download>
                                                <i style="cursor:pointer;" class="fa fa-close fa-lg text-danger"></i>
                                            </a>
                                        </template>
                                        <template v-else>
                                            <a class="tooltips" data-toggle="tooltip" data-placement="bottom" data-original-title="Buscar Sustento" @click="Repositories('academico-' + item.id)" style="cursor: pointer" download>
                                                <i style="cursor:pointer;" class="fa fa-search fa-lg color-darker"></i>
                                            </a>
                                        </template>
                                    </div>
                                    <div class="clearfix margin-bottom-20"></div>
                                </div>
                                <div class="margin-bottom-10"></div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-md-12">
                    <div class="headline">
                        <h2>Certificaciones</h2>
                    </div>
                    <div id="datosBioCertificaciones">
                        <div class="scrollCertificaciones" data-mcs-theme="minimal-dark">
                            <template v-if="certificate.length == 0">
                                <div class="alert alert-sea text-center">
                                    <div class="row">
                                        <h2 class="text-white"><i class="fa fa-frown-o"></i> Aún no cuenta con Certificaciones Ingresadas </h2>
                                    </div>
                                </div>
                            </template>
                            <template v-else>
                                <div v-for="(item, index) in certificate">
                                    <div class="profile-blog blog-border-v2">
                                        <img class="rounded-md" src="assets/img/certificado.png">
                                        <div class="name-location pull-left">
                                            <div class="margin-bottom-5">
                                                <strong>@{{ nameCertificate[index]}}</strong>
                                            </div>
                                            <div class="margin-bottom-5">
                                                <span><i class="fa fa-university"></i>@{{ ' en : ' + item.name_institute }}</span>
                                            </div>
                                            <div class="margin-bottom-5">
                                                <span><i class="fa fa-calendar-check-o"></i>@{{ ' Inicio : ' + dateBegin[index] }}</span>&nbsp;
                                                <span><i class="fa fa-calendar"></i>@{{ ' Fin : ' + dateFinish[index] }}</span>
                                            </div>
                                        </div>
                                        <div class="pull-right">
                                            <template v-if="viewCertificado == 'certificado-' + item.id">
                                                <a class="tooltips" data-toggle="tooltip" data-placement="bottom" data-original-title="Descargar Sustento" @click="Repositories('certificado-' + item.id)" style="cursor: pointer" download>
                                                    <i style="cursor:pointer;" class="fa fa-download fa-lg text-primary"></i>
                                                </a>
                                            </template>
                                            <template v-else-if="viewCertificado == 'not-certificado-' + item.id">
                                                <a class="tooltips" data-toggle="tooltip" data-placement="bottom" data-original-title="No Tiene Sustento" @click="Repositories('certificado-' + item.id)" style="cursor: pointer" download>
                                                    <i style="cursor:pointer;" class="fa fa-close fa-lg text-danger"></i>
                                                </a>
                                            </template>
                                            <template v-else>
                                                <a class="tooltips" data-toggle="tooltip" data-placement="bottom" data-original-title="Buscar Sustento" @click="Repositories('certificado-' + item.id)" style="cursor: pointer" download>
                                                    <i style="cursor:pointer;" class="fa fa-search fa-lg color-darker"></i>
                                                </a>
                                            </template>
                                        </div>
                                        <div class="clearfix margin-bottom-20"></div>
                                    </div>
                                    <div class="margin-bottom-10"></div>
                                </div>
                            </template>
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
                    <div id="datosBioExperiencia" class="scrollExperiencia" data-mcs-theme="minimal-dark">
                        <template v-if="experience.length == 0">
                            <div class="alert alert-sea text-center">
                                <div class="row">
                                    <h2 class="text-white"><i class="fa fa-frown-o"></i> Aún no cuenta con Experiencia Laboral Registradas </h2>
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            <div v-for="(item, index) in experience">
                                <div class="profile-blog blog-border-v2">
                                    <img class="rounded-md" src="assets/img/experiencia.png">
                                    <div class="name-location pull-left">
                                        <div class="margin-bottom-5">
                                            <strong>@{{ item.name_job}}</strong>
                                        </div>
                                        <div class="margin-bottom-5">
                                            <span><i class="fa fa-building"></i>@{{ ' en : ' + item.name_business }}</span>
                                        </div>
                                        <div class="margin-bottom-5">
                                            <span><i class="fa fa-calendar-check-o"></i>@{{ ' Desde : ' + dateBegin[index] }}</span>&nbsp;
                                            <span><i class="fa fa-calendar"></i>@{{ dateFinish[index] }}</span>
                                        </div>
                                    </div>
                                    <div class="pull-right">
                                        <template v-if="viewExperiencia == 'experiencia-' + item.id">
                                            <a class="tooltips" data-toggle="tooltip" data-placement="bottom" data-original-title="Descargar Sustento" @click="Repositories('experiencia-' + item.id)" style="cursor: pointer" download>
                                                <i style="cursor:pointer;" class="fa fa-download fa-lg text-primary"></i>
                                            </a>
                                        </template>
                                        <template v-else-if="viewExperiencia == 'not-experiencia-' + item.id">
                                            <a class="tooltips" data-toggle="tooltip" data-placement="bottom" data-original-title="No Tiene Sustento" @click="Repositories('experiencia-' + item.id)" style="cursor: pointer" download>
                                                <i style="cursor:pointer;" class="fa fa-close fa-lg text-danger"></i>
                                            </a>
                                        </template>
                                        <template v-else>
                                            <a class="tooltips" data-toggle="tooltip" data-placement="bottom" data-original-title="Buscar Sustento" @click="Repositories('experiencia-' + item.id)" style="cursor: pointer" download>
                                                <i style="cursor:pointer;" class="fa fa-search fa-lg color-darker"></i>
                                            </a>
                                        </template>
                                    </div>
                                    <div class="clearfix margin-bottom-20"></div>
                                    <hr>
                                    <p>@{{ item.review_business }}</p>
                                </div>
                                <div class="margin-bottom-10"></div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="{!! asset('js/vuebioUser.js?version='.date('YmdHis'))!!}"></script>
<script>
    vmBio.idUser =  {{ $id }}
    vmBio.loadProfile()
    vmBioDatosAcademicos.loadAcademy()
    vmBioCertificaciones.loadCertificaciones()
    vmBioExperiencia.loadExperience()
    setTimeout(function() {
        vmBioDatosAcademicos.count()
        vmBioCertificaciones.count()
        vmBioExperiencia.count()
    }, 1000)
</script>