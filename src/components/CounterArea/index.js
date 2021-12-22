import React from "react";
import Odometer from "react-odometerjs";
import "./style.scss";
const counters = [
  { value: "95", title: "Cases Won", level: "%" },
  { value: "100", title: "Trusted Client", level: "+" },
  { value: "10", title: "Dedicated Lawyer", level: "+" },
  { value: "5", title: "Case Dismissed", level: "%" },
];
const CounterArea = ({ className, fullWidth }) => {
  return (
    <div className={className}>
      <div className="container">
        <div className="row">
          <div className={fullWidth ? "col-12" : "col-lg-6 col-12"}>
            <div className="counterMainWrapper">
              {counters.map((count, i) => (
                <div key={i} className="counterWrap">
                  <div className="count">
                    <Odometer aoto={true} value={count.value} />
                    {count.level && <span className="level">{count.level}</span>}
                  </div>
                  <p className="px-2">{count.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CounterArea;
