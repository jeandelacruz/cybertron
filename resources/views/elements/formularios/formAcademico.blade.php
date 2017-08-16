<div class="modal-content">
    <div class="modal-header">
        <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
        <h4 id="myLargeModalLabel3" class="modal-title">Agregar Datos Academicos</h4>
    </div>
    <div class="modal-body">
        <form id="formAcademico" @submit.prevent="onSubmit" class="sky-form" @keydown="form.errors.clear($event.target.name)">
            <fieldset>
                <div class="col-md-12">
                    <div class="col-md-6">
                        <section>
                            <label class="title">Tipo de Institución</label>
                            <label class="input">
                                <v-select id="typeInstitute" :on-change="getTypeInstitute" :value.sync="selectedInstitute" :options="['Tecnico','Universitario']" placeholder="Choose here..!!"></v-select>
                            </label>
                        </section>
                    </div>
                    <div class="col-md-6">
                        <section>
                            <label class="title">Situacion Academica</label>
                            <label class="input">
                                <v-select id="situationAcademy" :on-change="getSituationAcademy" :value.sync="selectedAcademy" :options="['Cursando','Egresado','Titulado','Bachiller']" placeholder="Choose here..!!"></v-select>
                            </label>
                        </section>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="col-md-6">
                        <section>
                            <label class="title">Nombre de la Institución</label>
                            <label class="input">
                                <i class="icon-append fa fa-institution"></i>
                                <input type="text" name="nameInstitution" placeholder="Ej: Universidad del Pacifico, etc" v-model="form.nameInstitution">
                                <b class="tooltip tooltip-bottom-right">Ingrese el nombre de su instituto, ejemplo : Universidad del Pacifico, etc</b>
                            </label>
                            <p class="text-danger" v-if="form.errors.has('nameInstitution')" v-text="form.errors.get('nameInstitution')"></p>
                        </section>
                    </div>
                    <div class="col-md-6">
                        <section>
                            <label class="title">Carrera</label>
                            <label class="input">
                                <i class="icon-append fa fa-graduation-cap"></i>
                                <input type="text" name="nameCareer" placeholder="Ej: Administracion,etc" v-model="form.nameCareer">
                                <b class="tooltip tooltip-bottom-right">Ingrese su carrera, ejemplo : Administracion, etc</b>
                            </label>
                            <p class="text-danger" v-if="form.errors.has('nameCareer')" v-text="form.errors.get('nameCareer')"></p>
                        </section>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="col-md-6">
                        <section>
                            <label class="title">Fecha de Ingreso</label>
                            <label class="input">
                                <i class="icon-append fa fa-calendar"></i>
                                <input class="dateBegin" type="text" name="dateBegin" v-model="form.dateBegin">
                                <b class="tooltip tooltip-bottom-right">Ingrese la fecha en la cual ingreso</b>
                            </label>
                            <p class="text-danger" v-if="form.errors.has('dateBegin')" v-text="form.errors.get('dateBegin')"></p>
                        </section>
                    </div>
                    <div class="col-md-6">
                        <section>
                            <label class="title">Fecha de Graduacion</label>
                            <label class="input">
                                <i class="icon-append fa fa-calendar-check-o"></i>
                                <input class="dateFinish" type="text" name="dateFinish" v-model="form.dateFinish">
                                <b class="tooltip tooltip-bottom-right">Ingrese la fecha en la que culmino sus estudios</b>
                            </label>
                            <p class="text-danger" v-if="form.errors.has('dateFinish')" v-text="form.errors.get('dateFinish')"></p>
                        </section>
                    </div>
                </div>
            </fieldset>
            <div class="modal-footer">
                <button type="submit" class="btn-u btnAcademicos"><i class="fa fa-plus"></i> Agregar</button>
            </div>
        </form>
    </div>
</div>
<script src="{!! asset('js/formDatosAcademicos.js?version='.date('YmdHis'))!!}"></script>