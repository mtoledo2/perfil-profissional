import { useState } from 'react';
import { FaWhatsapp, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Principal (){
    const [emailCopiado, setEmailCopiado] = useState(false);

    const copiarEmail = () => {
        navigator.clipboard.writeText("murilo_toledo@hotmail.com");
        setEmailCopiado(true);
        
        // desaparecer 2s depois
        setTimeout(() => {
            setEmailCopiado(false);
        }, 2000);
    };

    return(
        <section>
            <div className="flex flex-col items-center justify-center gap-4 mt-40 space-y-4">

                <div>
                    <img className="w-50 rounded-full object-cover" src="../../img/Perfil.png" alt="" /> 
                </div>

                <div className="text-center space-y-2">
                    <p className="font-semibold text-4xl">Murilo Toledo</p>
                    <p className='mt-3 text-gray-300'>Tecnologia da Informação | Desenvolvimento e Infraestrutura</p>
                    <p className='text-gray-300'>Engenheiro de Computação</p>
                </div>

                <div>
                    <p className="max-w-125 text-justify text-gray-400">Atuo com desenvolvimento web utilizando React e Node.js, além de experiência prática em suporte técnico e infraestrutura. Busco oportunidade para contribuir com soluções tecnológicas e evoluir profissionalmente.</p>
                </div>

                <div className="flex flex-col gap-4 text-center mt-4">
                    <a href="https://api.whatsapp.com/send?phone=5583999999999" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-800 px-20 py-3 rounded-md cursor-pointer hover:scale-105">
                        <FaWhatsapp size={20} />Fale comigo no WhatsApp
                    </a>
                    
                    <div className="relative">
                        <button 
                            onClick={copiarEmail}
                            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-800 px-20 py-3 rounded-md cursor-pointer hover:scale-105 w-full transition-all"
                        >
                            <MdEmail size={20} />
                            Envie-me um e-mail
                        </button>
                        {emailCopiado && (
                            <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md whitespace-nowrap text-sm font-medium">                                
                                Email copiado! 📋
                            </div>
                        )}
                    </div>
                    
                    <a href="https://github.com/mtoledo2?tab=repositories" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 px-20 py-3 rounded-md cursor-pointer hover:scale-105">
                        <FaGithub size={20} /> Meu GitHub
                    </a>
                    <a href ="https://www.linkedin.com/in/murilo-toledo-2927458b/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-700 px-20 py-3 rounded-md cursor-pointer hover:scale-105">
                        <FaLinkedin size={20} /> Meu LinkedIn
                    </a>
                    <a href="../../docs/CurriculoMuriloToledo.pdf" download className="flex items-center justify-center gap-2 border-2 bg-black-600 hover:bg-black-800 px-20 py-3 rounded-md cursor-pointer hover:scale-105">
                        <FaDownload size={20} /> Baixar currículo em PDF
                    </a>
                </div>

            </div>
        </section>
    )
}

export default Principal