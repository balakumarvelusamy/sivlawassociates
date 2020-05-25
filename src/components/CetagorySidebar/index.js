import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const cetagoryMenu = [
    { name: 'Alternative Dispute Resolution', route: "alt-dispute-resolution" },
    { name: 'Banking & Finance', route: "banking-finance" },
    { name: 'Labour Law', route: "labourlaw" },
    { name: 'Cyber Law', route: "cyber-law" },
    { name: 'Environemnt Law', route: "env-law" },
    { name: 'Drafting', route: "drafting" },
    { name: 'Tax', route: "tax" },
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