import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { BiHomeAlt } from 'react-icons/bi';
import { FiBarChart2,FiUser,FiUsers,FiMessageSquare,FiLayers,FiHeadphones,FiSettings,FiLogOut } from 'react-icons/fi';
import { IoPricetagOutline } from 'react-icons/io5';
import { BsList } from 'react-icons/bs';

const Sidebar = () => {
    return (
        <aside>
            <div className='top'>
                <div className='logo'>
                    <span className='cr-1'></span>
                    <span className='cr-2'></span>
                    <p className='TXT-heading'><span className='TXT-heading'>Connect </span> link</p>
                </div>
                <div className='search'>
                    <span className='TXT-heading3'>{CiSearch({})}</span>
                    <input className='TXT-normal' placeholder='search' type="text" />
                </div>
                <div className='lists'>
                    <ul>
                        <li className='TXT-heading3 active'><span className='TXT-heading2'>{BiHomeAlt({})}</span>Home</li>
                        <li className='TXT-heading3'><span className='TXT-heading2'>{FiBarChart2({})}</span>Dashboard</li>
                        <li className='TXT-heading3'><span className='TXT-heading2'>{FiUser({})}</span>Profile</li>
                        <li className='TXT-heading3'><span className='TXT-heading2'>{FiMessageSquare({})}</span>Messages</li>
                        <li className="list-icon TXT-heading3"><span className='TXT-heading2'>{BsList({})}</span>More</li>
                    </ul>
                    <ul className='list-hide-phone'>
                        <li className='TXT-heading3'><span className='TXT-heading2'>{FiUsers({})}</span>Connections</li>
                        <li className='TXT-heading3'><span className='TXT-heading2'>{IoPricetagOutline({})}</span>Promotion & Advertising</li>
                        <li className='TXT-heading3'><span className='TXT-heading2'>{FiLayers({})}</span>Integration</li>
                    </ul>
                </div>
            </div>
            <div className='bottom'>
                <ul>
                    <li className='TXT-heading3'><span className='TXT-heading2'>{FiHeadphones({})}</span>Support</li>
                    <li className='TXT-heading3'><span className='TXT-heading2'>{FiSettings({})}</span>Settings</li>
                </ul>
                <div className='account'>
                    <img src="/user-pic.jpg" alt="" />
                    <p className='TXT-normal'>
                        <span>Olivia Rhye</span>
                        <span>olivia@untitled.com</span>
                    </p>
                    <span className='TXT-heading2 icon' >
                        {FiLogOut({})}
                    </span>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar