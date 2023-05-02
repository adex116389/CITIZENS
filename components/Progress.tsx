import React from "react";
import { getProgress } from "../utils/getProgress";

interface ProgressProgressps {
  current: string;
  title?: string
  subTitle?: string
}

export const Progress: React.FC<ProgressProgressps> = ({ current, title, subTitle  }) => {
  const progresses = getProgress();
  return (
    <section className="unauth-intro-area">
      <h2 className="unauth-intro-area__title ">{title||`Account On Hold`}</h2>
      <div
        role="progressbar"
        aria-valuenow={1}
        aria-valuemin={1}
        aria-valuetext="Step 1 of 5: Enrollment"
        aria-valuemax={5}
      >
        <div className="unauth-intro-area__step">
          <strong>
            Step {progresses.indexOf(current) + 1} of {progresses.length}:
          </strong>
          <span>{` ${current}`}</span>
        </div>
        <div className="unauth-intro-area__progress-container">
          <div className="unauth-intro-area__progress-segment">
            {progresses.map((progress) => (
              <div
                key={progress}
                className={`unauth-intro-area__progress-item ${
                  progresses.indexOf(progress) <= progresses.indexOf(current)
                    ? `-js-progress-green`
                    : `js-progress-light-green`
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="js-error-block" />
      <div className="unauth-intro-area__help">
        <a
          className="g-link-list unauth-intro-area__link g-display-none"
          href="#helpModalPage"
        >
          Show Help
        </a>
        <p className="unauth-intro-area__text">
          {subTitle || `Please enter your information to secure your account.`}
        </p>
      </div>
    </section>
  );
};

export default Progress;
