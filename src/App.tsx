import React from "react";
import Header from "./component/Header";
import { PricingCard } from "./component/PricingCard";
import check_circle from "./assets/check-circle.svg";

const App = () => {
  return (
    <main className="w-[90%] max-w-6xl mx-auto">
      <Header />
      <PricingCard>
        <PricingCard.Body>
          <PricingCard.Header className="mb-5">
            <PricingCard.Cost className="flex items-end gap-[10px] mb-6">
              <h2 className="text-[#231D4F] text-3xl font-semibold">$20</h2>
              <span className="text-[#848199]">/month</span>
            </PricingCard.Cost>
            <PricingCard.Text>
              <h2 className="text-[#231D4F] text-3xl mb-3 font-semibold">
                Intro
              </h2>
              <p className="text-[#848199]">
                For most businesses that want to otpimize web queries
              </p>
            </PricingCard.Text>
          </PricingCard.Header>
          <PricingCard.Value className="flex items-center gap-2 mb-3">
            <img src={check_circle} alt="check circle" />
            <p className="text-[#848199]">Hello world lorem ipsum</p>
          </PricingCard.Value>
          <PricingCard.Value className="flex items-center gap-2 mb-3">
            <img src={check_circle} alt="check circle" />
            <p className="text-[#848199]">Hello world lorem ipsum</p>
          </PricingCard.Value>
          <PricingCard.Value className="flex items-center gap-2 mb-3">
            <img src={check_circle} alt="check circle" />
            <p className="text-[#848199]">Hello world lorem ipsum</p>
          </PricingCard.Value>
          <PricingCard.Button>Choose Plan</PricingCard.Button>
        </PricingCard.Body>
      </PricingCard>
    </main>
  );
};

export default App;
