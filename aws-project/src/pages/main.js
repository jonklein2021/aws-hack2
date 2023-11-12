import React, {useEffect, useState} from "react";

// Styles
import {
  MainContent,
  MainPageStyle,
  MainPageBody
} from './mainStyles';

// Components
import CO2Map from "../components/CO2Map/CO2Map";
import MainHeader from "../components/header/header";
import MainSideBar from "../components/sidebar/sidebar";
import DateDisplay from "../components/dateBlock/dateBlock";


//left side
import CO2Card from "../components/CO2card/co2Card";
import EnvironmentalCard from "../components/EnviroCard/EnvironmentalCard";
import InfoCard from "../components/InfoCard/InfoCard";

//right side
import FootPrintCard from "../components/eduCards/footprintCard/footprintCard";
import EcoProductCard from "../components/eduCards/ecoProductCard/ecoProductCard";

function MainPage() {
  //country handler
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [clickedCoords, setClickedCoords] = useState({ lat: null, lng: null });
  //alert(selectedCountry);

  const handleCountryClick = (countryData) => {
    setSelectedCountry(countryData.name);
    setClickedCoords({ lat: countryData.lat, lng: countryData.lng });
  };

  return (
    <MainPageStyle>
      <MainHeader />
      <MainPageBody>
        <MainSideBar>
          <DateDisplay />
          <InfoCard countryName={selectedCountry} location={clickedCoords} />
          <CO2Card/>
          <EnvironmentalCard/>
        </MainSideBar>

        <MainContent>
        <CO2Map onCountryClick={handleCountryClick} />
        </MainContent>

        <MainSideBar>
          <FootPrintCard></FootPrintCard>
          <EcoProductCard></EcoProductCard>
        </MainSideBar>
      </MainPageBody>
    </MainPageStyle>
  );
}

export default MainPage;