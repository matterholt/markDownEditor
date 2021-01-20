const Button = ({ isDisabled = false, action, title, name }) => (
  <button disabled={isDisabled} onClick={action} name={name}>
    {title}
    <style jsx>{`
      button {
        background-color: white;
        font-size: 1.2rem;
        border-radius: 5px;
        margin: 5px;
        padding: 5px;
        border: none;
        width: 55px;
      }
      button:hover {
        background-color: #b9caca;
      }
      button:active {
        color: gray;
        background-color: white;
      }
    `}</style>
  </button>
);
;

export {Button}