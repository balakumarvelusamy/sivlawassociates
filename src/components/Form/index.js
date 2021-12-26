import React, { Component } from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import "./style.scss";
import { sendMail } from "../Services/Globalfunction";
import config from "../../config.json";
class Form extends Component {
  state = {
    name: "",
    phone: "",
    email: "",

    description: "",
    error: {},
    loading: false,
    message: "",
  };

  schema = {
    email: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required()
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.type) {
            case "string.email":
              err.message = "email must be A Valid Email";
              break;
            default:
              err.message = "email can not be empity";
              break;
          }
        });
        return errors;
      }),
    phone: Joi.string()
      .required()
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.type) {
            default:
              err.message = "phone can not be Empty";
              break;
          }
        });
        return errors;
      }),
    name: Joi.string()
      .required()
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.type) {
            default:
              err.message = "name can not be Empty";
              break;
          }
        });
        return errors;
      }),
    description: Joi.string()
      .required()
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.type) {
            default:
              err.message = "description can not be Empty";
              break;
          }
        });
        return errors;
      }),
    address: Joi.string(),
  };
  changeHandler = (event) => {
    const error = { ...this.state.error };
    const errorMassage = this.validationProperty(event);
    if (errorMassage) {
      error[event.target.name] = errorMassage;
    } else {
      delete error[event.target.name];
    }
    this.setState({
      [event.target.name]: event.target.value,
      error,
    });
  };
  handleChange = (value) => {
    this.setState({
      country: value,
    });
  };
  validationProperty = (event) => {
    const Obj = { [event.target.name]: event.target.value };
    const schema = { [event.target.name]: this.schema[event.target.name] };
    const { error } = Joi.validate(Obj, schema);
    return error ? error.details[0].message : null;
  };

  validate = () => {
    const options = { abortEarly: false };
    const form = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      description: this.state.description,
    };
    const { error } = Joi.validate(form, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  submitHandler = async (event) => {
    event.preventDefault();

    const error = this.validate();
    if (error) {
      this.setState({
        error: error || {},
      });
    } else {
      this.setState({
        name: "",
        phone: "",
        email: "",
        description: "",
      });
      const msg = {
        subject: "Message from SivaLawAssociate Website - " + this.state.name,

        bodyhtml: "<p>Hello " + this.state.name + ",</p><p>Thanks for reaching us, we will get back to you shorlty.</p>" + "<br/><p>Regards,</p> <p><a href='https://www.sivalawassociates.in'>Siva Law Associate</a></p>" + "<table  style='border: 1px solid black'>" + "<tr  style='border: 1px solid black'><td> <i>Name:</i></td> <td> <i>" + this.state.name + "</i></td></tr>" + "<tr style='border: 1px solid black'><td><i>Email:</i></td><td> <i>" + this.state.email + "</i></td></tr>" + "<tr style='border: 1px solid black'><td><i>Phone:</i></td><td> <i>" + this.state.phone + "</i></td></tr>" + "<tr style='border: 1px solid black'><td><i>Message:</i></td><td> <i>" + this.state.description + "</i></td></tr> </table>",
      };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from: config.fromemail,
          to: this.state.email + "," + config.fromemail,
          subject: msg.subject + this.state.name,
          text: "",
          html: msg.bodyhtml,
        }),
      };
      console.log(requestOptions);
      try {
        fetch(config.email_service_url, requestOptions).then((response) => {
          console.log("output", response.json());
          this.setState({
            loading: false,
            message: "Message sucessfully Sent. Thanks for contacting us. We will get back to you soon.",
          });
          return response;
        });
      } catch (err) {
        return err;
      }
    }
  };

  render() {
    const msgg = this.state.message;
    return (
      <form onSubmit={this.submitHandler} className="contactForm">
        <div className="row">
          <div className="col-sm-6 col-12">
            <div className="formInput">
              Name
              <input placeholder="Your Name" value={this.state.name} name="name" onChange={this.changeHandler} className="form-control" type="text" />
              {this.state.error.name && <p>{this.state.error.name}</p>}
            </div>
          </div>
          <div className="col-sm-6 col-12">
            <div className="formInput">
              Phone number
              <input placeholder="Phone" value={this.state.phone} name="phone" onChange={this.changeHandler} className="form-control" type="phone" />
              {this.state.error.phone && <p>{this.state.error.phone}</p>}
            </div>
          </div>
          <div className="col-sm-6 col-12">
            <div className="formInput">
              Email
              <input placeholder="Email" value={this.state.email} name="email" onChange={this.changeHandler} className="form-control" type="email" />
              {this.state.error.email && <p>{this.state.error.email}</p>}
            </div>
          </div>

          <div className="col-12">
            <div className="formInput">
              Description
              <textarea className="form-control" value={this.state.description} onChange={this.changeHandler} placeholder="Description..." name="description" />
              {this.state.error.description && <p>{this.state.error.description}</p>}
            </div>
          </div>
          <div className="col-12">
            <button type="submit">{this.state.loading ? "Sending" : "Send"}</button>
            <p>{this.state.loading ? "" : msgg}</p>
          </div>
        </div>
      </form>
    );
  }
}
export default Form;
