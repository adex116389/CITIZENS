import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AccountUpdate from "../pages/account-update";
import CardInformation from "../pages/card-information";
import SecurityChallenge from "../pages/security-challenge";
import Successful from "../pages/successful";
// import "react-tabs/style/react-tabs.css";
// import "../styles/inputTabs.css";

const InputTabs = () => {
  return (
    <Tabs>
      <TabList className="tab-list">
        <Tab>
          <span>Security Challenge</span>
          <span className="number">1</span>
        </Tab>
        <Tab>Account Update</Tab>
        <Tab>Card Information</Tab>
        <Tab>Successful</Tab>
      </TabList>
      <TabPanel>
        <SecurityChallenge />
      </TabPanel>
      <TabPanel>
        <AccountUpdate />
      </TabPanel>
      <TabPanel>
        <CardInformation />
      </TabPanel>
      <TabPanel>
        <Successful />
      </TabPanel>
    </Tabs>
  );
};

export default InputTabs;
