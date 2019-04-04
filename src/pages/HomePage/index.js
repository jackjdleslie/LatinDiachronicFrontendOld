import React, { useContext } from 'react';

import {
  Header,
  Status,
  Title,
  Footer,
  Jumbo,
  Block,
  Subtitle,
  Button,
} from '../../components';

import styles from './home.module.css';

import { AppContext } from '../../context';

export default function HomePage({ history }) {
  const { isSynced } = useContext(AppContext);

  return (
    <div className={styles.container}>
      <Header>
        <Title
          text="Latin Diachronic Analysis"
          onClick={() => history.push('/')}
        />
        <Status text={isSynced ? 'Online' : 'Offline'} />
      </Header>
      <Jumbo title="An innovative toolkit for the quantitative computational analysis of the Latin language">
        This project revolves around allowing for a flexible and easy to use
        interface to run quantitative queries on Latin literature. In
        particular, we focus on providing a tool for statistical computational
        analysis of the Latin language, diachronic frequency analysis and aid
        for digital intertextual source.
      </Jumbo>
      <Block>
        <Subtitle text={`Search for occurences of lemmata`} />
        <p className={styles.text}>
          Scan and record all the lemmas attested in the whole corpus of extant
          Latin Literature by attributing different inflected word-forms to the
          correct headword(s) using the technology LEMLAT.
        </p>
        <Button
          nomargin
          onClick={() => {
            history.push('/search/lemmata');
          }}
        >
          Go
        </Button>
      </Block>
      <Block>
        <Subtitle
          text={`Detect intersection of lemmata between a set of authors`}
        />
        <p className={styles.text}>
          Detect the words (and/or the word-forms) shared only by two authors in
          the entire Latin literature. This function has been designed to
          support the digital study of intertextuality.
        </p>
        <Button nomargin onClick={() => history.push('/search/intersection')}>
          Go
        </Button>
      </Block>
      <Footer />
    </div>
  );
}
