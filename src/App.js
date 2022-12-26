import './App.css';

import { isMobile } from 'react-device-detect';
import { DesktopApp } from './Components/DesktopComponents/DesktopApp';
import { MobileApp } from './Components/MobileComponents/MobileApp';

function SelectDeviceComponent() {
  if (isMobile) {
    return <MobileApp />;
  }
  return <DesktopApp />;
}

function App() {
  return (<SelectDeviceComponent />);
}

export default App;