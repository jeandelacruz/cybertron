<template>
    <div id="dropzone">
        <dropzone id="myVueDropzone"
                  :url = "action"
                  :headers = "csrfHeader"
                  v-on:vdropzone-success = "showSuccess"
                  :useFontAwesome = true
                  :useCustomDropzoneOptions = true
                  :dropzoneOptions="dropzoneOpt"
                  v-on:vdropzone-sending = "sendingEvent"
                  ref="myUniqueID">
            <input type="hidden" name="nameUpload" :value="nameUpload">
            <input type="hidden" name="filesPermited" :value="filesPermited">
            <input type="hidden" name="nameFolder" :value="nameFolder">
        </dropzone>
    </div>
</template>

<script>
    import Dropzone from "vue2-dropzone"

    export default {
        components: {
            Dropzone
        },
        props: {
            csrf: {
                type: String
            },
            action: {
                type: String
            },
            nameUpload: {
                type: String
            },
            filesPermited: {
                type: String
            },
            numberFiles: {
                type: String
            },
            nameFolder: {
                type: String
            }
        },
        methods: {
            showSuccess() {
                alertaSimple('','Acabas de subir correctamente tu ' + this.nameUpload , 'success')
                setTimeout(function() { $('.modalUpload').modal('toggle') }, 2000)
            },
            sendingEvent (file, xhr, formData) {
                xhr.onreadystatechange  = function(){
                    if (xhr.readyState === 4) {
                        let response = JSON.parse(xhr.responseText)
                        switch (response.nameUpload){
                            case 'avatar':
                                return vmLeft.refreshAvatar(response.rootPath)
                            break
                        }
                    }
                }
            }
        },
        data() {
            return {
                csrfToken: document.head.querySelector('meta[name="csrf-token"]').content,
                csrfHeader: {
                    'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content
                },
                dropzoneOpt: {
                    language: {
                        dictDefaultMessage: '<br> Arrastra los archivos aquí para subirlos'
                    },
                    maxNumberOfFiles: this.numberFiles,
                    acceptedFileTypes: this.filesPermited
                }

            }
        }
    }
</script>