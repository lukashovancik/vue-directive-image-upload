<script>
    export default{
        bind:function () {
        },

        update:function () {
            this.el.querySelector('input[type=file]').addEventListener('change',this.changeImagesUpload.bind(this));

        },

        unbind:function () {

        },

        changeImagesUpload:function (event) {

            let preview = this.el.querySelector('#image'),
                    files   = event.target.files;

            this.vm.memory.imagesU = files[0];
            while ( preview.firstChild ) preview.removeChild( preview.firstChild );


            function readAndPreview(file) {

                // Make sure `file.name` matches our extensions criteria
                if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
                    let reader = new FileReader();

                    reader.addEventListener("load", function () {
                        let image = new Image();
                        image.height = 100;
                        image.title = file.name;
                        image.src = this.result;
                        image.className = "preview";
                        preview.appendChild(image);

                    }, false);

                    reader.readAsDataURL(file);
                }

            }

            if (files) {
                [].forEach.call(files, readAndPreview);
            }

        },


    }
</script>
