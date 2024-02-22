// CRUD APP (JS CODE)
var time = gsap.timeline();
time.from(".con3 .create", {
    duration: 1,
    ease: "power1.inOut",
    rotate: 90,
    y: 1100,
    x: -1100
});

time.from(".con3 .read", {
    duration: 1,
    ease: "power1.inOut",
    rotate: -90,
    y: 1100,
    x: 1100
});
time.from(".con3 .update", {
    duration: 1,
    ease: "power1.inOut",
    rotate: 90,
    y: 1100,
    x: -1100
});

time.from(".con3 .delete", {
    duration: 1,
    ease: "power1.inOut",
    rotate: -90,
    y: 1100,
    x: 1100
});
time.from(".con3 .linebtn", {
    duration: 0.8,
    y: 100
});
time.from(".con3 i", {
    x: -12,
    duration: 0.8,
    repeat: -1
});
