import React from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SiteStartseiteContainer from './Startseite/SiteStartseiteContainer';
import Impressum from './Impressum';

export default class SitesContainer extends React.Component {
  render() {

    const variants = {
      initial: {
        x: "100vw",
        opacity: 0
      },
      enter: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 1
        }
      },
      exit: {
        x: 0,
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
          <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
                  variants={variants}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  key={location.pathname}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={SiteStartseiteContainer}/>
                    <Route path="/impressum" component={Impressum}/>
                  </Switch>
            </motion.div>
          </AnimatePresence>
          )}
        />
        </React.Fragment>
    );
  }
}
