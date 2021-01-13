
const DocSheet = ({ children }) => {
  const [fontSize, setFontSize] = useState(10)
  
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
          font-size: ${fontSize}px;
        }
      `}</style>
    </div>
  );
};

export default DocSheet