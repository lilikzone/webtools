import React from 'react';

const MIcon = ({type}) => <span
  dangerouslySetInnerHTML={{
    __html: `<FontIcon class="material-icons">${type}</FontIcon>`,
  }}
                          />;

export default MIcon;
