import { useEffect, useState } from "react";
import Course from "../Course/Course";
import './Courses.css'

const Courses = () => {

    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('courses-info.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <div className="course-container">
                <div className="course-card">
                {
                    courses.map(course => <Course
                        key={course.course_name}
                        course={course}></Course>)
                }
                </div>
                <div className="calculation">
                <h1>this is  calculation part</h1>
                </div>
            </div>
        </div>
    );
};

export default Courses;
