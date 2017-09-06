<div id="datosPersonales">
    <h2 class="heading-md">Administra tus Datos Personales</h2>
    <span>
        <div v-if="showDocument">
            <div class="pull-right">
                <a onclick="modalUpload('div.bodyUpload','formUpload','.pdf','curriculum_vitae', 1)" data-toggle="modal" data-target=".modalUpload" style="cursor: pointer">
                    <i class="fa fa-upload fa-2x text-success"></i>
                </a>&nbsp;
                <a class="tooltips" data-toggle="tooltip" data-placement="bottom" data-original-title="Ver Curriculum Vitae" style="cursor: pointer" :href="routeCV" v-if="routeCV != ''" download>
                    <i class="fa fa-eye fa-2x text-success"></i>
                </a>
            </div>
        </div>
        <div v-else>
            <a class="tooltips pull-right" data-toggle="tooltip" data-placement="bottom" data-original-title="Debes llenar tu DNI para poder subir tu CV" style="cursor: pointer">
                <i class="fa fa-upload fa-2x text-danger"></i>
            </a>
        </div>
    </span>
    <p>A continuación podras ver tus datos que se encuentran ya registrados.</p>
    <br>
    <div v-if="!showPersonales" class="row margin-bottom-10">
        <div class="service-block-v8">
            <i class="fa fa-gear fa-spin text-primary"></i>
            <div class="service-block-desc">
                <h3>Cargando tus Datos Personales</h3>
            </div>
        </div>
    </div>
    <transition name="fade" enter-active-class="fadeIn" leave-active-class="">
        <form class="sky-form" id="formDatosPersonales" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)" v-if="showPersonales">
            <dl class="dl-horizontal">
                <div class="headline">
                    <h3>Identificación</h3>
                </div>
                <div class="col-md-12">
                    <dt>Nombres Completos</dt>
                    <dd>
                        <section>
                            <label class="input">
                                <i class="icon-append fa fa-user"></i>
                                <input type="text" placeholder="Nombres" name="Names" v-model="form.Names" onkeypress="return filterLetter(event)" onkeydown="return BlockCopyPaste(event)">
                                <b class="tooltip tooltip-bottom-right">Ingresa tu nombre</b>
                            </label>
                            <p class="text-danger" v-if="form.errors.has('Names')" v-text="form.errors.get('Names')"></p>
                        </section>
                    </dd>
                </div>
                <div class="col-md-6">
                    <dt>Apellido Paterno</dt>
                    <dd>
                        <section>
                            <label class="input">
                                <i class="icon-append fa fa-address-book"></i>
                                <input type="text" placeholder="Apellido Paterno" name="FirstlastName" v-model="form.FirstlastName" onkeypress="return filterLetter(event)" onkeydown="return BlockCopyPaste(event)">
                                <b class="tooltip tooltip-bottom-right">Ingresa tu apellido paterno</b>
                            </label>
                            <p class="text-danger" v-if="form.errors.has('FirstlastName')" v-text="form.errors.get('FirstlastName')"></p>
                        </section>
                    </dd>
                </div>
                <div class="col-md-6">
                    <dt>Apellido Materno</dt>
                    <dd>
                        <section>
                            <label class="input">
                                <i class="icon-append fa fa-address-book"></i>
                                <input type="text" placeholder="Apellido Materno" name="SecondlastName" v-model="form.SecondlastName" onkeypress="return filterLetter(event)" onkeydown="return BlockCopyPaste(event)">
                                <b class="tooltip tooltip-bottom-right">Ingresa tu apellido materno</b>
                            </label>
                            <p class="text-danger" v-if="form.errors.has('SecondlastName')" v-text="form.errors.get('SecondlastName')"></p>
                        </section>
                    </dd>
                </div>
                <div class="headline">
                    <h3>Datos de Domicilio</h3>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="label text-bold">Departamento:</label>
                        <v-select id="nomDepartamento" :on-change="loadProvincia" :value.sync="selectedD" :options="departamento" placeholder="Seleccione Aqui..!!"></v-select>
                        <p class="text-danger" v-if="form.errors.has('Departamento')" v-text="form.errors.get('Departamento')"></p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="label text-bold">Provincia:</label>
                        <v-select id="nomProvincia" :on-change="loadDistrito" :value.sync="selectedP" :options="provincia" placeholder="Seleccione Aqui..!!"></v-select>
                        <p class="text-danger" v-if="form.errors.has('Provincia')" v-text="form.errors.get('Provincia')"></p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="label text-bold">Distrito:</label>
                        <v-select id="nomDistrito" :on-change="getDistrito" :value.sync="selectedDi" :options="distrito" placeholder="Seleccione Aqui..!!"></v-select>
                    </div>
                    <p class="text-danger" v-if="form.errors.has('Distrito')" v-text="form.errors.get('Distrito')"></p>
                </div>
                <div class="margin-bottom-20"></div>
                <div class="col-md-12">
                    <dt>Direccion Domicilio</dt>
                    <dd>
                        <section>
                            <label class="input">
                                <i class="icon-append fa fa-globe"></i>
                                <input type="text" placeholder="Calle Los Negocios 249, Surquillo" name="nameAddress" v-model="form.nameAddress" onkeydown="return BlockCopyPaste(event)">
                                <b class="tooltip tooltip-bottom-right">Ingresa tu direccion</b>
                            </label>
                            <p class="text-danger" v-if="form.errors.has('nameAddress')" v-text="form.errors.get('nameAddress')"></p>
                        </section>
                    </dd>
                </div>
                <div class="headline">
                    <h3>Datos de Contacto</h3>
                </div>
                <div class="col-md-12">
                    <dt>Teléfono Fijo</dt>
                    <dd>
                        <section>
                            <label class="input">
                                <i class="icon-append fa fa-phone"></i>
                                <input type="text" placeholder="5553311" name="numberTelephone" v-model="form.numberTelephone" onkeypress="return filterNumber(event)" onkeydown="return BlockCopyPaste(event)" minlength="6" maxlength="7">
                                <b class="tooltip tooltip-bottom-right">Ingresa tu número fijo</b>
                            </label>
                            <p class="text-danger" v-if="form.errors.has('numberTelephone')" v-text="form.errors.get('numberTelephone')"></p>
                        </section>
                    </dd>
                    <dt>Teléfono Móvil Personal</dt>
                    <dd>
                        <section>
                            <label class="input">
                                <i class="icon-append fa fa-mobile"></i>
                                <input type="text" placeholder="999888777" name="numberMobile" v-model="form.numberMobile" onkeypress="return filterNumber(event)" onkeydown="return BlockCopyPaste(event)" minlength="8" maxlength="9">
                                <b class="tooltip tooltip-bottom-right">Ingresa tu número de celular</b>
                            </label>
                            <p class="text-danger" v-if="form.errors.has('numberMobile')" v-text="form.errors.get('numberMobile')"></p>
                        </section>
                    </dd>
                    <dt>Correo Personal</dt>
                    <dd>
                        <section>
                            <label class="input">
                                <i class="icon-append fa fa-envelope"></i>
                                <input type="text" placeholder="test@sapia.com.pe" name="Email" v-model="form.Email">
                                <b class="tooltip tooltip-bottom-right">Ingresa tu correo personal</b>
                            </label>
                            <p class="text-danger" v-if="form.errors.has('Email')" v-text="form.errors.get('Email')"></p>
                        </section>
                    </dd>
                </div>
                <div class="headline">
                    <h3>Datos Extras</h3>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="label text-bold">Tipo Documento:</label>
                        <v-select :on-change="getDocument" :options="['DNI','EXTRANJERIA']" :value.sync="typeDocument" placeholder="Choose Type Document Here !"></v-select>
                        <p class="text-danger" v-if="form.errors.has('typeDocument')" v-text="form.errors.get('typeDocument')"></p>
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
                <br>
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="label text-bold">Tipo Brevete:</label>
                        <v-select :on-change="getLicense" :options="['-','A-I','A-IIb','AIIIa','AIIIb','AIIIc']" :value.sync="typeLicense" placeholder="Choose Type License !"></v-select>
                        <p class="text-danger" v-if="form.errors.has('typeLicense')" v-text="form.errors.get('typeLicense')"></p>
                    </div>
                </div>
                <div class="col-md-6">
                    <section>
                        <label class="label text-bold">N° Brevete</label>
                        <label class="input">
                            <i class="icon-append fa fa-drivers-license"></i>
                            <input type="text" placeholder="T10593103" name="numberLicense" v-model="form.numberLicense" onkeydown="return BlockCopyPaste(event)">
                            <b class="tooltip tooltip-bottom-right">Ingresa el numero de tu brevete</b>
                        </label>
                        <p class="text-danger" v-if="form.errors.has('numberLicense')" v-text="form.errors.get('numberLicense')"></p>
                    </section>
                </div>
                <br>
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="label text-bold">Estado Civil:</label>
                        <v-select :on-change="getMarital" :options="['Soltero','Casado','Divorciado','Viudo']" :value.sync="maritalStatus" placeholder="Choose Marital Status Here !"></v-select>
                        <p class="text-danger" v-if="form.errors.has('civilStatus')" v-text="form.errors.get('civilStatus')"></p>
                    </div>
                </div>
                <div class="col-md-6">
                    <section>
                        <label class="label text-bold">N° Hijos</label>
                        <label class="input">
                            <i class="icon-append fa fa-child"></i>
                            <input type="text" placeholder="0" name="numberChildren" v-model="form.numberChildren" onkeypress="return filterNumber(event)" onkeydown="return BlockCopyPaste(event)">
                            <b class="tooltip tooltip-bottom-right">Ingresa cuantos hijos tiene</b>
                        </label>
                        <p class="text-danger" v-if="form.errors.has('numberChildren')" v-text="form.errors.get('numberChildren')"></p>
                    </section>
                </div>
                <div class="margin-bottom-15"></div>
                <div class="col-md-12">
                    <dt>Fecha de Nacimiento</dt>
                    <dd>
                        <section>
                            <label class="input">
                                <i class="icon-append fa fa-calendar"></i>
                                <input type="text" placeholder="<?= date('Y-m-d') ?>" name="dateBirthday" v-model="form.dateBirthday" onkeypress="return false" onkeydown="return BlockCopyPaste(event)">
                                <b class="tooltip tooltip-bottom-right">Ingresa tu fecha de nacimiento</b>
                            </label>
                            <p class="text-danger" v-if="form.errors.has('dateBirthday')" v-text="form.errors.get('dateBirthday')"></p>
                        </section>
                    </dd>
                </div>
            </dl>
            <button class="btn-u text-right btnPersonales" type="submit" :disabled="form.errors.any()">
                <i class="fa fa-save"></i> Guardar Cambios
            </button>
        </form>
    </transition>
</div>
<script src="{!! asset('js/vueDatosPersonales.js?version='.date('YmdHis'))!!}"></script>
<script>
    formEnter('formDatosPersonales',true)
</script>