import React from 'react'
import translate from '../../pages/api/translate';
import FirstHeader from '../first-header/FirstHeader';
import SecondHeader from '../second-header/SecondHeader';
import ThirdHeader from '../third-header/ThirdHeader';

const NavBar = ({ home, configurationProps, translate, }: any) => {

  return (
    <>

      <FirstHeader
        translate={translate}
      />
      <SecondHeader
        home={home}
        translate={translate}
        configurationProps={configurationProps}
      />
      <ThirdHeader
        translate={translate}
        configurationProps={configurationProps}
      />

    </>
  )
}

export default NavBar