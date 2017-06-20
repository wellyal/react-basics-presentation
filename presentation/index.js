// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Appear,
  Layout,
  Fill,
  Fit
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  logo: require("../assets/logo.png"),
  me: require("../assets/me.jpg"),
  pokemon: require("../assets/pokemon.png"),
  facepalm: require("../assets/facepalm.jpg"),
  wikipedia: require("../assets/wikipedia.png"),
  diagram1: require("../assets/diagrams/diagram1.png"),
  diagram2: require("../assets/diagrams/diagram2.png"),
  diagram3: require("../assets/diagrams/diagram3.png"),
  diagram4: require("../assets/diagrams/diagram4.png"),
  kat: require("../assets/kat.png"),
  observing: require("../assets/observing.gif"),
  trump: require("../assets/donald-trump.jpg"),
  es6: require("../assets/es6.jpg")
};

preloader(images);

const theme = createTheme({
  default: "black",
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE",
  alarm: "#EE3B3B"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="secondary" align="center flex-start" bgImage={images.logo.replace("/", "")}>
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            React from meh to Awesome
          </Heading>
        </Slide>

        <Slide transition={["slide", "zoom"]} bgDarken={0.75} bgImage={images.me.replace("/", "")} bgColor="primary">
          <Appear fid="1">
            <div>
              <Text textColor="tertiary" size={1}>
                https://github.com/wellyal
              </Text>
              <Text textColor="tertiary" size={1}>
                @uellyal
              </Text>
            </div>
          </Appear>
        </Slide>


        <Slide transition={["spin", "zoom"]} textColor="tertiary" bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Afinal, O que é ReactJS?
          </Heading>

          <List>
            <Layout>
              <Fill>
                <Appear><ListItem>É um framework!?</ListItem></Appear>
                <Appear><ListItem>É uma lib!?</ListItem></Appear>
                <Appear><ListItem>É uma avião!?</ListItem></Appear>
                <Appear><ListItem>É um pokemon!?</ListItem></Appear>
              </Fill>
              <Fit>
                <Appear>
                  <Image height="400px" src={images.pokemon} />
                </Appear>
              </Fit>
            </Layout>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="default">
          <Image src={images.facepalm} />
        </Slide>

        <Slide transition={["zoom"]} bgDarken={0.75} bgImage={images.wikipedia.replace("/", "")}>
          <Appear>
            <BlockQuote>
              <Quote>
                <Text textSize="28px" textColor="primary">
                  Em computação, programação reativa é um paradigma de programação assíncrono com foco na propagação da mudança de estado.
                </Text>
              </Quote>
              <Cite>Wikipedia</Cite>
            </BlockQuote>
          </Appear>
          <Appear>
            <BlockQuote>
              <Quote>
                <Text textSize="28px" textColor="primary">
                  Por exemplo em um MVC, programação reativa pode facilidar alterações no Model que automaticamente reflitirão na View que está associada.
                </Text>
              </Quote>
              <Cite>Wikipedia</Cite>
            </BlockQuote>
          </Appear>
          <Appear>
            <BlockQuote>
              <Quote>
                <Text textSize="28px" textColor="primary">
                  Programação reativa tem sido proposta como uma forma de simplificar a criação de UI interativa, mesmo sendo uma paradigma geral da programação.
                </Text>
              </Quote>
              <Cite>Wikipedia</Cite>
            </BlockQuote>
          </Appear>
        </Slide>


        <Slide transition={["zoom"]} bgColor="primary" align="center center">
          <Image width="100%" src={images.diagram4}/>
        </Slide>

        <Slide transition={["zoom"]} align="center flex-start" bgColor="default">
          <Appear>
            <Text margin="0 0 30px" textSize="36px" textColor="primary">
              E se eu disser que esse modelo foi proposto para OO !?
            </Text>
          </Appear>
          <Appear>
            <Text margin="0 0 30px" textSize="36px" textColor="tertiary">
              E se eu disser que essa proposta gerou um padrão de projeto !?
            </Text>
          </Appear>
          <Appear>
            <div>
              <Text margin="0 0 30px" textSize="36px" textColor="alarm">
                E se eu disse que Donald Trump foi eleito presidente dos EUA?
              </Text>
              <Image src={images.kat} />
            </div>
          </Appear>
        </Slide>

        <Slide transition={["zoom"]} align="center flex-start" bgImage={images.trump.replace("/", "")}>
          <Heading caps fit size={3} textColor="primary">
            Aceita que dói menos!
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" align="center center">
          <Image src={images.observing} />
          <Heading>Observer</Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="default" textColor="tertiary" align="center flex-start">
          <List>
            <Appear>
              <ListItem>Você tem um objeto SUBJECT</ListItem>
            </Appear>
            <Appear>
              <ListItem>O subject mantém uma lista de dependentes</ListItem>
            </Appear>
            <Appear>
              <ListItem>Envia um notify aos observers de alteração do estado</ListItem>
            </Appear>
          </List>

          <List textColor="alarm">
            <Appear>
              <ListItem>Você tem um Observer</ListItem>
            </Appear>
            <Appear>
              <ListItem>O obsever observa um subject</ListItem>
            </Appear>
            <Appear>
              <ListItem>O observer pode subscribe ou unsubscribe ao subject</ListItem>
            </Appear>
            <Appear>
              <ListItem>O observer reage quando o subject é alterado</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" align="center center">
          <Image src={images.diagram2} height="500px" />
          <Image src={images.observing} />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" align="center center">
          <Image src={images.diagram1} height="100%" width="100%"/>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" align="center center">
          <Image src={images.es6} height="100%" width="100%"/>
        </Slide>

      </Deck>
    );
  }
}
