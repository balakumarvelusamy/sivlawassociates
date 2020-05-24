import React from 'react'
import avatarImg from '../../images/practice/4.jpg'

import './style.scss'

const listItem = [
    'The master-builder of human happiness.',
    'Occasionally circumstances occur in which toil and pain',
    'Avoids pleasure itself, because it is pleasure',
    'who do not know how to pursue pleasure',
    'To take a trivial example, which of us ever undertakes',
]
const SingleContentArea = ({ className, avatar, image }) => {
    return (
        <div className={className}>
           
            <div className="singleContentWrap">
                <h3>Labour Law</h3>
                <h5>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born</h5>
                <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of
                     human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because 
                    those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone 
                    who loves or pursues or desires to obtain pain of itself,</p>
                <p>because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. 
                    To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?</p>
               
            </div>
        </div>
    )
}
export default SingleContentArea