import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/react.png" width={200} />
                        <div>
                            <h5>
                                CS1234 React JS
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div><br />
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/sleep.webp" width={200} />
                        <div>
                            <h5>
                                CS4990 Sleep Management
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Techniques for atleast 1 hr sleep
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div><br />
                <div className="wd-dashboard-course">
                <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/sleeplab.jpg" width={200} />
                        <div>
                            <h5>
                                CS4991 Recitation
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Recitation for CS4990 Sleep Management
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div><br />
                <div className="wd-dashboard-course">
                <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/cooking.png" width={200} />
                        <div>
                            <h5>
                                CS0020 Advanced Cooking
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Cook Frozen Dinners like a Pro
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div><br />
                <div className="wd-dashboard-course">
                <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/cookinglab.png" width={200} />
                        <div>
                            <h5>
                                CS0021 Lab: Section 3:30 AM
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Lab for CS0020 Advanced Cooking
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div><br />
                <div className="wd-dashboard-course">
                <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/chatgpt.jpeg" width={200} />
                        <div>
                            <h5>
                                CS4880 Cannibalizing with ChatGPT
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Cannibalize your future job with AI
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div><br />
                <div className="wd-dashboard-course">
                <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/software.jpg" width={200} />
                        <div>
                            <h5>
                                0054SC Software Undevelopment
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Undevelop your brain with this class
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div><br />
                <div className="wd-dashboard-course">
                <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/plumbing.jpeg" width={200} />
                        <div>
                            <h5>
                                CS3200 Practical Plumbing
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Most secure job from AI in the future
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
