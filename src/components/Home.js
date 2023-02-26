import React from 'react';
import '../styles/Home.scss';
import { CiSearch } from 'react-icons/ci';
import { FiArrowUpRight } from 'react-icons/fi';

const Home = () => {
    return (
        <section className='container home'>
            <header>
                <h2 className='TXT-heading'>Explore</h2>
                <div className='search'>
                    <span className='TXT-heading2'>{CiSearch({})}</span>
                    <input type="text" placeholder='Search'/>
                </div>
                <ul>
                    <li><img src="/icons/freelancers.svg" alt="" /></li>
                    <li><img src="/icons/Apps.svg" alt="" /></li>
                    <li><img src="/icons/Services.svg" alt="" /></li>
                    <li><img src="/icons/Events.svg" alt="" /></li>
                    <li><img src="/icons/Jobs.svg" alt="" /></li>
                    <li><img src="/icons/Marketplace.svg" alt="" /></li>
                </ul>
            </header>
            <h1 className='TXT-heading'>Recommended for you</h1>
            <div className='cards'>
                <article className='card'>
                    <img src="/card-pic.jpg" alt="" />
                    <div className='overLay'>
                        <p className='TXT-normal first'>
                            <span className='bold-txt'>Olivia Rhye</span>
                            <span>20 Jan 2022</span>
                        </p>
                        <p className='TXT-normal bold-txt'>Design</p>
                    </div>
                    <h3 className='TXT-heading2'>Lorem ipsum dolor sit amet</h3>
                    <p className='TXT-normal'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                    <a className='TXT-normal' href="www.google.com"  target='_blank'>Read post <span>{FiArrowUpRight({})}</span></a>
                </article>
                <article className='card'>
                    <img src="/card-pic.jpg" alt="" />
                    <div className='overLay'>
                        <p className='TXT-normal first'>
                            <span className='bold-txt'>Olivia Rhye</span>
                            <span>20 Jan 2022</span>
                        </p>
                        <p className='TXT-normal bold-txt'>Design</p>
                    </div>
                    <h3 className='TXT-heading2'>Lorem ipsum dolor sit amet</h3>
                    <p className='TXT-normal'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                    <a className='TXT-normal' href="www.google.com"  target='_blank'>Read post <span>{FiArrowUpRight({})}</span></a>
                </article>
                <article className='card'>
                    <img src="/card-pic.jpg" alt="" />
                    <div className='overLay'>
                        <p className='TXT-normal first'>
                            <span className='bold-txt'>Olivia Rhye</span>
                            <span>20 Jan 2022</span>
                        </p>
                        <p className='TXT-normal bold-txt'>Design</p>
                    </div>
                    <h3 className='TXT-heading2'>Lorem ipsum dolor sit amet</h3>
                    <p className='TXT-normal'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                    <a className='TXT-normal' href="www.google.com"  target='_blank'>Read post <span>{FiArrowUpRight({})}</span></a>
                </article>
                <article className='card'>
                    <img src="/card-pic.jpg" alt="" />
                    <div className='overLay'>
                        <p className='TXT-normal first'>
                            <span className='bold-txt'>Olivia Rhye</span>
                            <span>20 Jan 2022</span>
                        </p>
                        <p className='TXT-normal bold-txt'>Design</p>
                    </div>
                    <h3 className='TXT-heading2'>Lorem ipsum dolor sit amet</h3>
                    <p className='TXT-normal'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                    <a className='TXT-normal' href="www.google.com"  target='_blank'>Read post <span>{FiArrowUpRight({})}</span></a>
                </article>
                <article className='card'>
                    <img src="/card-pic.jpg" alt="" />
                    <div className='overLay'>
                        <p className='TXT-normal first'>
                            <span className='bold-txt'>Olivia Rhye</span>
                            <span>20 Jan 2022</span>
                        </p>
                        <p className='TXT-normal bold-txt'>Design</p>
                    </div>
                    <h3 className='TXT-heading2'>Lorem ipsum dolor sit amet</h3>
                    <p className='TXT-normal'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                    <a className='TXT-normal' href="www.google.com"  target='_blank'>Read post <span>{FiArrowUpRight({})}</span></a>
                </article>
                <article className='card'>
                    <img src="/card-pic.jpg" alt="" />
                    <div className='overLay'>
                        <p className='TXT-normal first'>
                            <span className='bold-txt'>Olivia Rhye</span>
                            <span>20 Jan 2022</span>
                        </p>
                        <p className='TXT-normal bold-txt'>Design</p>
                    </div>
                    <h3 className='TXT-heading2'>Lorem ipsum dolor sit amet</h3>
                    <p className='TXT-normal'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                    <a className='TXT-normal' href="www.google.com"  target='_blank'>Read post <span>{FiArrowUpRight({})}</span></a>
                </article>
            </div>
        </section>
    )
}

export default Home