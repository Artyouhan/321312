const progress = document.getElementById( 'progress' );

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {

    const formData = new FormData(form);
    runXHR(formData);

    e.preventDefault();
});

function fn(e) {
        const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = function(event) {
        alert(`Отправлено ${event.loaded} из ${event.total}`);
      };
    
      xhr.onloadend = function() {
        if (xhr.status == 200) {
          alert("Успех");
        } else {
          alert("Ошибка " + this.status);
        }
      };

    xhr.open("POST", 'https://students.netoservices.ru/nestjs-backend/upload');
    addListeners(xhr)
    xhr.send(formData);
};