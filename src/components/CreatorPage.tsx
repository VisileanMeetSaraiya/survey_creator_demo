import { useEffect, useState } from "react";
import { type ICreatorOptions } from "survey-creator-core";
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/survey-core.css";
import "survey-creator-core/survey-creator-core.css";
import { customTheme } from "../assets/theme";
import "../assets/demo.css"

const defaultCreatorOptions: ICreatorOptions = {
    autoSaveEnabled: true
};

const defaultJson = {
    pages: [{
        name: "Name",
        elements: [
            { name: "FirstName", title: "Enter your first name:", type: "text" },
            { name: "LastName", title: "Enter your last name:", type: "text" }
        ]
    }]
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CreatorPage = (props: any) => {
    const [creator, setCreator] = useState<SurveyCreator>();

    useEffect(() => {
        if (!creator) {
            const c = new SurveyCreator(props.options || defaultCreatorOptions);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            c.saveSurveyFunc = (saveNo: any, callback: (arg0: any, arg1: boolean) => void) => {
                window.localStorage.setItem("survey-json", c.text);
                callback(saveNo, true);
            };
            c.text =
                JSON.stringify(props.json) ||
                window.localStorage.getItem("survey-json") ||
                JSON.stringify(defaultJson);

            // Apply custom theme
            // c.theme = customTheme; // ✅ preferred for custom ITheme
            setCreator(c);
        }
    }, [creator, props.options, props.json]);

    return (
        <div style={{ height: "100vh", width: "100%" }} className="container">
            {creator && <SurveyCreatorComponent creator={creator} />}
        </div>
    );
};

export default CreatorPage;
