import LinkButton from "./LinkButton";

const Header = () => {
  return (
    <header>
      <LinkButton linkName="Home" linkPath="/" />
      <h1>Getting the Mark on</h1>
      <style jsx>{`
        header {
          display: flex;
          align-items: center;
          font-size: 10px;
          justify-content: space-between;
          padding: 0 15px;
          color: #4a7677;
        }
      `}</style>
    </header>
  );
};

export default Header;
