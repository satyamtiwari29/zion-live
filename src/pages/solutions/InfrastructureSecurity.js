import Page from "../../components/Page";
import solutions from "../../assets/json/solutions.json";
import infrastructureSecurity from "../../assets/images/infrastructure-security.png";
import { Helmet } from "react-helmet";

const InfrastructureSecurity = () => {
  return (
    <>
      <Helmet>
        <title>Infrastructure Security — Zion</title>
        <meta name="description" content="" />
      </Helmet>
      <Page />
    </>
  );
};

export default InfrastructureSecurity;
