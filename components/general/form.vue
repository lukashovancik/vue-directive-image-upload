<template>

    <div class="container">
        <div class="row">
            <validator name="validationMemory">
                <form @submit.prevent="sendMemory(memory)" novalidate enctype="multipart/form-data">
                    <div class="col-md-4">
                        <div class="form-group"  v-image-upload>
                            <label for="image">Vybrať obrázky</label>
                            <div class="errors" v-if="$validationMemory.images.errors">
                                <ul>
                                    <li v-for="error in $validationMemory.images.errors">
                                        <p>{{error.message}}</p>
                                    </li>
                                </ul>
                            </div>
                            <input id="uploadImages"  type="file" accept='image/*' multiple class="form-control" v-el="images" v-model="memory.images" initial="off"
                                   v-validate:images="{ required: { rule: true, message: 'Aspoň 1 obrázok je povinný' }}">
                            <div id="image" ></div>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-success" :disabled="!$validationMemory.valid || !memory.images ">PRIDAŤ SPOMIENKU</button>
                        </div>
                    </div>
                </form>
            </validator>
        </div>
    </div>

</template>


<script>
    export default{
        data:function () {
            return {
                memory:{

                }
            }
        },

        methods:{
            sendMemory:function (memory) {
                let formData = new FormData(),
                        files = document.getElementById('uploadImages').files;

                for (let i = 0; i < files.length; i++) {
                    formData.append('images['+i+']', files[i]);
                }

                this.$http.post('/api/v1/memory',formData).then(function (response) {
                    console.log(response);
                });
            }
        }
    }
</script>
