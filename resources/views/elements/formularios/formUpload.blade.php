@php
    $iconoAlert = "fa-file-archive-o";
    $messageAlert = "Se acepta todo tipo de imagen y archivos pdf (Máx. de Peso : 10, MB)";
    switch ($nameUpload){
        case 'avatar':
            $iconoAlert = "fa-image";
            $messageAlert = "Se acepta todo tipo de imagen (Máx. de Peso : 10, MB)";
        break;
        case 'curriculum_vitae':
            $iconoAlert = "fa-file-pdf-o";
            $messageAlert = "Se acepta solo formatos en pdf (Máx. de Peso : 10, MB)";
        break;
    }
@endphp
<div class="modal-content" id="formUpload">
    <div class="modal-header">
        <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
        <h4 id="myLargeModalLabel3" class="modal-title">Adjuntar {{ title_case($nameUpload) }}</h4>
    </div>
    <div class="modal-body">
        <div v-if="numberDocument != '-'">
            <div class="alert alert-sea" style="margin-bottom: 0px">
                <strong>Tener en cuenta : </strong><span class="fa {{ $iconoAlert }}"></span> <strong>{{ $messageAlert }} </strong>
            </div>
            <div class="flex-center position-ref text-center">
                <div class="content">
                    <upload csrf="{{ csrf_token() }}" action="/uploadFile" name-upload="{{ $nameUpload }}" files-permited="{{ $filesPermited }}" number-files="{{ $numberFiles }}"></upload>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="alert alert-danger">
                <span class="glyphicon glyphicon-remove"></span> <strong>Debes llenar tu DNI para poder Adjuntar algun archivo </strong>
            </div>
        </div>
    </div>
</div>
<script>
    var vueUpload = new Vue({
        el: '#formUpload',
        data: {
            numberDocument: ''
        },
        mounted(){
            this.loadDocument()
        },
        methods: {
            loadDocument(){
                this.numberDocument = vmProfile.numberDocument
            }
        }
    })
</script>