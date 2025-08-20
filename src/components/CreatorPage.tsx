import React from 'react'
import SurveyCreatorRenderComponent from '../components/CreatorPage2';

export const CreatorPage = () => {
  return (
    <>
      <div
        className="container"
        style={{
          display: "grid",
          placeItems: "center",   // shorthand for alignItems + justifyContent
          height: "100vh",
          width: "100%"
        }}
      >
        <div style={{ width: "100%", height: "100%" }}>
          <h2>Survey Builder</h2>
          <SurveyCreatorRenderComponent />
        </div>
      </div>

    </>
  )
}

