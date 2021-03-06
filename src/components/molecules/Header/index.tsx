import Logo from '@assets/icons/logo.svg';
import Hamburger from '@components/atoms/Hamburger';
import ThemeToggle from '@components/atoms/ThemeToggle';
import Link from 'next/link';
import { Dispatch, ReactNode, SetStateAction } from 'react';

import styles from './header.module.scss';

interface DocumentationProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  variant: 'documentation';
}

interface LandingProps {
  children: ReactNode;
  variant: 'landing';
}

type Props = DocumentationProps | LandingProps;

const Header = (props: Props) => (
  <header className={styles.header}>
    <Link href="/">
      <a className={styles.branding} aria-label="Home">
        <Logo />
      </a>
    </Link>
    <div className={styles.siteNavigation}>
      {props.variant === 'landing' && <nav>{props.children}</nav>}
      <ThemeToggle />
      {props.variant === 'documentation' && (
        <Hamburger isSidebarOpen={props.isSidebarOpen} setIsSidebarOpen={props.setIsSidebarOpen} />
      )}
    </div>
  </header>
);

export default Header;
