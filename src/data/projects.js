import auraVideo from '../demo/AuraRose.mp4';
import userAppVideo from '../demo/busBooking.mp4';
import musicVideo from '../demo/music.mp4';
import todoVideo from '../demo/todo.mp4';
import faceRecognitionImage from '../assets/face-recognition.png';

export const projects = [
  {
    title: "Premium E-Commerce Platform",
    description: "Built a premium e-commerce platform focusing on modern UI and performance. Designed elegant, responsive interfaces with glassmorphism and smooth micro-interactions. Implemented secure authentication and dynamic cart/wishlist features. Managed state with React Context API and integrated a mock backend using json-server.",
    image: "https://placehold.co/600x400",
    video: auraVideo,
    technologies: ["ReactJS", "Firebase", "json-server"],
    liveLink: "https://aurarose-boutique.netlify.app/",
    githubLink: "https://github.com/Reshma-murugan/e-commerce-boutique-website"
  },
  {
    title: "Bus Reservation System",
    description: "A premium full-stack reservation system featuring separate admin and user clients. Designed segment-based seat selection allowing seats to be reserved on non-overlapping routes of a single trip. Built with transactional safety using Django row-level locking (select_for_update) to prevent concurrent double-booking collisions.",
    image: "https://placehold.co/600x400",
    video: userAppVideo,
    technologies: ["ReactJS", "Django REST Framework", "MySQL", "JWT Auth"],
    liveLink: null,
    githubLink: "https://github.com/Reshma-murugan/django-react-busbook"
  },
  {
    title: "Face Recognition Attendance System",
    description: "A Django-based attendance system featuring real-time face recognition and liveness detection (blink-based anti-spoofing). Includes a secure web admin panel for managing student profiles, classes, and daily attendance logs with duplicate prevention.",
    image: faceRecognitionImage,
    technologies: ["Python", "Django", "dlib", "OpenCV", "SQLite"],
    liveLink: null,
    githubLink: "https://github.com/Reshma-murugan"
  },
  {
    title: "Beatify — Music Streaming App",
    description: "A beautiful, modern music streaming frontend application with iTunes API integration. Features smooth Framer Motion transitions, responsive custom-property styling, recently played track tracking, and favorites/playlist management.",
    image: "https://placehold.co/600x400",
    video: musicVideo,
    technologies: ["ReactJS", "iTunes API"],
    liveLink: null,
    githubLink: "https://github.com/Reshma-murugan/music-streaming-web-application"
  },
  {
    title: "Todo — Full‑Stack Task Manager",
    description: "A full-stack task management application featuring JWT authentication and an interactive analytics dashboard. Integrates Chart.js dynamic donut charts to visualize task distributions (completed, pending, overdue) with real-time updates.",
    image: "https://placehold.co/600x400",
    video: todoVideo,
    technologies: ["ReactJS", "Django REST Framework", "MySQL", "JWT Auth", "Chart.js"],
    liveLink: null,
    githubLink: "https://github.com/Reshma-murugan/todo-app"
  }
];
