const progress = document.getElementById( 'progress' );

document.forms.upload.onsubmit = function() {
    let input = this.elements.file;
    let file = input.files[0];
    if (file) {
        upload(file);
    }
    return false;
}

function upload(file) {

    let xhr = new XMLHttpRequest();  

    xhr.upload.onprogress = function(event) {
        progress.value = event.loaded/event.total;
    }
  
    xhr.onload = xhr.onerror = function() {
        if (this.status == 200) {
            log("success");
        }
        else {
            log("error " + this.status);
        }
    };
  
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload", true);
    xhr.send(file);
  
}