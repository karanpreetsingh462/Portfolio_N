import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

const transitionProps = {
  duration: 0.9,
  ease: [0.25, 0.1, 0.25, 1], // smoother ease (similar to ease-in-out)
};

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <motion.h1
              className="display-4 mb-4"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transitionProps }}
            >
              About me
            </motion.h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <motion.h3
              className="color_sec py-4"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...transitionProps }}
            >
              {dataabout.title}
            </motion.h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...transitionProps }}
            >
              <p>{dataabout.aboutme}</p>
            </motion.div>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <motion.h3
              className="color_sec py-4"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...transitionProps }}
            >
              Work Timeline
            </motion.h3>
          </Col>
          <Col lg="7">
            <motion.table
              className="table caption-top"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ...transitionProps }}
            >
              <tbody>
                {worktimeline.map((data, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ...transitionProps, delay: i * 0.2 }}
                  >
                    <th scope="row">{data.jobtitle}</th>
                    <td>{data.where}</td>
                    <td>{data.date}</td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <motion.h3
              className="color_sec py-4"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...transitionProps }}
            >
              Skills
            </motion.h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ...transitionProps, delay: i * 0.15 }}
              >
                <h3 className="progress-title">{data.name}</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: `${data.value}%` }}
                  >
                    <div className="progress-value">{data.value}%</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <motion.h3
              className="color_sec py-4"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...transitionProps }}
            >
              Services
            </motion.h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => (
              <motion.div
                className="service_ py-4"
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ ...transitionProps, delay: i * 0.2 }}
              >
                <h5 className="service__title">{data.title}</h5>
                <p className="service_desc">{data.description}</p>
              </motion.div>
            ))}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
