<div id="datosExperiencia">
    <template v-if="experience.length == 0">
        <div class="alert alert-sea text-center">
            <div class="row">
                <h2 class="text-white"><i class="fa fa-frown-o"></i> Aún no cuentas con Experiencia Laboral </h2>
                <a class="btn btn-success btn-sm" onclick="bodyModal('div.bodyExperience','formExperiencia')" data-toggle="modal" data-target=".modalExperience">
                    <i class="fa fa-plus"></i> Agregalos Aqui !
                </a>
            </div>
        </div>
    </template>
    <template v-else>
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
                    <div class="pull-right" v-if="profileDocument != ''">
                        <span><a class="tooltips" data-toggle="tooltip" data-placement="bottom" data-original-title="Adjuntar Sustento"><i style="cursor:pointer;" class="fa fa-upload fa-lg" @click="onUpload(item.id)" data-toggle="modal" data-target=".modalUpload"></i></a>&nbsp;</span>
                        <span><a @click="Repositories('experiencia-' + item.id)" class="tooltips" data-toggle="tooltip" data-placement="bottom" data-original-title="Ver Sustento"><i style="cursor:pointer;" class="fa fa-eye fa-lg"></i></a>&nbsp;</span>
                        <span><a class="tooltips" data-toggle="tooltip" data-placement="bottom" data-original-title="Editar Experiencia"><i style="cursor:pointer;" class="fa fa-edit fa-lg text-primary" @click="onUpdate(item.id)" data-toggle="modal" data-target=".modalExperience"></i></a></span>
                    </div>
                    <div class="clearfix margin-bottom-20"></div>
                    <hr>
                    <p v-html="item.review_business"></p>
                </div>
                <div class="margin-bottom-10"></div>
            </div>
        </transition-group>
    </template>
</div>
<script src="{!! asset('js/vueExperiencia.js?version='.date('YmdHis'))!!}"></script>