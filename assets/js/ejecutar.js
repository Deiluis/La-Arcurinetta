const sectionList = document.querySelectorAll("section");
const code = document.querySelectorAll(".code");
const execute = document.querySelectorAll(".execute");
const restart = document.querySelectorAll(".restart");
const copy = document.querySelectorAll(".copy");
const result = document.querySelectorAll(".result");

for (let i = 0; i < sectionList.length; i++) {

    let texto = code[i].innerHTML;

    while (texto.includes('<span class="tag">') ||
       texto.includes('<span class="attr">') ||
       texto.includes('<span class="value">')) {

        texto = texto.replace('<span class="tag">', "");
        texto = texto.replace('<span class="attr">', "");
        texto = texto.replace('<span class="value">', "");
        texto = texto.replace("</span>", "");
        texto = texto.replace("</span>", "");
        texto = texto.replace("</span>", "");
    }

    while (texto.includes("<br>"))
        texto = texto.replace("<br>", "");

    while (texto.includes("&lt;")) {
        texto = texto.replace("&lt;", "<");
        texto = texto.replace("&gt;", ">");
    }

    execute[i].addEventListener("click", e => {
        e.preventDefault();
        result[i].innerHTML = texto;
    })

    restart[i].addEventListener("click", e => {
        e.preventDefault();
        result[i].innerHTML = "";
    })

    copy[i].addEventListener("click", e => {
        e.preventDefault();
        navigator.clipboard.writeText(texto);
    })

}