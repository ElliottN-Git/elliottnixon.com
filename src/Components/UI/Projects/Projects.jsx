import React, { useState, useEffect, useRef, createRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";

//CSS and Assets
import classes from './Projects.module.css';
import cardVariants from './cardVariants';
import testImg from '../../../assets/images/heroImgBeach.png';

//Components
import ContentBlock from '../ContentBlock/ContentBlock';
import ProjectCard from './ProjectCard/ProjectCard';
import Carousel from '../Carousel/Carousel';
import CarouselSlide from '../Carousel/CarouselSlide';

//Data
//Moved static JSON file to Firebase realtime database
// import projects from './Projects.json';
// const projectsArr = projects.projects;
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
const firebaseConfig = {
    databaseURL: "https://elliotts-emporium.firebaseio.com",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const projectsDbRef = ref(database, 'projects');


//TODO:
// - Add framer-motion animations once the project pages are set up


const Projects = () => {
    const [projectsArr, setProjectsArr] = useState([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        await get(projectsDbRef, `projects`).then((snapshot) => {
            if (snapshot.exists()) {
                setProjectsArr(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    // console.log("projectsArr after fetchprojects(): ", projectsArr);

    //Framer motion setup for the project cards
    const controls1 = useAnimation();
    const [projCardScrollRef, projCardsInView] = useInView();
    useEffect(() => {
        if (projCardsInView) {
            controls1.start("onscreen");
        }
    }, [controls1, projCardsInView]);
    //

    //Framer motion setup for the project details section (back to project cards button)
    const controls2 = useAnimation();
    const [projDetailsScrollRef, projDetailsInView] = useInView();
    useEffect(() => {
        if (projDetailsInView) {
            controls2.start({
                opacity: 1
            });
        } else {
            controls2.start({
                opacity: 0
            });
        }
    }, [controls2, projDetailsInView]);
    //

    //Section refs - Passed to scrollToSection on project card click (section ref passed in prop to <ProjectCard> component)
    const projectCardsRef = useRef(null);
    const projectRefs = useRef([]);

    //Project card click handler
    const scrollToSection = (section) => {
        section.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>

            {/* <section className={classes.ProjectsCardsSection}> */}
            <section className={classes.ProjectsContentBlock} ref={projectCardsRef}>
                <span className={classes.ProjectsContentBlockHeader}>My Projects</span>
                <section className={classes.ProjectCardContainer} ref={projCardScrollRef}>
                    {/* Map the projects JSON to ProjectCard components */}
                    {projectsArr.map((project, index) => {
                        {/* First determine which column variant properties should be used given the index of the card */ }
                        let col = (index + 1) % 3;
                        if (col === 0) {
                            col = 3;
                        }
                        let cardVariantCol = "cardVariantsCol" + col;
                        return (
                            <ProjectCard
                                elId={index}
                                controls={controls1}
                                cardVariants={cardVariants[cardVariantCol]}
                                scrollRef={projectCardsRef}
                                text={project.title}
                                stack={project.stack}
                                link={project.link}
                                cardImage={project.image}
                                slides={project.slides}
                                scrollToSection={() => scrollToSection(projectRefs.current[index])}
                            />
                        )
                    })}
                </section>
            </section>
            {/* </section> */}
            <section className={classes.ProjectDetailsContainer} >
                <section style={{ marginTop: "1px" }} ref={projDetailsScrollRef}>
                    <motion.button
                        className={classes.ToProjectsBtn}
                        onClick={() => scrollToSection(projectCardsRef)}
                        animate={controls2}
                        initial={{ opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        ↑<br></br>Back to projects
                    </motion.button>
                    {/* Mapped projects */}
                    {projectsArr.map((project, index) => {
                        // console.log(project.slides);
                        if (project.slides !== undefined && project.slides.length !== 0) {
                            return (
                                <ContentBlock>
                                    <section
                                        className={classes.ProjectSection}
                                        ref={projectRefs.current[index] = createRef(null)}
                                    >
                                        <header>
                                            <span>{project.title}</span>
                                            {project.link
                                                ? //Change this to button custom component
                                                <section className={classes.ProjectLinkBtn}>
                                                    <a href={project.link} className={classes.ProjectLink}>
                                                        <p>Click here to try it out for yourself!</p>
                                                    </a>
                                                </section>
                                                : ''
                                            }
                                        </header>
                                        <Carousel slides={project.slides} />
                                    </section>
                                </ContentBlock>
                            )
                        }
                    })}
                </section>
            </section>
        </>
    )
}



export default Projects;
