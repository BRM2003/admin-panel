window.addEventListener('load', () => {
    const aside_menu = document.querySelector('aside'),
        menu_btn = document.querySelector('#menu-btn'),
        close_btn = document.querySelector('#close-btn'),
        theme_toggler = document.querySelector('.theme-toggler');

    menu_btn.addEventListener('click', () => {
        aside_menu.style.display = 'block'
    })
    close_btn.addEventListener('click', () => {
        aside_menu.style.display = 'none'
    })
    theme_toggler.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme-vars');

        theme_toggler.querySelector('span:nth-child(1)').classList.toggle('active');
        theme_toggler.querySelector('span:nth-child(2)').classList.toggle('active');
    })
})