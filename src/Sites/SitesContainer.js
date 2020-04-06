import React from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SiteStartseiteContainer from './Startseite/SiteStartseiteContainer';
import Impressum from './Impressum';
import Datenschutz from './Datenschutz';
import ease from 'Styles/Transitions.js';
import LocomotiveScroll from 'locomotive-scroll';

export default class SitesContainer extends React.Component {
  render() {

    const variants = {
      initial: {
        y: 300,
        opacity: 0
      },
      enter: {
        y: 0,
        opacity: 1
      },
      exit: {
        y: 0,
        opacity: 0,
        transition: {
          duration: 0.2
        }
      }
    };


    return (
        <React.Fragment>
          <Route
          render={({ location }) => (
          <AnimatePresence initial={false}>
            <motion.div
                  variants={variants}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  transition={{ ...ease.quint(0.9).out }}
                  key={location.pathname}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={SiteStartseiteContainer}/>
                    <Route path="/impressum" component={Impressum}/>
                    <Route path="/datenschutzerklaerung" component={Datenschutz}/>
                  </Switch>
            </motion.div>
          </AnimatePresence>
          )}
        />
        </React.Fragment>
    );
  }
}
