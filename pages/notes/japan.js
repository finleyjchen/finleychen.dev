import Link from 'next/link'
import ExperienceTabs from '../../components/experienceTabs'
import Gallery from '../../components/gallery'
import Layout from '../../components/layout'
import * as Tabs from '@radix-ui/react-tabs';
import { useEffect, useRef, useState } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import axios from "axios"
import { DashboardIcon, GridIcon, ImageIcon, ListBulletIcon } from '@radix-ui/react-icons';
import probe from 'probe-image-size';
import photos from "/public/photoData.json"
import Head from 'next/head';
import { useLocomotiveScroll } from 'react-locomotive-scroll'

const Japan = () => {
    const containerRef = useRef(null)
    const [gridOpen, setGridOpen] = useState(false)
    const [currentTab, setCurrentTab] = useState(0)

    return (
        <>
            <Head>
                <title>Japan Trip 2022 - Finley Chen</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />


                <meta property="og:title" content="Japan Trip 2022" />
                <meta name="twitter:title" content="Japan Trip 2022" />

            </Head>

            <Tabs.Root className='gallery-page' defaultValue="tab-0">
                <div className='gallery-nav header'>
                    <Link href="/" className='mono'>
                        Finley Chen
                    </Link>
                    <Tabs.List className="TabsList" aria-label="Gallery">
                        {photos.map((album, index) => {
                            return (
                                <Tabs.Trigger className="TabsTrigger" onClick={() => {
                                    setCurrentTab(index)
                                }} value={`tab-${index}`} key={index}>
                                    {album.title}
                                </Tabs.Trigger>
                            )
                        })}
                    </Tabs.List>
                    {/* <div className="d-lg-none">
                        <button onClick={() => {
                            setGridOpen(false)
                        }}>
                            <ImageIcon />
                        </button>
                        <button onClick={() => {
                            setGridOpen(true)
                        }}>
                            <DashboardIcon />
                        </button>
                    </div> */}
                    <h1 className='mono'>Japan, 2022</h1>

                </div>

                {photos.map((album, index) => {
                    // console.log(album)
                    return (
                        <Tabs.Content className="" value={`tab-${index}`} key={index}>

                            <LocomotiveScrollProvider
                                options={
                                    {
                                        smooth: true,
                                        // ... all available Locomotive Scroll instance options 
                                        direction: "horizontal",
                                        multiplier: 3.1,
                                        smartphone: {
                                            smooth: true,
                                            direction: "vertical"
                                        }
                                    }
                                }
                                watch={
                                    [currentTab, gridOpen]
                                }
                                containerRef={containerRef}
                            >
                                <main data-scroll-container ref={containerRef}>
                                    <div data-scroll-section className=''>
                                        <div className="tab-content">

                                            <div className="tab-sidebar">
                                                <h2 className='serif hero-headline'>{album.title}</h2>
                                                <p className="mono">{album.date}</p>
                                            </div>
                                            <Gallery className={gridOpen ? "grid" : ""} images={album.photos} />
                                        </div>

                                    </div>
                                </main>
                            </LocomotiveScrollProvider>
                        </Tabs.Content>

                    )
                })}

            </Tabs.Root>
        </>
    )
}


export default Japan