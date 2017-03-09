import React, {Component} from 'react';

export default class Intro extends Component {
  render() {
    return (
      <section className="intro" id="intro">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h3>Introduction</h3>
              <hr className="star-primary"/>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-lg-offset-2">
              <p>I graduated from Tamkang University and my major is computer science. I have two working
                experiences.</p>
              <p>I worked for Taiwan Mobile for a little more than 4 years until 29 Apr 2017, which is one of the
                largest telecommunication company in Taiwan. I think it's simillar to the company like AT&T, T-Mobile
                or Verison. I was, at first, a tester, so I did a little bit of e2e testing, for example, I have
                experience in using nightwatchjs for testing, which is a framework for e2e testing and whose underlying
                system is Selenium and Nodejs. After being a tester for a year, my position switched. I was responsible
                for developing and maintaining the <a href="https://www.myfone.com.tw/buy/">Myfone</a> platform,
                including admin panels, which are built up on top of a self-developed framework using php 5.3 and I was
                mainly responsible for developing backend RESTful service for mobile apps or the other systems while
                preventing it from broken down since the system has been taken over by too many developers. </p>
            </div>
            <div className="col-lg-4">
              <p>Moreover, part of my role was responsible for learning new tech stacks such as git for version control,
                nightwatchjs for test-automation, and then to introduce them to my colleagues. We went through each of
                our projects using kanban board, which is a way to run a project within a team or between teams.</p>
              <p>From 2 May 2017 to 30 Sep 2017, I worked for the <a href="https://www.bloomon.nl">Bloomon</a> platform
                as a full-stack developer for few months. We built up this platform using React and angular 1.x for
                frontend and php laravel for backend. We use Trello for running projects. We use docker for to eliminate
                “works on my machine” problems when collaborating on code with colleagues.</p>
              <p>I am currently preparing TOEFL and GRE exams because I want to get a master degree in computer science
                in the United State in order to work there in the future. I found your recruitment few days ago, and I
                am making an assessment of the possibility for joining Carousell.</p>
            </div>
            <div className="col-lg-8 col-lg-offset-2 text-center">
            </div>
          </div>
        </div>
      </section>
    );
  }
}