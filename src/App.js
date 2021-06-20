import './App.css';
import { useTranslation } from "react-i18next";
function App() {
  //Calling t and i18n method from useTranslation hook 
  const { t, i18n } = useTranslation();

  //Creating a method to change the language onChnage from select box
  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue);
  }
  return (
    <div className="App">
      {/* Select box to change language */}
      <select className="custom-select" style={{width: 200}} onChange={changeLanguageHandler}>
        <option value="en" >English</option>
        <option value="hn" >Hindi</option>
      </select>
      {/* call name of the variable from  the translation.json file to t() method */}
      <h1>{t('manish')}</h1> 
    </div>
  );
}

export default App;
