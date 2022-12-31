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
                    <div>
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
                    </div>
                    <h1 className='mono'>Japan, 2022</h1>

                </div>
                <LocomotiveScrollProvider
                    options={
                        {
                            smooth: true,
                            // ... all available Locomotive Scroll instance options 
                            direction: "horizontal"
                        }
                    }
                    watch={
                        [currentTab]
                    }

                    containerRef={containerRef}
                >
                    <main data-scroll-container ref={containerRef}>
                        <div data-scroll-section>
                            {photos.map((album, index) => {
                                // console.log(album)
                                return (
                                    <Tabs.Content className="tab-content" value={`tab-${index}`} key={index}>
                                        <div className="tab-sidebar">
                                            <h2 className='serif hero-headline'>{album.title}</h2>
                                            <p className="mono">{album.date}</p>
                                        </div>
                                        <Gallery className={gridOpen ? "grid" : ""} images={album.photos} />
                                    </Tabs.Content>
                                )
                            })}

                        </div>
                    </main>
                </LocomotiveScrollProvider>
            </Tabs.Root>
        </>
    )
}


export default Japan