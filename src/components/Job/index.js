import React, {Component} from 'react';
import styles from './Job.module.scss';
import uuid from "uuid";

class Job extends Component {
  render() {
    const {job} = this.props;
    return (
      <div id="job" className={styles.job}>
        <aside className={styles.date}>{job.date}</aside>
        <div className={styles.head}>
          <span>{job.jobTitle}, {job.companyName}</span>
          <div className={styles.content}>
            {job.projects && job.projects.map(project => (
              <div key={uuid.v4()}>
                <span>{project.name}</span>
                {project.achievements && project.achievements.map(achievement => (
                  <ul key={uuid.v4()}>
                    <li>{achievement}</li>
                  </ul>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    );
  }
}

export default Job;