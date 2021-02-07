import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Header } from '../components';

import styles from './results.module.css';

export default ({
  location: {
    state: { authors = [], lemma = '' },
  },
}) => {
  const APOLLO_QUERY = gql`
    {
      latin {
        lemma(lemma: "${lemma}") {
          occurrences {
            line
          }
        }
      }
    }
  `;
  const [result] = useQuery(APOLLO_QUERY);
  /*
  const {
    data: {
      latin: {
        lemma: { occurences },
      },
    },
  } = result;
  */
  return (
    <div className={styles.container}>
      <Header>Latin Diachronic Analysis</Header>
      <div className={styles.main}>
        <h2 className={styles.results}>
          {fake.count} results for <span className={styles.lemma}>{lemma}</span>
        </h2>
        {fake.occurrences.map(occurence => (
          <div className={styles.occurence}>
            <h4 className={styles.occurenceSourceName}>
              {occurence.source.name.substring(
                0,
                occurence.source.name.length - 4
              )}
            </h4>
            <p className={styles.occurenceLine}>
              {occurence.line.split(' ').map(word => {
                if (word.toLowerCase() === lemma.toLowerCase()) {
                  return <b> {word} </b>;
                }
                return ` ${word} `;
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const fake = {
  count: 1068,
  occurrences: [
    {
      line: 'populariter loquatur, esse interdum paulo hebetiorem. sed',
      source: {
        name: 'De Finibus.txt',
      },
    },
    {
      line:
        'sententiam dicere. Interdum, ut Pomponius scribit, recte nudo pacto fiet compromissum, ut',
      source: {
        name: 'Digesta Iustiniani.txt',
      },
    },
    {
      line:
        'rosei coloris digitos habentem, interdum κροκόπεπλον dicit Auroram,',
      source: {
        name: 'In Vergilii Aeneidos Libros.txt',
      },
    },
    {
      line: 'prospicit occasus, interdum respicit ortus,',
      source: {
        name: 'Metamorphoses.txt',
      },
    },
    {
      line: 'interdum Eurus, quem quidam Vulturnum appellant.',
      source: {
        name: 'De Re Rustica.txt',
      },
    },
    {
      line:
        'persequendarum gratia haec actio. Interdum quibusdam nec ex iustis possessionibus',
      source: {
        name: 'Digesta Iustiniani.txt',
      },
    },
    {
      line: 'discutitur. interdum magis prosunt gramina concisa et his',
      source: {
        name: 'De Re Rustica.txt',
      },
    },
    {
      line:
        'etiam hominis commodati custodia praestetur, apud ueteres dubitatum est. nam interdum',
      source: {
        name: 'Digesta Iustiniani.txt',
      },
    },
  ],
};
