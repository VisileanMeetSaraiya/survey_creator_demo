import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { SurveyComponent } from './SurveyComponent';
// import "../App.css"
const userId = 7;
export const FormPage = () => {
    const [structureList, setStructureList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const structureResponse = await axios.get(`http://localhost:8080/checklist/user/${userId}`);

            const res = structureResponse.data;
            setStructureList(res);
        }
        fetchData();
    }, []);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center", // center horizontally
                alignItems: "flex-start",
                minHeight: "100vh",
                boxSizing: "border-box",
            }}
        >
            {structureList && structureList.length > 0 ? (
                structureList.map((singleStructure: any, index: number) => (
                    <div
                        key={index}
                        style={{
                            flex: 1,
                            width: "100%",
                            maxWidth: "900px",   // cap on big screens
                            minWidth: "300px",   // safe on mobiles
                        }}
                    >
                        <SurveyComponent
                            surveyJson={singleStructure.checkListStructureJson}
                            checkListId={singleStructure.id}
                            style={{ width: "100%" }}
                        />
                    </div>

                ))
            ) : (
                "ERROR"
            )}
        </div>
    );


}
