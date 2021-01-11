function UpdateLine({ content, setIsEditable }) {
  return (
    <div>
      <button onClick={() => setIsEditable(false)}>Close</button>
      <h1>find it</h1>
      {JSON.stringify(content)}
      <style jsx>{`
        div {
          position: absolute;
          z-index: 100;
          background-color: gray;
          border: 1px solid black;
          color: white;
          bottom: 10px;
          width: 50%;
          height: 100px;
        }
      `}</style>
    </div>
  );
}
export default UpdateLine;


/*
{
  const isEditable = true;
  isEditable ? <UpdateLine content={mdUserLine} /> : null;
}
 */