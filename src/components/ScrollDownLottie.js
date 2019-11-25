import React from "react"
import Lottie from "react-lottie"
import animationData from "../lotties/11059-scroll-down.json"

const ScrollDownLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return <Lottie options={defaultOptions} height={200} width={200} />
}

export default ScrollDownLottie
