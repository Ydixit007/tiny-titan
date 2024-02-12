"use-client";
import Lottie from "react-lottie";
import animationData from "./anime.json";
import Link from "next/link";

export default function Homepage() {
  return (
    <div className="Homepage w-full h-full flex justify-center items-center gap-2 max-md:flex-col-reverse">
      <div className="content flex gap-8 flex-col flex-1 max-md:text-center">
        <h1 className="text-4xl font-semibold text-lighterGrey">Create, <span className="text-color1">Complete</span>, Share!</h1>
        <p className="text-lightGrey">
          Tiny Titan is a powerful web application designed to streamline your
          workflow and boost productivity. Whether you're managing tasks or
          organizing projects, Tiny Titan has got you covered. Say goodbye to
          cluttered to-do lists and hello to seamless productivity.
        </p>
        <Link className="mt-8 text-lighterGrey font-medium border-color1 border-2 py-2 rounded-lg text-center max-w-40 hover:bg-color1 duration-200" href={"/addBoard"}>Create Board</Link>
      </div>
      <div className="image-animation flex-1">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animationData,
          }}
          isClickToPauseDisabled={true}
          height={400}
          width={400}
        />
      </div>
    </div>
  );
}
