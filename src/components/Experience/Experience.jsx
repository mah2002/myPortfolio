import React from "react";
import { useTranslation } from 'react-i18next';
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>{t('Experience')}</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${t('role'+id)}, ${t('organisation'+id)}`}</h3>
                  <p>{`${t('startDate'+id)} - ${t('endDate'+id)}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id2) => {
                      return <li key={id2}>{t('experiences'+id+'-'+id2)}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
