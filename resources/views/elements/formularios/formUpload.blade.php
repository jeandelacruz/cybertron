<div class="modal-content">
    <div class="modal-header">
        <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
        <h4 id="myLargeModalLabel3" class="modal-title">Adjuntar Archivo</h4>
    </div>
    <div class="modal-body">
        <div class="flex-center position-ref text-center" id="formUpload">
            <div class="content">
                <upload csrf="{{ csrf_token() }}" action="/uploadFile" name-upload="{{ $nameUpload }}" files-permited="{{ $filesPermited }}" number-files="{{ $numberFiles }}" name-folder="{{ $nameFolder }}"></upload>
            </div>
        </div>
    </div>
</div>
<script>
    var vueUpload = new Vue({
        el: '#formUpload'
    })
</script>