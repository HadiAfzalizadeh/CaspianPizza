import './App.css';

import { isMobile } from 'react-device-detect';
import  DesktopApp  from './Components/DesktopComponents/DesktopApp';
import { MobileApp } from './Components/MobileComponents/MobileApp';
import { v4 as uuidv4 } from 'uuid';



function SelectDeviceComponent() {

  if (isMobile) {
    return <MobileApp />;
  }
  return <DesktopApp />;
}

function App() {
  console.log(uuidv4());
  return (<SelectDeviceComponent />);
}

export default App;