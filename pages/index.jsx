import React, { Component } from "react";

export default class Index extends Component {

    render() {
        return (
          <body>
              <div className="container">
                  <div className="info">
                      <span>Ops! </span>
                      <p>Estamos em processo de manutenção para<br /> aprimorar sua experiência em nosso site.</p>
                      <p><strong>Em breve estaremos no ar com uma cara<br /> nova e cheios de novidades incríveis.</strong></p>
                      <p>Enquanto isso, se precisar falar com <br /> a Purple Code, é só clicar aqui embaixo.</p>
                      <a href="#">Quero falar com a Purple</a>

                  </div>

                  <img src="/img/Imagem.png" className="imageMaint" />
              </div>
          </body>
        );
    }
}