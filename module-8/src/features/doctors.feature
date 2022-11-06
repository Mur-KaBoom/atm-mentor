Feature: Doctors

    Scenario: Should add new doctor
        When I open "dashboard" page
        And I click "Doctors" link from the side menu
        And I click add new doctor button from list header
        Then modal window should be displayed

         And I input "DoctorName" to doctor "name" in modal window
         And I input "0509866161" to doctor "phone" in modal window
         And I wait 3 seconds
