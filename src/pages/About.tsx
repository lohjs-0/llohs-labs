
import { useTranslation } from "react-i18next";

type Language = "pt" | "en";

const content = {
  pt: {
    greeting: "oi, sou a lohane.",

    introduction: [
      "tenho 20 anos e uma quantidade meio preocupante de interesses que não têm muita relação entre si.",

      "posso passar horas tentando entender como funciona um microprocessador e, pouco depois, estar pesquisando sobre buracos negros ou discutindo quem venceria uma luta entre dois personagens fictícios. e sim, eu levo essas discussões mais a sério do que deveria.",

      "estudo análise e desenvolvimento de sistemas. gosto de programação, eletrônica, cibersegurança, linux e principalmente de entender o que acontece por trás das coisas. se alguma coisa funciona de um jeito que eu não entendo, provavelmente vou querer descobrir o motivo.",

      "às vezes isso vira um projeto. às vezes vira uma pesquisa de três horas que não leva a lugar nenhum. acontece.",

      "mas tecnologia está longe de ser a única coisa de que gosto.",

      "sou muito nerd. gosto de quadrinhos, livros, mangás, cinema, astronomia, ficção científica, fantasia e terror. também tenho um talento especial para me apegar a personagens que provavelmente vão morrer ou sofrer alguma coisa horrível.",

      "gosto de histórias complicadas, personagens moralmente questionáveis e teorias tão absurdas que acabam fazendo sentido depois de um tempo. já perdi horas tentando entender a cronologia de universos fictícios. não me arrependo.",

      "também gosto muito de música, animais e de ficar fazendo absolutamente nada de vez em quando. embora minha cabeça raramente colabore com essa última parte.",

      "sou mais quieta no começo, observo bastante e penso demais. mas, se o assunto for alguma coisa que gosto, existe uma boa chance de eu falar mais do que o necessário.",

      "enfim, acho que isso resume uma parte de mim. a outra parte provavelmente está pesquisando alguma coisa aleatória agora.",
    ],

    interestsTitle: "coisas que gosto (entre muitas outras)",

    interests: [
      "programação, computadores e sistemas de baixo nível",
      "eletrônica, circuitos e sistemas embarcados",
      "cibersegurança, engenharia reversa e forense digital",
      "linux e a necessidade inexplicável de personalizar tudo",
      "astronomia, espaço e coisas que me fazem questionar o tamanho do universo",
      "quadrinhos da dc e marvel e discussões sobre personagens fictícios",
      "livros, mangás, fantasia e ficção científica",
      "filmes de terror, suspense e histórias pós-apocalípticas",
      "música e letras que parecem ter sido escritas depois de ler meus pensamentos",
      "animais, dinossauros e criaturas estranhas",
      "teorias absurdas e pesquisas que começam às três da manhã",
    ],

    labTitle: "sobre o llohs labs",

    lab: [
      "criei o llohs labs porque queria um lugar para guardar as coisas que faço, estudo e descubro. o github já serve para uma parte disso, mas eu queria algo um pouco mais meu.",

      "a ideia inicial era fazer um site só para projetos e experimentos técnicos. depois percebi que provavelmente acabaria querendo escrever sobre algum livro, uma teoria de astronomia ou um personagem fictício, então resolvi não me limitar tanto.",

      "aqui você vai encontrar projetos, códigos, circuitos, experimentos, artigos e anotações. alguns conteúdos são mais técnicos, outros são só coisas que achei interessantes o suficiente para escrever sobre.",

      "também quero usar esse espaço para registrar o processo das coisas. não só o resultado bonito e funcionando, mas as tentativas, os erros e as soluções que encontro pelo caminho.",

      "tem projetos que ainda estão pela metade, ideias que talvez nunca saiam do papel e assuntos que provavelmente só eu achei interessantes naquele momento.",

      "mas tudo bem. a graça é justamente poder colocar essas coisas em algum lugar.",

      "não tenho uma frequência definida para publicar. quando eu aprender alguma coisa, terminar um experimento ou simplesmente tiver vontade de escrever, provavelmente vai aparecer por aqui.",

      "basicamente, é meu cantinho da internet para organizar um pouco da bagunça que acontece na minha cabeça.",

      "não prometo que vai ficar muito organizado.",
    ],

    finalTitle: "acho que é isso",

    final: [
      "não sou especialista em tudo que escrevo aqui. na verdade, tem muita coisa que ainda estou começando a entender.",

      "às vezes vou escrever sobre algo que estudei durante semanas. outras vezes, sobre alguma coisa que descobri ontem e achei interessante.",

      "também posso mudar de opinião, encontrar um jeito melhor de fazer alguma coisa ou perceber que entendi tudo errado. faz parte.",

      "não quero transformar esse site em uma vitrine onde tudo parece perfeito e todo projeto funciona de primeira. até porque seria uma mentira bem descarada.",

      "se você gosta de tecnologia, ciência, histórias ou simplesmente de aprender coisas aleatórias, talvez encontre alguma coisa interessante por aqui.",

      "e, se não encontrar, pode voltar depois. provavelmente já vou ter inventado outro assunto.",
    ],
  },

  en: {
    greeting: "hi, i'm lohane.",

    introduction: [
      "i'm 20 years old and have a slightly concerning number of interests that don't really have much to do with each other.",

      "i can spend hours trying to understand how a microprocessor works and, shortly afterward, find myself researching black holes or arguing about which fictional character would win in a fight. and yes, i take those discussions more seriously than i probably should.",

      "i study systems analysis and development. i'm into programming, electronics, cybersecurity, linux, and especially figuring out what goes on behind the scenes. if something works in a way i don't understand, i'll probably want to know why.",

      "sometimes that turns into a project. sometimes it turns into three hours of research that goes absolutely nowhere. it happens.",

      "but technology is far from the only thing i'm interested in.",

      "i'm a huge nerd. i love comics, books, manga, movies, astronomy, science fiction, fantasy, and horror. i also have a special talent for getting attached to characters who are probably going to die or go through something horrible.",

      "i like complicated stories, morally questionable characters, and theories so ridiculous they somehow start making sense after a while. i've spent hours trying to understand fictional universe timelines. no regrets.",

      "i also really like music, animals, and doing absolutely nothing once in a while. although my brain rarely cooperates with that last part.",

      "i'm pretty quiet at first, i observe a lot, and i overthink things. but if we're talking about something i'm interested in, there's a good chance i'll talk more than necessary.",

      "anyway, i guess that sums up part of who i am. the other part is probably researching something completely random right now.",
    ],

    interestsTitle: "things i like (among many others)",

    interests: [
      "programming, computers, and low-level systems",
      "electronics, circuits, and embedded systems",
      "cybersecurity, reverse engineering, and digital forensics",
      "linux and the inexplicable need to customize everything",
      "astronomy, space, and things that make me question the size of the universe",
      "dc and marvel comics and arguments about fictional characters",
      "books, manga, fantasy, and science fiction",
      "horror movies, thrillers, and post-apocalyptic stories",
      "music and lyrics that sound like someone read my mind",
      "animals, dinosaurs, and weird creatures",
      "ridiculous theories and research rabbit holes that start at 3 a.m.",
    ],

    labTitle: "about llohs labs",

    lab: [
      "i created llohs labs because i wanted somewhere to keep the things i make, study, and discover. github already works for some of that, but i wanted something that felt a little more like my own space.",

      "the original idea was to make a website just for technical projects and experiments. then i realized i'd probably end up wanting to write about a book, an astronomy theory, or some fictional character, so i decided not to limit myself too much.",

      "here you'll find projects, code, circuits, experiments, articles, and notes. some posts are more technical, while others are just things i found interesting enough to write about.",

      "i also want to use this space to document the process. not just the nice, finished result, but the attempts, mistakes, and solutions i find along the way.",

      "some projects are still half-finished, some ideas might never become anything, and some topics probably only seemed interesting to me at the time.",

      "but that's fine. the whole point is having somewhere to put those things.",

      "i don't have a posting schedule. whenever i learn something, finish an experiment, or just feel like writing, it'll probably end up here.",

      "basically, it's my little corner of the internet where i try to organize some of the mess going on inside my head.",

      "can't promise it'll stay very organized.",
    ],

    finalTitle: "i guess that's about it",

    final: [
      "i'm not an expert in everything i write about here. actually, there's a lot i'm only just starting to understand.",

      "sometimes i'll write about something i've been studying for weeks. other times, it'll be something i discovered yesterday and thought was interesting.",

      "i might also change my mind, find a better way to do something, or realize i got something completely wrong. that's part of it.",

      "i don't want this website to be a showcase where everything looks perfect and every project works on the first try. mostly because that would be a pretty obvious lie.",

      "if you're into technology, science, stories, or just learning random things, you might find something interesting here.",

      "and if you don't, come back later. i'll probably have found something else to obsess over by then.",
    ],
  },
};

export default function About() {
  const { i18n } = useTranslation();

  const language: Language =
    i18n.resolvedLanguage === "en" ? "en" : "pt";

  const text = content[language];

  return (
    <div className="about-page">
      <article className="about-content">
        <section className="about-section">
          <h1>{text.greeting}</h1>

          {text.introduction.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>

        <section className="about-section">
          <h2>{text.interestsTitle}</h2>

          <ul className="about-interests">
            {text.interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </section>

        <section className="about-section">
          <h2>{text.labTitle}</h2>

          {text.lab.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>

        <section className="about-section">
          <h2>{text.finalTitle}</h2>

          {text.final.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>

        <footer className="about-quote">
          <blockquote>
            <p>Don't Panic.</p>
          </blockquote>

          <cite>
            — Douglas Adams,{" "}
            <em>The Hitchhiker's Guide to the Galaxy</em>
          </cite>
        </footer>
      </article>
    </div>
  );
}
