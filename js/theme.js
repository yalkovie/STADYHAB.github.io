let theme_btn = document.querySelector('#theme');
let txt = document.querySelectorAll('.txt');
let txt_dif = document.querySelectorAll('.txt-dif');
let btn_bg = document.querySelectorAll('.btn_bg');
let img = document.querySelectorAll('img');

let DARK_THEME = getCookie("DARK_THEME");

if (DARK_THEME === null) {
    DARK_THEME = true;
} else {
    DARK_THEME = DARK_THEME === "true";
}

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) return value;
    }
    return null;
}

function change_theme() {
    if (DARK_THEME) {
        txt.forEach(el => {
            el.style.color = '#ffffff';
            el.style.borderColor = '#ffffff';
        });
        txt_dif.forEach(el => {
            el.style.color = '#000000';
        });
        btn_bg.forEach(el => {
            el.style.backgroundColor = '#ffffff';
        });
        img.forEach(el => {
            el.style.filter = 'invert(100%)';
        });
        theme_btn.style.backgroundColor = '#ffffff';
        theme_btn.style.backgroundImage = 'url(/icon/moon.svg)';
        document.body.style.backgroundColor = '#ffffff';
        document.querySelector('nav').style.color = '#ffffff';
        document.querySelector('section').style.backgroundColor = '#f4f4f4';
        document.querySelector('footer').style.backgroundColor = '#f4f4f4';

        DARK_THEME = false;
    } else {
        txt.forEach(el => {
            el.style.color = '#000000';
            el.style.borderColor = '#000000';
        });
        txt_dif.forEach(el => {
            el.style.color = '#ffffff';
        });
        btn_bg.forEach(el => {
            el.style.backgroundColor = '#000000';
        });
        img.forEach(el => {
            el.style.filter = 'invert(0%)';
        });
        theme_btn.style.backgroundColor = '#000000';
        theme_btn.style.backgroundImage = 'url(/icon/sun.svg)';
        document.body.style.backgroundColor = '#000000';
        document.querySelector('nav').style.color = '#000000';
        document.querySelector('section').style.backgroundColor = '#1e1e1e';
        document.querySelector('footer').style.backgroundColor = '#1e1e1e';

        DARK_THEME = true;
    }

    document.cookie = `DARK_THEME=${DARK_THEME}; path=/; max-age=31536000`;
};

function start_theme() {
    if (DARK_THEME) {
        txt.forEach(el => {
            el.style.color = '#000000';
            el.style.borderColor = '#000000';
        });
        txt_dif.forEach(el => {
            el.style.color = '#ffffff';
        });
        btn_bg.forEach(el => {
            el.style.backgroundColor = '#000000';
        });
        img.forEach(el => {
            el.style.filter = 'invert(0%)';
        });
        theme_btn.style.backgroundColor = '#000000';
        theme_btn.style.backgroundImage = 'url(/icon/sun.svg)';
        document.body.style.backgroundColor = '#000000';
        document.querySelector('nav').style.color = '#000000';
        document.querySelector('section').style.backgroundColor = '#1e1e1e';
        document.querySelector('footer').style.backgroundColor = '#1e1e1e';
    } else {
        txt.forEach(el => {
            el.style.color = '#ffffff';
            el.style.borderColor = '#ffffff';
        });
        txt_dif.forEach(el => {
            el.style.color = '#000000';
        });
        btn_bg.forEach(el => {
            el.style.backgroundColor = '#ffffff';
        });
        img.forEach(el => {
            el.style.filter = 'invert(100%)';
        });
        theme_btn.style.backgroundColor = '#ffffff';
        theme_btn.style.backgroundImage = 'url(/icon/moon.svg)';
        document.body.style.backgroundColor = '#ffffff';
        document.querySelector('nav').style.color = '#ffffff';
        document.querySelector('section').style.backgroundColor = '#f4f4f4';
        document.querySelector('footer').style.backgroundColor = '#f4f4f4';
    }
};

start_theme();