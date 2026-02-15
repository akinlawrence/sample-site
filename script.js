gsap.registerPlugin(ScrollToPlugin);

gsap.from(".title", {
    y: -100,
    opacity: 0,
    duration: 1.5,
    ease: "bounce"
});

gsap.from(".subtitle", {
    opacity: 0,
    delay: 1,
    duration: 1.5
});

gsap.to(".fun-btn", {
    scale: 1.2,
    repeat: -1,
    yoyo: true,
    duration: 0.8,
    ease: "power1.inOut"
});



const button = document.querySelector(".etusivu-btn");
const targetSection = "#main-section";

button.addEventListener("click", () => {
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: targetSection,
            offsetY: 0
        },
        ease: "power2.inOut"
    });
});

const button2 = document.querySelectorAll(".tietoa-btn");
button2.forEach(button2 => {
    const targetSection2 = ".paketti-section";
    button2.addEventListener("click", () => {
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: targetSection2,
                offsetY: 0
            },
            ease: "power2.inOut"
        });
    });

})

const button3 = document.querySelectorAll(".yhteystiedot-btn");
button3.forEach(button3 => {
    const targetSection3 = ".yhteystiedot-section";
    button3.addEventListener("click", () => {
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: targetSection3,
                offsetY: 0
            },
            ease: "power2.inOut"
        });
    });

})


for (let i = 0; i < 10; i++) {
    let bubble = document.createElement("div");
    bubble.classList.add("bubble");

    let size = Math.random() * 80 + 40;
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";
    bubble.style.pointerEvents = 'none';
    const colors = ["#ed3d3d", "#fe9c31", "#ebf793", "#f9b0e7", "#fe9c31"]; // 
    bubble.style.background = colors[Math.floor(Math.random() * colors.length)];

    bubble.style.left = Math.random() * 100 + "vw";
    bubble.style.top = "100vh";

    document.body.appendChild(bubble);

    gsap.to(bubble, {
        y: -window.innerHeight - 200,
        x: Math.random() * 200 - 100,
        duration: Math.random() * 5 + 5,
        repeat: -1,
        delay: Math.random() * 5,
        ease: "none",
        onComplete: () => bubble.remove()
    });
}

let panels = gsap.utils.toArray("section");
let mm = gsap.matchMedia();

mm.add("(min-width: 600px)", () => {
 
    ScrollTrigger.create({
        trigger: panels[0].parentNode,
        start: "top top",
        end: "bottom bottom",
        snap: {
            snapTo: 1 / (panels.length - 1),
            duration: 0.5,
            delay: 0.1,
            ease: "power1.inOut"
        }
    });

    return () => {
        ScrollTrigger.getAll().forEach(st => st.kill());
    };
});


window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});

document.querySelector(".fun-btn").addEventListener("click", () => {
    gsap.fromTo(".fun-btn",
        { rotation: 0 },
        { rotation: 360, duration: 0.8 }
    );
});