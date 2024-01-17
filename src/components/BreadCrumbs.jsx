//BreadCrumbs.jsx
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

//prop'larında değişiklik olmadığı sürece tekrar render edilmemelerini sağlamak memo.
const BreadCrumbs = React.memo(({ crumbs }) => {
  const match = useRouteMatch();

  const currentCrumb = crumbs.find(crumb => match.path.startsWith(crumb.path));

  return (
    <div>
      {crumbs.map((crumb, index) => (
        <span key={index}>
          <Link to={crumb.path}>{crumb.label}</Link>
          {index < crumbs.length - 1 && ' > '}
        </span>
      ))}
      {currentCrumb && ` > ${currentCrumb.label}`}
    </div>
  );
});

export default BreadCrumbs;