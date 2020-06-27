import React from "react";
import SectionTitle from "../Title";
import "./style.scss";

const DisclaimerContent = () => {
  return (
    <div >
     <h6><b>Disclaimer</b></h6>
      <p className="sm">
        As per the rules of the Bar Council of India, we are not permitted to
        solicit work or advertise for our services. The user acknowledges the
        following:
         There has been no advertisement, personal communication, solicitation,
          invitation or inducement of any kind whatsoever from us or any of our
          members to solicit any work through this website;
     
          The user wishes to gain more information about us for his/her own
          information and use
    
          The information about us is provided to the user only on his/her
          specific request and any information obtained or materials downloaded
          from this website is completely at the user’s volition and any
          transmission, receipt or use of this site would not create any
          lawyer-client relationship.
       </p>
       <p>
      <i>
        The information provided under this website is solely available at your
        request for informational purposes only, should not be interpreted as
        soliciting or advisement nor does such information constitute legal
        advice. We are not liable for any consequence of any action taken by the
        user relying on material/information provided on this website. In cases
        where the user has any legal issues, he/she in all cases must seek
        independent legal advice.
      </i></p>
    </div>
  );
};

export default DisclaimerContent;
