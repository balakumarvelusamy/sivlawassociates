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
const DraftingContent = ({ className, avatar, image }) => {
    return (
        <div className={className}>

            <div className="singleContentWrap">
                <div className='inner-container'>
                    <h1>Drafting , Pleading &amp; Conveyancing</h1>
                    <h3>Real Estate &amp; Infrastructure</h3>
                    <h3>Infrastructure and Construction</h3>
                    <p>We assist our clients in acquiring and developing properties, both commercial and residential, malls and industrial parks. We draft and review documents related to infrastructure and construction such as Concession Agreement and EPC contracts and related contracts including bank guarantees and performance bonds, agreements with architects, contractors and subcontractors, consultancy agreements, work orders, and purchase orders. We advise on creation of joint ventures and assist in necessary documentation for the same.</p>

                    <h3>Drafting Documents</h3>
                    <p>We draft and negotiate various kinds of agreements and contracts related to real estate and construction contracts including Concession Agreement, EPC contracts, Maintenance Agreements, Mortgage, Pledge and Hypothecation Agreements, Guarantee Deeds, Asset Purchase Agreement, business conducting agreements, Escrow Agreement, etc. We also negotiate, implement and review investment agreements, land purchase agreements, lease deeds, licence agreements, sale deeds, agreement to sell, and pre-emptive right agreements. We have expertise in drafting work orders, purchase orders, letters of intent related to construction. We also deal in necessary documentation for joint ventures, mergers and acquisitions, development of townships and establishing SEZ. We also conduct property title searches and due diligence.</p>


                    <h3>Real Estate Litigation </h3>
                    <p>We represent owners, developers, secured lenders, loan participants, government bodies, bondholders, borrowers, landlords, tenants. We represent our clients in disputes involving
</p>
                    <ul>
                        <li>Purchase or sale contracts including acquisition, specific performance and other fraud/mistake claims

</li><li> Mortgage on secured loans including foreclosure, receivership, guaranty enforcement and disbursement issues, as well as lender liability and 	bad faith claims
                        
</li><li> Loan participations and other co-ownership arrangements, including inter-creditor agreement and agent disputes
                        
</li><li> Public 	financing, and public-private partnerships relating to, infrastructure, low-income housing, and other governmentally 	supported projects
                        
</li><li> Management and operating agreements, including resort, hotel and shopping center operator issues, as well as common area maintenance and other 	reconciliation issues
                        
</li><li> Ownership structures and Title matters
                        
</li><li> Commercial leases, including eviction and forcible ejectment actions.
                        
</li><li> Major construction disputes, including subsidence, excavation, general contractor and subcontractor disputes
                        
</li><li> Labour and employment matters </li>
                    </ul>
                    <p>This multidisciplinary approach and broad experience translates into efficient and highly effective handling of clients' real estate issues and disputes before, during, and after they result in litigation or other formal dispute resolution.
                        We also assist our clients in interpretation of leases, covenant enforcement, tenant renewals, rent review, notices, easement and covenant disputes, service charge disputes, boundary disputes.</p>

                </div> </div> </div>
    )
}
export default DraftingContent