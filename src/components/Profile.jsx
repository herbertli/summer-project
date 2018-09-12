import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
// import AttendanceTable from './AttendanceTable';
// import SimpleCalendar from './SimpleCalendar';
// import InfoTable from './InfoTable';
import { fakeAuth } from './../services/authentication';

class Profile extends Component {

  render() {
    const { user } = fakeAuth;
    return (
      <div>
        <Typography variant="display1" gutterBottom>
          Welcome {user.firstName} {user.lastName}!
        </Typography>
        <main>
          <Typography variant="display1" gutterBottom>
            My Schedule
            </Typography>
          <Typography component="div">
            {/* <SimpleCalendar /> */}
          </Typography>
          <Typography variant="display1" gutterBottom>
            My Attendance
            </Typography>
          <div>
            {/* <AttendanceTable /> */}
          </div>
          <Typography variant="display1" gutterBottom>
            My Info
            </Typography>
          <div>
            {/* <InfoTable user={user}/> */}
          </div>
        </main>
      </div>
    )
  }
}

export default Profile;