document.getElementById('mobile_btn').addEventListener('click', function() {
    const navList = document.getElementById('nav_list');
    navList.classList.toggle('active');
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', function(event) {
    const navList = document.getElementById('nav_list');
    const mobileBtn = document.getElementById('mobile_btn');

    if (!navList.contains(event.target) && !mobileBtn.contains(event.target)) {
        navList.classList.remove('active');
    }
});