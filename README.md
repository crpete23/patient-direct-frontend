# PatientDirect Frontend
------------------------------

### ABOUT THIS PROJECT

Full-stack progressive web application seeking to ease the check in process and medical documentation in a clinic setting. The application provides two interfaces including a patient portal and physician portal. Within the patient portal users are able to check in, fill out the reason for their visit, and complete dynamically produced questionnaires specific to their chief complaint. On the provider side physicians are able to adjust the template questionnaires and view the subjective histories (including billable elements for comprehensive History of Present Illness and Review of Systems) of patients who have completed the check in process. Built with HTML, CSS, JavaScript, React.js, Redux, Axios, and Knex.

### OPTIONS AVAILABLE TO THE PROVIDERS

    -Signup { First Name, Last Name, Email, Password, Password-Verification }
    -Login { Email, Password }
    -View :
      - Patient Schedule
      - Individual Patient's Subjective History
    - Create History of Present Illness (HPI) Template for a specified Chief Complaint (CC):
    - Update Review of Systems (ROS) Template
    - Update HPI Template
    - Delete HPI Template
    - Delete Board
    - Logout  

### OPTIONS AVAILABLE TO THE PATIENTS

    -Check In
      -Queries if specified patient has an appointment scheduled for that day
    -Update Chief Complaint
      -Options are produced based on their provider's HPI Templates
    -Update HPI and ROS by completing dynamically produced questionnaire


### FEATURES

-Token Authorization ensures that only the specified provider for the encounter may view the subjective medical history of a given patient

-Customization of HPI and ROS questionnaire templates asked on patient check in.


### TO INSTALL PatientDirect

    -fork and clone this frontend repository onto your local machine
    -run 'npm install' in your terminal
    -run 'npm start'
    -the previous step will open the frontend program in your browser using React-scripts, connected to the backend deployed with Heroku


### TO USE PatientDirect ONLINE

<a href="https://patient-direct.herokuapp.com/">PatientDirect</a>

### BUILT WITH

    -Javascript, HTML & CSS
    -React.js
    -Redux
    -React-router-dom
    -Axios
    -Semantic-Ui-React
    -Moment

### DEVELOPERS

    -For more information, please contact this project's developer: Christopher Peterson at:   

    crpete23@gmail.com
