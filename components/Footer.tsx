/* eslint-disable @next/next/no-img-element */

export const Footer = () => {
  return (
    <div className="citizens-footer">
      <div className="citizens-header-footer">
        <footer id="page-footer" className="page-footer">
          <div className="footer-top">
            <ul>
              <li>
                <a
                  href="#"
                  className="contact"
                  title="Opens Ways to Contact Us Dialog"
                >
                  <span className="account-underline">Ways to Contact Us</span>
                  <span className="visuallyhidden">
                    - Opens Ways to Contact Us Dialog
                  </span>
                </a>
                <div className="dropup-menu">
                  <h4>Contact Us</h4>
                  <p>
                    General Questions:
                    <br />
                    <strong>1-800-656-6561</strong> (personal bаnk accounts)
                    <br />
                    Business Questions:
                    <br />
                    <strong>1-877-229-6428</strong> (online banking support)
                    <br />
                    <strong>1-800-862-6200</strong> (account information)
                    <br />
                    Investment Questions:
                    <br />
                    <strong>1-800-942-8300</strong> (Сitizеns Securities, Inc.)
                  </p>
                  {/*
<p>Go to <a href="/customer-service/">Customer Service</a> to send us email or mail or to view FAQs</p>
<p><a href="/forms/contactme.aspx">We'll Contact You</a></p>
*/}
                </div>
              </li>
              {/* As part of Def# 1465 Location is commented on Auth/UnAuth pages.
<li><span class="location">Your Location: NONE</span>
</li>
*/}
              <li>
                <a
                  href="#"
                  className="locator"
                  title="Opens Branch & ATM Locator Dialog"
                >
                  <span className="account-underline">
                    Branch &amp; ATM Locator
                  </span>
                  <span className="visuallyhidden">
                    - Opens Branch &amp; ATM Locator Dialog
                  </span>
                </a>
                <div className="dropup-menu">
                  <h4>Branch &amp; ATM Locator</h4>
                  <p>Find one of our 1,300 locations near you.</p>
                  <div role="form">
                    <div
                      id="stickyFooterBranch-error"
                      className="error-message"
                      style={{ display: "none" }}
                    />
                    <input
                      id="stickyFooterBranch"
                      type="text"
                      title="Enter Zip Code or City, State"
                      placeholder="Enter Zip Code or City, State"
                      defaultValue="NONE"
                    />
                    <a
                      href="#"
                      type="button"
                      className="button button-stickyfooterbranch"
                    >
                      Submit
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a style={{ cursor: "pointer" }}>
                  <img
                    src="/images/feedback.png"
                    alt="Give Feedback"
                    style={{
                      cursor: "pointer",
                      border: "0px",
                      height: "40px",
                      width: "40px",
                      paddingRight: "4px",
                    }}
                  />
                  Feedback
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-row clearfix">
            <ul>
              <li>
                <h6>Checking &amp; Savings</h6>
              </li>
              {/*        <li><a  href="http://www.citizensbank.com/checking-and-savings.aspx">Checking &amp; Savings Overview</a></li>*/}
              <li>
                <a href="http://www.citizensbank.com/checking/">Checking</a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/savings-and-cds/savings.aspx">
                  Savings
                </a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/savings-and-cds/money-markets.aspx">
                  Money Markets
                </a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/savings-and-cds/cds.aspx">
                  Certificates of Deposit (CDs)
                  <sup>®</sup>
                </a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/ira/">IRAs</a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/checking-and-savings/programs-and-services.aspx">
                  Programs &amp; Services
                </a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/checking-and-savings/benefits-and-features.aspx">
                  Benefits &amp; Features
                </a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/checking/debit-cards/standard.aspx">
                  Debit Card
                </a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/overdraft-protection/">
                  Overdraft Choices
                  <sup>®</sup>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <h6>Home Borrowing</h6>
              </li>
              {/*        <li><a  href="http://www.citizensbank.com/loans/">Home Borrowing Overview</a></li>*/}
              <li>
                <a href="http://www.citizensbank.com/mortgages/">Mortgages</a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/home-equity/loans.aspx">
                  Home Equity Loans
                </a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/home-equity/lines.aspx">
                  Home Equity Lines of Credit
                </a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/loans/determine-my-rate.aspx">
                  Determine My Rate
                </a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/mortgages/my-mortgage.aspx">
                  My Mortgage Account
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <h6>Students</h6>
              </li>
              {/*<li><a  href="http://www.citizensbank.com/student-services/">Students Overview</a></li>
<li><a  href="http://www.citizensbank.com/student-banking/">Ваnking</a></li>
<li><a  href="http://www.citizensbank.com/student-loans/undergradfamilies.aspx">Undergraduate Borrowing</a></li>
<li><a  href="http://www.citizensbank.com/student-loans/gradstudents.aspx">Graduate Borrowing</a></li>
<li><a  href="http://www.citizensbank.com/student-loans/process.aspx">The Student Loan Process</a></li>
<li><a  href="http://www.citizensbank.com/student-loans/tools.aspx">Student Tools &amp; Resources</a></li>*/}
              <li>
                <a href="http://www.citizensbank.com/student-loans/default.aspx">
                  Student Loan Options
                </a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/student-loans/education-refinance-loan-overview.aspx">
                  Refinancing Student Loans
                </a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/student-loans/process/default.aspx">
                  The Student Loan Process
                </a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/student-loans/process/undergraduate.aspx">
                  Undergraduate Students &amp; Parents
                </a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/student-loans/process/graduate.aspx">
                  Graduate Students
                </a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/student-loans/tools.aspx">
                  Tools &amp; Information
                </a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/checking/one-deposit-checking-account.aspx">
                  Ваnking for Students
                </a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/student-services/access-my-student-loan/default.aspx">
                  Access My Student Loan
                </a>
              </li>
            </ul>
            <ul className="last">
              <li>
                <h6>Cards</h6>
              </li>
              {/*        <li><a  href="http://www.citizensbank.com/cards-and-rewards/">Cards Overview</a></li>*/}
              <li>
                <a href="http://www.citizensbank.com/credit-cards/overview.aspx">
                  Credit Cards
                </a>
              </li>
              {/*        <li><a  href="http://www.citizensbank.com/cards-and-rewards/debit-card/debit-card.aspx">Debit Card</a></li>*/}
              <li>
                <a href="http://www.citizensbank.com/cards-and-rewards/credit-cards/creditcardagreements/agreements.aspx">
                  Card Agreements
                </a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/security/">
                  Security Features
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-row clearfix">
            <ul>
              <li>
                <h6>Personal Loans</h6>
              </li>
              <li>
                <a href="http://www.citizensbank.com/personal-loans/overview.aspx">
                  Overview
                </a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/personal-loans/faqs.aspx">
                  FAQs
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <h6>Resources</h6>
              </li>
              <li>
                <a href="http://www.citizensbank.com/checking/order-checks.aspx">
                  Order Checks
                </a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/online-and-mobile-banking/default.aspx">
                  Online &amp; Mobile Ваnking
                </a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/customer-service/">
                  Customer Service
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <h6>About Us</h6>
              </li>
              {/*        <li><a  href="http://www.citizensbank.com/about-us/">About Us Overview</a></li>*/}
              <li>
                <a href="http://investor.citizensbank.com/about-us/our-company.aspx">
                  About Сitizеns Ваnk
                </a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/community/">
                  In the Community
                </a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/careers/">Careers</a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/about_our_ads.aspx">
                  About Our Ads
                </a>
              </li>
            </ul>
            <ul className="last">
              <li>
                <h6>Solutions</h6>
              </li>
              <li>
                <a href="http://www.citizensbank.com/">Personal</a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/investing/">Investing</a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/small-business/">
                  Small Business
                </a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/commercial-banking/">
                  Commercial
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-row clearfix">
            <ul>
              <li>
                <h6>Disclosures</h6>
              </li>
              <li>
                <a href="http://www.citizensbank.com/pf/onlinebanking/terms.aspx">
                  Online Terms and Conditions
                </a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/pdf/CTZ_eSign.pdf">
                  Electronic Notice Disclosure and Consent (Online Service)
                </a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/checking-and-savings/account-documents.aspx">
                  Account Documents
                </a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/tools/leaving.aspx?url=http://www.fdic.gov">
                  Member FDIC
                </a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/security/equal-housing-lender.aspx">
                  Equal Housing Lender
                  <img
                    alt="Equal Housing Lender"
                    title="Equal Housing Lender"
                    src={`/images/equal-housing.gif`}
                  />
                </a>
              </li>
              <li>
                <a href="http://www.citizensbank.com/security/">
                  Security, Privacy &amp; Legal
                </a>
              </li>
            </ul>
          </div>
          <div
            className="centered-content"
            style={{
              padding: `0 20px`,
            }}
          >
            <div className="footer-bottom">
              <p className="legal">
                Zelle and the Zelle related marks are wholly owned by Early
                Warning Services, LLC and are used herein under license.
              </p>
              <p className="legal">
                *Securities, Insurance and Investment Advisory Services offered
                through Сitizеns Securities, Inc. {`("CSI")`}, also referred to
                as Сitizеns Securities, Inc. CSI is an SEC registered investment
                adviser and Member - FINRA and SIPC. 770 Legacy Place, MLP240,
                Dedham, MA 02026. (800) 942-8300. CSI is an affiliate of
                Сitizеns Ваnk, N.A.
                <br />
                <br />
                The investment balances shown in online banking are based on
                market prices, with up to a fifteen minute delay from the time
                this webpage was last refreshed. Information relating to
                accounts not held at CSI is presented as an accommodation and
                while drawn from sources believed to be reliable is not
                guaranteed as to accuracy or completeness. Such information
                should be independently confirmed by the account owner(s).
                <br />
                <br />
                Information relating to accounts not held or custodied by
                National Financial Services (NFS) (Assets Held Away), CSI’s
                clearing broker dealer, was provided to NFS by outside parties
                and is included for informational purposes only. These positions
                are not part of your brokerage account carried by NFS and
                therefore any SIPC account protection afforded your account
                through NFS does not cover these assets or prices reported.
                Neither NFS, CSI nor Сitizеns Ваnk are responsible for the
                Assets Held Away information provided and does not guarantee the
                accuracy or timeliness of the positions or prices reported.
                Prices shown do not necessarily reflect the actual current
                market prices. Further information regarding these prices may be
                obtained by contacting CSI.
                <br />
                <br />
                The investment products and financial strategies suggested
                herein are subject to investment risk, including possible loss
                of principal amount invested. Investment decisions should be
                based on each {`individual's`} goals, time horizon and tolerance
                for risk.
                <br />
                <br />
                SpeciFi<sup>®</sup> is made available through CSI. Portfolio
                management services are sub-advised by SigFig Wealth Management,
                LLC {`("SigFig")`}, an SEC registered investment adviser. SigFig
                is not an affiliate of CSI or Сitizеns Ваnk, N.A.
              </p>
              <div className="footer-disclaimer-box footer-disclaimer-box--margin-bottom footer-disclaimer">
                <p className="footer-disclaimer-box__text">
                  Securities, Insurance Products and Advisory Services are:
                </p>
                <ul className="footer-disclaimer-box__list">
                  <li className="footer-disclaimer-box__list-item">
                    NOT FDIC INSURED
                  </li>
                  <li className="footer-disclaimer-box__list-item">
                    NOT BANK GUARANTEED
                  </li>
                  <li className="footer-disclaimer-box__list-item">
                    MAY LOSE VALUE
                  </li>
                  <li className="footer-disclaimer-box__list-item">
                    NOT A DEPOSIT
                    <br />
                  </li>
                  <li className="footer-disclaimer-box__list-item">
                    NOT INSURED BY ANY FEDERAL GOVERNMENT AGENCY
                  </li>
                </ul>
              </div>
              <ul className="footer-util">
                <li className="sitemap">
                  <a href="http://www.citizensbank.com/tools/SiteMap.aspx">
                    Site Map
                  </a>
                </li>
                <li>
                  Follow:
                  <a href="http://www.citizensbank.com/tools/leaving.aspx?url=http://www.facebook.com/citizensbank">
                    <img
                      src={`/images/footer-follow-facebook.png`}
                      alt="Facebook"
                    />
                  </a>
                  <a href="http://www.citizensbank.com/tools/leaving.aspx?url=http://twitter.com/citizensbank">
                    <img
                      src={`/images/footer-follow-twitter.png`}
                      alt="Twitter"
                    />
                  </a>
                  <a href="http://www.citizensbank.com/tools/leaving.aspx?url=http://linkedin.com/company/citizens-bаnk">
                    <img
                      src={`/images/footer-follow-linkedin.png`}
                      alt="Linkedin"
                    />
                  </a>
                  <a href="http://www.citizensbank.com/tools/leaving.aspx?url=http://youtube.com/citizensbank">
                    <img
                      src={`/images/footer-follow-youtube.png`}
                      alt="Youtube"
                    />
                  </a>
                </li>
              </ul>
              <p className="footer-copyright">
                © Copyright 2021 Сitizеns Financial Group, Inc. All rights
                reserved.
                <br />
                Сitizеns Ваnk is a brand name of Сitizеns Ваnk, N.A. (NMLS ID#
                433960).
                <br />
                Сitizеns Ваnk corporate headquarters: One Сitizеns Plaza,
                Providence, RI 02903
              </p>
              <img src={`/images/elh.gif`} alt="Equal Housing Lender" />
              <img src={`/images/fdicFooter.gif`} alt="Member FDIC" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
