
import './Calculation.css'
const Calculation = ({ selectedCourses }) => {
    console.log(selectedCourses);
    return (
        <div className="calculation-section">
            <h1>Course Name</h1>
            {selectedCourses.map((course) => (
                <li key={course.course_name}>{course.course_name}</li>
            ))}
        </div>
    );
};

export default Calculation;