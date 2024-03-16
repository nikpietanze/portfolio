"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Home() {
	const [navState, setNavState] = useState("about");
	const aboutRef = useRef();
	const experienceRef = useRef();
	const projectsRef = useRef();

	function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>) {
		setNavState(e.currentTarget.innerText.toLowerCase());
	}

	useEffect(() => {
		const aboutObserver = new IntersectionObserver((entries, observer) => {
			const entry = entries[0];
			console.log("aboutEntry.isIntersecting", entry.isIntersecting);
		});
		// @ts-ignore
		aboutObserver.observe(aboutRef.current);

		const experienceObserver = new IntersectionObserver(
			(entries, observer) => {
				const entry = entries[0];
				console.log(
					"experienceEntry.isIntersecting",
					entry.isIntersecting
				);
			}
		);
		// @ts-ignore
		experienceObserver.observe(experienceRef.current);
	}, []);

	return (
		<main className="bg-gradient-to-r from-zinc-900 to-slate-800 text-zinc-100 min-h-screen py-16 px-8 md:px-16 flex justify-center">
			<div className="grid grid-cols-1 gap-16 items-start md:grid-cols-[400px_minmax(400px,_550px)]">
				<div className="left-col flex flex-col md:sticky md:top-24">
					<div className="info flex flex-col gap-4 pb-16">
						<h1 className="text-5xl font-bold">Nik Pietanze</h1>
						<h2 className="text-xl font-bold">
							Senior Software Engineer
						</h2>
						<p className="text-zinc-300 max-w-sm">
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
				</div>

				<div className="right-col flex flex-col gap-24">
					<div
						// @ts-ignore
						ref={aboutRef}
						id="about"
						className="flex flex-col gap-4 text-zinc-300">
						<h2 className="text-sm font-bold text-emerald-600">
							ABOUT
						</h2>

						<p>
							Hi! My name is Nik and I enjoy creating things on
							the internet. My interest in web development started
							back in 2014 when I decided to take it upon myself
							to create a website for the company I worked for -
							turns out a little “I can figure it out” attitude
							would teach me a lot about HTML & CSS.
						</p>

						<p>
							Fast forward to today, and I’ve worked my way into
							my dream industry. I’m an engineer by nature, always
							building things, and in the world of software
							there’s always things to learn and build. I love how
							far I’ve come as a self-taught engineer, but there’s
							so much more I want to achieve!
						</p>

						<Link
							href="#"
							target="_blank"
							className="font-bold text-sm transition-colors hover:text-emerald-500">
							View Full Resume
						</Link>
					</div>

					<div
						// @ts-ignore
						ref={experienceRef}
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
									Inc
								</span>
								<p className="pos-description text-sm text-zinc-300">
									Lead backend engineer for a new SAAS
									initiative for{" "}
									<Link
										href="https://wavebrowser.co/"
										target="_blank"
										className="font-bold transition-colors hover:text-emerald-500">
										Wave Browser
									</Link>{" "}
									offering a Pro version that provides users a
									VPN, Ad Blocker, and AI Assistant.
									Responsible for architecting, building, and
									shipping subscription related services using{" "}
									<Link
										href="https://stripe.com"
										target="_blank"
										className="font-bold transition-colors hover:text-emerald-500">
										Stripe
									</Link>
									, as well as implementing webhook processing
									to manage subscription and payment state.
									Managing and creating database structure
									using MongoDB and MSSQL, and deploying with
									Github Actions and AWS Elastic Beanstalk
									utilizing Docker. Also responsible for PR
									reviews and helping 3 engineers/developers
									with their coding tasks as well as mentoring
									sessions to help them grow in their own
									career.
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
									Inc
								</span>
								<p className="pos-description text-sm text-zinc-300">
									Lead engineer for architecting, developing,
									and shipping SAAS subscription products
									including{" "}
									<Link
										href="https://adgone.org"
										target="_blank"
										className="font-bold transition-colors hover:text-emerald-500">
										AdGone Ad Blocker
									</Link>
									,{" "}
									<Link
										href="https://gonesecurebrowsing.com"
										target="_blank"
										className="font-bold transition-colors hover:text-emerald-500">
										Gone Secure Browsing
									</Link>
									,{" "}
									<Link
										href="https://gonepopupblocker.com"
										target="_blank"
										className="font-bold transition-colors hover:text-emerald-500">
										Gone Popup Blocker
									</Link>{" "}
									utilizing subscription management and
									payment processing services such as{" "}
									<Link
										href="https://recurly.com"
										target="_blank"
										className="font-bold transition-colors hover:text-emerald-500">
										Recurly
									</Link>
									,{" "}
									<Link
										href="https://paddle.com"
										target="_blank"
										className="font-bold transition-colors hover:text-emerald-500">
										Paddle
									</Link>
									, and{" "}
									<Link
										href="https://stripe.com"
										target="_blank"
										className="font-bold transition-colors hover:text-emerald-500">
										Stripe
									</Link>
									. Responsible for building webhook
									processing applications to maintain
									subscription and payment state. Experience
									with databases such as Postgres and MSSQL as
									well as AWS EC2 instances and deployments.
									Constant A/B testing as well as self-managed
									data monitoring for A/B tests.
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
								<p className="pos-description text-sm text-zinc-300">
									Recommended and implemented changes to
									website markup, content, and linking to
									improve SEO positions for target keywords.
									Oversaw 150+ automotive Mercedes-Benz and
									BMW microsites for various dealerships
									around the world utilizing HTML, CSS, and
									JavaScript. Assisted in overseeing the daily
									activities of four SEO specialists on the
									team, as well as copy writers and web
									developers to ensure daily activities were
									completed. Tracked, reported and analyzed
									website analytics to drive strategy and
									improve user experience.
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
							href="#"
							className="grid grid-cols-1 md:grid-cols-[125px_auto] hover:bg-emerald-900/50 transition rounded-lg p-4">
							<span className="timeframe text-xs font-bold text-zinc-400 mt-1">
								2024 — PRESENT
							</span>
							<div className="details flex flex-col gap-2">
								<span className="pos-title text-lg font-bold">
									Senior Software Engineer
								</span>
								<p className="pos-description text-base text-zinc-300">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Vitae ultricies leo integer malesuada nunc
									vel risus commodo. Ac tincidunt vitae semper
									quis lectus nulla at volutpat diam.
								</p>

								<div className="tags flex flex-wrap items-center gap-2 mt-2">
									<span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
										JavaScript
									</span>
									<span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
										TypeScript
									</span>
									<span className="bg-emerald-900/75 text-sm text-emerald-400 font-bold px-4 py-1 rounded-full">
										React
									</span>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
