import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import "swiper/swiper-bundle.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Solutions from "./pages/solutions/Solutions";
import Consulting from "./pages/solutions/Consulting";
import DigitalWorkspace from "./pages/solutions/DigitalWorkspace";
import DataCentre from "./pages/solutions/DataCentre";
import Network from "./pages/solutions/Network";
import Mobility from "./pages/solutions//Mobility";
import SecuritySolutions from "./pages/solutions/SecuritySolutions";
import SecurityAudit from "./pages/solutions/SecurityAudit";
import InfrastructureSecurity from "./pages/solutions/InfrastructureSecurity";
import Monitoring from "./pages/solutions/Monitoring";
import DetectionAndPrevention from "./pages/solutions/DetectionAndPrevention";
import Vapt from "./pages/solutions/Vapt";
import Siem from "./pages/solutions/Siem";
import InfrastructureSolutions from "./pages/solutions/InfrastructureSolutions";
import CloudSolutions from "./pages/solutions/CloudSolutions";
import CloudConsultingServices from "./pages/solutions/CloudConsultingServices";
import MigrationAndDeployment from "./pages/solutions/MigrationAndDeployment";
import CloudManagedServices from "./pages/solutions/CloudManagedServices";
import CloudSecuritySolutions from "./pages/solutions/CloudSecuritySolutions";
import DigitalExperinceSolutions from "./pages/solutions/DigitalExperinceSolutions";
import EnterpriseModernization from "./pages/solutions/EnterpriseModernization";
import CloudTransformation from "./pages/solutions/CloudTransformation";
import EnterpriseAutomation from "./pages/solutions/EnterpriseAutomation";
import ConnectedEnterprise from "./pages/solutions/ConnectedEnterprise";
import PlatformEngineering from "./pages/solutions/PlatformEngineering";
import EnterpriseAgility from "./pages/solutions/EnterpriseAgility";
import InternetOfThings from "./pages/solutions/InternetOfThings";
import SurveillanceSolutions from "./pages/solutions/SurveillanceSolutions";
import Services from "./pages/services/Services";
import ItServicesForSmallBusiness from "./pages/services/ItServicesForSmallBusiness";
import ManagedServices from "./pages/services/ManagedServices";
import DataCentreServices from "./pages/services/DataCentreServices";
import RemoteInfrastructureManagement from "./pages/services/RemoteInfrastructureManagment";
import MultibrandAmcFmcServices from "./pages/services/MultibrandAmcFmcServices";
import TechnologyStaffAugmentation from "./pages/services/TechnologyStaffAugmentation";

function ScrollToTop() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  const loadElementorAndThemeStyles = () => {
    const styles = [
      "https://ziongroup.com/wp-content/plugins/elementor/assets/css/frontend.min.css",
    ];
    styles.forEach((href) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    });
  };

  useEffect(() => {
    loadElementorAndThemeStyles();
  }, []);
  
  return (
    <Router>
      <div className="App">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route
            path="/infrastructure-solutions"
            element={<InfrastructureSolutions />}
          />
          <Route path="/digital-workspace" element={<DigitalWorkspace />} />
          <Route path="/data-centre" element={<DataCentre />} />
          <Route path="/network" element={<Network />} />
          <Route path="/mobility" element={<Mobility />} />
          <Route path="/security-solutions" element={<SecuritySolutions />} />
          <Route path="/security-audit" element={<SecurityAudit />} />
          <Route
            path="/infrastructure-security"
            element={<InfrastructureSecurity />}
          />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route
            path="/detection-and-prevention"
            element={<DetectionAndPrevention />}
          />
          <Route path="/vapt" element={<Vapt />} />
          <Route path="/siem" element={<Siem />} />
          <Route path="/cloud-solutions" element={<CloudSolutions />} />
          <Route
            path="/cloud-consulting-services"
            element={<CloudConsultingServices />}
          />
          <Route
            path="/migration-and-deployment"
            element={<MigrationAndDeployment />}
          />
          <Route
            path="/cloud-managed-services"
            element={<CloudManagedServices />}
          />
          <Route
            path="/cloud-security-solutions"
            element={<CloudSecuritySolutions />}
          />
          <Route
            path="/digital-experience-solutions"
            element={<DigitalExperinceSolutions />}
          />
          <Route
            path="/enterprise-modernization"
            element={<EnterpriseModernization />}
          />
          <Route
            path="/cloud-transformation"
            element={<CloudTransformation />}
          />
          <Route
            path="/enterprise-automation"
            element={<EnterpriseAutomation />}
          />
          <Route
            path="/connected-enterprise"
            element={<ConnectedEnterprise />}
          />
          <Route
            path="/platform-engineering"
            element={<PlatformEngineering />}
          />
          <Route path="/enterprise-agility" element={<EnterpriseAgility />} />
          <Route path="/internet-of-things" element={<InternetOfThings />} />
          <Route
            path="/surveillance-solutions"
            element={<SurveillanceSolutions />}
          />
          <Route path="services1" element={<Services />} />
          <Route
            path="/it-services-for-small-business"
            element={<ItServicesForSmallBusiness />}
          />
          <Route path="/managed-services" element={<ManagedServices />} />
          <Route
            path="/data-centre-services"
            element={<DataCentreServices />}
          />
          <Route
            path="/remote-infrastructure-management"
            element={<RemoteInfrastructureManagement />}
          />
          <Route
            path="/multi-brand-amc-fms-services"
            element={<MultibrandAmcFmcServices />}
          />
          <Route
            path="/technology-staff-augmentation"
            element={<TechnologyStaffAugmentation />}
          />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
