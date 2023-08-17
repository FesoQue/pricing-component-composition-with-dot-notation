import React from "react";
import Header from "./component/Header";
import { PricingCard } from "./component/PricingCard";

const App = () => {
  return (
    <main className="w-[90%] max-w-6xl mx-auto pb-10">
      <Header />
      <section className="grid grid-cols-3 gap-5">
        <PricingCard className="bg-white p-10 rounded">
          <PricingCard.Plan>Basic</PricingCard.Plan>
          <PricingCard.Cost>$20</PricingCard.Cost>
          <PricingCard.Body>
            <PricingCard.Text>
              For most businesses that want to otpimize web queries
            </PricingCard.Text>
            <PricingCard.Value>All limited links</PricingCard.Value>
            <PricingCard.Value>Own analytics platfo</PricingCard.Value>
            <PricingCard.Value>Chat support</PricingCard.Value>
            <PricingCard.Value>Optimize hashtags</PricingCard.Value>
            <PricingCard.Value>Optimize hashtags</PricingCard.Value>
          </PricingCard.Body>
          <PricingCard.Button>Choose Plan</PricingCard.Button>
        </PricingCard>
      </section>
    </main>
  );
};

export default App;
