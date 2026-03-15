gsap.registerPlugin(ScrollTrigger);

gsap.to(".navbar", {
    backgroundColor: "black",
    duration: 0.6,
    height: 90,
    scrollTrigger: {
        trigger: ".navbar",
        scroller: "body",
        start: "top -1%",
        end: "top -7%",
        scrub: 2,
    }
})