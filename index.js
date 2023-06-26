const element = (
  // Write your code here.
  <div className="congrats-card-container">
    <h1 className="heading">Congratulations</h1>
    <div className="card">
      <img
        src="https://drive.google.com/file/d/1vjujHQTXEU-DcpZAI2awAMhkSOPKPdVW/view?usp=drive_link"
        className="profile-image"
      />
      <h1 className="card-title">Ashok M</h1>
      <p className="card-description">
        Newton's Institute Of Science And Technology, Macherla
      </p>
      <img
        src="https://drive.google.com/file/d/1vjujHQTXEU-DcpZAI2awAMhkSOPKPdVW/view?usp=drive_link"
        className="watch-image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
