import React, { Component } from 'react';

//CSS and assets
import classes from './MindMape.module.css';
// import blockOneImage from '../../../assets/images/MindMape/mindMapeHeader.png';
import signUpImage from '../../../assets/images/MindMape/signUpFormHalfWidth.png';
import gitBranchingImage from '../../../assets/images/MindMape/git-branching-model-croppedjpg.jpg';
import databasePlanImage from '../../../assets/images/MindMape/mindMape ERD v2.1.png';
import avatarSelectionImg from '../../../assets/images/MindMape/Avatar selection2.gif';
import profilePageImg from '../../../assets/images/MindMape/profilePage3.png';
import writeArticleImg from '../../../assets/images/MindMape/WriteArticle.png';
import articlesPageImg from '../../../assets/images/MindMape/Articles page.png';
import commentSectionImg from '../../../assets/images/MindMape/WriteComment.png';
import ProfanityFilterExample from '../../../assets/images/MindMape/Banned Username.gif';

//Components
import Aux from '../../../hoc/Auxillary/Auxillary';
import ContentBlock from '../../ContentBlock/ContentBlock';
import Backdrop from '../../../Components/UI/Backdrop/Backdrop';

class MindMape extends Component {
    state = {
        showCommentsExpanded: false,
        showArticlesExpanded: false,
        showWriteExpanded: false,
        smallScreen: false
    }

    componentDidMount = () => {
        const widthCheck = window.innerWidth;
        console.log(`WidthCheck: ${widthCheck}`);

        // const heightCheck = document.body.scrollHeight;

        if (widthCheck <= 1000) {
            this.smallScreenHandler();
        }
    }

    smallScreenHandler() {
        this.setState({ smallScreen: true });
        // console.log(this.state.smallScreen);
    }

    //TODO finesse the positioning of these expanding divs
    articlesAndCommentsClickHandler = (event) => {
        console.log(event.target.alt);
        let whichDiv = `show${event.target.alt}Expanded`;
        console.log(whichDiv);

        if (event.target.alt === undefined) {
            this.setState({ showCommentsExpanded: false });
            this.setState({ showArticlesExpanded: false });
            this.setState({ showWriteExpanded: false });
        }

        if (!this.state.showCommentsExpanded && whichDiv === 'showCommentsExpanded') {
            this.setState({ showCommentsExpanded: true });
        } else if (this.state.showCommentsExpanded && whichDiv === 'showCommentsExpanded') {
            this.setState({ showCommentsExpanded: false });
        } if (!this.state.showArticlesExpanded && whichDiv === 'showArticlesExpanded') {
            this.setState({ showArticlesExpanded: true });
        } else if (this.state.showArticlesExpanded && whichDiv === 'showArticlesExpanded') {
            this.setState({ showArticlesExpanded: false });
        } if (!this.state.showWriteExpanded && whichDiv === 'showWriteExpanded') {
            this.setState({ showWriteExpanded: true });
        } else if (this.state.showWriteExpanded && whichDiv === 'showWriteExpanded') {
            this.setState({ showWriteExpanded: false });
        }
    }


    render() {
        return (
            <Aux>
                <ContentBlock topBlock={true}>
                    <div className={classes.CB0}>
                        {/* <div className={classes.CB0Background} style={{ backgroundImage: `url(${blockOneImage})` }}>
                        </div> */}
                        <div className={classes.LaunchCard}>
                            <h1>Welcome To mindMAPE</h1>
                            <a href='/mindmapeProper'><h2>Click here to try it out</h2></a>
                            <h2>...Or keep scrolling to read how it was built!</h2>
                        </div>
                    </div>
                </ContentBlock>

                <ContentBlock topBlock={true}>
                    <div className={classes.CB1}>
                        {/* <div className={classes.CB1Background} style={{ backgroundImage: `url(${blockOneImage})` }}> */}
                        {/* </div> */}
                        <div className={classes.CB1Text}>
                            <h1>The Brief</h1>
                            <h2>Create a blogging platform with the following features:</h2>
                            <ul>
                                <li>Users can create and edit their unique accounts</li>
                                <li>A home-page with a list of articles that are available for everyone to view</li>
                                <li>Logged in users can write, edit and delete their own articles</li>
                                <li>Logged in users can also view and write comments, delete their own comments, and moderate others' comments on their own articles</li>
                                <li>All articles and user information is stored in a database, with no passwords saved as plaintext</li>
                                <li>An extra feature of our team's choosing - we chose to implement a toggleable site-wide profanity filter</li>
                            </ul>
                        </div>
                    </div>
                </ContentBlock>
                {this.state.smallScreen
                    ?
                    <div className={classes.MobilePanelContainer}>
                        <ContentBlock>
                            <h1 className={classes.MobilePanelsHeading}>Planning</h1>
                            <div className={classes.MobilePanel} style={{ backgroundColor: 'rgb(198, 222, 192)' }}>
                                <img src={gitBranchingImage} alt="Feature Branching Diagram" style={{ margin: '0' }} />
                                <div className={classes.VersionControlBlurb}>
                                    <h2>Git Feature Branching</h2>
                                    <p>Our project was managed in a GitLab repository. We researched early on how to effectively use Git and decided on the ‘Feature Branching’ workflow. We would individually work on features on our own branches and when completed would submit a pull request which would be peer reviewed. The other team members would then pull from upstream, alerting them to any potential merge conflicts with their features. These conflicts would be more easily resolved while actively working on these conflicting areas. This worked extremely well as conflicts were regularly identified and resolved, and all team members had up-to-date versions of the project.</p>
                                </div>
                            </div>
                        </ContentBlock>
                        <ContentBlock>
                            <div className={classes.MobilePanel} style={{ backgroundColor: 'rgb(51, 52, 47)' }}>
                                <div className={classes.DatabasePlanBlurb} style={{ color: 'rgb(198, 222, 192)' }}>
                                    <h2>Database Design</h2>
                                    <p>The database we used was SQL so we started by outlining the entities, their attributes and relationships between them. We decided that the primary keys for users, articles and comments would all be automatically generated integers (using not null primary key in the SQL set-up). <br />
                                        <br />
                                        The main entity was the users as they have relationships with all of the other entities, and have the most attributes. The articles and comments both had userId as foreign keys, as they each have exactly one user that posts them. However, comments differed from articles because a comment also had and articleId foreign key, again because a comment is associated with one article. Additionally comments had a replyTo_Id attribute that was a foreign key of commentId. This was to add in the functionality of being able to reply to comments.  </p>
                                </div>
                                <img src={databasePlanImage} alt="Database Plan" style={{ margin: '0' }} />
                            </div>
                        </ContentBlock>
                    </div>
                    :
                    <ContentBlock>
                        <div className={classes.CB2}>
                            <h1>Planning</h1>
                            <div className={classes.VersionControl}>
                                <img src={gitBranchingImage} alt="Feature Branching Diagram" />
                                <div className={classes.VersionControlBlurb}>
                                    <h2>Git Feature Branching</h2>
                                    <p>Our project was managed in a GitLab repository. We researched early on how to effectively use Git and decided on the ‘Feature Branching’ workflow. We would individually work on features on our own branches and when completed would push to upstream, informing the other team members we had done so. The other team members would then pull from upstream, alerting them to any potential merge conflicts with their features. These conflicts would be more easily resolved while actively working on these conflicting areas. This worked extremely well as conflicts were regularly identified and resolved, and all team members had up-to-date versions of the project.</p>
                                </div>
                            </div>
                            <div className={classes.DatabasePlan}>
                                <div className={classes.DatabasePlanBlurb}>
                                    <h2>Database Design</h2>
                                    <p>The database we used was SQL so we started by outlining the entities, their attributes and relationships between them. We decided that the primary keys for      users, articles and comments would all be automatically generated integers (using not null primary key in the SQL set-up). <br />
                                        <br />
                                        The main entity was the users as they have relationships with all of the other entities, and have the most attributes. The articles and comments both had userId as foreign keys, as they each have exactly one user that posts them. However, comments differed from articles because a comment also had and articleId foreign key, again because a comment is associated with one article. Additionally comments had a replyTo_Id attribute that was a foreign key of commentId. This was to add in the functionality of being able to reply to comments.  </p>
                                </div>
                                <img src={databasePlanImage} alt="Database Plan" />
                            </div>
                        </div>
                    </ContentBlock>
                }

                {this.state.smallScreen
                    ?
                    <div className={classes.MobilePanelContainer}>
                        <h1 className={classes.MobilePanelsHeading}>Sign Up</h1>
                        <ContentBlock>
                            <div className={classes.SignUpFormImg} style={{ backgroundImage: `url(${signUpImage})` }}></div>
                        </ContentBlock>
                        <ContentBlock>
                            <div className={classes.SignUpBlock} >
                                <div className={classes.SignUpRightBlock}>
                                    <div className={classes.SignUpBlurb}>
                                        <p>The account creation page was the form seen above. <br />
                                This form was submitted to the database using a POST request through Express and a custom Data Access Object module. <br />
                                On the database the user's password was not stored as plaintext. Instead, the NPM module 'Crypto' was used to salt and hash the password. <br />
                                            <br />
                                            <br />
                                Below is the Avatar selction interface, which was located beneath the form on the website.
                                This gave users the option to upload an avatar of their own choosing. The NPM module 'fs' renamed and saved the file in the public folder, followed by the 'Jimp' module resizing the image to a thumbnail and overwriting the original full-sized image. <br />
                                Care was taken so that only one image could be uploaded or selected.
                            </p>
                                        <img src={avatarSelectionImg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </ContentBlock>
                    </div>
                    :
                    <ContentBlock backgroundColour={'white'}>
                        <div className={classes.SignUpBlock}>
                            <div className={classes.SignUpFormImg} style={{ backgroundImage: `url(${signUpImage})`}}></div>
                            <div className={classes.SignUpRightBlock}>
                                <div className={classes.SignUpBlurb}>
                                    <p>The account creation page was the form seen on the left. <br />
                                This form was submitted to the database using a POST request through Express and a custom Data Access Object module. <br />
                                On the database the user's password was not stored as plaintext. Instead, the NPM module 'Crypto' was used to salt and hash the password. <br />
                                        <br />
                                        <br />
                                Below is the Avatar selction interface, which was located beneath the form on the website.
                                This gave users the option to upload an avatar of their own choosing. The NPM module 'fs' renamed and saved the file in the public folder, followed by the 'Jimp' module resizing the image to a thumbnail and overwriting the original full-sized image. <br />
                                Care was taken so that only one image could be uploaded or selected.
                            </p>
                                    <img src={avatarSelectionImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </ContentBlock>
                }
                <ContentBlock>
                    <div className={classes.Profile}>
                        <h1>Profile Page</h1>
                        <p>Below is the profile page once signed in. The user can log in and out, with authentication being handled by the Data Access Object and Crypto, adding a session and assigning
                        them a cookie to access their account's data. <br />
                            <br />
                        On the 'My Profile' tab users can edit and delete their account, as well as all of their account's articles and comments in the 'My Article History' tab.
                    </p>
                        <img src={profilePageImg} alt="profilePageImg" />
                    </div>
                </ContentBlock>


                {/* This whole section needs to be revised? */}
                {/* TODO add in conditional content blocks */}
                {this.state.smallScreen
                    ?
                    <div className={classes.MobilePanelContainer}>
                        <h1 className={classes.MobilePanelsHeading}>Articles and Comments</h1>
                        <ContentBlock>
                            <div className={classes.MobilePanel} style={{ backgroundColor: 'rgb(51, 52, 47)', color: 'rgb(198, 222, 192)' }}>
                                <h3>All users can view articles. The home page of MindMape is a list of all of the articles posted, with the most recent at the top.</h3>
                                <img src={articlesPageImg} alt="Articles" />
                            </div>
                        </ContentBlock>
                        <ContentBlock>
                            <div className={classes.MobilePanel} style={{ backgroundColor: 'rgb(198, 222, 192)', color: 'rgb(51, 52, 47)' }}>
                                <h3>To write articles an embedded WYSIWYG editor, TinyMCE, was used. This allowed full editing of the text and images could be imported.<br />
                                    Any styling and images were maintained as the article was saved as HTML on the server.</h3>
                                <img src={writeArticleImg} alt="Write" />
                            </div>
                        </ContentBlock>
                        <ContentBlock>
                            <div className={classes.MobilePanel} style={{ backgroundColor: 'rgb(51, 52, 47)', color: 'rgb(198, 222, 192)' }}>
                                <h3>The comments section below an article allows users to write a comment directly to the article, or reply to other comments.<br />These nested comments can be collapsed to reduce clutter.</h3>
                                <img src={commentSectionImg} alt="Comments" />
                            </div>
                        </ContentBlock>
                    </div>
                    :
                    <ContentBlock>
                        <div className={classes.Articles}>
                            <h1>Articles and Comments</h1>
                            <h2>Click on the images for more info!</h2>
                            <div className={classes.PanelContainer}>
                                <Backdrop show={this.state.showArticlesExpanded} clicked={this.articlesAndCommentsClickHandler} />
                                <Backdrop show={this.state.showWriteExpanded} clicked={this.articlesAndCommentsClickHandler} />
                                <div className={classes.ArticlesPanel}>
                                    <div onClick={this.articlesAndCommentsClickHandler}
                                        style={{
                                            transform: this.state.showArticlesExpanded ? 'scale(1.5) translate(25%, 5vh)' : '',
                                            transformOrigin: 'top',
                                            width: this.state.showArticlesExpanded ? '100%' : '',
                                            zIndex: this.state.showArticlesExpanded ? '51' : '',
                                            borderRadius: this.state.showArticlesExpanded ? '5px' : '0',
                                        }}>
                                        <h3 style={{
                                            transform: this.state.showArticlesExpanded ? 'translateY(0)' : 'translateY(50px)',
                                            transitionDuration: '0.5s'
                                        }}>All users can view articles.</h3>
                                        <p style={{
                                            transform: this.state.showArticlesExpanded ? 'translateY(0)' : 'translateY(70px)',
                                            transitionDuration: '0.5s',
                                            zIndex: this.state.showArticlesExpanded ? '1' : '-1',
                                            opacity: this.state.showArticlesExpanded ? '1' : '0'
                                        }}>The home page of MindMape is a list of all of the articles posted, with the most recent at the top.</p>
                                        <img src={articlesPageImg} alt="Articles" />
                                    </div>
                                    <div onClick={this.articlesAndCommentsClickHandler}
                                        style={{
                                            transform: this.state.showWriteExpanded ? 'scale(1.5) translate(-25%, 5vh)' : '',
                                            transformOrigin: 'top',
                                            width: this.state.showWriteExpanded ? '100%' : '',
                                            zIndex: this.state.showWriteExpanded ? '51' : '',
                                            borderRadius: this.state.showWriteExpanded ? '5px' : '0',
                                        }}>
                                        <h3 style={{
                                            transform: this.state.showWriteExpanded ? 'translateY(0)' : 'translateY(90px)',
                                            transitionDuration: '0.5s'
                                        }}>Logged in users can write articles and comments.</h3>
                                        <p style={{
                                            transform: this.state.showWriteExpanded ? 'translateY(0)' : 'translateY(200px)',
                                            transitionDuration: '0.5s',
                                            zIndex: this.state.showWriteExpanded ? '1' : '-1',
                                            opacity: this.state.showWriteExpanded ? '1' : '0'
                                        }}>To write articles an embedded WYSIWYG editor, TinyMCE, was used. This allowed full editing of the text and images could be imported.<br />
                                    Any styling and images were maintained as the article was saved as HTML on the server.</p>
                                        <img src={writeArticleImg} alt="Write" />
                                    </div>
                                </div>
                                <Backdrop show={this.state.showCommentsExpanded} clicked={this.articlesAndCommentsClickHandler} />
                                <div className={classes.CommentsPanel}>
                                    <div
                                        onClick={this.articlesAndCommentsClickHandler}
                                        style={{
                                            transform: this.state.showCommentsExpanded ? 'scale(1.5) translateY(-10vh)' : '',
                                            transformOrigin: 'bottom',
                                            width: this.state.showCommentsExpanded ? '100%' : '',
                                            zIndex: this.state.showCommentsExpanded ? '51' : '',
                                            borderRadius: this.state.showCommentsExpanded ? '5px' : '0',
                                        }}
                                    >
                                        <h3 style={{
                                            transform: this.state.showCommentsExpanded ? 'translateY(0)' : 'translateY(70px)',
                                            transitionDuration: '0.5s'
                                        }}>Each article has its own comments section.</h3>
                                        <p style={{
                                            transform: this.state.showCommentsExpanded ? 'translateY(0)' : 'translateY(100px)',
                                            transitionDuration: '0.5s',
                                            zIndex: this.state.showCommentsExpanded ? '1' : '-1',
                                            opacity: this.state.showCommentsExpanded ? '1' : '0'
                                        }}>The comments section below an article allows users to write a comment directly to the article, or reply to other comments.<br />These nested comments can be collapsed to reduce clutter.</p>
                                        <img src={commentSectionImg} alt="Comments" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ContentBlock>}


                {/*  */}

                <ContentBlock>
                    <div className={classes.ProfanityFilter}>
                        <h1>****ing Profanity Filter</h1>
                        <p>The extra feature we decided to add was a site-wide profanity fitler. It was set up by creating a Regular Expression containing all of the banned words. The profanity filter custom module then used two functions to either assess whether a banned word was found in the input string, using the string.match() function and returning true or false. This was employed in the username check as it was decided that usernames could not contain profanity at all.</p>
                        <img src={ProfanityFilterExample} alt="profanityFilterExample" />
                        <p>The second method was to find the any banned words in the input string and replace them with “****”, returning this ‘censored’ string. The main implementation of this profanity filter was to optionally censor articles. To do this the articles were stored in the database uncensored. If the reader clicked the ‘read censored article’ button, the article was parsed and any banned words replaced.
                        The profanity filter was also saved in a client-side javascript file as it was needed to check inputs such as usernames, and personal descriptions on the signup page. An option to censor an article on writing was also provided in the write article page.</p>
                    </div>
                </ContentBlock>
            </Aux>
        )
    }
}

export default MindMape;
