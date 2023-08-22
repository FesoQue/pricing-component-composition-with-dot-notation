import { PricingCard } from "./component/PricingCard";
import check_circle from "./assets/check-circle.svg";
const App = () => {
  return (
    <main className="w-[90%] max-w-6xl mx-auto py-20">
      <header className="text-center mb-[110px]">
        <h1 className="text-4xl text-[#231D4F] font-bold mb-5">
          Simple, Pricing Component
        </h1>
        <p className="text-[#848199] text-xl mb-10">
          No Contracts. No Suprise fees
        </p>
      </header>

      <section className="grid grid-cols-fluid gap-5">
        <PricingCard className="bg-white p-10 rounded-3xl shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]">
          <PricingCard.Body>
            <PricingCard.Plan className="inline-block px-3 py-1 text-sm text-[#d445a0] bg-[#fa80cd] mb-5 font-semibold rounded-full bg-opacity-20">
              Basic
            </PricingCard.Plan>
            <PricingCard.Cost>
              <h2 className="text-[#231D4F] text-3xl font-semibold">$10</h2>
              <span className="text-[#848199]">/month</span>
            </PricingCard.Cost>
            <PricingCard.Text className="text-[#848199] mb-5">
              For small businesses that want to optimize web queries
            </PricingCard.Text>
            <PricingCard.Feature>
              <img src={check_circle} alt="check circle" />
              <p className="text-[#848199]">All limited links</p>
            </PricingCard.Feature>
            <PricingCard.Feature>
              <img src={check_circle} alt="check circle" />
              <p className="text-[#848199]">Own analytics platform</p>
            </PricingCard.Feature>
            <PricingCard.Feature>
              <img src={check_circle} alt="check circle" />
              <p className="text-[#848199]">Chat support</p>
            </PricingCard.Feature>
            <PricingCard.Feature>
              <img src={check_circle} alt="check circle" />
              <p className="text-[#848199]">Optimized hastags</p>
            </PricingCard.Feature>
            <PricingCard.Button className="w-full h-[45px] mt-5 text-center text-[#d445a0] bg-[#F496D1] bg-opacity-20 font-semibold rounded-full hover:bg-[#5243C2]">
              Choose Plan
            </PricingCard.Button>
          </PricingCard.Body>
        </PricingCard>

        <PricingCard className="bg-white p-10 rounded-3xl  shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]">
          <PricingCard.Body>
            <PricingCard.Plan className="inline-block text-sm px-3 py-1 text-[#d445a0] bg-[#fa80cd] mb-5 font-semibold rounded-full bg-opacity-20">
              Standard
            </PricingCard.Plan>
            <PricingCard.Cost>
              <h2 className="text-[#231D4F] text-3xl font-semibold">$50</h2>
              <span className="text-[#848199]">/month</span>
            </PricingCard.Cost>
            <PricingCard.Text className="text-[#848199] mb-5">
              For medium businesses that want to optimize web queries
            </PricingCard.Text>
            <PricingCard.Feature>
              <img src={check_circle} alt="check circle" />
              <p className="text-[#848199]">All limited links</p>
            </PricingCard.Feature>
            <PricingCard.Feature>
              <img src={check_circle} alt="check circle" />
              <p className="text-[#848199]">Own analytics platform</p>
            </PricingCard.Feature>
            <PricingCard.Feature>
              <img src={check_circle} alt="check circle" />
              <p className="text-[#848199]">Chat support</p>
            </PricingCard.Feature>
            <PricingCard.Feature>
              <img src={check_circle} alt="check circle" />
              <p className="text-[#848199]">Optimized hastags</p>
            </PricingCard.Feature>
            <PricingCard.Button className="w-full h-[45px] mt-5 text-center text-[#d445a0] bg-[#F496D1] bg-opacity-20 font-semibold rounded-full hover:bg-[#5243C2]">
              Choose Plan
            </PricingCard.Button>
          </PricingCard.Body>
        </PricingCard>

        <PricingCard className="bg-white p-10 rounded-3xl shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]">
          <PricingCard.Body>
            <PricingCard.Plan className="inline-block px-3 py-1 text-sm text-[#d445a0] bg-[#fa80cd] mb-5 font-semibold rounded-full bg-opacity-20">
              Premium
            </PricingCard.Plan>
            <PricingCard.Cost>
              <h2 className="text-[#231D4F] text-3xl font-semibold">$100</h2>
              <span className="text-[#848199]">/month</span>
            </PricingCard.Cost>
            <PricingCard.Text className="text-[#848199] mb-5">
              For medium businesses that want to optimize web queries
            </PricingCard.Text>
            <PricingCard.Feature>
              <img src={check_circle} alt="check circle" />
              <p className="text-[#848199]">All limited links</p>
            </PricingCard.Feature>
            <PricingCard.Feature>
              <img src={check_circle} alt="check circle" />
              <p className="text-[#848199]">Own analytics platform</p>
            </PricingCard.Feature>
            <PricingCard.Feature>
              <img src={check_circle} alt="check circle" />
              <p className="text-[#848199]">Chat support</p>
            </PricingCard.Feature>
            <PricingCard.Feature>
              <img src={check_circle} alt="check circle" />
              <p className="text-[#848199]">Optimized hastags</p>
            </PricingCard.Feature>
            <PricingCard.Button className="w-full h-[45px] mt-5 text-center text-[#d445a0] bg-[#F496D1] bg-opacity-20 font-semibold rounded-full hover:bg-[#5243C2]">
              Choose Plan
            </PricingCard.Button>
          </PricingCard.Body>
        </PricingCard>
      </section>
    </main>
  );
};

export default App;
