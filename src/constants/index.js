import {
    aws,
    mobile,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    nodejs,
    git,
    officeworks,
    gds,
    momosCafe,
    java,
    angular,
    flutter,
    bootstrap,
    firstPort,
    electPort,
    greenfoot,
    mcgarage,
    threejs,
    lqui,
    openLink
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
    {
        id: "socialmedia",
        title: "Social Media",
    },
    {
        id: "resume",
        title: "Resume",
    },
];

const services = [
    {
        title: "HTML",
        icon: html,
    },
    {
        title: "CSS",
        icon: css,
    },
    {
        title: "Javascript, Typescript",
        icon: typescript,
    },
    {
        title: "Web Developer (Angualar, React)",
        icon: web,
    },
    {
        title: "Flutter Developer",
        icon: mobile,
    },
    {
        title: "AWS(EC2)",
        icon: aws,
    },
    {
        title: "GIT Hub",
        icon: git,
    },
    {
        title: "Java",
        icon: java,
    },


];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
    {
        name: "Angualr",
        icon: angular,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Flutter",
        icon: flutter,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Three JS (Basics)",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "aws",
        icon: aws,
    },
    {
        name: "java",
        icon: java,
    }
];

const experiences = [
    {
        title: "Customer Service",
        company_name: "Gorkha Department Store, Nepal",
        icon: gds,
        iconBg: "#E6DEDD",
        date: "Dec 2017 - July 2018",
        points: [
            "Cusotmer Service",
            "Cash Handling",
            "Store opening and closing responsibilities",

        ],
    },
    {
        title: "Customer Service",
        company_name: "Momo's Café and Restaurant",
        icon: momosCafe,
        iconBg: "#383E56",
        date: "Jan 2019 - Feb 2020",
        points: [
            "Juggling many tasks",
            "Enthusiastic and constant customer",
            "Responsible for opening and closing of the cafe"
        ],
    },
    {
        title: "Team Member",
        company_name: "Officeworks",
        icon: officeworks,
        iconBg: "#383E56",
        date: "April 2020 - Present",
        points: [
            "Dealing with customer’s technical issues and fixing it.",
            "Customers to find suitable technological devices .",
            "Working at the counter (Point of Sale) and handling cash.",
        ],
    },
    {
        title: "Flutter Internship",
        company_name: "Liquimech, Canning Vale, Perth",
        icon: lqui,
        iconBg: "#E6DEDD",
        date: "July 2022 - Dec 2022",
        points: [
            "Cusotmer Service",
            "Cash Handling",
            "Store opening and closing responsibilities",

        ],
    },
];

const projects = [
    {
        name: "First Portfolio website",
        description:
            "I made this portfolio website on my first year of Uni to test and elaborate my skills of HTML, CSS and Javascript",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "Javascript",
                color: "pink-text-gradient",
            },
        ],
        image: firstPort,
        source_code_link: "https://geeyas.github.io/MyResume/",
    },
    {
        name: "Uni Assignment",
        description:
            "I developed this website as my uni assignment on my first year",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "Javascript",
                color: "pink-text-gradient",
            },
        ],
        image: electPort,
        source_code_link: "http://infotech.scu.edu.au/~gachar10/gacharya_ISY10209_Ass3_index.html",
    },
    {
        name: "Turtle Game (Java project)",
        description:
            "It is a Uni assignment developed on my second year using Java language.",
        tags: [
            {
                name: "Java",
                color: "blue-text-gradient",
            },
            {
                name: "Greenfoot (IDE)",
                color: "green-text-gradient",
            }
        ],
        image: greenfoot,
        source_code_link: "https://www.greenfoot.org/scenarios/26445",
    },
    {
        name: "Final Year Project",
        description:
            "It is our final year project developed with my team. We searched for a real client and based on his requirements that he need for his business we developed this website. We followed agile methodology as a project management. We used Jira and confluence to keep track of our work and assign task to eachother (Tutor was our scrum master).",
        tags: [
            {
                name: "Angular",
                color: "blue-text-gradient",
            },
            {
                name: "Typescript",
                color: "green-text-gradient",
            },
            {
                name: "MySQl",
                color: "pink-text-gradient",
            },
            {
                name: "Relational Database (AWS)",
                color: "blue-text-gradient",
            },
            {
                name: "EC2 (AWS - Hosting)",
                color: "green-text-gradient",
            },
        ],
        image: mcgarage,
        source_code_link: "http://themcgarage.com/",
    },
];

export { services, technologies, experiences, projects };