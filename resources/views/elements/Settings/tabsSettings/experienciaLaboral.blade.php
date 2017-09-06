<div id="datosExperiencia" class="mCustomScrollbar" data-mcs-theme="minimal-dark">
    <div v-if="experience.length == 0">
        <div class="alert alert-info text-center">
            <div class="row">
                <h2 class="text-white"><i class="fa fa-frown-o"></i> Aún no cuentas con Experiencia Laboral </h2>
                <a class="btn btn-primary btn-sm" onclick="bodyModal('div.bodyExperience','formExperiencia')" data-toggle="modal" data-target=".modalExperience">
                    <i class="fa fa-plus"></i> Agregalos Aqui !
                </a>
            </div>
        </div>
    </div>
    <div v-else>
        <div v-if="!showExperience" class="row margin-bottom-10">
            <div class="service-block-v8">
                <i class="fa fa-gear fa-spin text-primary"></i>
                <div class="service-block-desc">
                    <h3>Cargando tus Experiencias</h3>
                </div>
            </div>
        </div>
        <transition-group name="fade" enter-active-class="fadeIn" leave-active-class="">
            <div v-for="(item, index) in experience" :key="item.id" v-if="showExperience">
                <div class="panel panel-warning">
                    <div class="panel-heading clearfix">
                        <h1 class="panel-title pull-left"><i class="fa fa-building"></i> <span class="text-bold">@{{ item.name_job + ' en : ' + item.name_business }}</span></h1>
                        <div class="pull-right" style="padding-top: 4px">
                            <a class="tooltips" data-toggle="tooltip" data-placement="bottom" data-original-title="Adjuntar Sustento"><i style="cursor:pointer;" class="fa fa-upload fa-2x text-white" @click="onUpload(item.id)" data-toggle="modal" data-target=".modalUpload"></i></a>
                            &nbsp;
                            <a @click="Repositories('experiencia-' + item.id)" class="tooltips" data-toggle="tooltip" data-placement="bottom" data-original-title="Ver Sustento"><i style="cursor:pointer;" class="fa fa-eye fa-2x text-white"></i></a>
                        </div>
                    </div>
                    <div class="panel-body">
                        <dl class="dl-horizontal">
                            <div class="col-md-6 text-center">
                                <dt class="text-primary">Empresa</dt>
                                <dd class="text-bold" v-text="nameBusiness[index]"></dd>
                                <dt class="text-primary">Puesto Laboral</dt>
                                <dd class="text-bold" v-text="nameJob[index]"></dd>
                            </div>
                            <div class="col-md-5 text-center">
                                <dt class="text-primary">Desde</dt>
                                <dd class="text-bold" v-text="dateBegin[index]"></dd>
                                <dt class="text-primary">Hasta</dt>
                                <dd class="text-bold" v-text="dateFinish[index]"></dd>
                            </div>
                            <div class="col-md-1">
                                <i style="cursor:pointer;" class="fa fa-edit fa-2x text-warning" @click="onUpdate(item.id)" data-toggle="modal" data-target=".modalExperience"></i>
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
        </transition-group>
    </div>
</div>
<script src="{!! asset('js/vueExperiencia.js?version='.date('YmdHis'))!!}"></script>