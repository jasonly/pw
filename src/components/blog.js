import React from 'react';
import grid from '../styles/grid.styles.js';
import style from './blog.styles.js';

import { css } from 'aphrodite/no-important';

// take some json, iterate over posts and generate a section based on the data

const Blog = () => (
  <div>
    <section className={css(grid.row)}>
      <div className={css(grid.col, style.post)}>Bacon <a href="#">ipsum dolor</a> amet rump pork belly short loin, flank brisket pork shank ham spare ribs burgdoggen t-bone. Landjaeger strip steak pork chop spare ribs tenderloin tongue ribeye fatback picanha capicola biltong buffalo bresaola. Leberkas ham hock prosciutto, salami kevin meatball pork loin filet mignon pork chop. Porchetta pig salami hamburger meatball ham hock. Pastrami meatball beef andouille.</div>
      <div className={css(grid.col, style.post)}>Strip steak flank boudin bacon hamburger turkey porchetta landjaeger. Beef jowl short ribs filet mignon, burgdoggen biltong hamburger cupim andouille. Jowl boudin salami ground round, pork chop tri-tip andouille burgdoggen tenderloin bacon prosciutto spare ribs pancetta shank. Buffalo pork belly bresaola tail bacon pancetta spare ribs hamburger pastrami turducken cupim. Sausage pig flank chuck t-bone.</div>
    </section>
    <section className={css(grid.row)}>
      <div className={css(grid.col, style.post)}>
        Strip steak flank boudin bacon hamburger turkey porchetta landjaeger. Beef jowl short ribs filet mignon, burgdoggen biltong hamburger cupim andouille. Jowl boudin salami ground round, pork chop tri-tip andouille burgdoggen tenderloin bacon prosciutto spare ribs pancetta shank. Buffalo pork belly bresaola tail bacon pancetta spare ribs hamburger pastrami turducken cupim. Sausage pig flank chuck t-bone.
      </div>
    </section>
  </div>
)

export default Blog;
