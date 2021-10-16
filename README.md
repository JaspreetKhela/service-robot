# Cloud-Based Service Robot for In-Store Feedback

**Description**: 

**Deployment Link**: https://jaspreetkhela.github.io/service-robot/

# Employee Tracker
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Description**: This is a employee tracker content management system (CMS) Node.js application that runs using the Command Line Interface. This application allows the user to interface with a MySQL database that contains information about an organization's employees. This application steamlines the database management process so that users can focus on the content of the database while the application's back-end processes take care of the database reading/writing and displaying information processes.

**Deployment Link**: Please see [installation](#installation) instructions below.

**Video Tutorial Links**:
- https://drive.google.com/file/d/1Rwx1WqbLii7AYiAewLEHN-RJ7F4QOZB9/view

## Table of Contents
* [Task 1-1](#task1)
* [Task 1-2](#task2)
* [Task 1-3](#task3)
* [Installation](#installation)
* [Usage](#usage)
* [Features](#features)
* [Testing](#testing)
* [Credit](#credit)
* [Contributions](#contributions)
* [Questions](#questions)
* [Badges](#badges)
* [License](#license)

**Assignment Details**:
<a name="task1"/>
### Task 1-1
1. Setting up your development environment and background story [Marks: 30%]Install a free mobile emulator/simulator (e.g., Android SDK emulator, the Opera Mobile emulator, etc.) for this course.
	1. [Add Screenshot]
2. Referring to what we discuss in the online session, write a story about your social/service/cloud robot for the course project. Describe your story in 300-400 words.
	- The cloud-connected service robot that I would like to build will provide customers of a brick-and-mortar store to provide customer experience feedback immediately after shopping at that store with benefit of receiving a monetary reward that is proportional to the size of their bill. Consequently, the store owners will  be able to receive immediate feedback from customers and directly follow-up on that feedback in-person, and the customers will be able to save money by reducing their bill by a non-trivial percentage (e.g. 10%).
	- The robot will be setup on a tablet computer in-store and can be downloaded on a user's smartphone through scanning a QR code at a point-of-sales machine (i.e. cash register). It will contain an HTML5 form that contains the following input fields:
		- A text field for the customer's first and last name
		- A email text field for a customer's email
		- A url text field for a customer's personal URL (i.e. Linkedin URL for recruitment purposes)
		- A date field for the customers's date of birth
		- A radio button list for a customer's gender
		- A checkbox list for choosing reasons for shopping at a particular store
		- A checkbox list for choosing areas of improvement for the store
		- An radio button list for rating their customer experience
		- A text field for additional comments about the customer's experience
		- A "Submit" for submitting the form data and clearing the form
	- The form can be filled out prior to checking out of the store so the cashier can ask follow-up questions about the customer's shopping experience and manually reduce the customer's bill on the point-of-sales machine. The content of the form can be saved locally to the tablet (e.g. using IndexedDB in Google Chrome) and/or to a database if there is an in-store internet connection (e.g. using MongoDB Atlas). The txt file can then be imported in spreadsheet software such as Microsoft Excel to perform additional analysis on the data.
	- A future development of direction could be to have a Zenbo robot follow customers around the store so that it can directly answer any questions in real-time that customers may have regarding their shopping experience. This unstructured steam of real-time customer data can better elucidate the woes of a stores' customers and provide customers with a personal assistant to streamline their shopping experience.

<a name="task2"/>
### Task 1-2: HTML5-validated form [Marks: 50%]
1. Design and create an HTML5-validated form with the following fields: (1) email address, (2) personal URL, (3) year of birth (numeric increments or calendar), (4) gender (radio button), (5) comments (text area), (6) a “Clear All” button, and (7) a checkbox to confirm that the data entered are fictitious. Make sure that the form layout and design should be compliant with your story.

<a name="task3"/>
### Task 1-3: Using PhoneGap Build [Marks: 20%]
1. Create a PhoneGap Build account (http://build.phonegap.com/ (Links to an external site.)). To do this you will need to sign up using an Adobe Creative Cloud account. [Update on September 30: Adobe is discontinuing this service on October 1, 2020. https://blog.phonegap.com/update-for-customers-using-phonegap-and-phonegap-build-cc701c77502c (Links to an external site.) Thus, you can Google any software tool online which can do this task "Automatic convert HTML5 to Android App" for this question.]
2. Turn the HTML5 page of this assignment (Task 1-2) into a native Android app using PhoneGap or other software tools you chose.
3. The HTML5 page for this assignment includes the QR code generated by PhoneGap Build which allows your app to be downloaded. Make sure the QR code works to allow for possible downloading of your app for marking.

### Installation
To use this application, please visit the deployment link above.

### Usage
To use this application, please visit the deployment link above.

**Screenshots**:

### Features
This application allows a customer to enter responses to form questions.

### Testing
This application can be directly tested in the Command Line Interface by using it.

### Credit
This project was created and is maintained by Jaspreet Khela.

### Contributions
This project is currently not open for contributions.

### Questions
Please [email](jaspreet.khela@gmail.com) me if you have any questions.
You may also contact me through my [GitHub](https://github.com/JaspreetKhela) profile. 

### Badges
N/A

### License
MIT License
