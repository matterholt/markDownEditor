import Link from "next/link";
// add a prop that would as if large or small?
const LinkButton = (props) => {
  return (
    <>
      <Link href={props.linkPath}>
        <a className="landing__editorLink">{props.linkName}</a>
      </Link>
      <style jsx>{`
        .landing__editorLink {
          color: #4a7677;
          font-size: 2.5rem;
          text-align: center;
          text-decoration: none;
        }
      `}</style>
    </>
  );
};

export default LinkButton;
