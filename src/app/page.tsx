import Image from "next/image";
import React from "react";
import ScrollAnimation from "@/components/ScrollAnimation";

const Page: React.FC = () => {
  return (
    <div className="space-y-10 p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Scroll Animations Showcase
      </h1>

      <div className="flex flex-col justify-center items-center space-y-16">
        {/* Fade In */}
        <ScrollAnimation animationClass="fadeIn">
          <p className="text-center text-lg">
            Fade In: Smooth appearance from transparent
          </p>
          <Image src="/test.png" alt="Fade In" width={300} height={300} />
        </ScrollAnimation>

        {/* Slide Up */}
        <ScrollAnimation animationClass="slideUp">
          <p className="text-center text-lg">
            Slide Up: Moves from bottom to original position
          </p>
        </ScrollAnimation>

        {/* Zoom In */}
        <ScrollAnimation animationClass="zoomIn">
          <Image src="/test.png" alt="Zoom In" width={400} height={400} />
          <p className="text-center text-lg mt-5">
            Zoom In: Scales from smaller to original size
          </p>
        </ScrollAnimation>

        {/* Rotate In */}
        <ScrollAnimation animationClass="rotateIn">
          <Image src="/test.png" alt="Rotate In" width={400} height={400} />
          <p className="text-center text-lg mt-5">Rotate In: Spins into view</p>
        </ScrollAnimation>

        {/* Slide From Right */}
        {/* <ScrollAnimation animationClass="slideFromRight">
          <p className="text-center text-lg">
            Slide From Right: Enters from the right side
          </p>
          <Image src="/test.png" alt="Slide Right" width={400} height={400} />
        </ScrollAnimation> */}

        {/* Blur In */}
        {/* <ScrollAnimation animationClass="blurIn">
          <Image src="/test.png" alt="Blur In" width={400} height={400} />
          <p className="text-center text-lg mt-5">
            Blur In: Transitions from blurry to clear
          </p>
        </ScrollAnimation> */}

        {/* Perspective Rotate */}
        {/* <ScrollAnimation animationClass="perspectiveRotate">
          <Image
            src="/test.png"
            alt="Perspective Rotate"
            width={400}
            height={400}
          />
          <p className="text-center text-lg mt-5">
            Perspective Rotate: 3D-like rotation
          </p>
        </ScrollAnimation> */}
      </div>
      <div className="flex flex-col justify-center items-center space-y-16">
        {/* Fade In */}
        <ScrollAnimation animationClass="fadeIn" delay={700}>
          <p className="text-center text-lg">
            Fade In: Smooth appearance from transparent
          </p>
          <Image src="/test.png" alt="Fade In" width={300} height={300} />
        </ScrollAnimation>

        {/* Slide Up */}
        <ScrollAnimation animationClass="slideUp" delay={700}>
          <p className="text-center text-lg">
            Slide Up: Moves from bottom to original position
          </p>
          <Image src="/test.png" alt="Fade In" width={300} height={300} />
        </ScrollAnimation>

        {/* Zoom In */}
        <ScrollAnimation animationClass="zoomIn" delay={700}>
          <Image src="/test.png" alt="Zoom In" width={400} height={400} />
          <p className="text-center text-lg mt-5">
            Zoom In: Scales from smaller to original size
          </p>
        </ScrollAnimation>

        {/* Rotate In */}
        <ScrollAnimation animationClass="rotateIn" delay={700}>
          <Image src="/test.png" alt="Rotate In" width={400} height={400} />
          <p className="text-center text-lg mt-5">Rotate In: Spins into view</p>
        </ScrollAnimation>

        {/* Slide From Right */}
        <ScrollAnimation animationClass="slideFromRight" delay={700}>
          <p className="text-center text-lg">
            Slide From Right: Enters from the right side
          </p>
          <Image src="/test.png" alt="Slide Right" width={400} height={400} />
        </ScrollAnimation>

        {/* Blur In */}
        <ScrollAnimation animationClass="blurIn" delay={700}>
          <Image src="/test.png" alt="Blur In" width={400} height={400} />
          <p className="text-center text-lg mt-5">
            Blur In: Transitions from blurry to clear
          </p>
        </ScrollAnimation>

        {/* Perspective Rotate */}
        <ScrollAnimation animationClass="perspectiveRotate" delay={700}>
          <Image
            src="/test.png"
            alt="Perspective Rotate"
            width={400}
            height={400}
          />
          <p className="text-center text-lg mt-5">
            Perspective Rotate: 3D-like rotation
          </p>
        </ScrollAnimation>
      </div>
      <div className="flex flex-col justify-center items-center space-y-20">
        {/* Fade In - Delay 700 */}
        <ScrollAnimation animationClass="fadeIn" delay={700}>
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <p className="text-xl mb-4">Fade In Animation</p>
            <Image
              src="/test.png"
              alt="Fade In"
              width={300}
              height={300}
              className="mx-auto"
            />
          </div>
        </ScrollAnimation>

        {/* Slide Up - Delay 700 */}
        <ScrollAnimation animationClass="slideUp" delay={700}>
          <div className="bg-blue-100 shadow-md rounded-lg p-8 text-center">
            <p className="text-xl">Slide Up Animation</p>
          </div>
        </ScrollAnimation>

        {/* Zoom In - Delay 700 */}
        <ScrollAnimation animationClass="zoomIn" delay={700}>
          <div className="bg-green-100 shadow-md rounded-lg p-8 text-center">
            <Image
              src="/test.png"
              alt="Zoom In"
              width={400}
              height={400}
              className="mx-auto"
            />
            <p className="text-xl mt-4">Zoom In Animation</p>
          </div>
        </ScrollAnimation>

        {/* Rotate In - Delay 700 */}
        <ScrollAnimation animationClass="rotateIn" delay={700}>
          <div className="bg-purple-100 shadow-md rounded-lg p-8 text-center">
            <Image
              src="/test.png"
              alt="Rotate In"
              width={400}
              height={400}
              className="mx-auto"
            />
            <p className="text-xl mt-4">Rotate In Animation</p>
          </div>
        </ScrollAnimation>

        {/* Slide From Right - Delay 700 */}
        <ScrollAnimation animationClass="slideFromRight" delay={700}>
          <div className="bg-red-100 shadow-md rounded-lg p-8 text-center">
            <p className="text-xl mb-4">Slide From Right Animation</p>
            <Image
              src="/test.png"
              alt="Slide Right"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>
        </ScrollAnimation>

        {/* Blur In - Delay 700 */}
        <ScrollAnimation animationClass="blurIn" delay={700}>
          <div className="bg-yellow-100 shadow-md rounded-lg p-8 text-center">
            <Image
              src="/test.png"
              alt="Blur In"
              width={400}
              height={400}
              className="mx-auto"
            />
            <p className="text-xl mt-4">Blur In Animation</p>
          </div>
        </ScrollAnimation>

        {/* Perspective Rotate - Delay 700 */}
        <ScrollAnimation animationClass="perspectiveRotate" delay={700}>
          <div className="bg-indigo-100 shadow-md rounded-lg p-8 text-center">
            <Image
              src="/test.png"
              alt="Perspective Rotate"
              width={400}
              height={400}
              className="mx-auto"
            />
            <p className="text-xl mt-4">Perspective Rotate Animation</p>
          </div>
        </ScrollAnimation>
      </div>

      {/* Délai de 1000 ms */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl mb-10">Animations with 1000ms Delay</h2>

        <div className="flex flex-col justify-center items-center space-y-20">
          {/* Fade In - Delay 1000 */}
          <ScrollAnimation animationClass="fadeIn" delay={1000}>
            <div className="bg-white shadow-lg rounded-lg p-8 text-center">
              <p className="text-xl mb-4">Fade In Animation (1000ms)</p>
              <Image
                src="/test.png"
                alt="Fade In"
                width={300}
                height={300}
                className="mx-auto"
              />
            </div>
          </ScrollAnimation>

          {/* Slide Up - Delay 1000 */}
          <ScrollAnimation animationClass="slideUp" delay={1000}>
            <div className="bg-blue-100 shadow-md rounded-lg p-8 text-center">
              <p className="text-xl">Slide Up Animation (1000ms)</p>
            </div>
          </ScrollAnimation>

          {/* Zoom In - Delay 1000 */}
          <ScrollAnimation animationClass="zoomIn" delay={1000}>
            <div className="bg-green-100 shadow-md rounded-lg p-8 text-center">
              <Image
                src="/test.png"
                alt="Zoom In"
                width={400}
                height={400}
                className="mx-auto"
              />
              <p className="text-xl mt-4">Zoom In Animation (1000ms)</p>
            </div>
          </ScrollAnimation>

          {/* Rotate In - Delay 1000 */}
          <ScrollAnimation animationClass="rotateIn" delay={1000}>
            <div className="bg-purple-100 shadow-md rounded-lg p-8 text-center">
              <Image
                src="/test.png"
                alt="Rotate In"
                width={400}
                height={400}
                className="mx-auto"
              />
              <p className="text-xl mt-4">Rotate In Animation (1000ms)</p>
            </div>
          </ScrollAnimation>

          {/* Slide From Right - Delay 1000 */}
          <ScrollAnimation animationClass="slideFromRight" delay={1000}>
            <div className="bg-red-100 shadow-md rounded-lg p-8 text-center">
              <p className="text-xl mb-4">
                Slide From Right Animation (1000ms)
              </p>
              <Image
                src="/test.png"
                alt="Slide Right"
                width={400}
                height={400}
                className="mx-auto"
              />
            </div>
          </ScrollAnimation>

          {/* Blur In - Delay 1000 */}
          <ScrollAnimation animationClass="blurIn" delay={1000}>
            <div className="bg-yellow-100 shadow-md rounded-lg p-8 text-center">
              <Image
                src="/test.png"
                alt="Blur In"
                width={400}
                height={400}
                className="mx-auto"
              />
              <p className="text-xl mt-4">Blur In Animation (1000ms)</p>
            </div>
          </ScrollAnimation>

          {/* Perspective Rotate - Delay 1000 */}
          <ScrollAnimation animationClass="perspectiveRotate" delay={1000}>
            <div className="bg-indigo-100 shadow-md rounded-lg p-8 text-center">
              <Image
                src="/test.png"
                alt="Perspective Rotate"
                width={400}
                height={400}
                className="mx-auto"
              />
              <p className="text-xl mt-4">
                Perspective Rotate Animation (1000ms)
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Page;
