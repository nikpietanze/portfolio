"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import nickedImg from "../public/img/nicked.io.comp.jpg";

export default function Home() {
    const [navState, setNavState] = useState("about");

    function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>) {
        setNavState(e.currentTarget.innerText.toLowerCase());
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const pos = window.scrollY;
            if (pos < 400) {
                setNavState("about");
            } else if (pos >= 400 && pos < 900) {
                setNavState("experience");
            } else {
                setNavState("projects");
            }
        })
    }, []);

    return (
        <>
            <main className="bg-gradient-to-r from-zinc-900 to-slate-800 text-zinc-100 min-h-screen py-16 px-8 md:px-16 flex justify-center">
                <div className="grid grid-cols-1 gap-16 items-start md:grid-cols-[400px_minmax(400px,_550px)]">
                    <div className={`left-col flex flex-col justify-between md:sticky md:top-24`}>
                        <div className="info flex flex-col gap-4 mb-16">
                            <h1 className="text-5xl font-bold">Nik Pietanze</h1>
                            <h2 className="text-xl font-bold">
                                Senior Software Engineer
                            </h2>
                            <p className="text-zinc-300 text-base max-w-sm">
                                I build performant data-focused web, cli, and
                                desktop apps utilizing multiple languages and
                                frameworks.
                            </p>
                        </div>

                        <div className="nav flex md:flex-col gap-4 text-sm font-bold text-emerald-700">
                            <Link
                                onClick={handleNavClick}
                                href="#about"
                                className={navState === "about" ? "active" : ""}>
                                ABOUT
                            </Link>
                            <Link
                                onClick={handleNavClick}
                                href="#experience"
                                className={
                                    navState === "experience" ? "active" : ""
                                }>
                                EXPERIENCE
                            </Link>
                            <Link
                                onClick={handleNavClick}
                                href="#projects"
                                className={navState === "projects" ? "active" : ""}>
                                PROJECTS
                            </Link>
                        </div>

                        <div className="flex gap-4 mt-16">
                            <Link
                                href="https://github.com/nikpietanze"
                                target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6 opacity-50 transition-opacity hover:opacity-100" aria-hidden="true">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                                </svg>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/nik-pietanze/"
                                target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 opacity-50 transition-opacity hover:opacity-100" aria-hidden="true">
                                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                                </svg>
                            </Link>
                            <Link
                                href="https://x.com/nikpietanze"
                                target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="none" className="h-5 w-5 opacity-50 transition-opacity hover:opacity-100" aria-hidden="true">
                                    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="right-col flex flex-col gap-24">
                        <div
                            id="about"
                            className="flex flex-col gap-4 text-zinc-300">
                            <h2 className="text-sm font-bold text-emerald-600">
                                ABOUT
                            </h2>

                            <p className="text-base">
                                Hi! My name is Nik and I enjoy creating things on
                                the internet. My interest in web development started
                                back in 2014 when I decided to take it upon myself
                                to create a website for the company I worked for -
                                turns out a little “I can figure it out” attitude
                                would teach me a lot about HTML & CSS.
                            </p>

                            <p className="text-base">
                                Fast forward to today, and I’ve worked my way into
                                my dream industry. I’m an engineer by nature, always
                                building things, and in the world of software
                                there’s always things to learn and build. I love how
                                far I’ve come as a self-taught engineer, but there’s
                                so much more I want to achieve!
                            </p>

                            <Link
                                href="/resume"
                                target="_blank"
                                className="font-bold text-base transition-colors hover:text-emerald-500">
                                View Full Resume
                            </Link>
                        </div>

                        <div
                            id="experience"
                            className="flex flex-col gap-8 -mx-4">
                            <h2 className="text-sm font-bold text-emerald-600 -mb-6 px-4">
                                EXPERIENCE
                            </h2>

                            <Link
                                href="https://spigot.com"
                                target="_blank"
                                className="grid grid-cols-1 md:grid-cols-[125px_auto] hover:bg-emerald-900/50 transition rounded-lg p-4">
                                <span className="timeframe text-xs font-bold text-zinc-400 mt-1">
                                    2024 — PRESENT
                                </span>
                                <div className="details flex flex-col gap-2">
                                    <span className="pos-title text-lg font-bold">
                                        Senior Software Engineer, Browser - Spigot
                                    </span>
                                    <p className="pos-description text-base text-zinc-300">
                                        Lead backend engineer for a new SaaS initiative for <b>Wave Browser</b> offering a Pro version that provides users a <b>VPN</b>, <b>Ad Blocker</b>, and <b>AI Assistant</b>. Responsible for architecting, building, and shipping subscription related services using <b>Stripe</b>, as well as implementing webhook processing to manage subscription and payment state. Managing and creating database structure using <b>MongoDB</b> and <b>MSSQL</b>, and deploying with <b>Github Actions</b> and <b>AWS Elastic Beanstalk</b> utilizing <b>Docker</b>. Also responsible for PR reviews and helping 3 engineers/developers with their coding tasks along with mentoring sessions to help them grow in their own careers.
                                    </p>

                                    <div className="tags flex flex-wrap items-center gap-2 mt-2">
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            TypeScript
                                        </span>
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            C#
                                        </span>
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            Vue 3
                                        </span>
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            Nuxt
                                        </span>
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            AWS
                                        </span>
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            Github Actions
                                        </span>
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            Docker
                                        </span>
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            MSSQL
                                        </span>
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            MongoDB
                                        </span>
                                    </div>
                                </div>
                            </Link>

                            <Link
                                href="https://spigot.com"
                                target="_blank"
                                className="grid grid-cols-1 md:grid-cols-[125px_auto] hover:bg-emerald-900/50 transition rounded-lg p-4">
                                <span className="timeframe text-xs font-bold text-zinc-400 mt-1">
                                    2019 — 2024
                                </span>
                                <div className="details flex flex-col gap-2">
                                    <span className="pos-title text-lg font-bold">
                                        Software Engineer, Subscriptions - Spigot
                                    </span>
                                    <p className="pos-description text-base text-zinc-300">
                                        Lead engineer for architecting, developing, and shipping SaaS subscription products including <b>AdGone Ad Blocker</b>, <b>Gone Secure Browsing</b>, <b>Gone Popup Blocker</b> utilizing subscription management and payment processing services such as <b>Recurly</b>, <b>Paddle</b>, and <b>Stripe</b>. Responsible for building webhook processing applications to maintain subscription and payment state. Experience with databases such as <b>Postgres</b> and <b>MSSQL</b> as well as <b>AWS EC2</b> instances and deployments. Constant A/B testing as well as self-managed data monitoring for A/B tests.
                                    </p>

                                    <div className="tags flex flex-wrap items-center gap-2 mt-2">
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            JavaScript
                                        </span>
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            TypeScript
                                        </span>
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            C#
                                        </span>
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            AWS EC2
                                        </span>
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            Postgres
                                        </span>
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            MSSQL
                                        </span>
                                    </div>
                                </div>
                            </Link>

                            <Link
                                href="https://affinitiv.com"
                                target="_blank"
                                className="grid grid-cols-1 md:grid-cols-[125px_auto] hover:bg-emerald-900/50 transition rounded-lg p-4">
                                <span className="timeframe text-xs font-bold text-zinc-400 mt-1">
                                    2017 — 2019
                                </span>
                                <div className="details flex flex-col gap-2">
                                    <span className="pos-title text-lg font-bold">
                                        Senior SEO Specialist - Affinitiv Digital
                                    </span>
                                    <p className="pos-description text-base text-zinc-300">
                                        Recommended and implemented changes to website markup, content, and linking to improve SEO positions for target keywords. Oversaw 150+ automotive Mercedes-Benz and BMW microsites for various dealerships around the world utilizing HTML, CSS, and JavaScript. Assisted in overseeing the daily activities of four SEO specialists on the team, as well as copy writers and web developers to ensure daily activities were completed. Tracked, reported and analyzed website analytics to drive strategy and improve user experience.
                                    </p>

                                    <div className="tags flex flex-wrap items-center gap-2 mt-2">
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            HTML
                                        </span>
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            CSS
                                        </span>
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            JavaScript
                                        </span>
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            SEMRush
                                        </span>
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            Google Analytics
                                        </span>
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            Google Search Console
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div
                            id="projects"
                            className="flex flex-col gap-8 -mt-4 -mx-4">
                            <h2 className="text-sm font-bold text-emerald-600 -mb-6 px-4">
                                PROJECTS
                            </h2>

                            <Link
                                href="https://nicked.io"
                                target="_blank"
                                className="grid grid-cols-1 gap-4 md:grid-cols-[125px_auto] hover:bg-emerald-900/50 transition rounded-lg p-4">

                                <Image src={nickedImg} alt="" />

                                <div className="details flex flex-col gap-2">
                                    <span className="pos-title text-lg font-bold">
                                        Nicked
                                    </span>
                                    <p className="pos-description text-base text-zinc-300">
                                        Nicked is an Amazon price tracker extension
                                        that allows you to track various products
                                        and alerts you via email and/or browser
                                        notifications when products go on sale.
                                    </p>

                                    <div className="tags flex flex-wrap items-center gap-2 mt-2">
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            TypeScript
                                        </span>
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            Vue3
                                        </span>
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            GoLang
                                        </span>
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            Postgres
                                        </span>
                                    </div>
                                </div>
                            </Link>

                            <Link
                                href="https://github.com/nikpietanze/accord"
                                target="_blank"
                                className="grid grid-cols-1 gap-4 md:grid-cols-[125px_auto] hover:bg-emerald-900/50 transition rounded-lg p-4">

                                <Image src={nickedImg} alt="" />

                                <div className="details flex flex-col gap-2">
                                    <span className="pos-title text-lg font-bold">
                                        Accord
                                    </span>
                                    <p className="pos-description text-base text-zinc-300">
                                        Accord is a discord clone personal project.
                                        It is built using NextJS for the website
                                        and app, and Electron to convert the app into
                                        a desktop application.
                                    </p>

                                    <div className="tags flex flex-wrap items-center gap-2 mt-2">
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            TypeScript
                                        </span>
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            NextJS
                                        </span>
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            Electron
                                        </span>
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            TailwindCSS
                                        </span>
                                    </div>
                                </div>
                            </Link>

                            <Link
                                href="https://github.com/nikpietanze/budgetly"
                                target="_blank"
                                className="grid grid-cols-1 gap-4 md:grid-cols-[125px_auto] hover:bg-emerald-900/50 transition rounded-lg p-4">

                                <Image src={nickedImg} alt="" />

                                <div className="details flex flex-col gap-2">
                                    <span className="pos-title text-lg font-bold">
                                        Budgetly
                                    </span>
                                    <p className="pos-description text-base text-zinc-300">
                                        Budgetly is a manual budget tracker and optimizer.
                                        It is intended to allow you to manually enter
                                        your bills without the need of pen and paper.
                                        <br />
                                        <br />
                                        Budgetly was for people who don&apos;t want to use the new
                                        age of budgeting apps that want to connect to your
                                        bank account and manage everything itself.
                                    </p>

                                    <div className="tags flex flex-wrap items-center gap-2 mt-2">
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            SolidJS
                                        </span>
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            GoLang
                                        </span>
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            TailwindCSS
                                        </span>
                                        <span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
                                            Postgres
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

            </main>

            <footer>
            </footer>
        </>
    );
}
