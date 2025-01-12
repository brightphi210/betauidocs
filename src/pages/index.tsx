import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';


// src/pages/index.js
import React, { useEffect } from 'react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className='headerMine'>
      <Link
        className="buttona button--secondary button--lg"
        to="https://betaui.vercel.app/">
        Beta UI Website
      </Link>

      <Link
        className="button button--secondary button--lg"
        to="/docs/Beginning/intro">
        Beta UI Docs - 5min ⏱️
      </Link>
  </div>
  );
}

export default function Home(): ReactNode {

  // useEffect(() => {
  //   window.location.href = 'https://betaui.vercel.app/';
  // }, []);

  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}
