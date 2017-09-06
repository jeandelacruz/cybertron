<div class="modal-content">
    <div class="modal-header">
        <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
        <h4 id="myLargeModalLabel3" class="modal-title">{{ $updateForm === true ? "Editar" : "Agregar" }} Certificados</h4>
    </div>
    <div class="modal-body">
        <form id="formCertificacion" @submit.prevent="onSubmit" class="sky-form" @keydown="form.errors.clear($event.target.name)" @keydown.enter.prevent="">
        <fieldset>
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
                    <label class="label text-bold">Nombre del Certificado</label>
                    <label class="input">
                        <i class="icon-append fa fa-graduation-cap"></i>
                        <autocomplete :suggestions="completeCertification" v-model="form.nameCertification" onkeydown="return BlockCopyPaste(event)"></autocomplete>
                    </label>
                    <p class="text-danger" v-if="form.errors.has('nameCertification')" v-text="form.errors.get('nameCertification')"></p>
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
                        <b class="tooltip tooltip-bottom-right">Ingrese la fecha en la que culmino sus estudios</b>
                    </label>
                    <p class="text-danger" v-if="form.errors.has('dateFinish')" v-text="form.errors.get('dateFinish')"></p>
                </section>
            </div>
        </fieldset>
        <div class="modal-footer">
            <button type="submit" class="btn-u btnCertificacion"><i class="fa fa-save"></i> Guardar Cambios</button>
        </div>
        </form>
    </div>
</div>
<script src="{!! asset('js/formCertificacion.js?version='.date('YmdHis'))!!}"></script>
<script>
    formEnter('formCertificacion')
    @if($updateForm == true)
        vmFormCertificaciones.form.idCertificado = ''
        vmFormCertificaciones.form.idCertificado =  {{ $id }}
        vmFormCertificaciones.nameInstitute()
        vmFormCertificaciones.nameCertification()
        vmFormCertificaciones.loadCertificate()
    @else
        vmFormCertificaciones.form.idCertificado = ''
        vmFormCertificaciones.nameInstitute()
        vmFormCertificaciones.nameCertification()
    @endif
</script>