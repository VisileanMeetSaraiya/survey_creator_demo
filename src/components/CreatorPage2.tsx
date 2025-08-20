import { useEffect } from "react";
import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";
import "survey-core/survey-core.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import SurveyCreatorTheme from "survey-creator-core/themes";
import { registerCreatorTheme } from "survey-creator-core";
import { modifiedTheme } from "../assets/theme2";
// import "../assets/demo2.css";
// import "../assets/ModifiedCSS.css"
import "../assets/creator.css";
import axios from "axios";

registerCreatorTheme(SurveyCreatorTheme); // Add predefined Survey 

const createFunction = async (json: any): Promise<void> => {
    await axios.post("http://localhost:8080/checklist/withuser", {
        "userId": 7,
        "structure": json,
    });
};

function SurveyCreatorRenderComponent() {
    const creator = new SurveyCreator({
        showLogicTab: true,
        isAutoSave: false,
        showJSONEditorTab: false,
    });
    const localStorageKey = "userSurveyCreatorTheme";
    const savedTheme = localStorage.getItem(localStorageKey);

    creator.applyCreatorTheme(modifiedTheme ? modifiedTheme : SurveyCreatorTheme.DefaultDark);
    creator.showSaveButton = true;

    // creator.sa
    creator.saveSurveyFunc = async (
        saveNo: number,
        callback: (saveNo: number, success: boolean) => void
    ): Promise<void> => {
        try {
            await createFunction(creator.JSON);
            callback(saveNo, true);
        } catch (error) {
            console.error("Save failed:", error);
            callback(saveNo, false);
        }
    };

    return (<SurveyCreatorComponent creator={creator} />);
}

export default SurveyCreatorRenderComponent;