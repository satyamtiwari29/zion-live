import 'bootstrap/dist/css/bootstrap.min.css';

const AboutCard = ({ Image, title, subTitle, reverse }) => {
  return (
    <div className="container my-4">
      <div className={`row align-items-center ${reverse ? 'flex-row-reverse' : ''}`}>
        <div className="col-md-6 col-lg-6">
          <img 
            src={Image} 
            alt="Clock" 
            className="img-fluid rounded mb-3" 
            // style={{ width: '612px', height: '339px' }} 
          />
        </div>
        <div className="col-md-6 col-lg-6 d-flex justify-content-center align-items-center px-4 px-md-5">
          <div className="text-left">
            <h2>{title}</h2>
            <p>{subTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
