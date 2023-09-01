import React from 'react'
import  '../App.css'
import Header from '../components/Header'
import Banner from '../components/Banner'
import AboutUs_Intro from '../components/AboutUs_Intro'
import AboutUs_Intro2 from '../components/AboutUs_Intro2'
import Objectives from '../components/Objectives'
import Footer from '../components/Footer'
import Bottom from '../components/Bottom'
import { Col, Container, Row } from 'react-bootstrap'
import Policies from '../components/Services'
import Experience from '../components/Experience'
import Partners from '../components/Partners'
import AboutUs_banner from '../AboutUs_banner.png'
import AboutUs_bannerMobile from '../AboutUs_bannerMobile.png'

const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
};

const MobileComponent = () => <img src={AboutUs_bannerMobile} style={{width:'100%', height:450, marginTop:-120}}/>;
const DesktopComponent = () => <img src={AboutUs_banner} style={{width:'100%', marginTop:-120, }} />;

const MyComponent = () => {
  const { width } = useViewport();
  const breakpoint = 620;

  return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

export default function AboutUs_pages() {
  return (
    <ViewportProvider>
      <MyComponent />
    </ViewportProvider>
  );
}