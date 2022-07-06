import React, { useState } from "react";

const plans = [
  {
    period: "1 month",
    offer: "available 5% discount + 1 week free",
    price: "3705",
    count: 0,
  },
  {
    period: "3 month",
    offer: "available 10% discount + 15 days free",
    price: "8010",
    count: 0,
  },
  {
    period: "6 month",
    offer: "available 15% discount + 1 month free",
    price: "12665",
    count: 0,
  },
  {
    period: "12 month",
    offer: "available 20% discount + 2 months free",
    price: "21600",
    count: 0,
  },
];

const PaymentDetailsForm = () => {
  const [changeState, setChangeState] = useState(true);

  const handleSubmit = (e) => {
    // console.log("form submitted");
    e.preventDefault();
    console.log("form submitted");
  };

  const handleMinus = (price) => {
    console.log("minus block");
    plans.forEach((plan) => {
      if (plan.price == price) {
        if (plan.count == 0) return;
        plan.count = plan.count - 1;
      }
    });
    setChangeState((changeState) => !changeState);
  };
  const handlePlus = (price) => {
    console.log("plus block");
    plans.forEach((plan) => {
      if (plan.price == price) {
        plan.count = plan.count + 1;
      }
    });
    setChangeState((changeState) => !changeState);
  };

  let price1 = 0;

  const totalPrice = () => {
    plans.forEach((plan) => {
      price1 = price1 + plan.count * plan.price;
    });
    return price1;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-2/3 mx-auto mt-20 shadow-lg rounded-xl"
    >
      <p className="ml-8 mb-12 pt-6 text-3xl">Payment Details</p>
      {plans.map((plan) => (
        <div key={plan.period} className="flex items-center mb-4 mx-4">
          <div className="flex-1">
            <p className="m-0 text-xl">{plan.period}</p>
            <p className="m-0 text-red-400 text-sm">{plan.offer}</p>
          </div>
          <div className="flex-1">
            <div className="flex items-center border-1 rounded-md p-2">
              <p className="flex-1 m-0 pl-4 text-xl">
                {" "}
                <span className="font-medium ">₹ {plan.price}</span>.00
              </p>
              <div className="flex flex-1 items-center">
                <button
                  type="button"
                  className="bg-red-400 text-xl text-white h-8 w-10 rounded-md hover:bg-red-500"
                  onClick={() => handleMinus(plan.price)}
                >
                  -
                </button>
                <p className="my-0 mx-2 text-xl">{plan.count}</p>
                <button
                  type="button"
                  className="bg-red-400 text-xl text-white h-8 w-10 rounded-md hover:bg-red-500"
                  onClick={() => handlePlus(plan.price)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="my-12 mx-6">
        <div className="flex mb-4">
          <label htmlFor="name" className="flex-1 text-xl">
            Name
          </label>
          <div className="flex-1">
            <input type="text" id="name" name="name" />
          </div>
        </div>
        <div className="flex mb-4">
          <label htmlFor="email" className="flex-1 text-xl">
            Email
          </label>
          <div className="flex-1">
            <input type="text" id="email" name="email" />
          </div>
        </div>
        <div className="flex mb-4">
          <label htmlFor="phone" className="flex-1 text-xl">
            Phone
          </label>
          <div className="flex-1">
            <input type="text" id="phone" name="phone" />
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center h-16 bg-gray-300 rounded-b-xl">
        <input
          type="submit"
          value={`Pay ${totalPrice()}/-`}
          className="bg-red-500 text-white text-2xl h-full px-10 rounded-br-xl"
        />
      </div>
    </form>
  );
};

export default PaymentDetailsForm;
