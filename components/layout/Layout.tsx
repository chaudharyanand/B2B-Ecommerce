import Head  from 'next/head'
import React from 'react'
import translate from '../../pages/api/translate'
import Footer from '../footer/Footer'
import NavBar from '../nav-bar/NavBar'

const Layout = ({children, home, configuration, }:any) => {
  return (
    <>
      <Head>
        <title>{configuration.attributes.companyBusinessName}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0"
        />
        <meta
          name="theme-color"
          content={''}
        />
        <meta
          name="description"
          content={""}
        />
        <meta name="keywords" content={""} />
      </Head>
      <NavBar 
        home={home} 
        translate={translate}
        configurationProps={configuration}
      />
      {children}
      <Footer
        home={home}
        translate={translate}
        configurationProps={configuration}
      />
    </>
  )
}

export default Layout