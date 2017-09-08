<div id="datosAcademicos">
    <div v-if="academy.length == 0">
        <div class="alert alert-sea text-center">
            <div class="row">
                <h2 class="text-white"><i class="fa fa-frown-o"></i> Aún no cuentas con datos academicos </h2>
                <a class="btn btn-success btn-sm" onclick="bodyModal('div.bodyStudy','formDatosAcademicos')" data-toggle="modal" data-target=".modalStudy">
                    <i class="fa fa-plus"></i> Agregalos Aqui !
                </a>
            </div>
        </div>
    </div>
    <div v-else>
        <div v-if="!showAcademy" class="row margin-bottom-10">
            <div class="service-block-v8">
                <i class="fa fa-gear fa-spin text-primary"></i>
                <div class="service-block-desc">
                    <h3>Cargando tus Datos Personales</h3>
                </div>
            </div>
        </div>
        <transition-group name="fade" enter-active-class="fadeIn" leave-active-class="">
            <div v-for="(item, index) in academy" :key="item.id" v-if="showAcademy">
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
                            <span v-if="situationAcademy[index] != 'Cursando'"><i class="fa fa-calendar"></i>@{{ ' Fin : ' + dateFinish[index] }}</span>
                        </div>
                    </div>
                    <div class="pull-right" v-if="profileDocument != ''">
                        <a class="tooltips" data-toggle="tooltip" data-placement="bottom" data-original-title="Adjuntar Sustento"><i style="cursor:pointer;" class="fa fa-upload fa-lg" @click="onUpload(item.id)" data-toggle="modal" data-target=".modalUpload"></i></a>&nbsp;
                        <a @click="Repositories('academico-' + item.id)" class="tooltips" data-toggle="tooltip" data-placement="bottom" data-original-title="Ver Sustento"><i style="cursor:pointer;" class="fa fa-eye fa-lg"></i></a>&nbsp;
                        <span><a class="tooltips" data-toggle="tooltip" data-placement="bottom" data-original-title="Editar Certificado"><i style="cursor:pointer;" class="fa fa-edit fa-lg text-primary" @click="onUpdate(item.id)" data-toggle="modal" data-target=".modalStudy"></i></a></span>
                    </div>
                    <div class="clearfix margin-bottom-20"></div>
                </div>
                <div class="margin-bottom-10"></div>
            </div>
        </transition-group>
    </div>
</div>
<script src="{!! asset('js/vueDatosAcademicos.js?version='.date('YmdHis'))!!}"></script>