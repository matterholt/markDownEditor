import Header from "./Header"

const lightTheme = {
  backgroundColor: "#e4e4e5",
  color: "#25292c",
};
const darkTheme = {
  backgroundColor: "#25292c",
  color: '#e4e4e5',
};


const Layout = ({ children }) => (
  <div>
    <Header />

    {children}
    <style global jsx>{`
      html,
      body {
        padding: 0;
        margin: 0 25px;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 62.5%;
        color: "#25292c",
        background-color: #e4e4e5;
      }
    `}</style>
  </div>
);


export default Layout