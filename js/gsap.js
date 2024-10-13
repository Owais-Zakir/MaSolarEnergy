let tl = gsap.timeline();
let tlTwo = gsap.timeline();
let tlThree = gsap.timeline();

tl.to("#header", {
  translateY: "0%",
  opacity: 1,
  ease: "sine.out",
  duration: 0.5,
});
tl.to("#menu-button", {
  translateX: "0%",
  opacity: 1,
  ease: "bounce.in",
  duration: 0.8,
}),
  "headerLogo";
tl.to(".logo", {
  translateX: "0%",
  opacity: 1,
  ease: "bounce.in",
  duration: 0.2,
}),
  "headerLogo";

tlTwo.to(
  "#mainHeadingOne",
  {
    translateX: "0%",
    opacity: 1,
    duration: 1,
    ease: "back.in(1.7)",
  },
  "mainHead"
);
tlTwo.to(
  "#mainHeadingTwo",
  {
    translateX: "0%",
    opacity: 1,
    ease: "back.in(1.7)",
    duration: 1.1,
  },
  "mainHead"
);
tlTwo.to(
  "#mainPara",
  {
    translateX: "0%",
    opacity: 1,
    ease: "back.in(1.7)",
    duration: 1.2,
  },
  "mainHead"
);



tlThree.to("#share",{
    translateX: "0%",
    opacity:1,
    ease: "elastic.in(1,0.8)",
    duration:1.2
})
tlThree.to(".iconOne",{
    translateX: "0%",
    opacity:1,
    ease: "elastic.in(1,0.3)",
    duration:.5
})
tlThree.to(".iconTwo",{
    translateX: "0%",
    opacity:1,
    ease: "elastic.in(1,0.3)",
    duration:.2
})
tlThree.to(".iconThree",{
    translateX: "0%",
    opacity:1,
    ease: "elastic.in(1,0.3)",
    duration:.2
})
tlThree.to(".iconFour",{
    translateX: "0%",
    opacity:1,
    ease: "elastic.in(1,0.3)",
    duration:.2
})
tlThree.to(".iconFive",{
    translateX: "0%",
    opacity:1,
    ease: "elastic.in(1,0.3)",
    duration:.2
})