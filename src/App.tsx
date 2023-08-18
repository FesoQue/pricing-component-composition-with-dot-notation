import React from "react";
import Header from "./component/Header";
import { PricingCard } from "./component/PricingCard";

const App = () => {
  return (
    <main className="w-[90%] max-w-6xl mx-auto py-20">
      <Header />
      <section className="grid grid-cols-fluid gap-5">
        <PricingCard className="bg-white p-10 rounded-3xl  shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]">
          <PricingCard.Plan>Basic</PricingCard.Plan>
          <PricingCard.Cost>
            <h2 className="text-[#231D4F] text-3xl font-semibold">$10</h2>
            <span className="text-[#848199]">/month</span>
          </PricingCard.Cost>
          <PricingCard.Body>
            <PricingCard.Text>
              For small businesses that want to optimize web queries
            </PricingCard.Text>
            <PricingCard.Value>All limited links</PricingCard.Value>
            <PricingCard.Value>Own analytics platform</PricingCard.Value>
            <PricingCard.Value>Chat support</PricingCard.Value>
            <PricingCard.Value>Optimize hashtags</PricingCard.Value>
          </PricingCard.Body>
          <PricingCard.Button>Choose Plan</PricingCard.Button>
        </PricingCard>

        <PricingCard className="bg-white p-10 rounded-3xl  shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]">
          <PricingCard.Plan>Standard</PricingCard.Plan>
          <PricingCard.Cost>
            <h2 className="text-[#231D4F] text-3xl font-semibold">$50</h2>
            <span className="text-[#848199]">/month</span>
          </PricingCard.Cost>
          <PricingCard.Body>
            <PricingCard.Text>
              For medium businesses that want to optimize web queries
            </PricingCard.Text>
            <PricingCard.Value>All limited links</PricingCard.Value>
            <PricingCard.Value>Own analytics platform</PricingCard.Value>
            <PricingCard.Value>Chat support</PricingCard.Value>
            <PricingCard.Value>Optimize hashtags</PricingCard.Value>
          </PricingCard.Body>
          <PricingCard.Button>Choose Plan</PricingCard.Button>
        </PricingCard>

        <PricingCard className="bg-white p-10 rounded-3xl shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]">
          <PricingCard.Plan>Premium</PricingCard.Plan>
          <PricingCard.Cost>
            <h2 className="text-[#231D4F] text-3xl font-semibold">$100</h2>
            <span className="text-[#848199]">/month</span>
          </PricingCard.Cost>
          <PricingCard.Body>
            <PricingCard.Text>
              For medium businesses that want to optimize web queries
            </PricingCard.Text>
            <PricingCard.Value>All limited links</PricingCard.Value>
            <PricingCard.Value>Own analytics platform</PricingCard.Value>
            <PricingCard.Value>Chat support</PricingCard.Value>
            <PricingCard.Value>Optimize hashtags</PricingCard.Value>
          </PricingCard.Body>
          <PricingCard.Button>Choose Plan</PricingCard.Button>
        </PricingCard>
      </section>
    </main>
  );
};

export default App;
