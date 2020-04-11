import React, { useRef, useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const ScrollWrapper = ({ children }) => {
  const container = useRef(null);

  const [didInit, setDidInit] = useState(false);

  let ScrollHandler;

  let scrollService;

  useEffect(() => {
    if (!didInit) {
      ScrollHandler = new LocomotiveScroll({
        el: container.current,
        smoothMobile: false,
        inertia: 1,
        smooth: true,
        getDirection: false
      });
      console.log("didInit", ScrollHandler);
      ScrollHandler.on("scroll", instance => console.log(instance));
      setDidInit(true);
      scrollService = {
        update: () => ScrollHandler.update(),
        destroy: () => ScrollHandler.destroy(),
        enable: () => ScrollHandler.start(),
        disable: () => ScrollHandler.stop()
      };
    }
  }, [container.current]);

  useEffect(() => {
    if (scrollService !== undefined) {
      scrollService.update();
    }

    return () => {
      console.log("did destroy");
      false && ScrollHandler.destroy();
    };
  }, [ScrollHandler, didInit, scrollService]);

  return (
    <div data-scroll-container ref={container}>
      {children}
    </div>
  );
};
export default ScrollWrapper;
