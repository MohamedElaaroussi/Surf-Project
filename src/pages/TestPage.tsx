import React from 'react'

const TestPage = () => {
  return (
    <div>
        <section className='bg-white pt-8 font-redhat'>
            <div className="container my-20">
                <div>
                    <p className="text-black font-semibold text-2xl">Ce que disent nos clients</p>
                    <div className="border border-primary w-40 mt-1"></div>
                </div>
                <div className="flex gap-10 mt-16">
                    <div className="relative w-1/3">
                        <span className="bg-white transform skew-x-20 absolute ltr:-left-2 rtl:-right-2 w-11 h-10"></span>
                        <span className="absolute text-7xl text-primary">&Prime;</span>
                        <p className="bg-primary-50 min-h-200 flex justify-center border-r-bordercolor border-r-2 border-b-bordercolor border-b-2 text-black py-10 px-10 italic ltr:rounded-br-3xl rtl:rounded-bl-3xl">
                                <span>Ça a été un <b>très bon voyage</b>. J'ai pris mon siège réservé. Le départ a été à l'heure exacte, l'arrivée aussi. Je vous remercie pour cette expérience.</span>
                        </p>
                        <p className="text-center font-semibold text-black mt-6">
                                <span>E.Aziz</span>
                            <span className="font-normal"> - PlayStore</span>
                        </p>
                        <ul className="text-center mt-4 flex justify-center space-x-2">
                            <svg className="w-5 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#ffce31" d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"/></svg>
                            <svg className="w-5 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#ffce31" d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"/></svg>
                            <svg className="w-5 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#ffce31" d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"/></svg>
                            <svg className="w-5 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#ffce31" d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"/></svg>
                            <svg className="w-5 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#ffce31" d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"/></svg>
                        </ul>
                    </div>
                    <div className="relative w-1/3">
                        <span className="bg-white transform skew-x-20 absolute ltr:-left-2 rtl:-right-2 w-11 h-10"></span>
                        <span className="absolute text-7xl text-primary">&Prime;</span>
                        <p className="bg-primary-50 min-h-200 flex justify-center border-r-bordercolor border-r-2 border-b-bordercolor border-b-2 text-black py-10 px-10 italic ltr:rounded-br-3xl rtl:rounded-bl-3xl">
                                <span>Une déclaration de vérité doit être faite. J'ai réservé mon billet via l'application, j'ai été contacté une demi heure avant le départ du voyage, je suis arrivé à la gare, je suis monté dans l'autocar et je me suis assis à mon siège réservé. C'était ma première expérience avec ce service, je vais certainement la répéter. <b>Je recommande ce service</b>.</span>
                        </p>
                        <p className="text-center font-semibold text-black mt-6">
                                <span>L.Issam</span>
                            <span className="font-normal"> - AppGallery</span>
                        </p>
                        <ul className="text-center mt-4 flex justify-center space-x-2">
                            <svg className="w-5 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#ffce31" d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"/></svg>
                            <svg className="w-5 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#ffce31" d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"/></svg>
                            <svg className="w-5 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#ffce31" d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"/></svg>
                            <svg className="w-5 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#ffce31" d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"/></svg>
                            <svg className="w-5 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#ffce31" d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"/></svg>
                        </ul>
                    </div>
                    <div className="relative w-1/3">
                        <span className="bg-white transform skew-x-20 absolute ltr:-left-2 rtl:-right-2 w-11 h-10"></span>
                        <span className="absolute text-7xl text-primary">&Prime;</span>
                        <p className="bg-primary-50 min-h-200 flex justify-center border-r-bordercolor border-r-2 border-b-bordercolor border-b-2 text-black py-10 px-10 italic ltr:rounded-br-3xl rtl:rounded-bl-3xl">
                                <span>Bonjour <b>la plateforme est excellente</b>. J'ai réservé les tickets pour un voyage de Rabat Agadir. Les clients ayant réservé via la plateforme étaient <b>les premier à monter à bord</b> de l'autocar pour s'y installer. Bonne continuation.</span>
                        </p>
                        <p className="text-center font-semibold text-black mt-6">
                                <span>T.Fouad</span>
                            <span className="font-normal"> - AppStore</span>
                        </p>
                        <ul className="text-center mt-4 flex justify-center space-x-2">
                            <svg className="w-5 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#ffce31" d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"/></svg>
                            <svg className="w-5 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#ffce31" d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"/></svg>
                            <svg className="w-5 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#ffce31" d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"/></svg>
                            <svg className="w-5 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#ffce31" d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"/></svg>
                            <svg className="w-5 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#ffce31" d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"/></svg>
                        </ul>
                    </div>
                </div>
                <div>
                    <a href="/fr/Pages/Reviews" className="text-black font-semibold flex justify-center mt-12"><span className="border-b-black border-b-2">Voir plus d’avis</span>&nbsp;</a>
                </div>
            </div>
        </section>


    </div>
  )
}

export default TestPage
