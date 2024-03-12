export default function Home() {
	// TODO: Navigation scrolling

	return (
		<main className="bg-gradient-to-r from-zinc-900 to-slate-800 text-zinc-100 min-h-screen py-16 px-8 md:px-16 flex justify-center">
			<div className="grid grid-cols-1 gap-14 items-start md:grid-cols-[400px_minmax(400px,_550px)]">
				<div className="left-col flex flex-col md:sticky md:top-24">
					<div className="info flex flex-col gap-4 pb-24">
						<h1 className="text-5xl font-bold">Nik Pietanze</h1>
						<h2 className="text-xl font-bold">
							Senior Software Engineer
						</h2>
						<p className="text-zinc-300">
							I build scalable and performant data-focused
							<br /> web apps, utilizing multiple languages.
						</p>
					</div>

					<div className="nav flex flex-col gap-4 text-sm font-bold text-emerald-700">
						<a href="#about" className="active">
							ABOUT
						</a>
						<a href="#experience">EXPERIENCE</a>
						<a href="#projects">PROJECTS</a>
					</div>
				</div>

				<div className="right-col flex flex-col gap-32">
					<div
						id="about"
						className="flex flex-col gap-4 text-zinc-300">
						<h2 className="text-sm font-bold text-emerald-600">
							ABOUT
						</h2>

						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Tortor posuere ac ut consequat
							semper. Metus dictum at tempor commodo ullamcorper a
							lacus vestibulum sed. Sapien et ligula ullamcorper
							malesuada proin libero nunc consequat interdum.
							Libero justo laoreet sit amet cursus. Elit
							pellentesque habitant morbi tristique senectus. Amet
							risus nullam eget felis eget nunc lobortis mattis
							aliquam. Sit amet purus gravida quis. Mi in nulla
							posuere sollicitudin aliquam ultrices sagittis orci.
							Facilisi nullam vehicula ipsum a arcu.
						</p>

						<p>
							Et leo duis ut diam. In hac habitasse platea
							dictumst vestibulum rhoncus est pellentesque. At
							auctor urna nunc id cursus metus aliquam. Ut sem
							viverra aliquet eget. Lorem sed risus ultricies
							tristique nulla aliquet enim tortor at. Cursus
							euismod quis viverra nibh. Ipsum faucibus vitae
							aliquet nec ullamcorper sit amet risus nullam. Nec
							feugiat nisl pretium fusce id velit ut tortor. Orci
							phasellus egestas tellus rutrum tellus pellentesque
							eu. Rutrum quisque non tellus orci ac auctor augue
							mauris augue. Eget mauris pharetra et ultrices
							neque. Aliquet sagittis id consectetur purus ut. Mi
							proin sed libero enim sed faucibus turpis.
						</p>

						<p>
							Dolor magna eget est lorem ipsum dolor sit amet.
							Pharetra magna ac placerat vestibulum. Nulla
							facilisi nullam vehicula ipsum a. Scelerisque varius
							morbi enim nunc. Nunc eget lorem dolor sed viverra
							ipsum nunc. Molestie nunc non blandit massa enim nec
							dui nunc. Id eu nisl nunc mi ipsum faucibus vitae
							aliquet. Enim blandit volutpat maecenas volutpat
							blandit. Ac tortor vitae purus faucibus ornare
							suspendisse sed nisi lacus. Suspendisse ultrices
							gravida dictum fusce ut. Risus sed vulputate odio ut
							enim. Tortor at risus viverra adipiscing at in
							tellus integer. At tellus at urna condimentum mattis
							pellentesque. Mauris augue neque gravida in
							fermentum. Facilisis leo vel fringilla est
							ullamcorper. Tristique senectus et netus et
							malesuada fames.
						</p>
					</div>

					<div id="experience" className="flex flex-col gap-8 -mx-4">
						<h2 className="text-sm font-bold text-emerald-600 -mb-6 px-4">
							EXPERIENCE
						</h2>

						<a
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

								<div className="tags flex flex-wrap items-center gap-4">
									<span>JavaScript</span>
									<span>TypeScript</span>
									<span>React</span>
								</div>
							</div>
						</a>

						<a
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

								<div className="tags flex flex-wrap items-center gap-4">
									<span>JavaScript</span>
									<span>TypeScript</span>
									<span>React</span>
								</div>
							</div>
						</a>

						<a
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

								<div className="tags flex flex-wrap items-center gap-4">
									<span>JavaScript</span>
									<span>TypeScript</span>
									<span>React</span>
								</div>
							</div>
						</a>

						<a
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

								<div className="tags flex flex-wrap items-center gap-4">
									<span>JavaScript</span>
									<span>TypeScript</span>
									<span>React</span>
								</div>
							</div>
						</a>

						<a
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

								<div className="tags flex flex-wrap items-center gap-4">
									<span>JavaScript</span>
									<span>TypeScript</span>
									<span>React</span>
								</div>
							</div>
						</a>
					</div>

					<div id="projects" className="flex flex-col gap-8 -mx-4">
						<h2 className="text-sm font-bold text-emerald-600 -mb-6 px-4">
							PROJECTS
						</h2>

						<a
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

								<div className="tags flex flex-wrap items-center gap-4">
									<span>JavaScript</span>
									<span>TypeScript</span>
									<span>React</span>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}
