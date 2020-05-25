import React from 'react'
import avatarImg from '../../images/practice/4.jpg'

import './style.scss'


const SingleContentArea = ({ className, avatar, image }) => {
    return (
        <div className={className}>
           
            <div className="singleContentWrap">
            <div className='inner-container'>
            <h1>Environmental Law</h1>
            <p>Our law firm provides advice on environmental laws, rules and regulations, governmental incentives available to further environmental interests, including tax credits, grants and land use provisions. O
                Our law firm advises its clients on regulatory compliances related to environment protection laws.</p>
            </div>


            </div>
        </div>
    )
}
export default SingleContentArea