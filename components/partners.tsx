"use client";
import { useEffect } from "react";
import Image from "next/image";

export const Partners = () => {
  useEffect(() => {
    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", "true");

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner?.children!);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          // @ts-ignore
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner?.appendChild(duplicatedItem);
        });
      });
    }
    const scrollers = document.querySelectorAll(".scroller");
    addAnimation();
  }, []);

  return (
    <div className=" flex justify-center">
      <div className="container">
        <div className="scroller" data-direction="right" data-speed="slow">
          <div className="scroller__inner">
            <Image
              src="/img/partners/planeta_crossfit.png"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]"
              alt="logo-img"
            />
            <Image
              src="/img/partners/lynxRace.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[150px] h-[100px] sm:w-[250px] sm:h-[150px]"
              alt="logo-img"
            />
            <Image
              src="/img/partners/Logo_VFX.png"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]"
              alt="logo-img"
            />

            <Image
              src="/img/partners/pwrdByCoffe.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[180px] h-[100px] sm:w-[280px] sm:h-[150px]"
              alt="logo-img"
            />
            <Image
              src="/img/partners/handstand.png"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]"
              alt="logo-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
