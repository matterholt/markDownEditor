function Modal({ children, modalName, status }) {
  if (status === modalName) {
    return (
      <div className="modal">
        {children}
        <style jsx>{`
          .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: #808080ad;
            display: grid;
            place-items: center;
          }
        `}</style>
      </div>
    );
  } else {
    return null;
  }
}
export {Modal}