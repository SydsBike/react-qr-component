// App Component

const assetObject = {
  qrCode: "./images/image-qr-code.png",
};

function App() {
  return (
    <>
      <article className="card">
        <div className="wrapper">
          <img src={assetObject.qrCode} alt="" className="image"/>
          <div className="card-text">
            <h1>Improve your front-end skills by building projects</h1>
            <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
          </div>
        </div>
      </article>
    </>
  );
}

// Render the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
