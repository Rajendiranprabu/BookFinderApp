
import './App.css';
import React, { Component } from 'react';
import Courses from './Courses';


class App extends Component {
  state = {
    courseList: [
      {
        courseId: "J001",
        courseName: "Java",
        fees: "1000"
      },
      {
        courseId: "C001",
        courseName: "C#",
        fees: "1000"
      },
      {
        courseId: "M001",
        courseName: "ML",
        fees: "10000"
      }
    ]
  }

  deleteCourse = (id) => {

    let clist = this.state.courseList.filter(course => course.courseId !== id)
    this.setState({ courseList: clist })
  }


  render() {
    return (
      <div className="App" >
        <h1>Hello World</h1>
        <Courses clist={this.state.courseList} deleteCourse={this.deleteCourse} />

      </div>
    )
  }
}


export default App;
