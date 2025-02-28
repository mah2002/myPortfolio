import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { useTranslation } from "react-i18next";

export const ProjectCard = ({
  project: {title, imageSrc, description, skills, demo, source }, id
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{t('projectTitle'+id)}</h3>
      <p className={styles.description}>{t('projecDescription'+id)}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
     
      <div className={styles.links}>
        {
         demo!="" ? <a href={demo} className={styles.link}>  Demo
         </a>: <></>
        } 
        {
         source!="" ?         <a href={source} className={styles.link}>
         Source </a>: <></>
        } 
      </div>
    </div>
  );
};
