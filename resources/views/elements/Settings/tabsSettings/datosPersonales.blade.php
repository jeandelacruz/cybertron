<div id="datosPersonales">
    <form class="sky-form" id="sky-form4" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
    {{ csrf_field() }}
    <dl class="dl-horizontal">
        <div class="headline">
            <h3>Nombres Completos</h3>
        </div>
        <dt>Nombres</dt>
        <dd>
            <section>
                <label class="input">
                    <i class="icon-append fa fa-user"></i>
                    <input type="text" placeholder="Nombres" name="Names" v-model="form.Names">
                    <b class="tooltip tooltip-bottom-right">Ingresa tu nombre</b>
                </label>
                <p class="text-danger" v-if="form.errors.has('Names')" v-text="form.errors.get('Names')"></p>
            </section>
        </dd>
        <dt>Apellidos</dt>
        <dd>
            <section>
                <label class="input">
                    <i class="icon-append fa fa-user"></i>
                    <input type="text" placeholder="Apellidos" name="lastName" v-model="form.lastName">
                    <b class="tooltip tooltip-bottom-right">Ingresa tus apellidos</b>
                </label>
                <p class="text-danger" v-if="form.errors.has('lastName')" v-text="form.errors.get('lastName')"></p>
            </section>
        </dd>
        <hr>
        <div class="headline">
            <h3>Datos de Domicilio</h3>
        </div>
        <div class="col-md-12">
            <section class="col-md-4">
                <label class="label text-bold">Departamento</label>
                <label class="input">
                    <v-select id="nomDepartamento" :on-change="loadProvincia" :value.sync="selectedD" :options="departamento" placeholder="Choose here..!!"></v-select>
                </label>
                <p class="text-danger" v-if="form.errors.has('Departamento')" v-text="form.errors.get('Departamento')"></p>
            </section>
            <section class="col-md-4">
                <label class="label text-bold">Provincia</label>
                <label class="input">
                    <v-select id="nomProvincia" :on-change="loadDistrito" :value.sync="selectedP" :options="provincia" placeholder="Choose here..!!"></v-select>
                </label>
                <p class="text-danger" v-if="form.errors.has('Provincia')" v-text="form.errors.get('Provincia')"></p>
            </section>
            <section class="col-md-4">
                <label class="label text-bold">Distrito</label>
                <label class="input">
                    <v-select id="nomDistrito" :on-change="getDistrito" :value.sync="selectedDi" :options="distrito" placeholder="Choose here..!!"></v-select>
                </label>
                <p class="text-danger" v-if="form.errors.has('Distrito')" v-text="form.errors.get('Distrito')"></p>
            </section>
        </div>
        <dd></dd>
        <dt>Direccion Domicilio</dt>
        <dd>
            <section>
                <label class="input">
                    <i class="icon-append fa fa-globe"></i>
                    <input type="text" placeholder="Direccion" name="nameAddress" v-model="form.nameAddress">
                    <b class="tooltip tooltip-bottom-right">Ingresa tu direccion</b>
                </label>
                <p class="text-danger" v-if="form.errors.has('nameAddress')" v-text="form.errors.get('nameAddress')"></p>
            </section>
        </dd>
        <hr>
        <div class="headline">
            <h3>Datos de Contacto</h3>
        </div>
        <dt>Telefono Domicilio</dt>
        <dd>
            <section>
                <label class="input">
                    <i class="icon-append fa fa-phone"></i>
                    <input type="text" placeholder="12345678" name="numberTelephone" v-model="form.numberTelephone">
                    <b class="tooltip tooltip-bottom-right">Ingresa tu numero de domicilio</b>
                </label>
                <p class="text-danger" v-if="form.errors.has('numberTelephone')" v-text="form.errors.get('numberTelephone')"></p>
            </section>
        </dd>
        <dt>Telefono Celular</dt>
        <dd>
            <section>
                <label class="input">
                    <i class="icon-append fa fa-mobile"></i>
                    <input type="text" placeholder="123456789" name="numberMobile" v-model="form.numberMobile">
                    <b class="tooltip tooltip-bottom-right">Ingresa tu numero de celular</b>
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
        <hr>
        <div class="headline">
            <h3>Datos Extras</h3>
        </div>
        <div class="col-md-12">
            <div class="col-md-6">
                <label class="label text-bold">Tipo Documento</label>
                <label class="input">
                    <v-select :on-change="getDocument" :options="['DNI','EXTRANJERIA']" :value.sync="typeDocument" placeholder="Choose Type Document Here !"></v-select>
                </label>
                <p class="text-danger" v-if="form.errors.has('typeDocument')" v-text="form.errors.get('typeDocument')"></p>
            </div>
            <div class="col-md-6">
                <section>
                    <label class="label text-bold">N° Documento</label>
                    <label class="input">
                        <i class="icon-append fa fa-lock"></i>
                        <input type="text" placeholder="0" name="numberDocument" v-model="form.numberDocument">
                        <b class="tooltip tooltip-bottom-right">Ingresa el numero de tu documento</b>
                    </label>
                    <p class="text-danger" v-if="form.errors.has('numberDocument')" v-text="form.errors.get('numberDocument')"></p>
                </section>
            </div>
        </div>
        <br>
        <div class="col-md-12">
            <div class="col-md-6">
                <label class="label text-bold">Tipo Brevete</label>
                <label class="input">
                    <v-select :on-change="getLicense" :options="['-','A-I','A-IIb','AIIIa','AIIIb','AIIIc']" :value.sync="typeLicense" placeholder="Choose Type License !"></v-select>
                </label>
                <p class="text-danger" v-if="form.errors.has('typeLicense')" v-text="form.errors.get('typeLicense')"></p>
            </div>
            <div class="col-md-6">
                <section>
                    <label class="label text-bold">N° Brevete</label>
                    <label class="input">
                        <i class="icon-append fa fa-drivers-license"></i>
                        <input type="text" placeholder="0" name="numberLicense" v-model="form.numberLicense">
                        <b class="tooltip tooltip-bottom-right">Ingresa el numero de tu brevete</b>
                    </label>
                    <p class="text-danger" v-if="form.errors.has('numberLicense')" v-text="form.errors.get('numberLicense')"></p>
                </section>
            </div>
        </div>
        <br>
        <div class="col-md-12">
            <div class="col-md-6">
                <label class="label text-bold">Estado Civil</label>
                <label class="input">
                    <v-select :on-change="getMarital" :options="['Soltero','Casado','Divorciado','Viudo']" :value.sync="maritalStatus" placeholder="Choose Marital Status Here !"></v-select>
                </label>
                <p class="text-danger" v-if="form.errors.has('civilStatus')" v-text="form.errors.get('civilStatus')"></p>
            </div>
            <div class="col-md-6">
                <section>
                    <label class="label text-bold">N° Hijos</label>
                    <label class="input">
                        <i class="icon-append fa fa-child"></i>
                        <input type="text" placeholder="0" name="numberChildren" v-model="form.numberChildren">
                        <b class="tooltip tooltip-bottom-right">Ingresa cuantos hijos tiene</b>
                    </label>
                    <p class="text-danger" v-if="form.errors.has('numberChildren')" v-text="form.errors.get('numberChildren')"></p>
                </section>
            </div>
        </div>
        <dd></dd>
        <dt>Fecha de Nacimiento</dt>
        <dd>
            <section>
                <label class="input">
                    <i class="icon-append fa fa-calendar"></i>
                    <input type="text" placeholder="<?= date('Y-m-d') ?>" name="dateBirthday" v-model="form.dateBirthday">
                    <b class="tooltip tooltip-bottom-right">Ingresa tu fecha de nacimiento</b>
                </label>
                <p class="text-danger" v-if="form.errors.has('dateBirthday')" v-text="form.errors.get('dateBirthday')"></p>
            </section>
        </dd>
        <hr>
    </dl>
    <button class="btn-u text-right btnPersonales" type="submit" :disabled="form.errors.any()">
        <i class="fa fa-save"></i> Guardar Cambios
    </button>
    </form>
</div>
<script src="{!! asset('js/vueDatosPersonales.js?version='.date('YmdHis'))!!}"></script>