import React, { useState } from 'react';
import courses from '../course/course';

function CourseEnrollmentPage() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [enrolled, setEnrolled] = useState(false);

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
  };

  const handleEnroll = () => {
    // Call API to enroll user in course
    setEnrolled(true);
  };

  return (
    <div>
      <h1>Course Enrollment</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p>Price: {course.price} {course.currency}</p>
            <button onClick={() => handleSelectCourse(course)}>Select</button>
          </li>
        ))}
      </ul>
      {selectedCourse && (
        <div>
          <h2>You have selected: {selectedCourse.title}</h2>
          <button onClick={handleEnroll}>Enroll</button>
        </div>
      )}
      {enrolled && (
        <div>
          <h2>Congratulations! You have enrolled in {selectedCourse.title}</h2>
        </div>
      )}
    </div>
  );
}

export default CourseEnrollmentPage;