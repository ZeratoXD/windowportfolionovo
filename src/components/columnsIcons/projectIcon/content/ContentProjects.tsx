import imgEsteira from '../../../../assets/esteira.png'
import imgTopMovies from '../../../../assets/topMovies.png'
import imgFreelancer from '../../../../assets/freelancer.png'
import imgCrudAngularfrom from '../../../../assets/CrudAngular.png'
export const ContentProjects = () =>{
    return(
        <div>
            <h2>Meus Projetos</h2>
            
            <p>
                Nesta seção, apresento projetos que representam minha paixão e experiência na área de tecnologia.
            </p>

            <h3>Blog Pessoal</h3>

             <img width='100%' alt='user' height='300px' src={imgEsteira}/>

            <p>
            O Projeto blog pessoal foi pensado e pela Generation Brasil de maneira didática e eficiente para os alunos aplicarem seus conhecimentos e praticarem o desenvolvimento de uma aplicação completa. As linguagens utilizadas foram Java com Spring boot para o Back end e Javascript, Typescript com React e a estilização com  CSS Tailwind, durante o desenvolvimento da API foram utilizados Junit  para testes unitários e Insominia para testes de requisição.

               <div className="container-links-contents">
                  <p>link para o repositório: <a  target='_blank' rel="noreferrer" href="https://github.com/ZeratoXD/BlogPessoal">Repositório CI/CD</a></p>
               </div>

            </p>

            <h3>Nosso Pomar</h3>

             <img width='100%'  alt='user' height='300px' src={imgTopMovies}/>

            <p>
            O "Nosso Pomar" é um e-commerce com foco social e sustentável, conectando diretamente pequenos e médios agricultores ao consumidor final. A plataforma amplia o mercado para os produtores, aumenta sua renda e promove um ciclo econômico sustentável, contribuindo para o combate à fome e o fortalecimento da economia local.
Tecnologias Utilizadas
•	Front-end: Node.js, React, JavaScript, TypeScript, HTML, CSS e Tailwind CSS, garantindo interfaces modernas e responsivas.
•	Back-end: Java e Spring Boot, utilizando a arquitetura MVC para serviços web robustos e escaláveis.
•	Metodologia: Seguindo o SCRUM, o desenvolvimento foi ágil, colaborativo e adaptável, com entregas incrementais e comunicação constante.
Benefícios da Plataforma
•	Empoderamento dos Agricultores: Acesso direto ao mercado e maior geração de renda.
•	Sustentabilidade: Incentivo ao consumo consciente e práticas agrícolas responsáveis.
•	Economia Local: Fortalecimento das comunidades e da agricultura familiar.
Mais que um marketplace, o "Nosso Pomar" é uma ferramenta de transformação social, promovendo impacto positivo e inovação em prol da erradicação da fome e da agricultura sustentável.

                <div className="container-links-contents">
                    <p>
                        link para repositório: <a  target='_blank' rel="noreferrer" href="https://github.com/projeto-integrador-nossopomar">Repositório TopMovies </a>
                    </p>
                    <p>
                        Deploy: <a  target='_blank' rel="noreferrer" href="https://beautiful-bienenstitch-eb135e.netlify.app/home">Clique para ver o Site</a> 
                    </p>
                </div>

            </p>

            <h3>Projeto Freelancer</h3>

             <img width='100%'  alt='user' height='300px' src={imgFreelancer}/>

            <p>
            Para a realização deste projeto, optei pelo uso do framework Angular, integrado ao BootStrap, CSS e TypeScript. Essa combinação de tecnologias foi escolhida cuidadosamente para desenvolver um front-end que não apenas atendesse às necessidades específicas do meu cliente, mas que também proporcionasse uma experiência de usuário fluida e agradável.

                 <div className='container-links-contents'>
                 <p>
                        link para repositório: <a  target='_blank' rel="noreferrer" href="https://github.com/matheusduarte21/freelancer">Repositório Freelancer </a>
                  </p>
                  <p>
                        Deploy: <a  target='_blank' rel="noreferrer" href="https://guedesink.vercel.app/">Clique para ver o Site</a> 
                  </p>
                 </div>

            </p>

            <h3>Projeto Angular/Java</h3>

             <img width='100%'  alt='user' height='300px' src={imgCrudAngularfrom}/>

            <p>
                projeto que desenvolvi, utilizando as tecnologias Angular e Java. No backend, implementei operações CRUD (Create, Update e Delete) para permitir a integração com o sistema frontend. No lado do Java, contei com o framework Spring e utilizei o banco de dados MySQL.

                No frontend, explorei o Angular, TypeScript, CSS e BOOTSTRAP para criar uma interface amigável. Fiz requisições HTTP utilizando os métodos GET, PUT, POST e DELETE para interagir com o backend, permitindo a manipulação de dados.

                 <div className='container-links-contents'>
                    <p>
                        link para repositório: <a  target='_blank' rel="noreferrer" href="https://github.com/matheusduarte21/Angular-Java-Project">Repositório Crud/Angular </a>
                    </p>
                 </div>

            </p>

            
        </div>
    )
}