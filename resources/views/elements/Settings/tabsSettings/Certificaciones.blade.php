<div id="datosCertificaciones">
    <div v-if="certificate.length == 0">
        <div class="alert alert-info text-center">
            <div class="row">
                <h2 class="text-white"><i class="fa fa-frown-o"></i> Aún no cuentas con certificaciones </h2>
                <a class="btn btn-primary btn-sm" onclick="bodyModal('div.bodyaddCertification','formCertificaciones')" data-toggle="modal" data-target=".modaladdCertification">
                    <i class="fa fa-plus"></i> Agregalos Aqui !
                </a>
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
                            <dd class="text-bold">@{{ item.name_certificate }}</dd>
                            <dt class="text-primary">Fecha de Inicio</dt>
                            <dd class="text-bold">@{{ item.date_begin }}</dd>
                            <dt class="text-primary">Fecha de Fin</dt>
                            <dd class="text-bold">@{{ item.date_finish }}</dd>
                        </div>
                        <div class="col-md-1">
                            <i class="fa fa-edit fa-2x text-primary"></i>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="{!! asset('js/vueCertificacion.js?version='.date('YmdHis'))!!}"></script>