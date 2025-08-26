// components/Survey.tsx
import axios from 'axios';
import { Model } from 'survey-core';
import { Survey } from "survey-react-ui";
import 'survey-core/survey-core.css';
import "../assets/SurveyComponentCSS.css"
import { surveyComponentTheme } from '../assets/SurveyComponentTheme';


const userId = 8;

export const SurveyComponent = (props: any) => {

    const checkListId = (props.checkListId ?? -1);
    const survey = new Model(props.surveyJson);

    survey.applyTheme(surveyComponentTheme);

    survey.onComplete.add((sender) => {
        if (checkListId !== -1) {
            const postResponse = async () => {
                const response = await axios.post("http://192.168.1.192:8080/response", {
                    "response": sender.data,
                    "userId": userId,
                    "checkListId": checkListId
                });
                console.log(response.data);

            }

            postResponse();
        } else {
            console.log("failed !!!!!!!!!!!!!!!!");

        }


    });

    return <Survey model={survey} />;
}
/*



*/