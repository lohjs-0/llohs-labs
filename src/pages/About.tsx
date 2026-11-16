
import { useState } from "react";
import { useTranslation } from "react-i18next";

type Language = "pt" | "en";

const content = {
  pt: {
    greeting: "oi, sou a lohane.",

    introduction: [
      "tenho 20 anos e uma quantidade meio preocupante de interesses que não têm muita relação entre si.",

      "posso passar horas tentando entender como funciona um microprocessador e, pouco depois, estar pesquisando sobre buracos negros, dinossauros ou discutindo quem venceria uma luta entre dois personagens fictícios. e sim, eu levo essas discussões mais a sério do que deveria.",

      "estudo análise e desenvolvimento de sistemas. gosto de programação, eletrônica, cibersegurança, linux e principalmente de entender o que acontece por trás das coisas. se alguma coisa funciona de um jeito que eu não entendo, provavelmente vou querer descobrir o motivo.",

      "às vezes isso vira um projeto. às vezes vira uma pesquisa de três horas que não leva a lugar nenhum. acontece.",

      "mas tecnologia está longe de ser a única coisa de que gosto.",

      "sou muito nerd. gosto de quadrinhos, livros, mangás, cinema, astronomia, ficção científica, fantasia e terror. também tenho um talento especial para me apegar a personagens que provavelmente vão morrer ou sofrer alguma coisa horrível.",

      "tenho um hiperfoco enorme no snoopy. não sei explicar direito, só sei que gosto muito daquele cachorro. qualquer coisa relacionada a ele já consegue chamar minha atenção com uma facilidade meio absurda.",

      "também sou apaixonada por dinossauros. gosto de aprender sobre as espécies, imaginar como era a terra milhões de anos atrás e descobrir curiosidades sobre animais que parecem ter saído de alguma história de ficção científica. a diferença é que eles realmente existiram, o que deixa tudo ainda mais interessante.",

      "amo desenhar, mesmo quando passo mais tempo tentando acertar um detalhe do que realmente terminando o desenho. também adoro ler ouvindo música. às vezes uma música combina tanto com o que estou lendo que parece que a história ganhou uma trilha sonora própria.",

      "gosto de histórias complicadas, personagens moralmente questionáveis e teorias tão absurdas que acabam fazendo sentido depois de um tempo. já perdi horas tentando entender a cronologia de universos fictícios. não me arrependo.",

      "e uma coisa meio específica sobre mim: tenho muita vontade de ganhar girassóis algum dia. não precisa ser um buquê enorme ou uma data especial. acho que o mais bonito seria alguém olhar para um girassol e lembrar de mim. parece uma coisa pequena, mas eu ia gostar de verdade.",

      "sou mais quieta no começo, observo bastante e penso demais. mas, se o assunto for alguma coisa que gosto, existe uma boa chance de eu falar mais do que o necessário.",

      "enfim, acho que isso resume uma parte de mim. a outra parte provavelmente está pesquisando alguma coisa aleatória agora.",
    ],

    interestsTitle: "coisas que gosto (entre muitas outras)",

    interests: [
      "programação, computadores e sistemas de baixo nível",
      "eletrônica, circuitos e sistemas embarcados",
      "cibersegurança, engenharia reversa e forense digital",
      "linux e a necessidade inexplicável de personalizar tudo",
      "astronomia, espaço e buracos negros",
      "dinossauros, paleontologia e criaturas pré-históricas",
      "snoopy, peanuts e qualquer coisa relacionada àquele beagle",
      "quadrinhos da dc e marvel",
      "livros, mangás, fantasia e ficção científica",
      "desenhar e ler ouvindo música",
      "filmes de terror, suspense e histórias pós-apocalípticas",
      "girassóis e pequenos gestos de carinho",
      "animais e suas personalidades completamente diferentes",
      "teorias absurdas e pesquisas que começam às três da manhã",
    ],

    animalsTitle: "meus bichinhos",

    animals: [
      "não dava para fazer uma página sobre mim sem falar dos meus animais. até porque eles provavelmente são os moradores mais interessantes da casa.",

      "o roberto é um chupim preto de quase um ano. ele simplesmente apareceu na casa do meu vô, e meu vô acabou me dando ele. foi assim que um passarinho chamado roberto entrou na minha vida. não teve muito planejamento, ele só apareceu e agora faz parte da família.",

      "também tenho um pastor alemão de um ano e meio que é um completo bobão. você olha para ele e vê aquele cachorro enorme, com cara de quem deveria estar trabalhando na polícia, mas a personalidade é de alguém que provavelmente perderia uma discussão para uma borboleta.",

      "e ainda tenho outro cachorro, que também merece seu espaço por aqui.",

      "cada um tem suas manias, suas personalidades e um talento especial para me fazer rir. gosto muito deles e não conseguiria falar sobre mim sem mencionar essas criaturas.",
    ],

    drawingTitle: "um pouco do que desenho",

    drawing: [
      "desenhar é uma das coisas que mais gosto de fazer. às vezes começo com uma ideia bem definida, outras vezes só pego o lápis e vejo no que dá.",

      "tenho o costume de prestar atenção em detalhes que provavelmente ninguém vai perceber. posso passar um tempão tentando acertar alguma coisa pequena e, quando finalmente consigo, encontrar outra para mexer.",

      "gosto de colocar música enquanto desenho. às vezes fico tão concentrada que perco completamente a noção do tempo. e, quando percebo, já estou ouvindo a mesma playlist há horas.",

      "não desenho necessariamente para produzir algo perfeito. gosto do processo, de colocar minhas ideias no papel e de ter um momento só meu.",

      "esse é um dos meus desenhos. achei que ele também merecia um espacinho por aqui.",
    ],

    drawingCaption: "um dos meus desenhos ♡",

    photoPlaceholder: "foto em breve",

    drawingPlaceholder: "meu desenho vai aparecer aqui",

    labTitle: "sobre o llohs labs",

    lab: [
      "criei o llohs labs porque queria um lugar para guardar as coisas que faço, estudo e descubro. o github já serve para uma parte disso, mas eu queria algo um pouco mais meu.",

      "a ideia inicial era fazer um site só para projetos e experimentos técnicos. depois percebi que provavelmente acabaria querendo escrever sobre algum livro, uma teoria de astronomia, dinossauros ou um personagem fictício, então resolvi não me limitar tanto.",

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

      "i can spend hours trying to understand how a microprocessor works and, shortly afterward, find myself researching black holes, dinosaurs, or arguing about which fictional character would win in a fight. and yes, i take those discussions more seriously than i probably should.",

      "i study systems analysis and development. i'm into programming, electronics, cybersecurity, linux, and especially figuring out what goes on behind the scenes. if something works in a way i don't understand, i'll probably want to know why.",

      "sometimes that turns into a project. sometimes it turns into three hours of research that goes absolutely nowhere. it happens.",

      "but technology is far from the only thing i'm interested in.",

      "i'm a huge nerd. i love comics, books, manga, movies, astronomy, science fiction, fantasy, and horror. i also have a special talent for getting attached to characters who are probably going to die or go through something horrible.",

      "i have a pretty intense hyperfixation on snoopy. i can't really explain it, i just love that dog. pretty much anything related to him immediately gets my attention.",

      "i'm also fascinated by dinosaurs. i love learning about different species, imagining what earth looked like millions of years ago, and discovering facts about animals that almost seem like something out of science fiction. except they actually existed, which makes everything even more interesting.",

      "i love drawing, even when i spend more time trying to get one tiny detail right than actually finishing the drawing. i also love reading while listening to music. sometimes a song fits what i'm reading so well that it feels like the story has its own soundtrack.",

      "i like complicated stories, morally questionable characters, and theories so ridiculous they somehow start making sense after a while. i've spent hours trying to understand fictional universe timelines. no regrets.",

      "and there's one oddly specific thing about me: i genuinely want someone to give me sunflowers someday. it doesn't have to be a huge bouquet or a special occasion. i just love the thought of someone seeing a sunflower and thinking of me. it might seem like a small thing, but it would mean a lot to me.",

      "i'm pretty quiet at first, i observe a lot, and i overthink things. but if we're talking about something i'm interested in, there's a good chance i'll talk more than necessary.",

      "anyway, i guess that sums up part of who i am. the other part is probably researching something completely random right now.",
    ],

    interestsTitle: "things i like (among many others)",

    interests: [
      "programming, computers, and low-level systems",
      "electronics, circuits, and embedded systems",
      "cybersecurity, reverse engineering, and digital forensics",
      "linux and the inexplicable need to customize everything",
      "astronomy, space, and black holes",
      "dinosaurs, paleontology, and prehistoric creatures",
      "snoopy, peanuts, and anything related to that beagle",
      "dc and marvel comics",
      "books, manga, fantasy, and science fiction",
      "drawing and reading while listening to music",
      "horror movies, thrillers, and post-apocalyptic stories",
      "sunflowers and small gestures of affection",
      "animals and all their different personalities",
      "ridiculous theories and research rabbit holes that start at 3 a.m.",
    ],

    animalsTitle: "my little companions",

    animals: [
      "there was no way i could make an about page without talking about my animals. mostly because they're probably the most interesting members of the household.",

      "roberto is a shiny cowbird, a little black bird who's almost a year old. he randomly showed up at my grandpa's house, and my grandpa ended up giving him to me. that's how a bird named roberto became part of my life. no planning involved. he just showed up, and now he's family.",

      "i also have a one-and-a-half-year-old german shepherd who's an absolute goofball. you look at him and see this big dog who looks like he should be working for the police, but his personality suggests he'd probably lose an argument with a butterfly.",

      "and there's my other dog, who deserves a little space here too.",

      "they all have their own quirks, personalities, and a special talent for making me laugh. i love them, and i couldn't really talk about myself without mentioning these creatures.",
    ],

    drawingTitle: "a little of what i draw",

    drawing: [
      "drawing is one of my favorite things to do. sometimes i start with a clear idea, other times i just pick up a pencil and see where it goes.",

      "i tend to focus on tiny details that probably nobody else will notice. i can spend ages trying to get one little thing right, only to find something else to fix afterward.",

      "i like having music playing while i draw. sometimes i get so focused that i completely lose track of time. before i know it, i've been listening to the same playlist for hours.",

      "i don't necessarily draw to make something perfect. i enjoy the process, putting my ideas on paper, and having a little time to myself.",

      "this is one of my drawings. i figured it deserved a little space here too.",
    ],

    drawingCaption: "one of my drawings ♡",

    photoPlaceholder: "photo coming soon",

    drawingPlaceholder: "my drawing will appear here",

    labTitle: "about llohs labs",

    lab: [
      "i created llohs labs because i wanted somewhere to keep the things i make, study, and discover. github already works for some of that, but i wanted something that felt a little more like my own space.",

      "the original idea was to make a website just for technical projects and experiments. then i realized i'd probably end up wanting to write about a book, an astronomy theory, dinosaurs, or some fictional character, so i decided not to limit myself too much.",

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

const animalPhotos = [
  {
    filename: "roberto.jpg",
    pt: "roberto",
    en: "roberto",
  },
  {
    filename: "pastor-alemao.jpg",
    pt: "meu pastor alemão",
    en: "my german shepherd",
  },
  {
    filename: "cachorro-2.jpg",
    pt: "meu outro cachorro",
    en: "my other dog",
  },
];

function Photo({
  src,
  alt,
  placeholder,
  fit = "cover",
  aspectRatio = "1 / 1",
}: {
  src: string;
  alt: string;
  placeholder: string;
  fit?: "cover" | "contain";
  aspectRatio?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      style={{
        aspectRatio,
        width: "100%",
        border: "1px solid var(--border, #333)",
        borderRadius: "8px",
        overflow: "hidden",
        background: "var(--surface, #181818)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {failed ? (
        <span
          style={{
            color: "var(--text-muted, #999)",
            fontSize: "12px",
            textAlign: "center",
            padding: "16px",
          }}
        >
          {placeholder}
        </span>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: fit,
            display: "block",
          }}
        />
      )}
    </div>
  );
}

export default function About() {
  const { i18n } = useTranslation();

  const language: Language =
    i18n.resolvedLanguage === "en" ? "en" : "pt";

  const text = content[language];
  const base = import.meta.env.BASE_URL;

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
          <h2>{text.animalsTitle}</h2>

          {text.animals.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <div
            className="about-animals-gallery"
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "16px",
              marginTop: "24px",
            }}
          >
            {animalPhotos.map((photo) => (
              <figure
                key={photo.filename}
                style={{ margin: 0, minWidth: 0 }}
              >
                <Photo
                  src={`${base}animals/${photo.filename}`}
                  alt={photo[language]}
                  placeholder={text.photoPlaceholder}
                />

                <figcaption
                  style={{
                    fontSize: "12px",
                    marginTop: "8px",
                    textAlign: "center",
                    opacity: 0.7,
                  }}
                >
                  {photo[language]}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="about-section">
          <h2>{text.drawingTitle}</h2>

          {text.drawing.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <figure
            style={{
              margin: "24px 0 0",
              maxWidth: "480px",
            }}
          >
            <Photo
              src={`${base}drawings/meu-desenho.jpg`}
              alt={text.drawingCaption}
              placeholder={text.drawingPlaceholder}
              fit="contain"
              aspectRatio="4 / 5"
            />

            <figcaption
              style={{
                fontSize: "12px",
                marginTop: "10px",
                textAlign: "center",
                opacity: 0.7,
              }}
            >
              {text.drawingCaption}
            </figcaption>
          </figure>
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
