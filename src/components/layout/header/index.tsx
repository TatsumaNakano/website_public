import React, { Component } from 'react'
import HeaderLink from './headerLink'
import Logo from '../../logo';
import * as styles from './styles.module.scss';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <ul>
          <HeaderLink to="/" name="Work" />
          <HeaderLink to="/products" name="Products" />
          <Logo />
          <HeaderLink to="/blog" name="Blog" />
          <HeaderLink to="/about" name="About" />
        </ul>
      </header>
    )
  }
}
