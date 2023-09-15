
import './Calculation.css'
const Calculation = ({ selectedCourses,reminingCredit,totalCredit,totalPrice }) => {
    console.log(selectedCourses);
    return (
        <div className="calculation-section">
            <h3>Credit Hour Remaining {reminingCredit} hr</h3>
            <h1>Course Name</h1>
            {selectedCourses.map((course) => (
                <li key={course.course_name}>{course.course_name}</li>
            ))}
            <p>Total Credit Hour :{totalCredit}</p>
            <p>Total Price :{totalPrice} USD</p>
        </div>
    );
};

export default Calculation;