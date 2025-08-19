import { useEffect, useState } from "react";
import { type ICreatorOptions } from "survey-creator-core";
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/survey-core.css";
import "survey-creator-core/survey-creator-core.css";
import { customTheme } from "../assets/theme";

const defaultCreatorOptions: ICreatorOptions = {
  autoSaveEnabled: true
};

const defaultJson = {
  pages: [
    {
      name: "Name",
      elements: [
        { name: "FirstName", title: "Enter your first name:", type: "text" },
        { name: "LastName", title: "Enter your last name:", type: "text" }
      ]
    }
  ]
};

const CreatorPage = (props: any) => {
  const [creator, setCreator] = useState<SurveyCreator>();

  useEffect(() => {
    if (!creator) {
      // Apply theme globally
      

      const c = new SurveyCreator(props.options || defaultCreatorOptions);

      c.theme = customTheme;
      c.applyCreatorTheme(customTheme);

      // Save handler
      c.saveSurveyFunc = (saveNo: any, callback: (no: any, ok: boolean) => void) => {
        window.localStorage.setItem("survey-json", c.text);
        callback(saveNo, true);
      };

      // Load survey JSON (fix fallback logic)
      c.text =
        (props.json && JSON.stringify(props.json)) ||
        window.localStorage.getItem("survey-json") ||
        JSON.stringify(defaultJson);

      // Enable theme tab and assign theme
      c.showThemeTab = true;

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
