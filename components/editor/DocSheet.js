const DocSheet = ({ children }) => (
  <div>
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
      }
    `}</style>
  </div>
);
export default DocSheet