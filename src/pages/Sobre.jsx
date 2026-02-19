import { MdCode, MdBuild, MdStorage, MdAnalytics, MdCheckCircle } from 'react-icons/md'

function Sobre (){
    return(
        <div className="flex flex-col items-center justify-center gap-4 mt-15 space-y-4 max-w-4xl mx-auto px-4">
            <div className="flex flex-col md:flex-row  gap-20 p-5 md:items-start ">
                <div className="shrink-0">
                    <img src="../../img/fotoperfil2.jpg" alt="Foto de perfil" className="rounded-2xl w-64 h-64 object-cover" />
                </div>
                <div className="flex flex-col gap-4 text-justify">
                    <p className="text-4xl font-semibold">Sobre mim</p>
                    <p>Olá, meu nome é Murilo Toledo</p>
                    <p>Sou Engenheiro de Computação e profissional de tecnologia com atuação em desenvolvimento de software, infraestrutura, gestão e educação tecnológica.</p>
                    <p>Minha formação técnica, aliada à experiência prática em ambientes educacionais e corporativos, me permitiu desenvolver uma visão ampla sobre tecnologia, desde a construção de soluções até a gestão de pessoas, processos e resultados.</p>
                    <p>Tenho interesse em atuar de forma estratégica dentro do ecossistema de tecnologia, contribuindo não apenas com código, mas com organização, melhoria de processos, inovação e entrega de soluções eficientes.</p>
                    <p>Acredito que tecnologia é ferramenta de transformação. Meu foco é utilizar conhecimento técnico e visão analítica para resolver problemas reais, gerar valor e evoluir continuamente como profissional.</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-20 p-5 text-justify">
                <div className="flex flex-col gap-4 flex-1">
                    <p className="text-2xl font-semibold">Minha Trajetória</p>
                    <p>Minha jornada profissional começou em áreas administrativas e de atendimento ao público, onde desenvolvi habilidades interpessoais, comunicação e negociação.</p>

                    <p>Posteriormente, atuei como monitor de cursos de tecnologia, fortalecendo minha didática e capacidade de transmitir conhecimento técnico de forma clara e estruturada.</p>

                    <p>Com o avanço da minha formação em Engenharia de Computação, assumi posições de maior responsabilidade na área educacional, atuando em:</p>

                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li className="text-base">Coordenação pedagógica e técnica</li>
                        <li>Treinamento de alunos e colaboradores</li>
                        <li>Análise de desempenho e indicadores</li>
                        <li>Manutenção de infraestrutura tecnológica</li>
                    </ul>

                    <p>Minha evolução culminou na atuação como gerente, sendo responsável pela operação de uma escola de cursos profissionalizantes, integrando setores pedagógico, administrativo e comercial, sempre alinhado a metas de qualidade e performance.</p>

                    <p>Essa trajetória consolidou minha base técnica e ampliou minha visão estratégica sobre tecnologia e gestão.</p>
                </div>

                <div className="flex flex-col gap-4 flex-1">
                    <p className="text-2xl font-semibold">Atuação Profissional</p>
                    <p>Atuo integrando tecnologia, organização e visão estratégica, com foco em:</p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                            <MdCode className="text-2xl text-blue-500 shrink-0" />
                            <span>Desenvolvimento de aplicações web</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <MdBuild className="text-2xl text-orange-500 shrink-0" />
                            <span>Estruturação e melhoria de processos tecnológicos</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <MdStorage className="text-2xl text-green-500 shrink-0" />
                            <span>Suporte e infraestrutura de TI</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <MdAnalytics className="text-2xl text-purple-500 shrink-0" />
                            <span>Análise e otimização de desempenho</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <MdCheckCircle className="text-2xl text-green-600 shrink-0" />
                            <span>Implementação de soluções orientadas a resultado</span>
                        </li>                    
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sobre