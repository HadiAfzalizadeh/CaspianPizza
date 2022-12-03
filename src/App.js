import './App.css';
import { isMobile } from 'react-device-detect';
import { DesktopApp } from './DesktopComponents/DesktopApp';
import { MobileApp } from './MobileComponents/MobileApp';

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