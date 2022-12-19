// gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.defaults({
//     toggleActions: "play "
// });





gsap.from(".stats-block-phone", {
    opacity: 1,
    y: 0,
    duration: 0,
    delay: 0,
    scrollTrigger: {
        trigger: ".stats-block-background",
        toggleActions: "restart ",
        ease: "power1.inOut"
    },
});
gsap.from(".stats-block-background", {
    opacity: 0,
    y: 500,
    duration: 1,
    delay: 1,
    scrollTrigger: {
        trigger: ".stats-block-background",
        toggleActions: "restart "
    },


});
gsap.from(".bubble-1", {
    opacity: 0,
    y: 200,
    duration: 1,
    delay: 1,
    scrollTrigger: {
        trigger: ".bubble-1",
        toggleActions: "restart "
    },

});
gsap.from(".bubble-2", {
    opacity: 0,
    y: 200,
    duration: 1,
    delay: 1,
    scrollTrigger: {
        trigger: ".bubble-2",
        toggleActions: "restart "
    },

});



///to Dm
gsap.from(".chat-1", {
    opacity: 0,
    y: 100,
    duration: 1,
    delay: 1,
    scrollTrigger: {
        trigger: ".chat-1",
        toggleActions: "restart "
    },
});




gsap.from(".chat-2", {
    opacity: 0,
    y: 100,
    duration: 1,
    delay: 1.5,
    scrollTrigger: {
        trigger: ".chat-2",
        toggleActions: "restart "
    },
});
gsap.from(".chat-3", {
    opacity: 0,
    y: 100,
    duration: 1,
    delay: 2,
    scrollTrigger: {
        trigger: ".chat-3",
        toggleActions: "restart "
    },
});

gsap.from(".post-card__exposed-image", {
    opacity: 0,
    y: -100,
    duration: 0.5,
    delay: 1,
    scrollTrigger: {
        trigger: ".post-card__exposed-image",
        toggleActions: "reverse restart "

    }

});
gsap.from(".scrolling", {
    opacity: 1,
    y: 500,
    duration: 1.5,
    delay: 1,
    scrollTrigger: {
        trigger: ".scrolling",
        toggleActions: "reverse restart",
        stagger: '0.6',
    },

});

// gsap.registerPlugin(ScrollTrigger);
// gsap.to(".post-card__exposed-image", {
//     scrollTrigger: {
//         trigger: ".post-card__exposed-image",
//         endTrigger: ".tips-block-post",
//         y: "-30%",
//         opacity: 0,
//         scrub: true,
//         pin: true,
//         start: "50% 50%",
//         end: "+=2000",
//         toggleClass: "active",
//         ease: "power2",
//         toggleActions: "reverse restart ",

//     }
// });
// gsap.from(".card-1", {
//     opacity: 1,
//     x: 500,
//     y: -200,
//     duration: 1,
//     delay: 0,
//     scrollTrigger: {
//         trigger: ".iphone-frame",
//         toggleActions: " play",

//     },

// });
// gsap.from(".card-2", {
//     opacity: 1,
//     y: 1000,
//     x: -500,
//     duration: 1,
//     delay: 0,
//     scrollTrigger: {
//         trigger: ".iphone-frame",
//         toggleActions: " restart",

//     },

// });



// gsap.timeline({
//     scrollTrigger: {
//         trigger: ".post-card-absolute",
//         endTrigger: ".tips-block-post",
//         start: "50% 50%",
//         end: "+=2000",
//         scrub: true,
//         pin: true,
//         markers: true,
//         toggleActions: "reverse restart ",
//     }
// });









///subs








// const tl = gsap.timeline({

// });
// ScrollTrigger.create({

//     trigger: ".subscription-post-cards",
//     endTrigger: ".tips-block-chats",
//     start: "60% 60%",
//     end: "+=1800",
//     // pin: true,
//     // endTrigger: '.tips-block',
//     markers: true,
//     // toggleActions: "play ",
//     ease: "power1.inOut",
//     // onLeaveBack: () => { gsap.set('.xx', { position: 'relative' }) },
//     onEnter: () => { gsap.set('.x', { position: 'fixed' }) }
// });




// tl.from(".subscription-post-cards", {
//     scale: 0.5,
//     duration: 5
// }, 0)
//     .to(".post-card__exposed-image", {
//         scale: 0.5,
//         duration: 0.25
//     }, 0.75)
// gsap.registerPlugin(ScrollTrigger);

// const iphone_frame = document.querySelectorAll(".iphone-frame__screen");

// gsap.set(iphone_frame, { position: 'absolute' })

// gsap.to(".scrolling", {
//     yPercent: 100,
//     stagger: 0.5,
//     scrollTrigger: {
//         trigger: ".scrolling",
//         pin: true,
//         markers: true,
//         scrub: 1,
//         start: "bottom top",
//         end: "bottom bottom",
//         snap: {
//             snapTo: 0.33,
//             duration: { min: 0.1, max: 0.4 },
//             ease: "power1.inOut"
//         }
//     }
// });




// let tl = gsap.timeline({
//     ScrollTrigger: {
//         trigger: '.post-card__blurred-image'
//     }

// });


// tl.to(".post-card-absolute", { y: 0, opacity: 1, duration: 1.5 })

