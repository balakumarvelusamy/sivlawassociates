import React from "react";
import SectionTitle from "../Title";
import "./style.scss";

const ServiceArea = ({ className, title, subTitle, services }) => {
  return (
    <div className={className}>
      <div className="container searviceareacontent">
        <div className="row">
          <div className="col-12">
            <SectionTitle title={title} subTitle={subTitle} />
          </div>
          {services.map((service, index) => (
            <div key={index} className="col-md-3 servicesection">
              <div className="serviceWrap">
                <a href={service.url}>
                  <div className="serviceIcon">
                    <i className={`fi ${service.icon}`}></i>
                  </div>
                  <div className="serviceContent">
                    <a href={service.url}>
                      <h3>{service.title}</h3>
                    </a>
                    <p>{service.content}</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ServiceArea;
