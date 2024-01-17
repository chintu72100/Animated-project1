var tl = gsap.timeline();
gsap.from("#nav h3",{
    y: -50,
    duration : 1,
    delay : 0.5,
    opacity : 0,
    stagger : 0.3,
})

tl.from("#main h1",{
    x : -500,
    opacity :0,
    duration : 0.8,
    stagger : 0.6,
})
tl.from("img", {
    x : 100,
    rotate : 45,
    opacity:0,
    duration : 0.4,
    stagger : 0.5,
})