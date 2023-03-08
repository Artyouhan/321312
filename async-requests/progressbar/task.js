const progress = document.getElementById( 'progress' );

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {

  e.preventDefault();

    const formData = new FormData(form);
    

    
});

function fn(){ addEventListener('progress', (e) => {
        const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = function(e) {
        alert(`Отправлено ${e.loaded} из ${e.total}`);
      };
    
      xhr.onloadend = function() {
        if (xhr.status == 200) {
          alert("Успех");
        } else {
          alert("Ошибка " + this.status);
        }
      };
    ;
    xhr.open("POST", 'https://students.netoservices.ru/nestjs-backend/upload');
    addListeners(xhr)
    xhr.send(formData);
});
}