function UpdateLine({ content }) {
  return (
    <div>
      <h1>find it</h1>
      {JSON.stringify(content)}
      <style jsx>{`
        position: absolute;
        background-color: black;
        color: white;
        top: 0;
        width: 50%;
        height: 150px;
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