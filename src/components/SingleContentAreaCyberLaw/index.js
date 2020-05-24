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
            <div className="inner-container singleContentWrap">
                <h1>Cyber Law</h1>
                <p>The firm has expertise in complete range of matters related to Information Technology sector, including technology and strategic consulting services. We deal in software protection &amp; licencing, data protection, domain names dispute resolution, technology transfer and technical assistance agreements, credit card frauds etc. We advise our clients on cyber laws, Indian Information Technology laws, data protection, IP protection, e-commerce, etc. Data theft is one of the most common problems faced by the companies today. We advise our clients on, protection against data theft and the best possible method, to resolve it. Our lawyers are well versed with the cyber laws, information technology laws, and data protection laws in India. We deal in software licencing, development and support and website development agreements. We assist our clients in drafting agreements such as shrink wrap agreements, click wrap agreements software licence and maintenance agreements, hardware maintenance and system supply agreements, access and beta test agreements, service provide agreements, interconnect agreements, broadcasting, satellite and digital terrestrial agreements, Conditional Access Systems (CAS) agreements, server co-location space agreements and other related commercial agreements. We also assist the IT companies in protecting their intellectual property and information technology-related compliance and taxation issues. We represent our clients in the tribunals, High Courts and the Supreme Court in matters of infringement of intellectual property rights and disputes relating to contracts and domain names. We have significant experience in advising our clients in establishing strategic alliances between suppliers and buyers in India. We also deal in cyber law and handle cases like internet fraud, hacking, privacy and security related issues etc.</p>
            </div>
        </div>
    )
}
export default SingleContentArea