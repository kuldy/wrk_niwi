import React from "react";
import Star from "./components/Star";
import { GrStatusGood } from "react-icons/gr";
import { BsCheckCircleFill } from "react-icons/bs";

const points = [
  "personal diet counsellor counselling",
  "diet chart based on your food preferences",
  "six 1-on-1 video counselling sessions per month",
  "upto 2 whatsapp queries per day",
  "and much more!",
];

function App() {
  const handleSubmit = () => {
    console.log("submitted");
  };
  return (
    <div className="mx-14 border-1">
      <div className="min-h-screen">
        {/* navbar */}
        <div className="flex items-end mx-14 h-20 mb-4">
          <div className="bg-white w-16 h-16 flex justify-center items-center shadow-md">
            <img
              src="https://cdn.pixabay.com/photo/2017/03/24/07/28/twitter-2170426__480.png"
              alt="logo of the website"
              className="w-10 h-10"
            />
          </div>
          <div className="ml-4 font-normal leading-5 text-2xl">
            niwi. <span className="text-red-600">ai</span>
          </div>
        </div>
        {/* second row */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="w-2/3 mx-auto space-y-4">
            <div className="text-6xl text-center leading-tight">
              proven diet plans for{" "}
              <span className="font-semibold">weight loss</span>
            </div>
            <div className="">
              <h1>hello</h1>
            </div>
            <div className="text-base font-semibold text-center">
              Get guidance from our team of expert nutrionists and industry
              stalwarts on eating right!
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <input type="text" placeholder="Enter your name" />
                  <input type="text" placeholder="Mobile No." />
                </div>
                <div className="">
                  <input type="email" placeholder="Email" />
                </div>
                <div className="">
                  <input
                    type="submit"
                    value="Submit"
                    className="w-full py-1.5 text-white text-sm rounded-md bg-red-600 hover:bg-red-700 "
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="w-2/3">
            <div className="aspect-w-8 aspect-h-10 shadow-md">
              <iframe
                src="https://www.youtube.com/embed/Gyj6xW6el4g"
                title="Seema Kanchan Korani transformation with the help of niwi.ai"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* third row */}
        <div className="mt-12 mb-12">
          <p className="text-4xl font-semibold text-center">
            trusted by more than 4500+ healthy indians
          </p>
          <div className="flex justify-center items-center">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />

            <p className="text-2xl p-0 mb-0 ml-8">
              {" "}
              <span className="font-semibold">5</span>/5 rating on google
              reviews
            </p>
          </div>
        </div>
        {/* fourth row */}
        <div className="flex justify-center relative">
          <div className="absolute -left-12 -top-16 ">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/07/42/fig-972271__340.jpg"
              alt="food"
              className="object-cover rounded-full w-52 h-52 shadow-sm"
            />
          </div>
          <div className="ml-16 text-4xl font-semibold">
            sign up today and get benefits like:
          </div>
        </div>
        {/* fifth row */}
        <div className="grid grid-cols-2 gap-4 ml-48 mt-12 relative">
          <div className="aspect-w-4 aspect-h-3 shadow-md w-2/3 mx-auto">
            <iframe
              className="rounded-lg shadow-md"
              src="https://www.youtube.com/embed/DHttkp7-rdg"
              title="Shilpa loses 20 Kgs with niwi.ai"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <ul>
              {points.map((point) => (
                <li className="flex mb-6">
                  <BsCheckCircleFill className="h-8 w-8 text-red-600" />
                  <span className="ml-4 text-xl"> {point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute -bottom-24 -right-12">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/07/42/fig-972271__340.jpg"
              alt="food"
              className="object-cover rounded-full w-52 h-52 shadow-sm"
            />
          </div>
        </div>
        {/* row six */}
        <div>payment details</div>
        <div>choose plan that's right for you</div>
        <div>what are our clients saying?</div>
        <div>request a call back from an expert dietitian today!</div>
      </div>
    </div>
  );
}

export default App;
