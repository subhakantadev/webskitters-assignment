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
    duration: 1,
    delay: 1,
    scrollTrigger: {
        trigger: ".post-card__exposed-image",
        toggleActions: "restart "

    }

});

///subs
// gsap.from("", {
//     opacity: 0,
//     x: 500,
//     z: -100,
//     y: 500,
//     duration: 1,
//     delay: 1,
//     scrollTrigger: {
//         trigger: ".card-1",
//         toggleActions: "restart "

//     }

// });





const tl = gsap.timeline({

});
ScrollTrigger.create({

    trigger: ".post-card__exposed-image",
    pin: true,
    start: "50% 50%",
    end: "+=2000",
    endTrigger: '.tips-block',
    markers: true,
    toggleActions: "play none none restart",
    ease: "power1.inOut",
});

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

