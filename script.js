gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    toggleActions: "play "
});





gsap.from(".stats-block-phone", {
    opacity: 1,
    y: 100,
    duration: 0,
    delay: 0,
});
gsap.from(".stats-block-background", {
    opacity: 0,
    y: 1000,
    duration: 1,
    delay: 0.5

});
gsap.from(".bubble-1", {
    opacity: 0,
    y: 200,
    duration: 1,
    delay: 0.5,

});
gsap.from(".bubble-2", {
    opacity: 0,
    y: 200,
    duration: 1,
    delay: 0.5,
    ScrollTrigger: {
        toggleActions: "play "
    }
});
gsap.from(".chat-1", {
    opacity: 0,
    y: 100,
    duration: 1,
    delay: 1
});
gsap.from(".chat-2", {
    opacity: 0,
    y: 100,
    duration: 1,
    delay: 2
});
gsap.from(".chat-3", {
    opacity: 0,
    y: 100,
    duration: 1,
    delay: 3
});
gsap.from(".post-card__exposed-image", {
    opacity: 0,
    y: -100,
    duration: 1,
    delay: 0

});
gsap.to(".scrolling", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0

});




