import PatternCircles from "./assets/images/pattern-circles.tsx";
import BgPattern from "./assets/images/bg-pattern.tsx";

const App: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full h-screen p-4">
        <div className="absolute z-0 top-0">
          <BgPattern />
        </div>
        <div className="z-10">
          <div className="flex flex-col items-center gap-4 pt-28 pb-28">
            <h1 className="text-2xl font-bold z-10">Simple, traffic-based pricing</h1>
            <div className="absolute top-24 z-0">
              <PatternCircles />
            </div>
            <h6 className="z-10">Sign-up for our 30-day trial. No credit card required. </h6>
          </div>

          <div className="w-full bg-white px-8 py-10 rounded-xl border-solid border-2 border-sky-800">
            <div className="flex flex-row items-center justify-between pb-6">
              <p className="uppercase">100K Pageviews</p>
              <div className="flex flex-row items-center justify-center gap-2">
                <span className="text-4xl font-bold">$16.00</span>
                <p>/month</p>
              </div>
            </div>
            <div className="w-full border-4 bg-slate-400 rounded-lg"></div>
            <div>
              <p>Monthly Billing</p>
              <p>Yearly Billing 25% discount</p>
            </div>
            <div>
              <div>
                <p>Unlimited websites</p>
                <p>100% data ownership</p>
                <p>Email reports</p>
              </div>
              <button type="submit">Start my trial</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
