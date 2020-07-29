import { Injectable } from "@angular/core";

import { Item } from "../data/item.model";
import { Category } from "../data/category.model";
import { DataItem } from "../data/category.model";
import { Employee } from "../data/employee.model";
import { Donations } from "./donations";
import { LoginUser } from "./user";


@Injectable()
export class DataService {
    getItems(): Array<Item> {
        return [{
            id: 1,
            name: "Centro Cultural Amanhecer",
            cover: "~/assets/images/Instituicoes/RodaVida/rodavida.jpg",
            images: [
                "~/assets/images/Instituicoes/RodaVida/rodavida2.jpg",
                "~/assets/images/Instituicoes/RodaVida/rodavida3.jpg",
                "~/assets/images/Instituicoes/RodaVida/rodavida4.jpg",
                "~/assets/images/Instituicoes/RodaVida/rodavida5.jpg",
                "~/assets/images/Instituicoes/RodaVida/rodavida6.jpg",
                "~/assets/images/Instituicoes/RodaVida/rodavida7.jpg"
            ],
            category: "Crianças",
            categoryTag: "#2D9CDB",
            description: `
                \nA nossa caminhada começa no ano 1986, a partir da luta de professores universitários engajados na construção de uma sociedade com mais oportunidades e educação de qualidade. 
                \nNa época, se estabeleceu uma rede que tinha como base o princípio da parceria: uma Roda Viva que pensava como encaminhar soluções para crianças e adolescentes em situação de vulnerabilidade social. 
                \nInstitucionalizada em 1989, a organização civil sediada no Morro do Borel (Grande Tijuca) é hoje reconhecida pela sua historia e o seu impacto nas comunidades aonde atua. 
                \nVencedora de duas edições consecutivas do Prêmio Itaú-Unicef, ao longo desses anos, tem beneficiado diretamente milhares de pessoas por meio das atividades desenvolvidas nas áreas de educação, cultura, trabalho, esporte, formação de lideranças e cidadania.`
        },
        {
            id: 2,
            name: "Transforma Brasil",
            cover: "~/assets/images/Instituicoes/IMBRA/IMBRA3.jpg",
            images: [
                "~/assets/images/Instituicoes/IMBRA/IMBRA1.jpg",
                "~/assets/images/Instituicoes/IMBRA/IMBRA2.jpg",
                "~/assets/images/Instituicoes/IMBRA/IMBRA.jpg",
                "~/assets/images/Instituicoes/IMBRA/IMBRA4.jpg"
            ],
            category: "Socialização",
            categoryTag: "#e4ce0d",
            description: `O Instituto Muda Brasil é uma organização sem fins lucrativos de caráter público. Instituída em 2006, com objetivo de desenvolver um trabalho de promoção humana e combate à pobreza, através de atividades sócio educacionais, empreendedorismo e desenvolvimento comunitário.
            \nFortalecer a esperança e gerar oportunidades para que cada ser humano possa resgatar sua identidade, buscar seus sonhos e transformar sua realidade. 
            \nSer reconhecida como organização que desenvolve e dissemina projetos que contribuem para a valorização do indivíduo e para a transformação social.`
        },
        {
            id: 3,
            name: "Instituto Vale",
            cover: "~/assets/images/Instituicoes/Verter/verter.jpg",
            images: [
                "~/assets/images/Instituicoes/Verter/verter1.png",
                "~/assets/images/Instituicoes/Verter/verter2.jpg",
                "~/assets/images/Instituicoes/Verter/verter3.jpg",
                "~/assets/images/Instituicoes/Verter/verter4.jpg",
                "~/assets/images/Instituicoes/Verter/verter5.jpg",
                "~/assets/images/Instituicoes/Verter/verter6.jpg"
            ],
            category: "Crianças",
            categoryTag: "#2D9CDB",
            description: `Aos voluntários, apoiadores, amigos do Instituto Verter.
            \nEstamos passando por um momento difícil e importante no nosso país. Um desafio que precisa do espírito da responsabilidade social presente.
            \nOs projetos que o Verter desenvolveria com e sem parcerias, estão suspensos e nosso Time continuará trabalhando virtualmente em busca de produtos com inovação social, discutindo propostas de ações, material e atividades que desenvolveremos em breve, quando superarmos o COVID-19.
            \nPara que os projetos ganhem potencial e sejam logo realizados, continuarão algumas ações como: acompanhamento online dos processos nos Conselhos Municipais e Estaduais da Criança, comunicação com secretarias, órgãos públicos e privados e outras ideias que contribuam com a sustentabilidade da nossa ONG.
            \nPara quem puder, aproveite esse momento de ficar em casa, para compartilhar nossas redes sociais, promover o site, o FB e o Insta do Instituto Verter com amigos, familiares e potenciais novos apoiadores da nossa causa. Convidem todos a conhecer nossas ações sociais. Com fé, elas logo retornarão.
            \nVoluntários e apoiadores podem atuar nesse momento como? Se as ações sociais estarão suspensas…? Novos cadastros no “VISA Causas” podem ser super importantes nesse momento. Saiba que cada novo apoiador é importante para não perdermos força ao retomar as ações: https://vaidevisa.visa.com.br/…/cada…/saude/instituto_verter.
            \nEvitem compartilhar fake news, levem a situação a sério e sigam as recomendações dos órgãos oficiais representantes da saúde do país. Estamos à disposição e virtualmente conectados.
            \nhttps://www.facebook.com/InstitutoVerter`
        },
        {
            id: 4,
            name: "Passos das crianças",
            cover: "~/assets/images/Instituicoes/APASSOS/APassos1.jpg",
            images: [
                "~/assets/images/Instituicoes/APASSOS/APassos2.jpg",
                "~/assets/images/Instituicoes/APASSOS/APassos3.jpg",
                "~/assets/images/Instituicoes/APASSOS/APassos4.jpg",
                "~/assets/images/Instituicoes/APASSOS/APassos5.jpg"
            ],
            category: "Crianças",
            categoryTag: "#2D9CDB",
            description: `Nossa instituição promove a interação, a colaboração e o desenvolvimento mútuo através de um serviço de fortalecimento de vínculos que integra a criança e o adolescente com a família e a comunidade.
            \nFundada em 2004, a Passos da Criança é uma ONG que há 15 anos gera impacto social através do desenvolvimento integral de crianças e adolescentes de 05 a 13 anos da comunidade Vila das Torres em Curitiba/PR.
            \nUma história:
            \nA história de um menino que aos cinco anos de idade começou a ir para as ruas em busca de ajuda para sua família. Com o tempo, as tramas da rua se revelaram e Adilson deixou a comunidade Vila das Torres e se juntou a dezenas de outras crianças que viviam nas ruas de Curitiba. Viveu nesta situação até os 15 anos, quando foi acolhido em um abrigo institucional. Foi alfabetizado e tornou-se um educador social.
            \nUm sonho:
            \napós esta experiência, com 24 anos, retornou para a Vila das Torres com um desejo de mudança e transformação sobre as condições da comunidade. Foi então que com o apoio de voluntários e decidiu criar uma instituição para evitar que crianças e adolescentes vivenciassem situações semelhantes às que sofreu em sua infância.
            \nUma missão:
            \nAssim nasceu em 2004 na Vila das Torres, a Passos da Criança, uma ONG que promove o desenvolvimento integral de crianças e adolescentes de forma que eles sejam agentes da sua transformação e do meio em que vivem.
            \NMISSÃO:
            \NPromover o desenvolvimento integral de crianças e adolescentes em situação de vulnerabilidade social.
            \NVISÃO:
            \NSer uma instituição referência na transformação social de crianças, adolescentes e jovens.
            \NVALORES:
            \NPaixão pela causa; Acolhida; Escuta Qualificada; Pessoas e relações; Trabalho em rede.`
        },
        {
            id: 5,
            name: "ASPEC",
            cover: "~/assets/images/Instituicoes/ASPEC/ASPEC1.jpg",
            images: [
                "~/assets/images/Instituicoes/ASPEC/ASPEC2.jpg",
                "~/assets/images/Instituicoes/ASPEC/ASPEC4.jpg",
                "~/assets/images/Instituicoes/ASPEC/ASPEC5.jpg",
                "~/assets/images/Instituicoes/ASPEC/ASPEC6.jpg"
            ],
            category: "Cancer",
            categoryTag: "#27AE60",
            description: `Quem Somos:
            \nA Ação Solidária às Pessoas com Câncer - ASPEC é uma organização da sociedade civil, fundada em 04 de janeiro de 2012, que atende pessoas portadoras de câncer, que encontram em situação de vulnerabilidade social. Tal entidade foi fundada após o falecimento de um familiar da sua fundadora, que veio do interior de Minas Gerais juntamente com seu irmão para tratamento do câncer em Belo Horizonte, esbarrando em muitas dificuldades, dentre elas o provimento da sua alimentação básica e o acesso a orientações quanto aos seus direitos sociais.
            \n A entidade além de prestar assistência social e psicológica às pessoas portadoras de câncer e seus familiares, busca a difusão da informação, sensibilização e engajamento de atores na luta contra o câncer e/ou diagnóstico precoce. Para tanto, oferta atendimentos, concessão de benefícios eventuais, suplementos alimentares, roupas, oficinas de geração de trabalho e renda e fortalecimento de vínculos familiar e comunitário, palestras e caminhadas educativas para disseminação da informação referente ao câncer, direitos sociais e dentre outros. 
            \nA ASPEC não é conveniada com o poder público e conta com doações de pessoas físicas e jurídicas que sensibilizam com a causa apresentada,para sua manutenção. 
            \nMISSÃO:
            \nPrestar assistência social e psicológica às pessoas portadoras de câncer independente do gênero, raça e idade contribuindo com a qualidade do tratamento oncológico. Além de atuar como agente de promoção de conhecimentos referente ao diagnóstico precoce do câncer e/ou tratamento, bem como influenciar a formulação da política pública de saúde e campos afins para gerar a garantia da universalidade, integralidade e equidade na atenção à saúde do indivíduo.
            \nVISÃO:
            \nSer referência no apoio às pessoas portadoras de câncer, no que diz respeito à qualidade da assistência social, psicológica e a promoção de melhorias do tratamento oncológico em Minas Gerais.`
        },
        {
            id:6,
            name: "ESPECIAL",
            cover: "~/assets/images/Instituicoes/Institucional/Institucional1.jpg",
            images: [
                "~/assets/images/Instituicoes/Institucional/Institucional2.jpg",
                "~/assets/images/Instituicoes/Institucional/Institucional3.jpg",
                "~/assets/images/Instituicoes/Institucional/Institucional4.jpg",
                "~/assets/images/Instituicoes/Institucional/Institucional5.jpg",
                "~/assets/images/Instituicoes/Institucional/Institucional6.jpg",
            ],
            category: "Especiais",
            categoryTag: "#FF0000",
            description: `\nEm 1º de Março de 1.969, foi iniciado um trabalho de amor, com a distribuição de sopa aos pobres na Alameda do Ipê Branco 129, na região da Pampulha – Belo Horizonte/MG.
            \nA casa, onde se fazia a distribuição de sopa, estava pequena para o número de necessitados. Era necessária a compra de um lote e o antigo bairro Santo Inácio, hoje Floramar,  foi o local escolhido.
            \nEm 1.972, na sua sede própria do bairro Floramar, o Núcleo Assistencial Caminhos para Jesus, inicia com pioneirismo, o amparo a crianças deficientes, carentes e com paralisia cerebral. Naquela época sequer imaginavam que aquela missão seria vencer ao longo do tempo grandes desafios, ultrapassando limites, diversificando atividades. Esse mérito pertence não só a diretoria, ele é dos vários trabalhadores, colaboradores, que com sua preciosa generosidade souberam atender nossos apelos e passaram a ser os pilares desta Instituição.
            \nTrabalho, confiabilidade, qualidade e lealdade são os princípios que sempre nortearam a nossa atuação. E eles nos levaram muito mais longe do que poderíamos prever.
            \nHoje o Núcleo Assistencial Caminhos para Jesus é uma Associação Beneficente e de Assistência Social, de orientação religiosa cristã, constituída de ilimitado número de associados, com a finalidade de prestar assistência material e amparo a pessoas (crianças, adolescentes, adultos e idosos), sem distinção de crença, raça ou nacionalidade.
            \nMISSÃO:
            \nAcolher, assistindo e buscando resgatar, ao máximo, o potencial de crianças, adolescentes e idosos, carentes e/ou especiais, vinculadas à Instituição, sem distinção de crença, raça ou nacionalidade, atuando, efetivamente, no seu desenvolvimento funcional, cognitivo, social, afetivo e espiritual, no intuito de contribuir para uma sociedade mais justa. O Núcleo Assistencial Caminhos para Jesus é uma instituição filantrópica, sem fins lucrativos, sua diretoria é toda composta por voluntários.`
        },
        {
            id:7,
            name: "Lar de Jesus",
            cover: "~/assets/images/Instituicoes/LarTeresa/LarTeresa1.jpg",
            images: [
                "~/assets/images/Instituicoes/LarTeresa/LarTeresa2.jpg",
                "~/assets/images/Instituicoes/LarTeresa/LarTeresa3.jpg",
                "~/assets/images/Instituicoes/LarTeresa/LarTeresa4.jpg",
                "~/assets/images/Instituicoes/LarTeresa/LarTeresa5.jpg"
            ],
            category: "Cancer",
            categoryTag: "#27AE60",
            description: `\nO Lar Teresa de Jesus é uma instituição filantrópica, não governamental, sem fins lucrativos, que existe desde março de 1999.
            \nFundado por Dona Magdalena de Araújo, o Lar Teresa tem como missão o o acolhimento de forma integral, com ações baseadas em valores espirituais, sociais e humanísticos, por meio da garantia de acesso à cidadania e promoção humana de pessoas em tratamento do câncer ou doenças crônicas.`
        },
        {
            id:8,
            name: "Grupo Ajudar",
            cover: "~/assets/images/Instituicoes/GrupodeVicentinos/GrupodeVicentinos1.jpg",
            images: [
                "~/assets/images/Instituicoes/GrupodeVicentinos/GrupodeVicentinos2.jpg",
                "~/assets/images/Instituicoes/GrupodeVicentinos/GrupodeVicentinos3.jpg",
                "~/assets/images/Instituicoes/GrupodeVicentinos/GrupodeVicentinos4.jpg",
                "~/assets/images/Instituicoes/GrupodeVicentinos/GrupodeVicentinos5.jpg",
            ],
            category: "Baixa Renda",
            categoryTag: "#FF69B4",
            description: `\nEntidade sem fins lucrativos, fundada em 1972 por um grupo de Vicentinos preocupados com idosos em situação de risco social e abandono. Notada a grandeza da causa a idoneidade dos organizadores, a população aderiu ao projeto colaborando com seu valioso apoio.
            \nAo pequeno grupo fundador do Lar, mais e mais pessoas se agregaram, criando uma verdadeira teia solidária nos últimos quarenta e quatro anos. Com isso, o pequeno abrigo ganhou novas instalações e se tornou um espaço bem estruturado para dar vida digna e cada vez mais confortável a mais moradores. É uma referência de trabalho social no bairro e um local aconchegante e amigo aos voluntários que participam das inúmeras atividades visando à manutenção desse sonho que se amplia sempre.
            \nA diretoria do Lar Vicentino é composta por voluntários que, segundo a filosofia vicentina, trabalha e busca angariar outros braços para que, juntos e fortes, não meçam esforços para servir os pobres e enfrentem com fé e coragem as dificuldades.`
        }
    ];
        
    }

    getCategories(): Array<Category> {
        return [
            {
                cover: "~/assets/images/Instituicoes/Socializacao.png",
                category: "Socialização",
                color: "#e4ce0d"
            },
            {
                cover: "~/assets/images/Instituicoes/BaixaRenda.png",
                category: "Baixa Renda",
                color: "#FF69B4"
            },
            {
                cover: "~/assets/images/Instituicoes/Cancer.jpg",
                category: "Cancer",
                color: "#27AE60"
            },
            {
                cover: "~/assets/images/Instituicoes/Especiais.jpg",
                category: "Especiais",
                color: "#FF0000"
            },
            {
                cover: "~/assets/images/Instituicoes/criancas.jpg",
                category: "Crianças",
                color: "#2D9CDB"
            }
        ];
    }

    getNews(): Array<DataItem> {
        return [
            {

                title: "Entrega de sestas básicas",
                description:"A equipe Higher acompanha a entrega de cestas basicas na instituição lar das crianças",
                urlToImage:"~/assets/images/noticias/1.jpg",

            },
            {

                title: "Entrega de Brinquedos SOMAR",
                description:"A equipe higher acompanha a doação de brinquedos feito pela empresa SOMAR, para a instituição Lar de Jesus que combate o cancer.",
                urlToImage:"~/assets/images/noticias/3.png",

            },
            {

                title: "Acompanhamento Grupo Ajudar",
                description:"Acompanhamento das atividades das crianças no Grupo Ajudar.",
                urlToImage:"~/assets/images/noticias/2.jpg",

            },
            {

                title: "Entrega empresa BANCO+",
                description:"Entrega de mantimentos feita pela instituição Transforma Brasil, com doações da empresa BANCO+",
                urlToImage:"~/assets/images/noticias/4.jpg",

            }
        ];
    }

    getEmployee(): Array<Employee> {
        return [
            {
                nome: "Guilherme",
                cargo: "Presidente",
                descricao: "Responsável por gerenciar toda a equipe, e buscar parceiros e colaboradores que possam contribuir para os projetos e objetivos da empresa.",
                foto:"~/assets/images/usuarios/guilherme.jpg",
                data:''

            },
            {
                nome: "Thiago Neves",
                cargo: "Diretor Geral",
                descricao: "A principal tarefa do diretor geral será a direção, dirigir o pessoal ou os indivíduos que se encontram ao seu poder e guiá-los da melhor maneira possível para obter a satisfação do objetivo fixado. Sobre o diretor é que recairá toda a responsabilidade de uma atividade dirigida, ou seja, se as coisas saem bem, ele será o responsável, e se não saem também.",
                foto:"~/assets/images/usuarios/thiago.jpg",
                data:""
            },
            {
                nome: "Sávio Meireles",
                cargo: "Diretor de Vendas",
                descricao: "Responde pela direção da área de acordo com os indicadores estabelecidos, desenvolve a estratégia de vendas e define políticas, metas e programas de incentivo, a fim de aumentar o potencial de receita, atendendo as previsões e planos de crescimento dos negócios.",
                foto:"~/assets/images/usuarios/savio.jpg",
                data:""
            },
            {
                nome: "Gabriel Ferreira",
                cargo: "Gerente de Projetos",
                descricao: "Controlar a execução de projetos, trabalha na gerência da equipe de desenvolvimento.",
                foto:"~/assets/images/usuarios/gabriel.jpg",
                data:""
            },
            {
                nome: "João Pedro",
                cargo: "Gerente de Infra",
                descricao: "Elabora estratégias de procedimentos de continência. Coordena a implementação de soluções. Propõe planos de investimentos visando atualização tecnológica. Interage com as áreas da empresa, garantindo o bom desempenho de equipamentos, redes e sistemas.",
                foto:"~/assets/images/usuarios/toure.jpg",
                data:""
            },
            {
                nome: "Patrick",
                cargo: "Desenvolvedor",
                descricao: "Responsável por todo o projeto de desenvolvimento, desde a análise das necessidades do cliente, planejamento dos recursos do aplicativo, desenvolvimento, implantação de arquitetura, ferramentas e recursos e da realização de testes dos aplicativos e sistemas desenvolvidos.",
                foto:"~/assets/images/usuarios/patrick.jpg",
                data:""
            },
            {
                nome: "Felipe",
                cargo: "Desenvolvedor",
                descricao: "Responsável por criar o programa desde o projeto ate a finalização sendo isso  o processo de escrita, teste e manutenção, e então implementar,executar o teste e integrar os componentes que são parte da solução",
                foto:"~/assets/images/usuarios/",
                data:""
            }
        ];
    }

    // getUser(): Array<LoginUser> {
    //     return [
    //         {
    //             Login: "teste@bol.com",
    //             Senha: "teste"

    //         },
           
    //     ];
    // }
}