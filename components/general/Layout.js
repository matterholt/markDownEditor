
const MkLayout = (props) => {
  return (
    <div>
      {props.children}
      <style jsx>{`
        div {
          margin: 0;
          width: 50%;
          min-height: inherit;
        }
      `}</style>
    </div>
  );
};