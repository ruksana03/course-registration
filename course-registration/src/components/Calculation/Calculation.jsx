
import './Calculation.css'
const Calculation = ({ selectedCourses,reminingCredit,totalCredit,totalPrice }) => {
    console.log(selectedCourses);
    return (
        <div className="calculation-section">
            <h3 className='remaining-calculation'>Credit Hour Remaining {reminingCredit} hr</h3>

            <hr />
            <h1 className='course-name-title'>Course Name</h1>
            <ol>
            {selectedCourses.map((course) => (
                
                <li className='listed-item' key={course.course_name}>{course.course_name}</li>
            ))}
            </ol>

            <hr />
            <p id='total'>Total Credit Hour :{totalCredit}</p>

            <hr />

            <p id='total'>Total Price :{totalPrice} USD</p>
        </div>
    );
};

export default Calculation;