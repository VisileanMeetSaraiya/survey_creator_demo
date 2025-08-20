import { useEffect } from "react";
import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";
import "survey-core/survey-core.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import SurveyCreatorTheme from "survey-creator-core/themes";
import { registerCreatorTheme } from "survey-creator-core";
import { modifiedTheme } from "../assets/theme2";
import "../assets/demo2.css";
// import "../assets/ModifiedCSS.css"

registerCreatorTheme(SurveyCreatorTheme); // Add predefined Survey 

function SurveyCreatorRenderComponent() {
    const creator = new SurveyCreator();
    const localStorageKey = "userSurveyCreatorTheme";
    const savedTheme = localStorage.getItem(localStorageKey);

    creator.applyCreatorTheme(modifiedTheme ? modifiedTheme : SurveyCreatorTheme.DefaultDark);
    creator.showSaveButton = true;


    useEffect(()=>{
        console.log("saved theme " +JSON.stringify(savedTheme));
        
    },[savedTheme]);
    // creator.openCreatorThemeSettings();
    return (<SurveyCreatorComponent creator={creator} />);
}

export default SurveyCreatorRenderComponent;