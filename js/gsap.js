let tl = gsap.timeline();
tl.to("#header", {
  translateY: "0%",
  opacity: 1,
  ease: "sine.out",
  duration: 0.5,
});
tl.to(".logo", {
  translateX: "0%",
  opacity: 1,
  ease: "power1.in",
  duration: 0.2,
}),
  "headerLogo";
tl.to("#menu-button", {
  translateX: "0%",
  opacity: 1,
  ease: "power1.in",
  duration: 0.8,
}),
  "headerLogo";
tl.to(
  "#mainHeadingOne",
  {
    translateX: "0%",
    opacity: 1,
    duration: .7,
    ease: "back.in(1.7)",
  },
  "mainHead"
);
tl.to(
  "#mainHeadingTwo",
  {
    translateX: "0%",
    opacity: 1,
    ease: "back.in(1.7)",
    duration: .8,
  },
  "mainHead"
);
tl.to(
  "#mainPara",
  {
    translateX: "0%",
    opacity: 1,
    ease: "back.in(1.7)",
    duration: .9,
  },
  "mainHead"
);
tl.to("#share", {
  translateX: "0%",
  opacity: 1,
  ease: "elastic.in(1,0.8)",
  duration: .7,
});
tl.to(".iconOne", {
  translateX: "0%",
  opacity: 1,
  ease: "elastic.in(1,0.3)",
  duration: 0.5,
});
tl.to(".iconTwo", {
  translateX: "0%",
  opacity: 1,
  ease: "elastic.in(1,0.3)",
  duration: 0.2,
});
tl.to(".iconThree", {
  translateX: "0%",
  opacity: 1,
  ease: "elastic.in(1,0.3)",
  duration: 0.2,
});
tl.to(".iconFour", {
  translateX: "0%",
  opacity: 1,
  ease: "elastic.in(1,0.3)",
  duration: 0.2,
});
