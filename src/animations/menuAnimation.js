import gsap from "gsap";

const tl = gsap.timeline();

export const openMenu = () => {
  gsap.to("body", { css: { overflow: "hidden" } });
  tl.to(".columns-container", {
    duration: 1,
    y: "100vh",
    ease: "expo.inOut",
  });
  tl.to(".App", {
    duration: 1.3,
    delay: -0.8,
    y: "40vh",
    ease: "expo.inOut",
  })
    .to(".hamburg-menu", {
      duration: 0.6,
      delay: -1,
      scaleX: 0,
      transformOrigin: "50% 0",
      ease: "expo.inOut",
    })
    .to(".hamburg-menu-close", {
      duration: 1,
      delay: -0.8,
      css: {
        display: "flex",
      },
    });
};

export const closeMenu = () => {
  tl.to(".columns-container", {
    duration: 1,
    y: "-100vh",
    ease: "expo.inOut",
  })
    .to(".App", {
      duration: 1.3,
      delay: -0.8,
      y: 0,
      ease: "expo.inOut",
    })
    .to(".hamburg-menu", {
      duration: 0.6,
      delay: -0.6,
      scaleX: 1,
      transformOrigin: "50% 0",
      ease: "expo.inOut",
    })
    .to(".hamburg-menu-close", {
      duration: 1,
      delay: -2,
      css: {
        display: "none",
      },
    })
    .to("body", { css: { overflow: "auto" } });
};
