import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = () => {

    const[courses,setCourses]=useState([])
    useEffect(()=>{
        fetch('courses-info.json')
        .then(res => res.json())
        .then(data =>setCourses(data))
    },[])
    return (
        <div>
            <h2>Courses here:{courses.length}</h2>
            {
                courses.map(course=> <Course 
                    key={course.course_name}
                    course={course}></Course>)
            }
        </div>
    );
};

export default Courses;
