import React from 'react'
import { useTranslation } from 'react-i18next';

const Layout = () =>  {
    const [t ,i18n]=useTranslation("global");

const handelChangeLanguage =(lang)=>{
    i18n.changeLanguage(lang);

};

const english = (e)=>{
    handelChangeLanguage("en")
}

  return (
    <>
    
    <h1>{t("header.message")}</h1>
       
    
       <div style={{display:"flex" ,flexDirection:"column", justifyContent:"space-between"}} >
 <button onClick={()=> handelChangeLanguage("en") }> English</button>
        <button onClick={()=> handelChangeLanguage("hn")}> Hindi</button>
        <button onClick={()=> handelChangeLanguage("mh")}> mrathi</button>
       </div>
       


    </>
        
   
  )
}

export default Layout