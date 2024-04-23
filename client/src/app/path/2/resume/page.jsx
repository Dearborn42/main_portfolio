"use client"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa6"

export default function Resume(){
    return (
        <main class="main-content">
            <div className="fixed top-0 right-0 z-10 flex justify-between">
                <Link href="/path/2" className="fixed top-12 text-sm sm:text-4xl left-20">
                    <FaArrowLeft />
                </Link>
            </div>
        <section class="left-section">
            <div class="left-content">
                <div class="profile">
                    <div class="image">
                    </div>
                    <h2 class="name">Andrew Murphy</h2>
                    <p class="career">Backend Developer</p>
                </div>
                <div class="skills-section">
                    <h3 class="main-title">Languages</h3>
                    <ul>
                        <li>
                            <p class="skill-title">Node.js</p>
                            <div class="progress-bar">
                                <div class="progress js-progress"></div>
                            </div>
                        </li>
                        <li>
                            <p class="skill-title">Python</p>
                            <div class="progress-bar">
                                <div class="progress ps-progress"></div>
                            </div>
                        </li>
                        <li>
                            <p class="skill-title">Java</p>
                            <div class="progress-bar">
                                <div class="progress j-progress"></div>
                            </div>
                        </li>
                        <li>
                            <p class="skill-title">React</p>
                            <div class="progress-bar">
                                <div class="progress c-progress"></div>
                            </div>
                        </li>
                        <li>
                            <p class="skill-title">Next JS</p>
                            <div class="progress-bar">
                                <div class="progress ps-progress"></div>
                            </div>
                        </li>
                        <li>
                            <p class="skill-title">MongoDb</p>
                            <div class="progress-bar">
                                <div class="progress n-progress"></div>
                            </div>
                        </li>
                        <li>
                            <p class="skill-title">CSS</p>
                            <div class="progress-bar">
                                <div class="progress ps-progress"></div>
                            </div>
                        </li>
                        <li>
                            <p class="skill-title">Mongoose</p>
                            <div class="progress-bar">
                                <div class="progress ps-progress"></div>
                            </div>
                        </li>
                        <li>
                            <p class="skill-title">HTML</p>
                            <div class="progress-bar">
                                <div class="progress ps-progress"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="right-section">
            <div class="right-main-content">
                <section class="about sect">
                    <h2 class="right-title">About Me</h2>
                    <p class="para">
                        I am a high school honor student with a 4.0 GPA, who is on
                        target to earn an Honor High School diploma in May of
                        2024. In addition, I attend West-MEC vocational school
                        studying computer coding. As a student at West-MEC, I am
                        also a member of Future Business Leaders of American
                        (FBLA) . My involvement in West-MEC and FBLA have
                        provided me with the opportunity to work along side fellow
                        students with varying backgrounds, opinions, and work
                        styles. At West-MEC, the majority of our work is focused on
                        working in collaborative groups, with assigned roles in said
                        groups. These groups have taught me to lead and direct
                        others in a quick, efficient, and effective manner.
                        <br />
                    </p>
                </section>

                <section class="experince sect">
                    <h2 class="right-title">Experience</h2>
                    <div class="timeline">
                        <div class="left-tl-content">
                            <h5 class="tl-title">WBLA</h5>
                            <p class="para">10 weeks</p>
                        </div>
                        <div class="right-tl-content">
                            <div class="tl-content">
                                <h5 class="tl-title-2">Team lead/backend developer</h5>
                                <p class="para">
                                    Lead a team in the create of a portfolio for a client that partnered with WBLA.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="left-tl-content">
                            <h5 class="tl-title">West-Mec</h5>
                            <p class="para">10 weeks</p>
                        </div>
                        <div class="right-tl-content">
                            <div class="tl-content">
                                <h5 class="tl-title-2">Team lead/backend developer</h5>
                                <p class="para">
                                    Lead a team of 2 in developing a software system for furture students of West-Mec Medical programs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="left-tl-content">
                            <h5 class="tl-title">Profestion</h5>
                            <p class="para">2019 - 2020</p>
                        </div>
                        <div class="right-tl-content">
                            <div class="tl-content">
                                <h5 class="tl-title-2">Position</h5>
                                <p class="para">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae 
                                    voluptatem deleniti, 
                                    laboriosam odio nobis quae fugit facilis quo.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="left-tl-content">
                            <h5 class="tl-title">Five Guys</h5>
                            <p class="para">2023-present</p>
                        </div>
                        <div class="right-tl-content">
                            <div class="tl-content">
                                <h5 class="tl-title-2">Crew Member</h5>
                                <p class="para">
                                    Complete every nessecary task required such as cooking, cleaning, handling transactions, etc.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="education sect">
                    <h2 class="right-title">education</h2>
                    <div class="timeline">
                        <div class="left-tl-content">
                            <h5 class="tl-title">Thunderbird High School</h5>
                            <p class="para">2020 - 2024</p>
                        </div>
                        <div class="right-tl-content">
                            <div class="tl-content">
                                <h5 class="tl-title-2">Thunderbird High School</h5>
                                <p class="para">
                                    Graduated with a GPA of 3.9 and completed many college level courses during my time there.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="left-tl-content">
                            <h5 class="tl-title">West-Mec</h5>
                            <p class="para">2022 - 2024</p>
                        </div>
                        <div class="right-tl-content">
                            <div class="tl-content">
                                <h5 class="tl-title-2">West-Mec</h5>
                                <p class="para">
                                    Trade school were I was taught many skills I have today, and also completed many college level classes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="left-tl-content">
                            <h5 class="tl-title">Arizona State University</h5>
                            <p class="para">2024-2028</p>
                        </div>
                        <div class="right-tl-content">
                            <div class="tl-content">
                                <h5 class="tl-title-2">Bachelors in Comp Sci: Cyber Security</h5>
                                <p class="para">
                                    Working on it right now.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="awards sect">
                    <h2 class="right-title">Awards</h2>
                    <div class="timeline">
                        <div class="left-tl-content">
                            <h5 class="tl-title">FBLA National Competetor</h5>
                            <p class="para">July 2023</p>
                        </div>
                        <div class="right-tl-content">
                            <div class="tl-content">
                                <h5 class="tl-title-2">Event</h5>
                                <p class="para">
                                    Placed top 10 in state in a cybersecurity competition.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </main>
    )
}