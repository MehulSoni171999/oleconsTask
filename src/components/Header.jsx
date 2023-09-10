import React from 'react'
import { useTranslation } from 'react-i18next';

const Header = () => {
    const [t ,i18n]=useTranslation("global");

const handelChangeLanguage =(lang)=>{
    i18n.changeLanguage(lang);

};

  return (
    <div>
        {/* <h1>{t("header.message")}</h1> */}
       
{/*        
        <button onClick={()=> handelChangeLanguage("en")}> English</button>
        <button onClick={()=> handelChangeLanguage("hn")}> Hindi</button> */}

    </div>
  )
}

export default Header