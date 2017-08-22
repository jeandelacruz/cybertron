<div class="modal-content">
    <div class="modal-header">
        <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
        <h4 id="myLargeModalLabel3" class="modal-title">Agregar Experiencia Laboral</h4>
    </div>
    <div class="modal-body">
        <form id="formExperiencia" @submit.prevent="onSubmit" class="sky-form" @keydown="form.errors.clear($event.target.name)">
        <fieldset>
            <div class="col-md-6">
                <section>
                    <label class="label text-bold">¿Que puesto de trabajo tuviste?</label>
                    <label class="input">
                        <i class="icon-append fa fa-joomla"></i>
                        <input type="text" name="namePuesto" placeholder="Analista HelpDesk, etc" v-model="form.namePuesto" onkeypress="return filterLetter(event)" onkeydown="return BlockCopyPaste(event)">
                        <b class="tooltip tooltip-bottom-right">Ingrese el puesto que tenia</b>
                    </label>
                    <p class="text-danger" v-if="form.errors.has('namePuesto')" v-text="form.errors.get('namePuesto')"></p>
                </section>
            </div>
            <div class="col-md-6">
                <section>
                    <label class="label text-bold">¿En que empresa?</label>
                    <label class="input">
                        <i class="icon-append fa fa-building"></i>
                        <input type="text" name="nameEmpresa" placeholder="Ej: Administracion,etc" v-model="form.nameEmpresa" onkeypress="return filterLetter(event)" onkeydown="return BlockCopyPaste(event)">
                        <b class="tooltip tooltip-bottom-right">Ingrese el nombre del Certificado, ejemplo : ITIL, etc</b>
                    </label>
                    <p class="text-danger" v-if="form.errors.has('nameEmpresa')" v-text="form.errors.get('nameEmpresa')"></p>
                </section>
            </div>
            <div class="col-md-12">
                <section>
                    <label class="label text-bold">Funcionalidades y Responsabilidades</label>
                    <label class="textarea">
                        <i class="icon-append fa fa-comment"></i>
                        <textarea rows="4" name="reviewPuesto" v-model="form.reviewPuesto"></textarea>
                        <b class="tooltip tooltip-bottom-right">Ingrese una reseña de su puesto</b>
                    </label>
                    <p class="text-danger" v-if="form.errors.has('reviewPuesto')" v-text="form.errors.get('reviewPuesto')"></p>
                </section>
            </div>
            <div class="col-md-6">
                <section>
                    <label class="label text-bold">Fecha de Inicio</label>
                    <label class="input">
                        <i class="icon-append fa fa-calendar"></i>
                        <input class="dateBegin" type="text" name="dateBegin" v-model="form.dateBegin" onkeypress="return false" onkeydown="return BlockCopyPaste(event)">
                        <b class="tooltip tooltip-bottom-right">Ingrese la fecha en la cual ingreso</b>
                    </label>
                    <p class="text-danger" v-if="form.errors.has('dateBegin')" v-text="form.errors.get('dateBegin')"></p>
                </section>
            </div>
            <div class="col-md-6">
                <section>
                    <label class="label text-bold">Fecha de Fin</label>
                    <label class="input">
                        <i class="icon-append fa fa-calendar-check-o"></i>
                        <input class="dateFinish" type="text" name="dateFinish" v-model="form.dateFinish" onkeypress="return false" onkeydown="return BlockCopyPaste(event)">
                        <b class="tooltip tooltip-bottom-right">Ingrese la fecha en la que culmino</b>
                    </label>
                    <p class="text-danger" v-if="form.errors.has('dateFinish')" v-text="form.errors.get('dateFinish')"></p>
                </section>
            </div>
        </fieldset>
        <div class="modal-footer">
            <button type="submit" class="btn-u btnExperiencia"><i class="fa fa-save"></i> Guardar Cambios</button>
        </div>
        </form>
    </div>
</div>
<script src="{!! asset('js/formExperiencia.js?version='.date('YmdHis'))!!}"></script>
<script>
    formEnter('formExperiencia',true)
    @if($updateForm == true)
        vmFormExperiencia.form.idExperience =  {{  $id }}
        vmFormExperiencia.loadExperience()
    @else
        vmFormExperiencia.form.idExperience = ''
    @endif
</script>