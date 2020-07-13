import React, { Component } from 'react'; 
import './App.css';

import Course from './components/Course';
import MyForm from './MyForm';
import MyForm2 from './MyForm2';
import NewCourseForm from './components/NewCourseForm';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      courses: []
    }
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  add(course){
    const { courses } = this.state,
      newCourse = Object.assign({}, course, {id: (Date.now())});
    courses.push(course);
    this.setState({courses});
  }

  remove(courseId){
    const { courses } = this.state,
    courseIndex = courses.findIndex(course => course.id == courseId);

    courses.splice(courseIndex, 1);
    this.setState({courses});
  }

  render(){
    const { state } = this;
    return (
      <div className="App">
        <NewCourseForm onSubmit={this.add} />
        <ul className="courses-list">
          {
            state.courses.map(course => <Course course={course} onRemove={this.remove}/>)
          }
        </ul>
        <MyForm />
        <hr />
        <MyForm2 />
      </div>
    );
  }
}

export default App;
