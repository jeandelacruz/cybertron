<div id="datosExperiencia" class="mCustomScrollbar" data-mcs-theme="minimal-dark">
    <div v-if="experience.length == 0">
        <div class="alert alert-info text-center">
            <div class="row">
                <h2 class="text-info"><i class="fa fa-frown-o"></i> Aún no cuentas con certificaciones </h2>
                <a class="btn btn-primary btn-sm" onclick="bodyModal('div.bodyaddExperiencia','formExperiencia')" data-toggle="modal" data-target=".modaladdExperience">
                    <i class="fa fa-plus"></i> Agregalos Aqui !
                </a>
            </div>
        </div>
    </div>
    <div v-else>
        <div v-for="(item, index) in experience">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h1 class="panel-title"><i class="fa fa-building"></i> <span class="text-bold">@{{ item.name_job + ' en : ' + item.name_business }}</span></h1>
                </div>
                <div class="panel-body">
                    <dl class="dl-horizontal">
                        <div class="col-md-4 text-center">
                            <dt class="text-primary">Empresa</dt>
                            <dd class="text-bold">@{{ item.name_business }}</dd>
                            <dt class="text-primary">Puesto Laboral</dt>
                            <dd class="text-bold">@{{ item.name_job }}</dd>
                        </div>
                        <div class="col-md-7 text-center">
                            <dt class="text-primary">Desde</dt>
                            <dd class="text-bold">@{{ item.date_begin }}</dd>
                            <dt class="text-primary">Hasta</dt>
                            <dd class="text-bold">@{{ item.date_finish }}</dd>
                        </div>
                        <div class="col-md-1">
                            <i class="fa fa-edit fa-2x text-primary"></i>
                        </div>
                        <div class="col-md-12">
                            <dl class="dl-horizontal"><dd></dd></dl>
                            <div class="panel panel-default">
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
<script src="{!! asset('js/vueExperiencia.js?version='.date('YmdHis'))!!}"></script>