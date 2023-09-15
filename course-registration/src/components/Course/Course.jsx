const Course = ({course}) => {
    const {image, course_name, credit, price, details} = course;
    console.log(course)
    return (
        <div className="Course"> 
            <img src={image} alt="" />
            <h3>{course_name}</h3>
            <p>{details}</p>
            <div className="inside-course">
                <p>$ Price:{price}</p>
                <img src="/course-registration/Asset/Frame.jpg" alt="" />
                <p>Credit : {credit}hr</p>
                <button>Select</button>
            </div>
           
        </div>
    );
};

export default Course;