import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default class Timeline extends Component {
    render() {
        return (
            <VerticalTimeline layout='1-column'>
                <VerticalTimelineElement iconStyle={{background: 'rgb(33, 150, 243)', color:'#fff'}}>
                    <h3>I am...</h3>
                    <p>A front end developer! But also a motion designer!</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement iconStyle={{background: 'rgb(33, 150, 243)', color:'#fff'}}>
                    <h3>I describe myself as...</h3>
                    <p>A problem solver, a creative person and a funny girl!</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement iconStyle={{background: 'rgb(33, 150, 243)', color:'#fff'}}>
                    <h3>My technical skills:</h3>
                    <p>Javascript, ES6, HTML5, CSS3, Git, React, NodeJS, Firebase, Adobe Illustrator, Adobe Photoshop, Adobe After Effects, Adobe Premiere, Autodesk Maya, Cinema 4D</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement iconStyle={{background: 'rgb(33, 150, 243)', color:'#fff'}}>
                    <h3>My soft skills:</h3>
                    <p>Problem solving, creativity, self-learning, teamwork</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement iconStyle={{background: 'rgb(33, 150, 243)', color:'#fff'}}>
                    <h3>My hobbies:</h3>
                    <p>Videogames, martial arts, metal music and baking</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        )
    }
}