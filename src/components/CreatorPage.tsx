import SurveyCreatorRenderComponent from '../components/CreatorPage2';
// import "../App.css";
import "../index.css";
export const CreatorPage = () => {
  return (
    <>
      <div
        className="container"
        style={{
          display: "grid",
          placeItems: "center",   
          height: "100vh",
          width: "100%"
        }}
      >
        <div style={{ width: "100%", height: "100%" }}>
          <SurveyCreatorRenderComponent />
        </div>
      </div>

    </>
  )
}

