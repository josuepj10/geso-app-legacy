import Image from "next/image";

export default function Principios() {

    return (

        <section className="max-w-[1362px] mx-auto my-20 xl:my-35 md:px-4 lg:px-0">

            <h2 className="xl:hidden text-center text-lg text-geso-ink mb-10 md:col-span-2 font-bold">
                En la Fundación GESO operamos bajo los siguientes principios rectores:
            </h2>

            {/* Contenedor GRID de los 4 elementos */}
            <div className="grid gap-6 
                            grid-cols-1 
                            md:grid-cols-2 
                            xl:grid-cols-[318px_1fr_318px]
                            items-center justify-center max-w-fit mx-auto
                            xl:items-start xl:justify-start xl:max-w-none xl:mx-0
                            "                        
            >
                {/* Elemento 1 */}
                <article className="w-full max-w-[318px] h-[318px] border rounded-[40px] flex flex-col items-center 
                                group hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <div className="w-[121px] h-[121px] border rounded-3xl mt-9 flex items-center justify-center
                                    group-hover:border-0 group-hover:bg-geso-yellow transition-colors duration-300 "> 
                        <Image 
                            src="/images/principios/equidad.svg"
                            width={64} 
                            height={64} 
                            alt="" 
                        />
                    </div>
                    <p className="text-center text-geso-ink px-13 mt-9">
                        <span className="text-geso-purple font-bold">Equidad e inclusión: </span>
                        igualdad sustantiva, diversidad y no discriminación.
                    </p>
                </article>

                {/* Elemento 2 hidden */}
                <article className="xl:hidden w-full max-w-[318px] h-[318px] border rounded-[40px] flex flex-col items-center 
                                group hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <div className="w-[121px] h-[121px] border rounded-3xl mt-9 flex items-center justify-center
                                    group-hover:border-0 group-hover:bg-geso-yellow transition-colors duration-300 relative "> 
                        <Image 
                            src="/images/principios/derechos.svg" 
                            width={64} 
                            height={64} 
                            alt="" 
                        />
                    </div>
                    <p className="text-center text-geso-ink px-13 mt-9">
                        <span className="text-geso-purple font-bold">Derechos y democracia: </span>
                        ciudadanía activa, justicia social y cultura de paz.
                    </p>
                </article>

                {/* Elemento 3 hidden */}
                <article className="xl:hidden w-full max-w-[318px] h-[318px] border rounded-[40px] flex flex-col items-center 
                                group hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <div className="w-[121px] h-[121px] border rounded-3xl mt-9 flex items-center justify-center
                                    group-hover:border-0 group-hover:bg-geso-yellow transition-colors duration-300 "> 
                        <Image 
                            src="/images/principios/innovacion.svg" 
                            width={64} 
                            height={64} 
                            alt="" 
                        />
                    </div>
                    <p className="text-center text-geso-ink px-13 mt-9">
                        <span className="text-geso-purple font-bold">Innovación y conocimiento: </span>
                        metodologías creativas y producción de saberes.
                    </p>
                </article>


                {/* Texto arriba + elementos 2xl y 3xl abajo */}
                <div className="
                    hidden
                    xl:grid 
                    grid-cols-1 
                    md:grid-cols-2 
                    place-items-center 
                    gap-6
                ">
                    <p className="text-center text-lg text-geso-ink mb-10 md:col-span-2 font-bold">
                        En la Fundación GESO operamos bajo los siguientes principios rectores:
                    </p>

                    {/* Elemento 2 */}
                    <article className="w-full max-w-[318px] h-[318px] border rounded-[40px] flex flex-col items-center 
                                    group hover:shadow-xl transition-shadow duration-300 ease-in-out ">
                        <div className="w-[121px] h-[121px] border rounded-3xl mt-9 flex items-center justify-center
                                        group-hover:border-0 group-hover:bg-geso-purple transition-colors duration-300 relative "> 
                            <Image 
                                src="/images/principios/derechos.svg" 
                                width={64} 
                                height={64} 
                                alt="" 
                            />
                            <Image
                                src="/images/principios/derechos-w.svg"
                                width={64}
                                height={64}
                                alt=""
                                className="absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition duration-300"
                            />
                        </div>
                        <p className="text-center text-geso-ink px-13 mt-9">
                            <span className="text-geso-purple font-bold">Derechos y democracia: </span>
                            ciudadanía activa, justicia social y cultura de paz.
                        </p>
                    </article>

                    {/* Elemento 3 */}
                    <article className="w-full max-w-[318px] h-[318px] border rounded-[40px] flex flex-col items-center 
                                    group hover:shadow-xl transition-shadow duration-300 ease-in-out ">
                        <div className="w-[121px] h-[121px] border rounded-3xl mt-9 flex items-center justify-center
                                        group-hover:border-0 group-hover:bg-geso-yellow transition-colors duration-300 "> 
                            <Image 
                                src="/images/principios/innovacion.svg" 
                                width={64} 
                                height={64} 
                                alt="" 
                            />
                        </div>
                        <p className="text-center text-geso-ink px-13 mt-9">
                            <span className="text-geso-purple font-bold">Innovación y conocimiento: </span>
                            metodologías creativas y producción de saberes.
                        </p>
                    </article>
                </div>

                {/* Elemento 4 */}
                <article className="w-full max-w-[318px] h-[318px] border rounded-[40px] flex flex-col items-center 
                                group hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <div className="w-[121px] h-[121px] border rounded-3xl mt-9 flex items-center justify-center
                                    group-hover:border-0 group-hover:bg-geso-purple transition-colors duration-300 relative "> 
                        <Image 
                            src="/images/principios/alianzas.svg" 
                            width={64} 
                            height={64} 
                            alt="" 
                        />
                        <Image
                            src="/images/principios/alianzas-w.svg"
                            width={64}
                            height={64}
                            alt=""
                            className="absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition duration-300"
                        />
                    </div>
                    <p className="text-center text-geso-ink px-13 mt-9">
                        <span className="text-geso-purple font-bold">Alianzas y transparencia: </span>
                        trabajo en red, ética y responsabilidad social.
                    </p>

                </article>
            </div>
        </section>
    )
}

