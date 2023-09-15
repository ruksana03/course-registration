import './Course.css'

const Course = ({course, handleselectCourse}) => {
    const {image, course_name, credit, price, details} = course;
    // console.log(course)
    return (
        <div className="course"> 
            <img src={image} alt="" />
            <h3>{course_name}</h3>
            <p>{details}</p>
            <div className="inside-course">
                <p>$</p>
                <p>Price:{price}</p>
                <img src="/course-registration/Asset/Frame.jpg" alt="" />
                <p>Credit : {credit}hr</p>
            </div>
            <button onClick={() =>handleselectCourse(course)}>Select:</button>
        </div>
    );
};

export default Course;