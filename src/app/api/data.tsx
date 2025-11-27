import { getImgPath } from "@/utils/image";

export const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    // { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "/#blog" },
];

export const count = [
    {
        icon: getImgPath("/images/counter/star.svg"),
        value: "4.86",
        description: "Avaliação média dos nossos clientes",
    },
    {
        icon: getImgPath("/images/counter/admin.svg"),
        value: "20",
        description: "Clientes satisfeitos",
    },
    {
        icon: getImgPath("/images/counter/bag.svg"),
        value: "20+",
        description: "Projetos concluídos",
    },
];

export const Progress = [
    { title: 'UX Research and Testing', Progress: 95 },
    { title: 'Product Management', Progress: 84 },
    { title: 'UI & Visual Design', Progress: 90 }
];

export const Servicebox = [
    {
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        title: 'Web Apps',
        description: 'Somos especializados na criação de sistemas, sites e apps.',
    },
    // {
    //     icon: getImgPath('/images/services/perfomance-optimization.svg'),
    //     title: 'Design',
    //     description: 'Criamos designs únicos e funcionais para seu negócio.',
    // },
    {
        icon: getImgPath('/images/services/ux-design-product_2.svg'),
        title: 'Consultorias',
        description: 'Oferecemos consultorias personalizadas e implementações tecnológicas com o objetivo de otimizar o seu negócio.',
    },
    // {
    //     icon: getImgPath('/images/services/ux-design-product_2.svg'),
    //     title: 'APIs, Integrações e Banco de dados',
    //     description: 'Desenhamos e implementamos APIs e integrações para conectar seus sistemas e bancos de dados.',
    // },
    // {
    //     icon: getImgPath('/images/services/social_network.svg'),
    //     title: 'Midias Sociais',
    //     description: 'Criamos e gerenciamos perfis nas principais mídias sociais, conectando seu público-alvo.',
    // },
]

export const partners = [
    {
        image: getImgPath('/images/partners/partner-1.svg'),
        alt: 'Partner',
        title: 'Partner 1',
    },
    {
        image: getImgPath('/images/partners/partner-2.svg'),
        alt: 'Partner',
        title: 'Partner 2',
    },
    {
        image: getImgPath('/images/partners/partner-3.svg'),
        alt: 'Partner',
        title: 'Partner 3',
    },
]


export const portfolioinfo = [
    {
        image: getImgPath('/images/portfolio/habilidade.svg'),
        alt: 'Portfolio',
        title: 'Habilidade.Tech',
        slug: 'https://habilidade.tech',
        info: 'Plataforma de educação.',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/cardapio.svg'),
        alt: 'Portfolio',
        title: 'Cardápio Virtual',
        slug: 'https://cardapiovirtual.space/',
        info: 'Cardápio virtual para restaurantes.',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/card.svg'),
        alt: 'Portfolio',
        title: 'Card.You',
        slug: 'https://card.you.tec.br',
        info: 'Cartão de visitas virtual.',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/start.svg'),
        alt: 'Portfolio',
        title: 'Start.Space',
        slug: 'https://card.you.tec.br',
        info: 'Página Inicial Customizável.',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/testetudo.svg'),
        alt: 'Portfolio',
        title: 'Teste Tudo',
        slug: 'https://testetudo.vercel.app/',
        info: 'Plataforma de teste de hardware de computadores e celulares.',
        Class: 'md:mt-0'
    },
   
    
]