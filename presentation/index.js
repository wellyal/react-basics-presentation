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
  kat: require("../assets/kat.png")
};

preloader(images);

const theme = createTheme({
  default: "black",
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
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

        <Slide transition={["zoom"]} bgDarken={0.75} bgImage={images.me.replace("/", "")} bgColor="primary">
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


        <Slide transition={["zoom"]} textColor="tertiary" bgColor="secondary">
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
          <Appear fid="1">
            <BlockQuote>
              <Quote>
                <Text textSize="28px" textColor="primary">
                  Programação reativa tem sido proposta como uma forma de simplificar a criação de UI interativa, mesmo sendo uma paradigma geral da programação.
                </Text>
              </Quote>
              <Cite>Wikipedia</Cite>
            </BlockQuote>
          </Appear>
          <Appear fid="2">
            <BlockQuote>
              <Quote>
                <Text textSize="28px" textColor="primary">
                  Em computação, programação reativa é um paradigma de programação assíncrono com foco na propagação da mudança de estado.
                </Text>
              </Quote>
              <Cite>Wikipedia</Cite>
            </BlockQuote>
          </Appear>
          <Appear fid="3">
            <BlockQuote>
              <Quote>
                <Text textSize="28px" textColor="primary">
                  Por exemplo em um MVC, programação reativa pode facilidar alterações no Model que automaticamente reflitirão na View que está associada.
                </Text>
              </Quote>
              <Cite>Wikipedia</Cite>
            </BlockQuote>
          </Appear>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" align="center center">
          <Image src={images.diagram1} height="100%" width="100%"/>
        </Slide>
      </Deck>
    );
  }
}
