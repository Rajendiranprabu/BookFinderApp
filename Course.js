import React, { Component } from "react";

class Course extends Component {


    render() {


        return (


            <div className="row">
                <div className="col-sm-2 pull-left" ><p>{this.props.citem.courseName}</p></div>
                <div className="col-sm-2 pull-left">
                    <button className="btn btn-danger" onClick={this.props.deleteCourse.bind(this, this.props.citem.courseId)}>Delete</button>
                </div>
            </div>

        )
    }
}
export default Course;