import UpdateLineModal from "../general/UpdateLineModal";



const DocSheet = ({ children, isEditable, lineEdit, setIsEditable }) => {
  return (
    <div>
      {isEditable ? <UpdateLineModal content={lineEdit} setIsEditable={setIsEditable}/> : null}
      {children}
      <style jsx>{`
        div {
          background-color: #f7f7f7;
          max-width: 75vw;
          min-width: 50%;
          min-height: 100vh;
          padding: 5px;
          margin: 2px;
          border-radius: 10px;
          font-size: 2em;
        }
      `}</style>
    </div>
  );
};

export default DocSheet