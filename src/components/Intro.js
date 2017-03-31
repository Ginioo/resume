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
              <p>I graduated from Tamkang University and my major is computer science. I have two work
                experiences.
              </p>
              <p>
                I worked for Taiwan Mobile for a little more than 4 years until 29 Apr 2017. I was responsible
                for developing and maintaining the <a href="https://www.myfone.com.tw/buy/">Myfone</a> platform,
                including admin panels, which are built up on top of a self-developed framework using php 5.3 and I was
                mainly responsible for developing backend service for mobile apps or the other systems while
                preventing it from broken down since the system has been taken over by too many developers.
              </p>
              <p>Moreover, part of my role was responsible for learning new tech stacks such as git for version control,
                nightwatchjs for test-automation, and then to introduce them to my colleagues. We went through each of
                our projects using kanban board, which is a way to run a project within a team or between teams.
              </p>
            </div>
            <div className="col-lg-4">
              <p>
                From 2 May 2017 to 30 Sep 2017, I worked for the <a href="https://www.bloomon.nl">Bloomon</a> platform
                as a full-stack developer for few months. We built up this platform using React and angular 1.x for
                frontend and php laravel for backend. So I can do React development.
              </p>
              <p>
                I found your recruitment these days. Although I had no experience in developing iOS or Android app
                before, I can learn it as quickly as I can. I'm highly interested in this trainee program. Please give
                me an opportunity to prove myself.
              </p>
            </div>
            <div className="col-lg-8 col-lg-offset-2 text-center">
            </div>
          </div>
        </div>
      </section>
    );
  }
}