const DocSheet = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {z
        background-color: #eaeaea;
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