// const btnClose = document.querySelectorAll('.btn-close');
// // for(let i = 0; i < btnClose.length; i++) {
// //     btnClose[i].addEventListener('click', function(e) {
// //         // btnClose[i].parentElement.style.display = 'none';
// //         e.target.parentElement.style.display = 'none';
// //     });
// // }

// btnClose.forEach(function(i) {
//     i.addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         e.stopPropagation();
//     });
// });

// const modals = document.querySelectorAll('.modal');
// modals.forEach(function(modal) {
//     modal.addEventListener('click', function() {
//         alert('OK');
//     });
// });

const container = document.querySelector('.container');
container.addEventListener('click', function(e) {
    if(e.target.className == 'btn-close') {
        e.target.parentElement.style.display = 'none';
    }
});