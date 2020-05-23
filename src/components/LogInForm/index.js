import React, { Component } from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import "./style.scss";
import { CognitoUserPool } from 'amazon-cognito-identity-js';
class LogInForm extends Component {
  state = {
    email: "",
    password: "",
    error: {},
    message:""
  };

  schema = {
    email: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required()
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.type) {
            case "string.email":
              err.message = "email mast be A Valid Email";
              break;
            default:
              err.message = "email can not be empity";
              break;
          }
        });
        return errors;
      }),
    password: Joi.string()
      .required()
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.type) {
            default:
              err.message = "password can not be Empity";
              break;
          }
        });
        return errors;
      }),
    password: Joi.string(),
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
    
      email: this.state.email,
      password: this.state.password,
    
    };
    const { error } = Joi.validate(form, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  submitHandler = async (event) => {
    event.preventDefault();
    //const config = require("./config");
    const error = this.validate();
    if (error) {
      this.setState({
        error: error || {},
      });
    } else {
    
     
    const poolData = {
    UserPoolId:"us-east-1_7xGwhWeRm",
    ClientId:"7r653tj5j2qb7evejpdle8jbbd"
    };

    const { email, password } = this.state;
    const UserPool = new CognitoUserPool(poolData);
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {console.error(err);
      console.log(data);
      console.log(err);  
      this.setState.message="err.message"
    }
    });}
  
  };

  render() {
    const msg=this.state.message;
    return (
      <form onSubmit={this.submitHandler} className="contactForm">
        <div className="row">

          <div className="col-sm-6 col-12">
            {msg}
            <div className="formInput">
              <input
                placeholder="Email"
                value={this.state.email}
                name="email"
                onChange={this.changeHandler}
                className="form-control"
                type="email"
              />
              {this.state.error.email && <p>{this.state.error.email}</p>}
            </div>
          </div>
          <div className="col-sm-6 col-12">
            <div className="formInput">
              <div className="formInput">
                <input
                  placeholder="Password"
                  value={this.state.password}
                  name="password"
                  onChange={this.changeHandler}
                  className="form-control"
                  type="password"
                />
                {this.state.error.password && (
                  <p>{this.state.error.password}</p>
                )}
              </div>
            </div>
          </div>
          <div className="col-6">
            <button type="submit">Log in</button>
            
          </div>
          <div className="col-6">
          <button type="submit">Register</button>
          
            
          </div>
        </div>
      </form>
    );
  }
}
export default LogInForm;
