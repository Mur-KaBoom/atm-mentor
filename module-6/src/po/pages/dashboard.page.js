const BasePage = require('./base.page');
const { SideMenu, AppointmentID, Appointments } = require('../components');

class DashboardPage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/dashboard');
    this.sideMenu = new SideMenu();
    this.appointments = new Appointments()
  }

  appointmentID(id) {
    return new AppointmentID(id);
  }


}

module.exports = DashboardPage;
