const sectionList = document.querySelectorAll(".code-section");
const code = document.querySelectorAll(".code");
const execute = document.querySelectorAll(".execute");
const restart = document.querySelectorAll(".restart");
const copy = document.querySelectorAll(".copy");
const result = document.querySelectorAll(".result");

const styleTag = document.querySelector("style");


for (let i = 0; i < sectionList.length; i++) {

    let texto = code[i].innerHTML;

    result[i].id = `result${i}`;

    while (texto.includes('<span class="selector">') ||
       texto.includes('<span class="property">') ||
       texto.includes('<span class="value">')) {

        texto = texto.replace('<span class="selector">', `#result${i} `);
        texto = texto.replace('<span class="property">', "");
        texto = texto.replace('<span class="value">', "");
        texto = texto.replace("</span>", "");
        texto = texto.replace("</span>", "");
        texto = texto.replace("</span>", "");
    }

    while (texto.includes("<br>"))
        texto = texto.replace("<br>", "");

    execute[i].addEventListener("click", e => {
        e.preventDefault();
        styleTag.innerHTML = texto;
    });

    restart[i].addEventListener("click", e => {
        e.preventDefault();
        styleTag.innerHTML = "";
        copy[i].innerHTML = 'Copiar <i class="fa-solid fa-clipboard"></i>';
    });

    copy[i].addEventListener("click", e => {
        e.preventDefault();
        
        while (texto.includes("#result"))
            texto = texto.replace(`#result${i} `, "");

        navigator.clipboard.writeText(texto);
        copy[i].innerHTML = 'Copiado <i class="fa-solid fa-check"></i>';
    });
}