<div id="datosCertificaciones" class="mCustomScrollbar" data-mcs-theme="minimal-dark">
    <div v-if="certificate.length == 0">
        <div class="alert alert-info text-center">
            <div class="row">
                <h2 class="text-white"><i class="fa fa-frown-o"></i> Aún no cuentas con certificaciones </h2>
                <a class="btn btn-primary btn-sm" onclick="bodyModal('div.bodyCertification','formCertificaciones')" data-toggle="modal" data-target=".modalCertification">
                    <i class="fa fa-plus"></i> Agregalos Aqui !
                </a>
            </div>
        </div>
    </div>
    <div v-else>
        <div v-if="!showCertificate" class="row margin-bottom-10">
            <div class="service-block-v8">
                <i class="fa fa-gear fa-spin text-primary"></i>
                <div class="service-block-desc">
                    <h3>Cargando tus Certificados</h3>
                </div>
            </div>
        </div>
        <transition-group name="fade" enter-active-class="fadeIn" leave-active-class="">
            <div v-for="(item, index) in certificate" :key="item.id" v-if="showCertificate">
                <div class="panel panel-success">
                    <div class="panel-heading clearfix">
                        <h1 class="panel-title pull-left"><i class="fa fa-university"></i> <span class="text-bold">@{{ item.name_institute }}</span></h1>
                        <div class="pull-right" style="padding-top: 4px">
                            <a class="tooltips" data-toggle="tooltip" data-placement="bottom" data-original-title="Adjuntar Sustento"><i style="cursor:pointer;" class="fa fa-upload fa-2x text-white" @click="onUpload(item.id)" data-toggle="modal" data-target=".modalUpload"></i></a>
                            &nbsp;
                            <a @click="Repositories('certificado-' + item.id)" class="tooltips" data-toggle="tooltip" data-placement="bottom" data-original-title="Ver Sustento"><i style="cursor:pointer;" class="fa fa-eye fa-2x text-white"></i></a>
                        </div>
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
                            <div class="col-md-1">
                                <i style="cursor:pointer;" class="fa fa-edit fa-2x text-success" @click="onUpdate(item.id)" data-toggle="modal" data-target=".modalCertification"></i>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </transition-group>
    </div>
</div>
<script src="{!! asset('js/vueCertificacion.js?version='.date('YmdHis'))!!}"></script>