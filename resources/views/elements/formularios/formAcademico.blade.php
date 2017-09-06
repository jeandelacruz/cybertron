<div class="modal-content">
    <div class="modal-header">
        <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
        <h4 id="myLargeModalLabel3" class="modal-title">{{ $updateForm === true ? "Editar" : "Agregar" }} Datos Academicos</h4>
    </div>
    <div class="modal-body">
        <form id="formAcademico" @submit.prevent="onSubmit" class="sky-form" @keydown="form.errors.clear($event.target.name)" @keydown.enter.prevent="">
            <fieldset>
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="label text-bold">Tipo de Institución</label>
                        <v-select id="typeInstitute" :on-change="getTypeInstitute" :value.sync="selectedTypeinstitute" :options="['Tecnico','Universitario']" placeholder="Seleccione Aqui..!!"></v-select>
                        <p class="text-danger" v-if="form.errors.has('typeInstitute')" v-text="form.errors.get('typeInstitute')"></p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="label text-bold">Situación Academica</label>
                        <v-select id="situationAcademy" :on-change="getSituationAcademy" :value.sync="selectedSituationacademy" :options="['Cursando','Egresado','Titulado','Bachiller']" placeholder="Seleccione Aqui..!!"></v-select>
                        <p class="text-danger" v-if="form.errors.has('situationAcademy')" v-text="form.errors.get('situationAcademy')"></p>
                    </div>
                </div>
                <div class="col-md-6">
                    <section>
                        <label class="label text-bold">Nombre de la Institución</label>
                        <label class="input">
                            <i class="icon-append fa fa-institution"></i>
                            <autocomplete :suggestions="completeInstitute" v-model="form.nameInstitution" onkeydown="return BlockCopyPaste(event)"></autocomplete>
                        </label>
                        <p class="text-danger" v-if="form.errors.has('nameInstitution')" v-text="form.errors.get('nameInstitution')"></p>
                    </section>
                </div>
                <div class="col-md-6">
                    <section>
                        <label class="label text-bold">Carrera</label>
                        <label class="input">
                            <i class="icon-append fa fa-graduation-cap"></i>
                            <autocomplete :suggestions="completeCareer" v-model="form.nameCareer" onkeydown="return BlockCopyPaste(event)"></autocomplete>
                        </label>
                        <p class="text-danger" v-if="form.errors.has('nameCareer')" v-text="form.errors.get('nameCareer')"></p>
                    </section>
                </div>
                <div class="col-md-6">
                    <section>
                        <label class="label text-bold">Fecha de Ingreso</label>
                        <label class="input">
                            <i class="icon-append fa fa-calendar"></i>
                            <input class="dateBegin" type="text" name="dateBegin" v-model="form.dateBegin" onkeypress="return false" onkeydown="return BlockCopyPaste(event)">
                            <b class="tooltip tooltip-bottom-right">Ingrese la fecha en la cual ingreso</b>
                        </label>
                        <p class="text-danger" v-if="form.errors.has('dateBegin')" v-text="form.errors.get('dateBegin')"></p>
                    </section>
                </div>
                <div class="col-md-6" v-show="showdateFinish">
                    <section>
                        <label class="label text-bold">Fecha de Graduacion</label>
                        <label class="input">
                            <i class="icon-append fa fa-calendar-check-o"></i>
                            <input class="dateFinish" type="text" name="dateFinish" v-model="form.dateFinish" onkeypress="return false" onkeydown="return BlockCopyPaste(event)">
                            <b class="tooltip tooltip-bottom-right">Ingrese la fecha en la que culmino sus estudios</b>
                        </label>
                        <p class="text-danger" v-if="form.errors.has('dateFinish')" v-text="form.errors.get('dateFinish')"></p>
                    </section>
                </div>
                <div class="col-md-6" v-show="!showdateFinish">
                    <section>
                        <label class="label text-bold">&nbsp;</label>
                        <label class="input">
                            <span class="label label-blue rounded-2x text-white text-center"> 👨🏻‍🎓 Sigues cursando tu carrera </span>
                        </label>
                    </section>
                </div>
            </fieldset>
            <div class="modal-footer">
                <button type="submit" class="btn-u btnAcademicos"><i class="fa fa-save"></i> Guardar Cambios</button>
            </div>
        </form>
    </div>
</div>
<script src="{!! asset('js/formDatosAcademicos.js?version='.date('YmdHis'))!!}"></script>
<script>
    formEnter('formAcademico')
    @if($updateForm == true)
        vmFormDatosAcademicos.form.idAcademico = ''
        vmFormDatosAcademicos.form.idAcademico =  {{ $id }}
        vmFormDatosAcademicos.nameInstitute()
        vmFormDatosAcademicos.nameCareers()
        vmFormDatosAcademicos.loadAcademico()
    @else
        vmFormDatosAcademicos.form.idAcademico = ''
        vmFormDatosAcademicos.nameInstitute()
        vmFormDatosAcademicos.nameCareers()
    @endif
</script>