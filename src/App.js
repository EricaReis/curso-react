import React, { Component } from 'react'; 
import './App.css';

import Course from './components/Course';
import MyForm from './MyForm';
import MyForm2 from './MyForm2';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      courses: [
        {
          id: 1,
          name: 'React',
          category: 'Javascript',
          image: 'https://i2.wp.com/blog.hariken.co/wp-content/uploads/2019/03/react-logo.png?ssl=1'
        },
        {
          id: 2,
          name: 'Angular',
          category: 'Javascript',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png'
        }
      ]
    }
    this.remove = this.remove.bind(this);
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
