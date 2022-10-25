const BaseComponent = require('./base.component');

class AppointmentID extends BaseComponent {
    constructor(id) {
        super(`tr[aria-rowindex='${id}']`);
    }


    get nameDouble() {
        return this.rootEl.$('[aria-colindex="1"]');
      }

    /**
     * @param appointmentsParameters {'time' | 'name' | 'doctorName'| 'symptoms'}
     */
    colum(appointmentsParameters) {
        const selectors = {
            time: '[aria-colindex="0"]',
            name: '[aria-colindex="1"]',
            doctorName: '[aria-colindex="2"]',
            symptoms: '[aria-colindex="3"]',
        };
        return this.rootEl.$(selectors[appointmentsParameters.toLowerCase()]);
    }


}

module.exports = AppointmentID;

