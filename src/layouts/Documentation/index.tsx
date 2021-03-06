import components from '@components/mdx';
import Sidebar from '@components/molecules/Sidebar';
import { MDXProvider } from '@mdx-js/react';
import { ReactNode, useEffect, useState } from 'react';

import styles from './documentation.module.scss';

type Props = {
  frontmatter: {
    title: string;
    description: string;
  };
  children?: ReactNode;
};

const Documentation = ({ frontmatter, children }: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  return (
    <div className={styles.documentation}>
      {isClient && <Sidebar />}
      <main>
        <article>
          <header>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.description}</p>
          </header>

          <MDXProvider components={components}>{children}</MDXProvider>
        </article>
      </main>
    </div>
  );
};

export default Documentation;
