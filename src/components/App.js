import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../containers/navigation/Navbar.container';
import Hero from './hero/Hero.component';
import Footer from './footer/Footer.component';
import MenuModal from '../containers/menu-modal/MenuModal.container';
import Contact from './contact/Contact.component';
import About from '../containers/about/About.container';
import ForParents from './for-parents/ForParents.component';
import ForTeachers from './for-teachers/ForTeachers.component';
import TwilioFlexWebChat from './twilio-flexweb-chat/TwilioFlexWebChat.component';
import ArticleList from '../containers/article-list/ArticleList.container';

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <MenuModal />
      <Route exact path="/" component={Hero} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about" component={About} />
      <Route exact path="/for-teachers" component={ ForTeachers }/>
      <Route exact path="/for-parents" component={ ForParents }/>
      <Route exact path="/articles" component={ ArticleList }/>
      <TwilioFlexWebChat />
      <Footer />
    </Router>
    </>
  )
};

export default App;
