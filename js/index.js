$(function(){
  common.scrollMotion();
});

const common = (function() {
  gsap.registerPlugin(ScrollTrigger);
  return {
    scrollMotion() {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".scroll-area",
          start: "top top",
          end: "+=2000",
          scrub: 1,
          pin: ".scroll-content",
        }
      });

      $(".scroll-img.motion").each(function(index) {
        t1
        .to($(this), {
          height: "100%",
          transform: "scale(1)",
        })
        .to($(this).find(".bg"), {
          transform: "scale(1)",
        }, "<")
        .to($(".txt-wrap .txt"), {
          color: "#000",
        }, "-=.3")
        .to($(".txt-wrap .txt").eq(index + 1), {
          color: "#fff",
        }, "-=.3")
      })
    }
  }
})();