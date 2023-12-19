const main = document.querySelector('.main');
const thumbnail = document.querySelectorAll('.thumbnail');

thumbnail.forEach(function(thumb) {
    thumb.addEventListener('click', function(e) {
        main.src = e.target.src;
        main.classList.add('fade');
        setTimeout(function() {
            main.classList.remove('fade');
        }, 500);

        thumbnail.forEach(function(thumb) {
            if(thumb.classList.contains('active')) {
                thumb.classList.remove('active');
            }
        });

        e.target.classList.add('active');

    });
});