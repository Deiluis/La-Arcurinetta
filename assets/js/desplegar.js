const topic = document.querySelectorAll(".topic");
const topicContent = document.querySelectorAll(".topic-content");
const topicTitle = document.querySelectorAll(".topic-title");

for (let i = 0; i < topic.length; i++) {
    topicTitle[i].addEventListener("click", () => {
        if (topicContent[i].classList.contains("desplegar")) {
            topicContent[i].style.height = 0;
            topicContent[i].classList.remove("desplegar");
            topic[i].style.paddingBottom = 0;
        } else {
            topicContent[i].style.height = topicContent[i].scrollHeight + "px";
            topicContent[i].classList.add("desplegar");
            topic[i].style.paddingBottom = 2.5 + "rem";
        }
    });
}