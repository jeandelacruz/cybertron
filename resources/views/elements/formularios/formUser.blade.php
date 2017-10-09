<div class="modal-content">
    <div class="modal-header">
        <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
        <h4 id="myLargeModalLabel3" class="modal-title">{{ $updateForm === true ? "Editar" : "Agregar" }} Nuevo Usuario</h4>
    </div>
    <div class="modal-body">
        <form id="formUser" @submit.prevent="onSubmit" class="sky-form" @keydown="form.errors.clear($event.target.name)">
            <fieldset>
                <div class="col-md-4">
                    <section>
                        <label class="label text-bold">Usuario de Red</label>
                        <label class="input">
                            <i class="icon-append fa fa-user"></i>
                            <input type="text" name="userRed" v-model="form.userRed" placeholder="Ej: kcarrasco" onkeypress="return filterLetter(event)" onkeydown="return BlockCopyPaste(event)">
                            <b class="tooltip tooltip-bottom-right">Ingrese el usuario de red del usuario (minuscula)</b>
                        </label>
                        <p class="text-danger" v-if="form.errors.has('userRed')" v-text="form.errors.get('userRed')"></p>
                    </section>
                </div>
                @if($updatePass)
                    <div class="col-md-8">
                        <section>
                            <label class="label text-bold">Contraseña de Usuario</label>
                            <label class="input">
                                <i class="icon-append fa fa-user"></i>
                                <input type="text" name="passUser" v-model="form.passUser" placeholder="*******" onkeypress="return filterLetter(event)" onkeydown="return BlockCopyPaste(event)">
                                <b class="tooltip tooltip-bottom-right">Ingrese una nueva contraseña para este usuario (Esta se guardara en minuscula)</b>
                            </label>
                            <p class="text-danger" v-if="form.errors.has('passUser')" v-text="form.errors.get('passUser')"></p>
                        </section>
                    </div>
                @else
                    <div class="col-md-8">
                        <div class="form-group">
                            <label class="label text-bold">Cargo de Usuario</label>
                            <v-select id="typeRol" :on-change="getTypeUser" :value.sync="selectType" :options="UserType" placeholder="Seleccione Aqui..!!"></v-select>
                            <p class="text-danger" v-if="form.errors.has('typeUser')" v-text="form.errors.get('typeUser')"></p>
                        </div>
                    </div>
                    <div class="col-md-12"></div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="label text-bold">Tipo Documento:</label>
                            <v-select :on-change="getDocument" :options="['DNI','EXTRANJERIA']" :value.sync="typeDocument" placeholder="Choose Type Document Here !"></v-select>
                            <p class="text-danger" v-if="form.errors.has('Document')" v-text="form.errors.get('Document')"></p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <section>
                            <label class="label text-bold">N° Documento</label>
                            <label class="input">
                                <i class="icon-append fa fa-lock"></i>
                                <input type="text" placeholder="99887766" name="numberDocument" v-model="form.numberDocument" onkeypress="return filterNumber(event)" onkeydown="return BlockCopyPaste(event)">
                                <b class="tooltip tooltip-bottom-right">Ingresa el numero de tu documento</b>
                            </label>
                            <p class="text-danger" v-if="form.errors.has('numberDocument')" v-text="form.errors.get('numberDocument')"></p>
                        </section>
                    </div>
                    <div class="col-md-8">
                        <div class="form-group">
                            <label class="label text-bold">Proyecto Asignado:</label>
                            <v-select :on-change="getProject" :options="Projects" :value.sync="selectProject" placeholder="Choose Project Here !"></v-select>
                            <p class="text-danger" v-if="form.errors.has('Document')" v-text="form.errors.get('Document')"></p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <section>
                            <label class="label text-bold">Jefe del Proyecto</label>
                            <label class="input">
                                <i class="icon-append fa fa-user"></i>
                                <input type="text" v-model="managerProject" disabled>
                            </label>
                        </section>
                    </div>
                @endif
            </fieldset>
            <div class="modal-footer">
                <button type="submit" class="btn-u btnUser"><i class="fa fa-save"></i> Guardar Cambios</button>
            </div>
        </form>
    </div>
</div>
<script src="{!! asset('js/formUser.js?version='.date('YmdHis'))!!}"></script>
<script>
    formEnter('formUser')
    @if($updateForm == true)
        vmFormUser.form.idUser =  {{ $id }}
        vmFormUser.loadUser()
    @else
        vmFormUser.form.idUser = ''
    @endif
</script>