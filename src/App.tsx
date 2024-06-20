import PatternCircles from "./assets/images/pattern-circles.tsx";
import BgPattern from "./assets/images/bg-pattern.tsx";
import IconCheck from "./assets/images/icon-check.tsx";
import { useEffect, useState } from "react";

const App: React.FC = () => {
  const [yearBilling, setYearBilling] = useState(false);
  const [inputValue, setInputValue] = useState<number>(3);
  const [numberViews, setNumberViews] = useState<string>("100K");
  const [price, setPrice] = useState<number>(16);
  const liArr: { words: string }[] = [
    { words: "Unlimited websites" },
    { words: "100% data ownership" },
    { words: "Email reports" },
  ];

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setInputValue(value);
    handleTotalInfo(value);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setYearBilling(checked);
    handleTotalInfo(inputValue);
    console.log(yearBilling);
  };

  // TO DO: REMOVE USEEFFECT, IMPROVE SETPRICE LOGIC

  const handleTotalInfo = (value: number) => {
    switch (value) {
      case 1: {
        setNumberViews("10K");
        setPrice(yearBilling ? (8 - 8 * 0.25) * 12 : 8);
        break;
      }
      case 2: {
        setNumberViews("50K");
        setPrice(yearBilling ? (12 - 12 * 0.25) * 12 : 12);
        break;
      }
      case 3: {
        setNumberViews("100K");
        setPrice(yearBilling ? (16 - 16 * 0.25) * 12 : 16);
        break;
      }
      case 4: {
        setNumberViews("500K");
        setPrice(yearBilling ? (24 - 24 * 0.25) * 12 : 24);
        break;
      }
      case 5: {
        setNumberViews("1M");
        setPrice(yearBilling ? (36 - 36 * 0.25) * 12 : 36);
        break;
      }
      default: {
        setNumberViews("100K");
        setPrice(yearBilling ? (16 - 16 * 0.25) * 12 : 16);
        break;
      }
    }
  };

  useEffect(() => {
    handleTotalInfo(inputValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [yearBilling]);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen p-4">
        <div className="flex items-center absolute z-0 top-0 w-full overflow-hidden">
          <BgPattern />
        </div>
        <div className="z-10 sm:flex sm:flex-col sm:items-center sm:justify-center">
          <div className="flex flex-col items-center gap-4 pt-28 lg:pt-0 pb-14 text-center">
            <h1 className="text-2xl font-bold z-10">Simple, traffic-based pricing</h1>
            <div className="absolute top-24 z-0">
              <PatternCircles />
            </div>
            <h6 className="z-10 px-16">Sign-up for our 30-day trial. No credit card required. </h6>
          </div>

          <div className="w-full sm:w-[400px] bg-white px-4 py-10 lg:px-8 lg:w-[500px] rounded-xl shadow-lg shadow-black/10">
            <div className="flex flex-col lg:flex-row lg:flex-wrap items-center justify-between pb-6">
              <p className="uppercase w-1/3">
                <span>{numberViews}</span> Pageviews
              </p>
              <div className="flex flex-col-reverse  lg:flex-col lg:pt-0 w-full pt-4 gap-4">
                <div className="flex flex-row items-center lg:items-center justify-center gap-2 lg:relative lg:top-[-33px] lg:left-[125px]">
                  <span className="text-4xl font-bold">
                    $<span>{price.toFixed(2)}</span>
                  </span>
                  <p>{yearBilling ? "/year" : "/month"}</p>
                </div>
                <div className="relative">
                  <input
                    className="w-full h-3"
                    type="range"
                    min="1"
                    max="5"
                    value={inputValue}
                    onChange={handleValueChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-end pt-8 gap-2 pr-4">
              <p className="text-sm">Monthly Billing</p>
              <label className="relative w-10 h-5 inline-block rounded-2xl border bg-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  className="absolute left-0 top-0 opacity-0 cursor-pointer peer"
                  checked={yearBilling}
                  onChange={handleCheckboxChange}
                />
                <span className="w-4 h-4 rounded-3xl bg-white absolute top-[1px] left-[2px] transition-all delay-150 peer-checked:translate-x-[19px] "></span>
              </label>
              <p className="text-sm">Yearly Billing</p>
              <p className="text-sm bg-custom-orange-bg text-custom-orange-txt rounded-2xl px-2 font-medium block lg:hidden">
                -25%
              </p>
              <p className="text-sm bg-custom-orange-bg text-custom-orange-txt rounded-2xl px-2 font-medium hidden lg:block">
                25% discount
              </p>
            </div>

            <hr className="my-10" />

            <div className="flex flex-col items-center gap-8 lg:justify-between lg:flex-row">
              <ul className="flex flex-col items-center gap-2 lg:items-start">
                {liArr.map((key) => (
                  <li className="text-sm flex flex-row items-center gap-4 lg:gap-2">
                    <IconCheck /> {key.words}
                  </li>
                ))}
              </ul>
              <button className="bg-blue-950 rounded-3xl text-white px-10 py-2" type="submit">
                Start my trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
