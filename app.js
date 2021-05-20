const container = document.querySelector('.container');
const card = document.querySelector('.card');
const infoAnimation = document.querySelectorAll('.anim');
const sneaker = document.querySelector('.sneaker img');

container.addEventListener('mousemove', (e) => {
    let xAxis = ((window.innerWidth / 2) - e.pageX) / 10,
    yAxis = ((window.innerHeight / 2) - e.pageY) / 10;
    console.log(xAxis);

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})


container.addEventListener('mouseenter', () => {
    card.style.transition = "none";
    infoAnimation.forEach(function(anim){
        anim.style.transition = "all 1s ease";
        anim.style.transform = "translateZ(100px)";
    })
    sneaker.style.transition = "all .5s ease-out";
    sneaker.style.transform = "translateZ(80px) rotateZ(-45deg)";
})

container.addEventListener('mouseleave', () => {
    card.style.transition = "all 1s ease"
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    infoAnimation.forEach(function(anim){
        anim.style.transform = "translateZ(0px)";
    })
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";

})
