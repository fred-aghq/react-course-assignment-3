import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            {id: 1, title: 'Angular - The Complete Guide'},
            {id: 2, title: 'Vue - The Complete Guide'},
            {id: 3, title: 'PWA - The Complete Guide'}
        ]
    };

    loadCourse = course => {
        const pathname = '/courses/' + course.id;
        this.props.history.push({pathname: pathname, state: {title: course.title}});
    };

    render() {
        return (
                <div>
                    <h1>Amazing Udemy Courses</h1>
                    <section className="Courses">
                        {
                            this.state.courses.map(course => {
                                return <article
                                    onClick={() => this.loadCourse(course)} className="Course" key={course.id}
                                >{course.title}</article>;
                            })
                        }
                    </section>
                    <Switch>
                        <Route path="/courses/:id" component={Course} params={{courseData: this.state.courses}}/>
                    </Switch>
                </div>
        );
    }
}

export default Courses;