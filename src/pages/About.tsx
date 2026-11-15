
import { useTranslation } from "react-i18next";

type Language = "pt" | "en";

const content = {
  pt: {
    greeting: "oi, sou a lohane.",

    introduction: [
      "tenho 20 anos, interesses demais e uma curiosidade que dificilmente fica restrita a um único assunto.",

      "sou o tipo de pessoa que pode passar horas tentando entender como um microprocessador funciona e, pouco depois, estar pesquisando sobre buracos negros, lendo alguma teoria absurda sobre um universo fictício ou discutindo os poderes de personagens que nem existem.",

      "gosto de entender como as coisas funcionam, mas também gosto de imaginar como poderiam funcionar.",

      "estudo análise e desenvolvimento de sistemas e tenho um interesse especial por computadores, eletrônica, segurança, sistemas de baixo nível e tudo aquilo que existe por trás das interfaces. gosto de construir projetos, experimentar tecnologias e descobrir detalhes que normalmente passam despercebidos.",

      "mas seria um pouco injusto me resumir a isso.",

      "sou bastante nerd, e não exclusivamente no sentido tecnológico. gosto de astronomia, quadrinhos, livros, mangás, cinema, ficção científica, fantasia, terror e universos fictícios com histórias tão complexas que às vezes parecem exigir uma graduação para serem compreendidos.",

      "gosto de personagens moralmente complicados, teorias improváveis, histórias que deixam perguntas depois do final e assuntos que me fazem cair em uma sequência interminável de pesquisas ou chorando pela morte de personagens que me apeguei..",

      "também gosto de música, animais e daqueles pequenos momentos em que posso simplesmente existir sem precisar estar produzindo alguma coisa.",

      "sou mais observadora do que falante, pelo menos no começo. tenho meu próprio ritmo, penso bastante e frequentemente me interesso por assuntos que não têm absolutamente nenhuma relação entre si.",

      "e gosto disso.",
    ],

    interestsTitle: "algumas coisas que habitam meu universo",

    interests: [
      "computadores, programação e sistemas de baixo nível",
      "eletrônica, circuitos e sistemas embarcados",
      "cybersecurity, engenharia reversa e forense digital",
      "astronomia, exploração espacial e os mistérios do universo",
      "quadrinhos da DC e Marvel, principalmente personagens complexos",
      "livros, mangás, fantasia e ficção científica",
      "cinema, terror e histórias pós-apocalípticas",
      "música e letras que parecem traduzir pensamentos",
      "animais, criaturas pré-históricas e curiosidades sobre a natureza",
      "teorias, perguntas estranhas e assuntos que surgem às três da manhã",
    ],

    labTitle: "sobre este pequeno canto da internet",

    lab: [
      "o llohs labs nasceu da vontade de ter um espaço onde eu pudesse guardar e compartilhar tudo aquilo que desperta minha curiosidade.",

      "inicialmente, a ideia era reunir projetos técnicos, experimentos e anotações. mas percebi que não fazia muito sentido limitar esse espaço a uma única parte de quem eu sou.",

      "então decidi transformá-lo em algo mais próximo de um arquivo pessoal de descobertas.",

      "aqui você vai encontrar códigos, circuitos, pesquisas, experimentos, textos e projetos em diferentes estágios de desenvolvimento. mas também poderá encontrar publicações sobre astronomia, ciência, quadrinhos, histórias, universos fictícios e qualquer outro assunto que tenha conseguido prender minha atenção.",

      "não existe exatamente um tema central. talvez a curiosidade seja o único.",

      "pretendo continuar alimentando este espaço com novas publicações sempre que descobrir, estudar, construir ou simplesmente encontrar alguma coisa interessante que queira compartilhar.",

      "às vezes será um artigo técnico bastante detalhado. outras vezes, uma reflexão sobre alguma história, uma curiosidade científica ou uma investigação completamente desnecessária sobre um assunto extremamente específico.",

      "provavelmente haverá um pouco de caos entre uma publicação e outra.",

      "e essa é parte da ideia.",
    ],

    finalTitle: "uma última coisa",

    final: [
      "não tenho a pretensão de saber tudo sobre os assuntos que compartilho aqui. na verdade, boa parte da graça está justamente em não saber.",

      "gosto de aprender, de mudar de ideia, de fazer perguntas e de descobrir que algo era muito mais complexo do que parecia inicialmente.",

      "este espaço não é um registro de tudo que já sei.",

      "é um registro de tudo que ainda quero descobrir.",

      "se você também gosta de explorar assuntos aleatórios, entender coisas complicadas ou simplesmente se perder em algum universo interessante, talvez encontre algo por aqui.",

      "e, se voltar de vez em quando, provavelmente haverá alguma novidade.",
    ],
  },

  en: {
    greeting: "hi, i'm lohane.",

    introduction: [
      "i'm 20 years old, have far too many interests, and a curiosity that rarely stays focused on just one subject.",

      "i'm the kind of person who can spend hours trying to understand how a microprocessor works and, shortly afterward, find herself researching black holes, reading an absurd theory about a fictional universe, or debating the powers of characters who don't even exist.",

      "i like understanding how things work, but i also like imagining how they could work.",

      "i study systems analysis and development, with a particular interest in computers, electronics, security, low-level systems, and everything that exists behind an interface. i enjoy building projects, experimenting with technologies, and discovering details that usually go unnoticed.",

      "but it would be a little unfair to reduce myself to that.",

      "i'm quite a nerd, and not exclusively in the technological sense. i love astronomy, comics, books, manga, cinema, science fiction, fantasy, horror, and fictional universes with stories so complex they sometimes seem to require a degree to understand.",

      "i like morally complicated characters, unlikely theories, stories that leave questions behind, and subjects that send me down endless research rabbit holes.",

      "i also enjoy music, animals, and those little moments when i can simply exist without needing to produce anything.",

      "i'm more observant than talkative, at least at first. i have my own pace, think a lot, and frequently become interested in subjects that have absolutely nothing to do with one another.",

      "and i like it that way.",
    ],

    interestsTitle: "a few things in my universe",

    interests: [
      "computers, programming, and low-level systems",
      "electronics, circuits, and embedded systems",
      "cybersecurity, reverse engineering, and digital forensics",
      "astronomy, space exploration, and the mysteries of the universe",
      "DC and Marvel comics, especially complex characters",
      "books, manga, fantasy, and science fiction",
      "cinema, horror, and post-apocalyptic stories",
      "music and lyrics that seem to translate thoughts",
      "animals, prehistoric creatures, and the natural world",
      "theories, strange questions, and subjects discovered at three in the morning",
    ],

    labTitle: "about this little corner of the internet",

    lab: [
      "llohs labs began as a place where i could collect and share everything that sparks my curiosity.",

      "at first, the idea was to gather technical projects, experiments, and notes. but i realized it didn't make much sense to limit this space to just one part of who i am.",

      "so i decided to turn it into something closer to a personal archive of discoveries.",

      "here you'll find code, circuits, research, experiments, writing, and projects at different stages of development. but you might also find posts about astronomy, science, comics, stories, fictional universes, or whatever else has managed to capture my attention.",

      "there isn't exactly a central theme. perhaps curiosity is the only one.",

      "i intend to keep adding new posts whenever i discover, study, build, or simply come across something interesting enough to share.",

      "sometimes it'll be a detailed technical article. other times, a reflection on a story, a scientific curiosity, or a completely unnecessary investigation into an extremely specific subject.",

      "there will probably be a little chaos between posts.",

      "and that's part of the idea.",
    ],

    finalTitle: "one last thing",

    final: [
      "i don't pretend to know everything about the subjects i share here. in fact, much of the fun comes from not knowing.",

      "i enjoy learning, changing my mind, asking questions, and discovering that something was far more complicated than it first appeared.",

      "this space isn't a record of everything i already know.",

      "it's a record of everything i still want to discover.",

      "if you also enjoy exploring random subjects, understanding complicated things, or getting lost in an interesting universe, perhaps you'll find something here.",

      "and if you come back from time to time, there will probably be something new.",
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

        {/* INTRODUCTION */}

        <section className="about-section">
          <h1>{text.greeting}</h1>

          {text.introduction.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>

        {/* INTERESTS */}

        <section className="about-section">
          <h2>{text.interestsTitle}</h2>

          <ul className="about-interests">
            {text.interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </section>

        {/* ABOUT LLOHS LABS */}

        <section className="about-section">
          <h2>{text.labTitle}</h2>

          {text.lab.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>

        {/* FINAL THOUGHTS */}

        <section className="about-section">
          <h2>{text.finalTitle}</h2>

          {text.final.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>

        {/* LITERARY REFERENCE */}

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
