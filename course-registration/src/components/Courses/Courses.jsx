import { useEffect, useState } from "react";
import Course from "../Course/Course";
import './Courses.css'
import Calculation from "../Calculation/Calculation";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Courses = () => {

    const [courses, setCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [reminingCredit, setReminingCredit] = useState(0);
    const [totalCredit, setTotalCredit] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        fetch('courses-info.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    const handleselectCourse = (course) => {
        const isExist = selectedCourses.find((item) => item.course_name == course.course_name);

        let sumOfCredit = course.credit;
        let sumOfPrice = course.price;
        if (isExist) {
            // return alert("Already Selected !!!");
           return  toast.success("Already Selected !!!");
        }
        else {
            selectedCourses.forEach(item => {
                sumOfCredit = sumOfCredit + item.credit;
                sumOfPrice = sumOfPrice + item.price;
            });
            const totalReminingCredit = 20 - sumOfCredit;
            
       

            if (sumOfCredit > 20) {
                // return alert("OOps!!! Credit Limit Crossed");
               return  toast.success("OOps!!! Credit Limit Crossed");
            }
            setTotalCredit(sumOfCredit);
            setReminingCredit(totalReminingCredit);
            setTotalPrice(sumOfPrice);
            setSelectedCourses([...selectedCourses, course]);
        }

    };
    return (
        <div>
            <div className="course-container">
                <div className="course-card">
                    {
                        courses.map(course => <Course
                            key={course.course_name}
                            course={course}
                            handleselectCourse={handleselectCourse}
                        ></Course>)
                    }
                </div>
                <div className="calculation">
                    <Calculation selectedCourses={selectedCourses}
                        reminingCredit={reminingCredit}
                        totalCredit={totalCredit}
                        totalPrice={totalPrice}
                    ></Calculation>
                </div>
            </div>
        </div>
    );
};

export default Courses;
