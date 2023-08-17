import React from "react";
import Header from "./component/Header";
import { PricingCard } from "./component/PricingCard";

const App = () => {
  return (
    <main className="w-[90%] max-w-6xl mx-auto pb-10">
      <Header />
      <PricingCard className="grid grid-cols-3 gap-5">
        <PricingCard.Body className="bg-white p-10 rounded">
          <PricingCard.Header className="mb-5">
            <PricingCard.Cost>$20</PricingCard.Cost>
            <PricingCard.Text>
              For most businesses that want to otpimize web queries
            </PricingCard.Text>
          </PricingCard.Header>
          <PricingCard.Value>All limited links</PricingCard.Value>
          <PricingCard.Value>Own analytics platfo</PricingCard.Value>
          <PricingCard.Value>Chat support</PricingCard.Value>
          <PricingCard.Value>Optimize hashtags</PricingCard.Value>
          <PricingCard.Value>Optimize hashtags</PricingCard.Value>
          <PricingCard.Button>Choose Plan</PricingCard.Button>
        </PricingCard.Body>

        <PricingCard.Body className="bg-white p-10 rounded">
          <PricingCard.Header className="mb-5">
            <PricingCard.Cost>$50</PricingCard.Cost>
            <PricingCard.Text>
              For most businesses that want to otpimize web queries
            </PricingCard.Text>
          </PricingCard.Header>
          <PricingCard.Value>All limited links</PricingCard.Value>
          <PricingCard.Value>Own analytics platfo</PricingCard.Value>
          <PricingCard.Value>Chat support</PricingCard.Value>
          <PricingCard.Value>Optimize hashtags</PricingCard.Value>
          <PricingCard.Value>Optimize hashtags</PricingCard.Value>
          <PricingCard.Button>Choose Plan</PricingCard.Button>
        </PricingCard.Body>

        <PricingCard.Body className="bg-white p-10 rounded">
          <PricingCard.Header className="mb-5">
            <PricingCard.Cost>$100</PricingCard.Cost>
            <PricingCard.Text>
              For most businesses that want to otpimize web queries
            </PricingCard.Text>
          </PricingCard.Header>
          <PricingCard.Value>All limited links</PricingCard.Value>
          <PricingCard.Value>Own analytics platfo</PricingCard.Value>
          <PricingCard.Value>Chat support</PricingCard.Value>
          <PricingCard.Value>Optimize hashtags</PricingCard.Value>
          <PricingCard.Value>Optimize hashtags</PricingCard.Value>
          <PricingCard.Button>Choose Plan</PricingCard.Button>
        </PricingCard.Body>
      </PricingCard>
    </main>
  );
};

export default App;
