import React from 'react';

import Header from '../../components/Header';
import Status from '../../components/Status';
import Title from '../../components/Title';
import Footer from '../../components/Footer';
import Jumbo from '../../components/Jumbo';
import Block from '../../components/Block';
import Subtitle from '../../components/Subtitle';
import Button from '../../components/Button';

import useSync from '../../hooks/useSync';

import styles from './home.module.css';

export default function Home({ history }) {
  const isSynced = useSync();

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
          Latin Literature by attributing different inflected word-forms (e.g.
          genitive sing., dative pl. etc for names; pres. 1 pl., ppf 2 sing. etc
          for verbs) to the correct headword(s) using the technology LEMLAT. The
          headwords are respectively presented in the nominative case for names
          and in the first singular person of the present for verbs.
        </p>
        <Button nomargin onClick={() => history.push('/search/lemmata')}>
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
          support the digital study of intertextuality. For instance, users can
          easily see which words first attested in Ovid are used only by Statius
          in extant Latin literature: by revealing meaningful reuses of
          extremely rare forms the lists created by our program can contribute
          significantly to the study of an author’s use of allusivity and style.
        </p>
        <Button nomargin onClick={() => history.push('/search/intersection')}>
          Go
        </Button>
      </Block>
      <Footer />
    </div>
  );
}
