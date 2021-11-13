# Service Robot Application for In-Store Feedback Using a Form
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Description**: This is an HTML5 form that collects information on a customer's in-store experience when the customer is checking out of the store. This allows the store to recieve immediate in-person feedback on the customer's shopping experience and the customer to reduce his/her bill amount by a non-trivial percentage (e.g. 10% off of his/her bill).

**Deployment Link**: https://jaspreetkhela.github.io/service-robot/

## Table of Contents
* [Task 1-1](#task1)
* [Task 1-2](#task2)
* [Task 1-3](#task3)
* [Task 2-1](#task4)
* [Task 2-2](#task5)
* [Task 2-3](#task6)
* [Task 2-4](#task7)
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

<a name="task1"/>

### Task 1-1

1. **Setting up your development environment and background story. Install a free mobile emulator/simulator (e.g., Android SDK emulator, the Opera Mobile emulator, etc.) for this course.**

Here is a screenshot of a locally-installed Android device emulator (in [Android Studio](https://developer.android.com/studio)):
<img width="1437" alt="Screen Shot 2021-10-15 at 10 52 36 PM" src="https://user-images.githubusercontent.com/80941606/137570951-2be7b5a7-ce4f-4894-b6df-8c29f9103587.png">

2. **Referring to what we discuss in the online session, write a story about your social/service/cloud robot for the course project. Describe your story in 300-400 words.**
* The cloud-connected service robot that I would like to build will provide customers of a brick-and-mortar store the opportunity to provide customer experience feedback immediately after shopping at that store with benefit of receiving a monetary reward that is proportional to the size of their bills. Consequently, the store owners will  be able to receive immediate feedback from customers and directly follow-up on that feedback in-person, and the customers will be able to save money by reducing their bills by a non-trivial percentage (e.g. 10% off of their bills).
* The service will be setup on a Zenbo robot's screen or a tablet computer in-store and can be downloaded as a native application on a user's smartphone through scanning a QR code at a point-of-sales machine (i.e. cash register). The application contains an HTML5 form that contains the following input fields:
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
* The form can be filled out prior to the customer checking out of the store so the cashier can ask follow-up questions about the customer's shopping experience and manually reduce the customer's bill on the point-of-sales machine. The content of the form can be saved locally to a Zenbo robot or a tablet/smartphone (e.g. using IndexedDB in Google Chrome) and/or to a database if there is an in-store internet connection (e.g. using MongoDB Atlas). The .txt file can then be imported into spreadsheet software such as Microsoft Excel to perform additional analysis on the data.
* A future direction of development could be to have a Zenbo robot follow customers around the store so that it can directly answer any questions in real-time that customers may have regarding their shopping experience. This stream of real-time customer data can better elucidate the woes of a stores' customers and provide customers with a personal assistant to streamline their shopping experience.

<a name="task2"/>

### Task 1-2

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

<a name="task3"/>

### Task 1-3

**Using PhoneGap Build**

1. **Create a PhoneGap Build account (http://build.phonegap.com/ (Links to an external site.)). To do this you will need to sign up using an Adobe Creative Cloud account. [Update on September 30: Adobe is discontinuing this service on October 1, 2020. https://blog.phonegap.com/update-for-customers-using-phonegap-and-phonegap-build-cc701c77502c (Links to an external site.) Thus, you can Google any software tool online which can do this task "Automatic convert HTML5 to Android App" for this question.]**
2. **Turn the HTML5 page of this assignment (Task 1-2) into a native Android app using PhoneGap or other software tools you chose.**
3. **The HTML5 page for this assignment includes the QR code generated by PhoneGap Build which allows your app to be downloaded. Make sure the QR code works to allow for possible downloading of your app for marking.**

Since PhoneGap has been discontinued, here is a QR code for accessing the deployment link (but it does not install the application natively on your smartphone):

![qrcode_jaspreetkhela github io](https://user-images.githubusercontent.com/80941606/137572578-3c43ed59-3b66-4922-b2ac-bf3c733c299f.png)

Here is a screenshot of the application running natively on an Android device emulator (in [Android Studio](https://developer.android.com/studio)):
<img width="1437" alt="Screen Shot 2021-10-16 at 12 40 51 AM" src="https://user-images.githubusercontent.com/80941606/137574022-e0921f53-4687-474e-9342-166ebd268ed0.png">

<a name="task4"/>

### Task 2-1

**prefix-free**

Use prefix-free (http://leaverou.github.io/prefixfree/) in your web site to provide vendor-specific prefixes for two CSS3 features (e.g., cursors https://css3clickchart.com/?prop=cursors or border images https://css3clickchart.com/?prop=border-image).

The following prefix-free capabilities were added to the CSS of the form (in addition to the <script> tag in the index.html file):
<img width="1246" alt="Screen Shot 2021-11-12 at 9 47 08 PM" src="https://user-images.githubusercontent.com/80941606/141603217-340582d3-5094-4b7b-b6e0-2edd5d4f0f69.png">

<a name="task5"/>

### Task 2-2

**Modernizr**

Go to http://modernizr.com/download/ and select the detect that allows you to show a progress meter as the user enters the information on the form (Assignment 1). You don’t need to actually show a meter; just check for compatibility. Add a detect for geolocation which you will need for Assignment 3. Use Modernizr to check for features availability and provide a gracious fallback.

The progress and the geolocation api Modernizr capabilities were added to the CSS of the form (in addition to the <script> tag in the index.html file):
<img width="1245" alt="Screen Shot 2021-11-12 at 9 47 26 PM" src="https://user-images.githubusercontent.com/80941606/141603175-7b823ab9-8db9-4a76-9bd8-75244da724bc.png">
	
Note that the form does not display a progress bar at this time.

<a name="task6"/>

### Task 2-3

**CSS Media Queries**

Use CSS media queries to deliver different content depending on the device’s orientation. For example, you may change the background colour depending on the orientation, or change the text of an element, or even hide some content.

The following CSS media queries were added to the form:
<img width="1244" alt="Screen Shot 2021-11-12 at 9 47 38 PM" src="https://user-images.githubusercontent.com/80941606/141603129-685cbcb4-b604-4d60-9aef-5902420a9b58.png">

<a name="task7"/>

### Task 2-4

**Block Coding**

Referring to your story about Zenbo for the course project in Assignment 1, coding a related scenario by Zenbo Lab as a mockup demo. In the demo, Zenbo Junior should show at least facial expression, conversation, body movement/language, and the colour on the LED light. The length of your demo should not take more than 60 seconds. 
We will discuss this Zenbo Lab in the online session on November 17: https://zenbolab.asus.com/editor/zenbo.html?lang=en

The Zenbo Lab file (i.e. service-robot-znebo-lab.zba) in this repository is comprised of the following actions:
![Screen Shot 2021-11-12 at 9 42 25 PM (2)](https://user-images.githubusercontent.com/80941606/141603085-330db338-d365-44fd-8431-c59904065c8a.png)

### Installation
To use this application, please visit the [deployment link](https://jaspreetkhela.github.io/service-robot/). To test this application on an Android device emulator, please visit this [Cordova Apache guide](https://cordova.apache.org/docs/en/10.x/guide/cli/) to install all of the depedencies required to run this application on your machine. Once all of the application's dependencies are installed, in your command-line interface, run `cordova build` and then `cordova run --emulator`. The application is will launch in your default Android device emulator.

### Usage
To use this application, please visit the [deployment link](https://jaspreetkhela.github.io/service-robot/).

**Screenshots**:
![Screen Shot 2021-10-16 at 2 36 10 AM (2)](https://user-images.githubusercontent.com/80941606/137576694-fef5e15e-25c9-49d4-a5a8-aa3a9cf91c57.png)
![Screen Shot 2021-10-16 at 2 36 15 AM (2)](https://user-images.githubusercontent.com/80941606/137576698-25f5b344-0be0-4f17-a920-bf375ba518b7.png)
![Screen Shot 2021-10-16 at 2 36 21 AM (2)](https://user-images.githubusercontent.com/80941606/137576699-dd16eedd-85ad-4cfd-a4d5-54481b602d13.png)

### Features
This application allows a customer to enter responses to form questions.

This application uses the following front-end technologies:
* HTML5
* CSS
* JavaScript
* Bootstrap CSS Library

### Testing
To test this application on an Android device emulator, please visit this [Cordova Apache guide](https://cordova.apache.org/docs/en/10.x/guide/cli/) to install all of the depedencies required to run this application on your machine. Once all of the application's dependencies are installed, in your command-line interface, run `cordova build` and then `cordova run --emulator`. The application is will launch in your default Android device emulator.

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
