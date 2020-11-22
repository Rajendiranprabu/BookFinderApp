import React, { Component } from "react";
import Course from "./Course";
import PropTypes from 'prop-types'
class Courses extends Component {

    render() {


        return <div className="jumbotron">
            {
                this.props.clist.map((course) => (
                    <Course key={course.courseId} citem={course} deleteCourse={this.props.deleteCourse}></Course>

                ))
            }
        </div>


    }


}

Courses.propTypes = {
    clist: PropTypes.array.isRequired
}


export default Courses;