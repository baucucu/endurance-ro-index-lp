export default function SportsStudied() {
    return (
        <section id="sporturi" className="py-20">
            <div className="mx-auto max-w-6xl px-6 sm:px-8">
                <h2 className="text-center text-4xl sm:text-5xl font-extrabold tracking-tight">
                    Sporturile Studiate
                </h2>
                <p className="mt-4 text-center text-lg text-slate-500">
                    Trei discipline de anduranță care definesc comunitatea sportivă din România
                </p>

                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Alergare */}
                    <article className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1664304823165-888f56fc101b?q=80&w=1531&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Alergare pe șosea"
                            className="h-72 w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                        <div className="absolute left-6 right-6 bottom-6 text-white">
                            <h3 className="text-3xl font-bold drop-shadow">Alergare</h3>
                            <p className="mt-2 text-white/90 drop-shadow">
                                Competiții de alergare și maratoane
                            </p>
                        </div>
                    </article>

                    {/* Ciclism */}
                    <article className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
                        <img
                            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1974&auto=format&fit=crop"
                            alt="Cicliști pe velodrom"
                            className="h-72 w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                        <div className="absolute left-6 right-6 bottom-6 text-white">
                            <h3 className="text-3xl font-bold drop-shadow">Ciclism</h3>
                            <p className="mt-2 text-white/90 drop-shadow">
                                Curse de ciclism și competiții pe șosea
                            </p>
                        </div>
                    </article>

                    {/* Triatlon */}
                    <article className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1661964408302-d88b6e98322a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Sportivi în tranziția de triatlon"
                            className="h-72 w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                        <div className="absolute left-6 right-6 bottom-6 text-white">
                            <h3 className="text-3xl font-bold drop-shadow">Triatlon</h3>
                            <p className="mt-2 text-white/90 drop-shadow">
                                Competiții combinate de înot, ciclism și alergare
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}


