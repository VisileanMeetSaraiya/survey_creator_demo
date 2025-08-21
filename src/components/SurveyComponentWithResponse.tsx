import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "../assets/SurveyComponentCSS.css"
import { surveyComponentTheme } from "../assets/SurveyComponentTheme";


export const SurveyComponentWithResponse = (props: any) => {
    
    const { structure, response} = props.data;

    const survey = new Model(structure);
    survey.data = response;
    survey.showCompleteButton = false;
    survey.applyTheme(surveyComponentTheme);

    return (
        <Survey model={survey} />
    );
}
