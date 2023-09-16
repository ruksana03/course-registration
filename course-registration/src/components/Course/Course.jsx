import './Course.css'
import Frame from '../../../Asset/Frame.svg'
import dollar from '../../../Asset/dollar-sign 1.svg'

const Course = ({ course, handleselectCourse }) => {
    const { image, course_name, credit, price, details } = course;
    // console.log(course)
    return (
        <div className="course">
            <img src={image} alt="" />
            <h3 className='cart-name'>{course_name}</h3>
            <p className='cart-details'>{details}</p>
            <div className="inside-course">
                <img src={dollar} alt="" />
                <p className='cart-price'>Price:{price}</p>
                <img src={Frame} alt="" />
                <p className='cart-credit'>Credit : {credit}hr</p>
            </div>
            <button className='btn' onClick={() => handleselectCourse(course)}>Select</button>
        </div>
    );
};

export default Course;