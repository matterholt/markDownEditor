import {useCurrentDocState} from "../../context/DocPage-context"

const DocSheet = ({ children }) => {
  const {docState} = useCurrentDocState();
  
  return (
    <div className="docSheetStyle">
      {children}
      <style jsx>{`
        .docSheetStyle {
          background-color: #f7f7f7;
          max-width: 75vw;
          min-width: 50%;
          min-height: 100vh;
          padding: 15px;
          margin: 2px;
          border-radius: 10px;
          font-size: ${docState.fontSize}px;
        }
      `}</style>
    </div>
  );
};

export default DocSheet