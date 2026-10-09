import React, { Component } from 'react';
import ReactGA from 'react-ga';

export class AboutEric extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.pageview(`/${screen}`);

        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about eric" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="eric' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="eric' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="eric' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="eric's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
                <div className='my-0.5 w-28 md:w-full h-8 px-2 md:px-2.5 flex' >
                    <iframe src="https://github.com/sponsors/ericygu/button" title="Sponsor Eric" width={"100%"} height={"100%"} ></iframe>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutEric;

export const displayAboutEric = () => {
    return <AboutEric />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.png" alt="Eric Gu Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>my name is <span className="font-bold">Eric Gu</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">Software Engineer!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">I'm a <span className=" font-medium">Software Engineer</span> currently working at <u className=' cursor-pointer '> <a href="https://en.wikipedia.org/wiki/Amazon_(company)" target={"_blank"}>Amazon, </a> </u>(Hit me up <a className='text-underline' href='mailto:gudmaneric@gmail.com'><u>@gudmaneric@gmail.com</u></a>)</li>
                <li className=" mt-3 list-time"> When I am not coding my next project, I like to spend my time listening to audiobooks, volunteering, going to the gym, and spending time with church community.</li>
                <li className=" mt-3 list-time"> I also don't update this website enough, please dm me to get more info! </li>
            </ul>
        </>
    )
}
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Emory University
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2018 - 2021</div>
                    <div className=" text-sm md:text-base">BA - Computer Science, Philosophy</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">GPA &nbsp; 3.7/4.0</div>
                </li>
            </ul>
        </>
    )
}
function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    Check out my languages!
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise are <strong className="text-ubt-gedit-orange">camera/media systems, C++, Android, and embedded Linux</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Platforms & Build</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white" alt="eric c++" />
                        <img className="m-1" src="https://img.shields.io/badge/Java-ED8B00?style=flat&logo=openjdk&logoColor=ffffff" alt="eric java" />
                        <img className="m-1" src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="eric python" />
                        <img className="m-1" src="https://img.shields.io/badge/GStreamer-FF6600?style=flat&logo=gstreamer&logoColor=white" alt="eric gstreamer" />
                        <img className="m-1" src="https://img.shields.io/badge/Bash-4EAA25?style=flat&logo=gnubash&logoColor=white" alt="eric bash" />
                        <img className="m-1" src="https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=ffffff" alt="eric git" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/Android-3DDC84?style=flat&logo=android&logoColor=white" alt="eric android" />
                        <img className="m-1" src="https://img.shields.io/badge/CMake-064F8C?style=flat&logo=cmake&logoColor=white" alt="eric cmake" />
                        <img className="m-1" src="https://img.shields.io/badge/Yocto-C40D2E?style=flat&logo=yocto&logoColor=white" alt="eric yocto" />
                        <img className="m-1" src="https://img.shields.io/badge/Make-A8B9CC?style=flat&logo=cmake&logoColor=black" alt="eric make" />
                        <img className="m-1" src="https://img.shields.io/badge/ADB-A4C639?style=flat&logo=android&logoColor=white" alt="eric adb" />
                        <img className="m-1" src="https://img.shields.io/badge/BitBake-2C3E50?style=flat&logoColor=white" alt="eric bitbake" />
                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And of course,</span> <img className=" inline ml-1" src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black" alt="eric linux" /> <span>!</span>
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "Camera & Media Stable IDL Migration",
            date: "2026",
            link: "",
            description: [
                "Led camera/media off unstable Yocto sysroot APIs onto stable IDL; closed 10+ dependency-migration tickets and removed ~1,100 lines of legacy buffer-sharing code",
                "Replanned the real migration scope (~44 unstable symbols vs ~9 assumed) and drove Graphics, CoreOss, and VLS deliverables without direct authority",
            ],
            domains: ["c++", "yocto", "idl", "android"]
        },
        {
            name: "Multimedia Recorder Stable API",
            date: "2026",
            link: "",
            description: [
                "Designed and shipped an ABI-locked audio/video recording API end to end (IDL, implementation, test app, packaging, client guide) 46 days ahead of plan",
                "Killed an insecure standalone daemon design so recorder privilege follows the calling app; fixed V4L2 PTS drops that made recordings unplayable",
            ],
            domains: ["c++", "android", "idl", "multimedia"]
        },
        {
            name: "Kepler Camera Operator API",
            date: "2026",
            link: "",
            description: [
                "Owned the stable control API for smart framing (DPTZ) and computer vision clients, unblocking 5 teams stuck on a deprecated Orpheus path",
                "Closed a privilege gap so operator controls require an explicit control_stream grant; shipped with full unit and on-device end-to-end coverage",
            ],
            domains: ["c++", "android", "idl", "computer-vision"]
        },
        {
            name: "Camera Path Reliability Hardening",
            date: "2026",
            link: "",
            description: [
                "Root-caused and fixed Critical/Blocker failures apps depend on: Show and Tell ANR, comms camera-dead after restart, and VVRP second-open failure",
                "Hardened the GStreamer camera plugin and client library (ASan-clean exit paths, race fixes, single C++ runtime) with durable fixes over workarounds",
            ],
            domains: ["c++", "gstreamer", "android", "debugging"]
        },
        {
            name: "Camera Release Velocity & Shift-Left",
            date: "2026",
            link: "",
            description: [
                "Restored a Blocker release-pipeline outage within hours and cut commit-to-mainline ambiguity by fixing cadence plus a manual QA gate",
                "Drove shift-left and pre-merge device testing so camera_server coverage moves earlier, with projected catch of several recurring CI failures",
            ],
            domains: ["ci/cd", "android", "yocto", "testing"]
        },
        {
            name: "Camera Footprint Reduction",
            date: "2026",
            link: "",
            description: [
                "Cut camera turbo-module libraries ~38%, KeplerCameraApp ~22%, and removed test content from TV-profile images",
                "Relanded Minimal OmniKit only after root-causing launcher/camera crashes, with on-device proof before shipping",
            ],
            domains: ["android", "yocto", "optimization"]
        },
    ];

    const tag_colors = {
        "c++": "blue-400",
        "android": "green-400",
        "yocto": "red-400",
        "idl": "yellow-300",
        "multimedia": "pink-400",
        "computer-vision": "purple-400",
        "gstreamer": "orange-400",
        "debugging": "gray-300",
        "ci/cd": "teal-300",
        "testing": "cyan-300",
        "optimization": "lime-300",
    }

    return (
        <>
            {
                project_list.map((project, index) => {
                    const card = (
                        <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5">
                            <div className="flex flex-wrap justify-between items-center">
                                <div className=" text-base md:text-lg mr-2">{project.name}</div>
                                <div className="text-gray-300 font-light text-sm">{project.date}</div>
                            </div>
                            <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                {
                                    project.description.map((desc, descIndex) => {
                                        return <li key={descIndex} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                    })
                                }
                            </ul>
                            <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                {
                                    (project.domains ?
                                        project.domains.map((domain, domainIndex) => {
                                            const borderColorClass = `border-${tag_colors[domain] || "gray-400"}`
                                            const textColorClass = `text-${tag_colors[domain] || "gray-400"}`

                                            return <span key={domainIndex} className={`px-1.5 py-0.5 w-max border ${borderColorClass} ${textColorClass} m-1 rounded-full`}>{domain}</span>
                                        })
                                        : null)
                                }
                            </div>
                        </div>
                    )

                    if (project.link) {
                        return (
                            <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4 cursor-pointer">
                                {card}
                            </a>
                        )
                    }

                    return (
                        <div key={index} className="flex w-full flex-col px-4">
                            {card}
                        </div>
                    )
                })
            }
        </>
    )
}
function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Eric-Gu-Resume.pdf" title="Eric Gu resume" frameBorder="0"></iframe>
    )
}
