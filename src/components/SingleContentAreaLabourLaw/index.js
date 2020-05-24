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
            <div className='inner-container'>
            <h1>Labour Law (Employment &amp; Industrial Disputes, Environmental Law)</h1>
            <p>We, at Siva and Associates, provide services in all laws and regulations related to labour and employment,
            industrial relations including enactments such as Industrial Dispute Act 1947, Trade Union Act 1926, Minimum Wages Act 1948,
Payment of Wages Act 1936, Factories Act 1948, Payment of Bonus Act 1965, Equal Remuneration Act 1976, Payment of Gratuity Act 1972, Workmen’s Compensation Act 1923 etc.</p>

            <h3>Services rendered by our law firm include-</h3>

            <ul>
                <li>
                    Advise on Employment laws, labour laws, industrial relations.
</li>
                <li> Advice on Disciplinary proceedings, Employees Rights, Employment and service contracts, Labour disputes and Industrial actions, safety legislation, Provident fund, statutory benefits and trade disputes.

</li><li> Assist in complying with employment laws and labour laws.

</li><li> Assist in implementation, monitoring and enforcement of policies dealing with sexual harassment, discrimination, employee privacy and family 	and medical leave.

</li><li> Assist in wage and hour issues, collective bargaining, interpretation of work rules, grievances and industrial disputes under the labour laws.

</li><li> Assist in compliance with labour and tax implications of cross-border 	movement of executive level employees.

</li><li> Draft employment agreements, appointment letters, offer letters for consultants, termination agreements, non-competition agreements and non disclosure agreements concerning confidentiality, etc.

</li><li> Assist in design, implement and administer all types of employee benefits and executive compensation programs and pension plan and advice on all aspects of legislative, regulatory and fiscal requirements.

</li><li> Assist and represent our clients in disputes under employment laws relating to employment benefits, housing, group insurance (health, dental, life etc.), disability income protection, retirement benefits, 	social security, and other specialized benefits.

</li><li> Assist in managing the employment effects of major corporate restructurings and transactions and provide legal advice on employment and human capital issues that occur in major merger and acquisition activities, as well as post-acquisition integrations.

</li><li> Draft and conduct audits on trade secret protection issues.

</li><li> Draft Employment Standing Orders and advice on Employee Provident Fund (EPF) under the Employee Provident Fund Act, Gratuity Act, etc.

</li><li> Draft legal notices on behalf of companies as well as employees with respect to employment.

</li><li> Represent clients in industrial relations matters such as strike, lockout, retrenchment, settlement, closure of establishment etc.; conditions of employment such as transfer, promotion, increment, industry-cum-region basis payment, bonus etc.; termination of service matters such as discharge simpliciter, dismissal by way of punishment etc.

</li><li> Represent clients in disciplinary matters with respect to dismissal on various 	charges of misconduct related to duty, discipline and moral e.g. absenteeism, go slow, riotous behavior, theft, moral turpitude, loss 	of confidence as well as drafting show cause notices, charge sheets, conducting inquiries, advising disciplinary action etc.

</li><li> Represent clients in Contract Labour Related such as claim of contract labour for regularization etc.

</li><li> Represent clients in respect of claims of wrongful discharge, discrimination, harassment and whistleblower actions.

</li><li>
                    Draft original suits and petitions, interlocutory applications, criminal complaints, legal notices, consumer complaints and complaints relating to monopolistic and restrictive trade practices.
</li>
            </ul>
            <p></p>
            <h1>Environment Law</h1>
<p>Our law firm provides advice on environmental laws, rules and regulations, governmental incentives available to further environmental interests, including tax credits, grants and land use provisions. Our law firm advises its clients on regulatory compliances related to environment protection laws.</p>
        </div>


            </div>
        </div>
    )
}
export default SingleContentArea