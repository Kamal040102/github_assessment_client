# Github Assessment (Frontend)

## Github Repositories Listing

This repo is for the successful completion of the task for the position of Full Stack intern by Fyle.

It is a SPA build on MEAN Stack, which lists all the github repository of a user on application.

## Tech Stack

**Frontend:** Angular15, Bootstrap CSS

**Server:** NodeJS, ExpressJS

### Clone

Clone with git-bash or terminal

```bash
  git clone https://github.com/Kamal040102/github_assessment_client.git
  cd github_assessment_client
```

### Installation and Running

```bash
  npm install
  ng serve
```

### Documentation

#### 1) This is the homepage of the application. Here, user may enter their username and click on 'Get User' button to get the list of all their repositories.

![Home Page](https://raw.githubusercontent.com/Kamal040102/github_assessment_client/master/src/assets/Screenshots/Github-Assesment-1.png)

#### 2) If user directly clicks on the button without filling the form than an error message will be thrown to the user indicating `Username is a required input`.

![No Input Error](https://raw.githubusercontent.com/Kamal040102/github_assessment_client/master/src/assets/Screenshots/Github-Assesment-4.png)

#### 3) If user clicks on the button without checking out the 'Terms and Condition' checkbox only after mentioning the username, an error will be thrown to the user indicating `Check the terms and conditions`.

![Checkbox not checked Error](https://raw.githubusercontent.com/Kamal040102/github_assessment_client/master/src/assets/Screenshots/Github-Assesment-3.png)

#### 4) The correct format of filling the form is given below.

![Filled Form](https://raw.githubusercontent.com/Kamal040102/github_assessment_client/master/src/assets/Screenshots/Github-Assesment-2.png)

#### 5) If the username is correct than the output screen will shown like below image.

![Username found](https://raw.githubusercontent.com/Kamal040102/github_assessment_client/master/src/assets/Screenshots/Github-Assesment-5.png)

#### 6) If the username is not correct or not found than the `Error 404 User not Found` page will be displayed with a button to `Go to back to Home page`.

![Username not found](https://raw.githubusercontent.com/Kamal040102/github_assessment_client/master/src/assets/Screenshots/Github-Assesment-9.png)

#### 7) This section shows all the information related to the user such as Name, Bio, Location, Twitter Handle and Profile URL.

![User Information Section](https://raw.githubusercontent.com/Kamal040102/github_assessment_client/master/src/assets/Screenshots/Github-Assesment-6.png)

#### 8) This section shows all the repositories of the user with information such as Title, Topics, Description. User may click on any repository card to open that repositiory into a new tab. By default there will be 10 repositories on single page.

![User Repos Section](https://raw.githubusercontent.com/Kamal040102/github_assessment_client/master/src/assets/Screenshots/Github-Assesment-7.png)

#### 9) Pagination (at bottom) can be used to see more repositories.

![Pagination](https://raw.githubusercontent.com/Kamal040102/github_assessment_client/master/src/assets/Screenshots/Github-Assesment-8.png)

#### 10) If user mannualy enters any other page which don't exists than the `Error 404 Page Not Found` page will be shown.

![Page Not Found](https://raw.githubusercontent.com/Kamal040102/github_assessment_client/master/src/assets/Screenshots/Github-Assesment-10.png)

### API Reference

#### Get User Information

```http
  GET https://github-server.onrender.com/api/v1/github?user={username}
```

| Query  | Type     | Description                   |
| :----- | :------- | :---------------------------- |
| `user` | `string` | **Required**. Github Username |

#### Get User repositiories

```http
  GET https://github-server.onrender.com/api/v1/github/repos?user={username}
```

| Query  | Type     | Description                   |
| :----- | :------- | :---------------------------- |
| `user` | `string` | **Required**. Github Username |

### Appendix

#### Frontend is deployed using vercel. [https://github-assessment.vercel.app]

#### Backend is deployed using render. [https://github-server.onrender.com]

#### Backend Repository. [https://github.com/Kamal040102/github_assessment_server]

## Feedback

If you have any feedback, please reach out to me at kamal5201ks@gmail.com

## 🔗 Links

[![My Website](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://kamalsharma.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kamalsharma05/)
