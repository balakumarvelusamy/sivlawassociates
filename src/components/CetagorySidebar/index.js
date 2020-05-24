import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const cetagoryMenu = [
    { name: 'Alternative Dispute Resolution', route: "case-stadies" },
    { name: 'Banking & Finance', route: "case-stadies-details" },
    { name: 'Labour Law', route: "labourlaw" },
    { name: 'Cyber Law', route: "cyber-law" },
    { name: 'Education Law', route: "case-stadies-details" },
    { name: 'Drugs Crime', route: "case-stadies-details" },
]

const CetagorySidebar = ({ className, title }) => {
    return (
        <div className={className}>
            <h3 className="sidebarTitle">{title}</h3>
            <ul>
                {cetagoryMenu.map((cetagory,i) => (
                    <li key={i}><Link to={cetagory.route}>{cetagory.name}</Link></li>
                ))}
            </ul>
        </div>
    )
}
export default CetagorySidebar