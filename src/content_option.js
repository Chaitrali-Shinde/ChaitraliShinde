
import kickstartup from './assets/images/kickstartup.png'; // Tell webpack this JS file uses this image
import touristapp from './assets/images/touristapp.jpg';
import kira from './assets/images/kira.png';
import tableau from './assets/images/tableau.jpg';
import profilePhoto from './assets/images/image.PNG';



const logotext = "Chaitrali";
const meta = {
    title: "Chaitrali Shinde",
    description: "I’m Chaitrali Shinde  _ Full stack devloper,currently studing in USA",
};

const introdata = {
    title: "I’m Chaitrali Shinde",
    animated: {
        first: "I love coding",
        second: "I code cool applications",
        third: "I like cloud developement",
    },
    description: "A master student with some coding skills!",
    your_img_url: profilePhoto,
};

const dataabout = {
    title: "Something about me",
    aboutme: "ASU's graduate student with some exciting developement experience",
};
const worktimeline = [
    {
        jobtitle: "Cloud Developer",
        where: "Arizona State University",
        date: "2023- present",
    },
    {
        jobtitle: "Academic Tutor",
        where: "Arizona State University",
        date: "2022-2023",
    },
    {
        jobtitle: "Assistant System Engineer",
        where: "Tata Consultancy Services (TCS)",
        date: "2021- 2022",
    },
    {
        jobtitle: "Software developer (Sponsored-project)",
        where: " BOS Global India Private Limited",
        date: "2020-2021",
    },
    
];

const skills = [{
        name: "Languages",
        value: "Java, Python, C, C++, JavaScript (ES5/ES6), SQL, TypeScript, Node.js, HTML5, CSS3",
    },
    {
        name: "Frameworks",
        value: "React JS, Spring Boot, Bootstrap, Bokeh, Tableau, Material UI, Django, MySQL",
    },
    {
        name: "Tools",
        value: "GitHub , Jenkins, Jira, AWS, GCP, Postman , EC2, CloudWatch, REST API, Selenium ,Linux, Heroku, Docker, S3 , Lambda",
    },
    {
        name: "Skills",
        value: "Front-end, Agile, Back-end, Full-Stack, Micro-services, Cloud development",
    },
    {
        name: "Certification",
        value: "AWS Certified Solutions Architect - Associate (ID: TKZWZXGCVEQQ1P9Q, Valid: Jul 2023 - Jul 2026)",
    },
];

const services = [{
        title: "Arizona State University, Tempe, AZ",
        description: "Master of Information Technology",
    },
    {
        title: "Savitribai Phule Pune University, Pune, MH,India",
        description: "Bachelor of Computer Engineering",
    },
];

const dataportfolio = [{
        img: kickstartup,
        description: "A platform for startups to get all the help they need. Implemented a micro-services-based architecture leveraging Docker, React JS, Java Spring Boot and MySQL for providing scalability, and resilience for startups and mentors to connect with each other",
        link: "",
    },
    {
        img: touristapp,
        description: "A guide for tourist for making their travel easy and memorable",
        link: "https://youtu.be/GEcBpbIbVK8",
    },
    {
        img: kira,
        description: "A community health platform for predicting skin diseases",
        link: "#",
    },
    {
        img: tableau,
        description: "A Dashboard for Udemy Courses analysis",
        link: "https://public.tableau.com/authoring/Udemycoursesanalysis_16897366927660/Dashboard#1",
    },
];

const contactConfig = {
    YOUR_EMAIL: "chai.shinde100@gmail.com",
    YOUR_FONE: "(602)816-2209",
    description: "I am a diligent graduate student actively seeking opportunities that will challenge me, inspire me, and provide growth through rigorous learning experiences",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "",
    YOUR_TEMPLATE_ID: "",
    YOUR_USER_ID: "",
};

const socialprofils = {
    github: "https://github.com/Chaitrali-Shinde",
    //facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/chaitrali-shinde/",
    //twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};