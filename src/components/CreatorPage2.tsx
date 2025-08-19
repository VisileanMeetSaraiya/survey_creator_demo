import React, { useEffect } from "react";
import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";
import { ComputedUpdater, Action } from "survey-core";
import "survey-core/survey-core.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import SurveyCreatorTheme from "survey-creator-core/themes";
import { registerCreatorTheme } from "survey-creator-core";
import { customTheme } from "../assets/theme";
import { modifiedTheme } from "../assets/theme2";
import { BorderlessDark } from "survey-core/themes";
import "../assets/demo2.css";
import { NthemeTheme } from "../assets/Ntheme";

registerCreatorTheme(SurveyCreatorTheme); // Add predefined Survey 

function SurveyCreatorRenderComponent() {
    const creator = new SurveyCreator();
    const localStorageKey = "userSurveyCreatorTheme";
    const savedTheme = localStorage.getItem(localStorageKey);

    creator.applyCreatorTheme(modifiedTheme ? modifiedTheme : SurveyCreatorTheme.DefaultDark);

    // creator.applyCreatorTheme(NthemeTheme ? NthemeTheme : SurveyCreatorTheme.DefaultDark)

    // creator.applyCreatorTheme(BorderlessDark);
    // creator.theme = BorderlessDark;

    // const saveTheme = () => {
    //     const themeStr = JSON.stringify(creator.creatorTheme);
    //     localStorage.setItem(localStorageKey, themeStr);
    // };
    
    // const saveThemeAction = new Action({
    //     id: "svd-save-theme-settings",
    //     iconName: "icon-save-24x24",
    //     iconSize: "auto",
    //     tooltip: "Persist the UI theme",
    //     visible: new ComputedUpdater(() => {
    //         return creator.activeTab === "designer" && creator.propertyGridNavigationMode === "buttons" && creator.showCreatorThemeSettings;
    //     }),
    //     enabled: true,
    //     action: saveTheme
    // });
    
    // const resetTheme = () => {
    //     window.localStorage.setItem(localStorageKey, "");
    //     location.reload();
    // };
    
    // const resetThemeAction = new Action({
    //     id: "svd-reset-theme",
    //     iconName: "icon-restore-24x24",
    //     iconSize: "auto",
    //     tooltip: "Reset the UI theme",
    //     visible: new ComputedUpdater(() => {
    //         return creator.activeTab === "designer" && creator.propertyGridNavigationMode === "buttons" && creator.showCreatorThemeSettings;
    //     }),
    //     enabled: true,
    //     action: resetTheme
    // });
    
    // creator.toolbar.actions.push(resetThemeAction);
    
    // creator.toolbar.actions.push(saveThemeAction);


    useEffect(()=>{
        console.log("saved theme " +JSON.stringify(savedTheme));
        
    },[savedTheme]);
    // creator.openCreatorThemeSettings();
    return (<SurveyCreatorComponent creator={creator} />);
}

export default SurveyCreatorRenderComponent;