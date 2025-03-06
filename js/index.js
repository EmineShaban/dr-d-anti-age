let faq = document.getElementsByClassName("lp-faq-content");

const onClick = (e) => {
    if (
        e.target.className == "lp-q" &&
        e.target.parentElement.children[1].style.display == "none"
    ) {
        e.target.parentElement.children[1].style.display = "block";
        e.target.parentElement.children[0].className = "lp-q lp-rotate";
        console.log(e.target.parentElement.children[0]);
    } else if (
        e.target.parentElement.children[1].style.display == "block" &&
        e.target.parentElement.children[1].className == "lp-a"
    ) {
        e.target.parentElement.children[1].style.display = "none";
        e.target.parentElement.children[0].className = "lp-q";

    }
};

for (let index = 0; index < faq.length; index++) {
    faq[index].addEventListener("click", onClick);
}
