import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course col" style={{ width: "300px"}}>
                        <div className="card rounded-3 overflow-hidden">   
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/react.png" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1234 React JS
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Full Stack software developer
                                    </p>
                                    <button> Go </button>
                                </div>
                            </Link>
                        </div> 
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px"}}>
                        <div className="card rounded-3 overflow-hidden">   
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/sleep.webp" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS4990 Sleep Management
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Techniques for atleast 1 hr sleep
                                    </p>
                                    <button> Go </button>
                                </div>
                            </Link>
                        </div> 
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px"}}>
                        <div className="card rounded-3 overflow-hidden">   
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/sleeplab.jpg" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS4991 Recitation
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Recitation for CS4990 Sleep Management
                                    </p>
                                    <button> Go </button>
                                </div>
                            </Link>
                        </div> 
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px"}}>
                        <div className="card rounded-3 overflow-hidden">   
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/cooking.png" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS0020 Advanced Cooking
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Cook Frozen Dinners like a Pro
                                    </p>
                                    <button> Go </button>
                                </div>
                            </Link>
                        </div> 
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px"}}>
                        <div className="card rounded-3 overflow-hidden">   
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/cookinglab.png" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS0021 Lab: Section 3:30 AM
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Lab for CS0020 Advanced Cooking
                                    </p>
                                    <button> Go </button>
                                </div>
                            </Link>
                        </div> 
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px"}}>
                        <div className="card rounded-3 overflow-hidden">   
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/chatgpt.jpeg" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS4880 Cannibalizing with ChatGPT
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Cannibalize your future job with AI
                                    </p>
                                    <button> Go </button>
                                </div>
                            </Link>
                        </div> 
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px"}}>
                        <div className="card rounded-3 overflow-hidden">   
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/software.jpg" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        0054SC Software Undevelopment
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Undevelop your brain with this class
                                    </p>
                                    <button> Go </button>
                                </div>
                            </Link>
                        </div> 
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px"}}>
                        <div className="card rounded-3 overflow-hidden">   
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/plumbing.jpeg" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS3200 Practical Plumbing
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Most secure job from AI in the future
                                    </p>
                                    <button> Go </button>
                                </div>
                            </Link>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
}