const Footer = () => {
  return (
    <div
      className="text-white container-fluid d-flex flex-column justify-content-center align-items-center border-top border-white py-4"
      style={{ backgroundColor: "#1A1919" }}
    >
      <div className="container  align-items-start">
        <div className="row">
          <div className=" align-items-center col-lg-4">
            <h5 className="text-center">Zion Computers Private Limited</h5>
            <div className="pt-4 d-flex justify-content-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14017.371630901609!2d77.227314!3d28.559464000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2463eaaaaab%3A0x899f56cbccf20999!2sZion%20Computers%20Private%20Limited!5e0!3m2!1sen!2sin!4v1728296792432!5m2!1sen!2sin"
                width="auto"
                height="200"
                title="Directions to Zion Computers Pvt Ltd"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className=" text-left col-lg-4">
            <h5 className="text-left ps-4">Head Office</h5>
            <div className="px-4 pt-4">
              <p>Zion Computers Private Limited</p>
              <p>
                B-19, Sanwal Nagar, Sadiq Nagar Market,
                <br />
                New Delhi – 110 049.
                <br />
                Phone :011-26250102 Email : info@ziongroup.com
              </p>
            </div>
          </div>
          <div className=" text-left col-lg-4">
            <h5 className="text-left ps-4">Branch Offices</h5>
            <ul style={{ fontSize: "14px", marginBottom: '0' }} className="pt-4">
              <li className="pt-2">
                <strong>Bengaluru</strong> : First Floor, Building #1, 1st
                Cross, 18th Main, Maranahalli Tank Bed, 4th T Block, Jayanagar,
                Bangalore-560 041
              </li>
              <li className="pt-2">
                <strong>Cochin</strong> : Third Floor, Pegees Mall, Pallimukku
                Jn., M G Road, Cochin, Kerala – 682 016.
              </li>
              <li className="pt-2">
                <strong>Mumbai</strong> : 111 A, C- Wing, Kailas Industrial
                Complex Vikhroli Hiranandani Link Road, Vikhroli (W), Mumbai –
                400 079.
              </li>
              <li className="pt-2 pb-4">
                <strong>Chennai</strong> : 201, 2nd Floor, R. A. Complex, 41,
                Meeran Sahib Street. Mount Road, Chennai – 600 002.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container border-top border-white d-flex justify-content-center">
        <span className="py-3">
          Copyright © 2024 | Zion Computers Pvt Ltd. All Rights Reserved. |
          <strong> Privacy Policy</strong>
        </span>
      </div>
    </div>
  );
}
export default Footer;
