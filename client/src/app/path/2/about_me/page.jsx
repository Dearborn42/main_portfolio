"use client";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

export default function AboutMe(){
    return (
        <>
            <div className="fixed top-0 right-0 z-10 flex justify-between">
                <Link href="/path/2" className="fixed top-5 text-sm sm:text-4xl left-12">
                    <FaArrowLeft />
                </Link>
            </div>
            <div className="welcome">
                <div className="zoom">
                    <div className="top-animation">
                        <table className="top-animation-table">
                            <tbody>
                            <tr>
                                <td className="pixel"></td>
                                <td className="pixel"></td>
                                <td className="pixel"></td>
                                
                                <td className="pixel"></td>
                                <td className="pixel"></td>
                                <td className="pixel"></td>
                                <td className="pixel"></td>
                                <td className="pixel"></td>
                                <td className="pixel"></td>
                                <td className="pixel"></td>
                                <td className="pixel"></td>
                                
                                <td className="pixel"></td>
                                <td className="pixel"></td>
                                <td className="pixel"></td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="name-container">
                            <p className="name">A N D R E W&nbsp;&nbsp;M U R P H Y</p>
                        </div>
                    </div>
                    <div className="left-animation">
                        <div className="left-animation-cont"><table className="left-animation-table">
                            <tr className="pixel-container">
                            <td className="pixel"></td>
                            <td className="pixel"></td>
                            <td className="pixel"></td>
                            </tr>
                            <tr className="pixel-container">
                            <td className="pixel"></td>
                            <td className="pixel"></td>
                            <td className="pixel"></td>
                            </tr>
                            <tr className="pixel-container">
                            <td className="pixel"></td>
                            <td className="pixel"></td>
                            <td className="pixel"></td>
                            </tr>
                        </table></div><div className="hourglass-container">
                        <svg 
                            version="1.1" 
                            className="hourglass1" 
                            viewBox="0 0 286 405" 
                            style={{ enableBackground: 'new 0 0 286 405', overflow: 'visible' }}
                        >
                            <polygon 
                                className="hourglass" 
                                points="0.5,-0.5 280.5,83.5 0.5,399.5 274.5,352.5"
                            />
                        </svg>
                        </div>
                        <div className="lines">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div> 
                        <div className="chain">
                        <div className="chain-f">
                            <div className="inside-chain"></div>
                        </div>
                        <div className="chain-f"></div>
                        <div className="chain-f"></div>
                    </div>
                    </div>
                    <div className="me-container"></div>
                    <div className="right-animation"> 
                        <div className="left-animation-cont">
                            <table className="left-animation-table">
                                <tr className="pixel-container">
                                    <td className="pixel"></td>
                                    <td className="pixel"></td>
                                    <td className="pixel"></td>
                                </tr>
                                <tr className="pixel-container">
                                    <td className="pixel"></td>
                                    <td className="pixel"></td>
                                    <td className="pixel"></td>
                                </tr>
                                <tr className="pixel-container">
                                    <td className="pixel"></td>
                                    <td className="pixel"></td>
                                    <td className="pixel"></td>
                                </tr>
                            </table>
                        </div>
                        <div className="hourglass-container">
                            <svg version="1.1" className="hourglass1"
                            viewBox="0 0 286 405" style={{ enableBackground: 'new 0 0 286 405', overflow: 'visible' }}>
                            <polygon className="hourglass" points="0.5,-0.5 280.5,83.5 0.5,399.5 274.5,352.5 "/>
                            </svg>
                        </div>
                        <div className="lines">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div> 
                        <div className="chain">
                            <div className="chain-f">
                                <div className="inside-chain"></div>
                            </div>
                            <div className="chain-f"></div>
                            <div className="chain-f"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about">
                <div className="about-text">
                <p>As a high school honor student with a stellar 4.0 GPA and a dedication to excellence I am poised to achieve my goal of earning an Honor High School diploma in May 2024. Alongside my academic pursuits I am honing my skills in computer coding at West-MEC vocational school where I am an active member of Future Business Leaders of America FBLA Through my involvement in FBLA and collaborative projects at West-MEC I have developed strong teamwork and leadership abilities.</p>
                <p> My experiences have taught me the value of effective communication and adaptability and problem-solving. Whether it is leading a group project or volunteering in my community I approach every opportunity with enthusiasm and a drive for success.</p>
                <p>With a passion for learning and a commitment to making a difference, I strive to excel in every endeavor I undertake. From my role as a crew member at Five Guys to volunteering with organizations like the Arizona Association of Foster and Adoptive Parents, I embrace challenges with a positive attitude and a willingness to contribute. With a weighted GPA of 4.944 and recognition for my skills in HTML5 application development and cybersecurity, I am ready to embark on the next chapter of my academic and professional journey.</p>
                </div>
            </div>
        </>
    )
}