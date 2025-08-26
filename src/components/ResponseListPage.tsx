import axios from "axios";
import { useEffect, useState } from "react";
import { SurveyComponentWithResponse } from "./SurveyComponentWithResponse";
import "../assets/ResponseListPage.css"

interface ChecklistStructure {
    id: number,
    checkListStructureJson: string
}

interface ChecklistResponse {
    checkListId: number,
    id: number,
    response: Object
    userId: number
}

interface FinalObject {
    id: number,
    structure: string,
    response: string,
    checklistID: number,
    userId: number
}

const userId = 8;

export const ResponseListPage = () => {

    const [finalResponses, setFinalResponses] = useState<FinalObject[]>([]);

    useEffect(() => {
        try {
            const fetchData = async () => {
                const apiStrutureList = await axios.get(`http://192.168.1.192:8080/checklist/user/${userId}`);
                const strutureList = apiStrutureList.data;

                const structureMap = new Map<number, string>(); 

                strutureList.forEach((ele: ChecklistStructure) => {
                    structureMap.set(ele.id, ele.checkListStructureJson);
                });


                console.log("structureMap");
                console.log(structureMap);


                const res = await axios.get(`http://192.168.1.192:8080/response/user/${userId}`);
                const responseList = res.data;

                /*Merge 2 arraya objects */
                const arrRes = responseList.map((obj: ChecklistResponse) => ({
                    id: obj.id,
                    response: obj.response,
                    checklistID: obj.checkListId,
                    userId: obj.userId,
                    structure: structureMap.get(obj.checkListId) || null,
                }))

                setFinalResponses(arrRes);

                console.log("FinalList");
                console.log(arrRes);

            }
            fetchData();

        } catch (error) {
            console.error(error);
        }
    }, []);
    return (
        <div>
            <div className="res">Responses </div>
            <div className="container">
                {
                    finalResponses && finalResponses.length > 0 && finalResponses.map((val, index) => (
                        <div>
                            <div className="res">Checklist : {index}</div>
                            <SurveyComponentWithResponse data={val} key={index} />
                        </div>))
                }
            </div>
        </div>
    )
}
