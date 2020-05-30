import React, { useState } from 'react'
import './style.scss'
import { fetchService } from "../Services/Globalfunction";
import config from "../../config.json"
const NewsLetter = ({ className }) => {
    const [email, setEmail] = useState('')
   
    const submitHandler = async event =>{
        event.preventDefault()
        console.log('email =',email)

        const msg = {
            to: config.owneremail,
            from: config.fromemail,
            fromname:"Siva Law Associates",
            toname: "Siva Law Associates",
            subject: "Newsletter subscription - "+email,
            body:   'Subscription Email : '+ email ,
            bodyhtml:
            '<p> Subscription Email : '+ email + '</p><br/>'
           
          };
        const response = await fetchService(
            "Email",
            "SendEmail",
            "POST",
            msg
          );
          if (response===200){
        
          console.log("success");
  
          }
    }
    return (
        <div className={className}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="newsletterWrap">
                            <h3>Subscribe  Newsletter</h3>
                            <form onSubmit={submitHandler} className="newsletterForm">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    className="form-control"
                                    placeholder="Email Address" />
                                <button type="submit">subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewsLetter