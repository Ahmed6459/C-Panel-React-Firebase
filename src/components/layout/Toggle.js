import React from "react";
import Togglestyled from "./ToggleStyled"


const Toggle = ({ theme, toggleTheme })=>{
    const isLight = theme === 'light';

    return(
        <Togglestyled lightTheme={isLight} onClick={toggleTheme}>
      <img src="https://image.flaticon.com/icons/svg/1164/1164954.svg" width="224" height="224" alt="Sun free icon" title="Sun free icon"/>
      <img src="https://image.flaticon.com/icons/svg/2033/2033921.svg" width="224" height="224" alt="Moon free icon" title="Moon free icon"/>
        </Togglestyled>
    )

}


export default Toggle;