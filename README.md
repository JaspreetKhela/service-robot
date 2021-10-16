# Cloud-Based Service Robot for In-Store Feedback
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Description**: This is an HTML5 form that collected information a customer's in-store experience when the customer is checking out of the store.

**Deployment Link**: https://jaspreetkhela.github.io/service-robot/

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

## Assignment Details

### Task 1-1
<a name="task1"/>

1. **Setting up your development environment and background story. Install a free mobile emulator/simulator (e.g., Android SDK emulator, the Opera Mobile emulator, etc.) for this course.**
<img width="1437" alt="Screen Shot 2021-10-15 at 10 52 36 PM" src="https://user-images.githubusercontent.com/80941606/137570951-2be7b5a7-ce4f-4894-b6df-8c29f9103587.png">

2. **Referring to what we discuss in the online session, write a story about your social/service/cloud robot for the course project. Describe your story in 300-400 words.**
* The cloud-connected service robot that I would like to build will provide customers of a brick-and-mortar store the opportunity to provide customer experience feedback immediately after shopping at that store with benefit of receiving a monetary reward that is proportional to the size of their bills. Consequently, the store owners will  be able to receive immediate feedback from customers and directly follow-up on that feedback in-person, and the customers will be able to save money by reducing their bills by a non-trivial percentage (e.g. 10% off of their bills).
* The robot will be setup on a tablet computer in-store and can be downloaded as a native application on a user's smartphone through scanning a QR code at a point-of-sales machine (i.e. cash register). The application contains an HTML5 form that contains the following input fields:
	* A text input field for a customer's first and last name
	* A email input field for a customer's email
	* A url input field for a customer's personal URL (i.e. LinkedIn URL for organization recruitment purposes)
	* A date input field for a customers's date of birth
	* A radio button list for a customer's gender
	* A checkbox list for a customer to select reasons for shopping at a particular store
	* A checkbox list for a customer to select areas of improvement for the store
	* An radio button list for a customer to rate his/her shopping experience
	* A text input field for additional comments about a customer's shopping experience
	* A "Submit" for submitting the form data and clearing the form
	* A "Clear All" button for clearing the form
* The form can be filled out prior to the customer checking out of the store so the cashier can ask follow-up questions about the customer's shopping experience and manually reduce the customer's bill on the point-of-sales machine. The content of the form can be saved locally to the tablet (e.g. using IndexedDB in Google Chrome) and/or to a database if there is an in-store internet connection (e.g. using MongoDB Atlas). The .txt file can then be imported into spreadsheet software such as Microsoft Excel to perform additional analysis on the data.
* A future direction of development could be to have a Zenbo robot follow customers around the store so that it can directly answer any questions in real-time that customers may have regarding their shopping experience. This unstructured stream of real-time customer data can better elucidate the woes of a stores' customers and provide customers with a personal assistant to streamline their shopping experience.

### Task 1-2
<a name="task2"/>

**HTML5-Validated Form**

1. **Design and create an HTML5-validated form with the following fields:**
	* **email address**
	* **personal URL**
	* **year of birth (numeric increments or calendar)**
	* **gender (radio button)**
	* **comments (text area)**
	* **“Clear All” button**
	* **checkbox to confirm that the data entered are fictitious.**

**Make sure that the form layout and design should be compliant with your story.**

To view the form, please visit the [deployment link](https://jaspreetkhela.github.io/service-robot/).

### Task 1-3
<a name="task3"/>

**Using PhoneGap Build**

1. **Create a PhoneGap Build account (http://build.phonegap.com/ (Links to an external site.)). To do this you will need to sign up using an Adobe Creative Cloud account. [Update on September 30: Adobe is discontinuing this service on October 1, 2020. https://blog.phonegap.com/update-for-customers-using-phonegap-and-phonegap-build-cc701c77502c (Links to an external site.) Thus, you can Google any software tool online which can do this task "Automatic convert HTML5 to Android App" for this question.]**
2. **Turn the HTML5 page of this assignment (Task 1-2) into a native Android app using PhoneGap or other software tools you chose.**
3. **The HTML5 page for this assignment includes the QR code generated by PhoneGap Build which allows your app to be downloaded. Make sure the QR code works to allow for possible downloading of your app for marking.**

Since PhoneGap has be discontinued, here is a QR code to accessing the deployment link (but it does not install the application natively on your smartphone):

![qrcode_jaspreetkhela github io](https://user-images.githubusercontent.com/80941606/137572578-3c43ed59-3b66-4922-b2ac-bf3c733c299f.png)

Here is a screenshot of the application running on an Android device emulator:
<img width="1437" alt="Screen Shot 2021-10-16 at 12 40 51 AM" src="https://user-images.githubusercontent.com/80941606/137574022-e0921f53-4687-474e-9342-166ebd268ed0.png">

### Installation
To use this application, please visit the deployment link above. To test this application on an Android device emulator, please visit this [Cordova Apache guide](https://cordova.apache.org/docs/en/10.x/guide/cli/) to install all of the depedencies required to run this application on your machine.

### Usage
To use this application, please visit the deployment link above.

**Screenshots**:
![Screen Shot 2021-10-15 at 10 36 59 PM (2)](https://user-images.githubusercontent.com/80941606/137570433-7451d498-6f1c-498a-8e17-d3aa9e5a0684.png)
![Screen Shot 2021-10-15 at 10 37 05 PM (2)](https://user-images.githubusercontent.com/80941606/137570436-23fd33c9-45aa-4993-879d-98ab1b3c33bb.png)
![Screen Shot 2021-10-15 at 10 37 13 PM (2)](https://user-images.githubusercontent.com/80941606/137570437-dcfe399b-9f1e-4ba6-9744-ad904379ffe7.png)

### Features
This application allows a customer to enter responses to form questions.

This application uses the following technologies:
* HTML5
* Bootstap CSS Library

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
