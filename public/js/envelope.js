let t1 = gsap.timeline({ paused: true });
let flap = CSSRulePlugin.getRule(".envelope::before");
let sWidth = window.innerWidth;
const translateZValue = sWidth >= 1000 ? 250 : 100;

console.log(sWidth);
t1.to(flap, {
  duration: 0.5,
  cssRule: {
    rotateX: 180,
    zIndex: -1,
  },
})
  .set(flap, {
    cssRule: {
      zIndex: -1,
    },
  })
  .to(".letters", {
    translateY: -200,
    duration: 0.9,
    ease: "back.inOut(1.5)",
  })
  .set(".letters", {
    zIndex: 40,
  })
  .to(".letters", {
    duration: 0.7,
    ease: "back.out(.4)",
    translateY: 5,
    translateZ: translateZValue,
  });

let t2 = gsap.timeline({ paused: true });
t2.to(".shadow", {
  delay: 1.4,
  width: 450,
  boxShadow: "-75px 150px 10px 5px #eeeef3",
  ease: "back.out(.2)",
  duration: 0.7,
});

function openCard(e) {
  t1.play();
  t2.play();
}

function closeCard(e) {
  t1.reverse();
  t2.reverse();
}

const print = document.getElementsByClassName("letters");
let stack = document.querySelector(".letters");

const stack1 = [...stack.children].reverse();

for (const child of stack1) {
  stack.append(child);
}

stack.addEventListener("click", swap);

/* JavaScript */
function swap(e) {
  const clickedCard = e.target.closest(".letter");
  const cardContainer = document.querySelector(".letters");

  if (clickedCard === cardContainer.lastElementChild) {
    clickedCard.style.animation = "swap 700ms forwards";

    setTimeout(() => {
      clickedCard.style.animation = "";
      cardContainer.prepend(clickedCard);
    }, 700);
  }
}

console.log("WEHOO", stack);
// console.log(stack2);

console.dir(print);
