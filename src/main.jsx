import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import  global_en from "./translation/en/global.json";
import global_hn from "./translation/hn/global.json";
import global_mh from "./translation/mh/global.json";
import i18next  from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation:{escapeValue:false},
  lng:"en",
  resources:{
    en:{
      global: global_en
    },
    hn:{
      global: global_hn
    },
    mh:{
      global: global_mh
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
<App />
    </I18nextProvider>
    
  </React.StrictMode>,
)
