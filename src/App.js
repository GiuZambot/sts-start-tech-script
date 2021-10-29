import React, { Component } from 'react';
import './App.css';
import { snippets, categories } from './snippets/snippets';
let valor = "";
let transfer = '';
let ver = false;

export class App extends Component {
  loging = () => {
    if (!transfer[0]) return;
    const arr = transfer.split('\n').map((code, i) =>
      <Code key={i} code={code} className={`language-js`} butt={'0'}></Code>
    );
    arr.pop();
    this.setState({ conteudo: arr });
  }

  state = { conteudo: transfer };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Start Tech Script - STS</h3>
        </header>
        <main>
          <Explorer loging={() => this.loging()} tranfer={this.state.conteudo} />
          <Console loging={() => this.loging()} tranfer={this.state.conteudo} />
        </main>
      </div>
    );
  };
};

export class Code extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  state = { code: '' };

  execute = () => {
    sts(this.ref.current.textContent);
    this.props.loging();
  }

  render() {
    const { code, plugins, language, butt } = this.props;
    const button = butt ? '' : <button onClick={this.execute}>Editar</button>;

    return (
      <pre className={!plugins ? "" : plugins.join(" ")}>
        <code ref={this.ref} className={`language-${language}`}>
          {code.trim()}
        </code>
        {button}
      </pre>
    )
  }
}

class Explorer extends Component {
  constructor(props) {
    super(props);
    this.imp = React.createRef();
    this.cat = React.createRef();
  }

  componentDidMount() {
    this.listar(snippets);
    this.listarCat(categories);
  }

  listCat = [];
  listItems = [];
  state = { conteudo: this.listItems, categorias: this.listCat };
  listar = (lista) => {
    this.listItems = lista.map((code, i) =>
      <Code
        key={i}
        code={code}
        language="js"
        loging={() => this.props.loging()}
        tranfer={this.props.tranfer}
      />
    );
    this.setState({ conteudo: this.listItems });
  }

  listarCat = (lista) => {
    this.listCat = lista.map((cat, i) =>
      <option key={i}>{cat}</option>
    );
    this.setState({ categorias: this.listCat });
  }

  search = () => {
    if (this.imp && this.imp.current) {
      const result = snippets.filter(i => i.includes(this.imp.current.value));
      this.listar(result);
    }
  }

  categotieChange = () => {
    this.imp.current.value = this.cat.current.value;
    this.search();
  }

  render() {
    return (
      <div className="snippets">
        <select ref={this.cat} onChange={this.categotieChange} className="categories">{this.state.categorias}</select>
        <input ref={this.imp} onKeyUp={this.search} className="btn-search" type="text" id="" />
        {this.state.conteudo}
      </div>
    );
  }
}

class Console extends Component {
  state = { log: true };
  execute = () => {
    sts(document.getElementById('code').value);
    this.props.loging();
  }

  verNaoVer = () => {
    ver = !ver;
    this.setState({ log: !this.state.log });
    this.execute();
  }

  render() {
    return (
      <div className="box">
        <div className="console">
          <textarea id="code" defaultValue={valor} cols="25" rows="10" placeholder="Cole ou digite o código aqui, depois clique em Executar."></textarea>
          <button onClick={this.execute} className='btn-executar'>Executar o código acima.</button>
          <button onClick={this.verNaoVer} className='btn-executar'>{this.state.log ? 'Ver Tradução' : 'Fechar Tradução'}</button>
          <div className="consolelog">{this.props.tranfer}</div>
        </div>
      </div>
    );
  }
}

export default App;

function evaluate(y) {
  var script = document.createElement('script');
  script.type = "text/javascript";
  script.text = "{console.clear();" + y + "}";
  document.getElementsByTagName('head')[0].appendChild(script);
  document.head.removeChild(document.head.lastChild);
}

var realConsoleLog = console.log;
console.log = function () {
  var message = [].join.call(arguments, ": ");
  transfer += message + "\n";
  realConsoleLog.apply(console, arguments);
};

const cmd = {
  "joyce": "console.log",
  "ju": "console.log",
  "jj": "console.log",
  "gui": "Math.pow",
  "palomac": "Math.cos",
  "palomas": "Math.sin",
  "laurao": "document.querySelector",
  "emi": "typeof",
  "eudes": "Math.random"
}

const cmd2 = {
  "giu": "let",
}

const cmd3 = {
  "cyro": "for",
  "luana": "if",
  "mari": "while"
}

const cmd4 = {
  "ursula": "!"
}

const cmd5 = {
  "rafa": "push",
  "clara": "toUpperCase",
  "laura": "splice",
  "gabe": "slice",
  "jis": "map",
  "iza": "filter",
  "pan": "pop",
  "laila": "join"
}

const cmd6 = {
  "may": "=>"
}

function sts(y) {
  document.getElementById("code").value = y;
  transfer = [];
  evaluate(translate(y, 1));
}

function translate(y, ponto) {
  let comandos = y.split(";");
  comandos = comandos.map(c => c.trim().toLowerCase());
  let stscript = '';
  comandos.forEach(comando => {
    if (!comando) return;
    let objeto = '';
    let metodo = '';
    comando = comando.split(":");
    if (comando[0].includes('.')) {
      [objeto, metodo] = comando[0].split('.');
      comando[0] = metodo;
    }
    let paramTrans = '';
    switch (true) {
      case cmd.hasOwnProperty(comando[0]):
        paramTrans = comando[1];
        if (paramTrans.includes('#')) {
          paramTrans = paramTrans.replace('#', ':');
          paramTrans = translate(paramTrans, 0);
        }

        stscript += `${cmd[comando[0]]}(${paramTrans})`;
        if (ponto) stscript += ';';
        break;
      case cmd2.hasOwnProperty(comando[0]):
        paramTrans = comando[2];
        if (paramTrans.includes('#')) {
          paramTrans = paramTrans.replace('#', ':');
          paramTrans = translate(paramTrans, 0);
        }

        stscript += `${cmd2[comando[0]]} ${comando[1]} = ${paramTrans};`;
        break;
      case cmd3.hasOwnProperty(comando[0]):
        if (comando[1].includes('#')) {
          comando[1] = comando[1].replace('#', ':');
          comando[1] = translate(comando[1], 0);
        }

        let chaves = comando[2];
        if (chaves.includes('&')) {
          chaves = chaves.split("&");
        } else {
          chaves = [comando[2]];
        }

        chaves = chaves.map(com => {
          if (com.includes('#')) {
            com = com.replace('#', ':');
            return translate(com, 0);
          }
          return com;
        })

        stscript += `${cmd3[comando[0]]}(${comando[1]}){${chaves}}`;
        break;
      case cmd4.hasOwnProperty(comando[0]):
        paramTrans = comando[1].replace('#', ':');
        stscript += `${cmd4[comando[0]]}${paramTrans}`;
        if (ponto) stscript += ';';
        break;

      case cmd5.hasOwnProperty(comando[0]):
        stscript += `${objeto}.${cmd5[comando[0]]}(${comando[1]})`;
        if (ponto) stscript += ';';
        break;

      case cmd6.hasOwnProperty(comando[0]):
        if (comando[2].includes('#')) {
          comando[2] = comando[1].replace('#', ':');
          comando[2] = translate(comando[2], 0);
        }

        let chavesf = comando[3];
        if (chavesf.includes('&')) {
          chavesf = chavesf.split("&");
        } else {
          chavesf = [comando[3]];
        }

        chavesf = chavesf.map(com => {
          if (com.includes('#')) {
            com = com.replace('#', ':');
            return translate(com, 0);
          }
          return com;
        })

        stscript += `const ${comando[1]} = (${comando[2]}) ${cmd6[comando[0]]} {${chavesf}};`;
        break;

      default:
        stscript += comando[0] + ";";
        break;
    }
  });
  if (ver) console.log(stscript);
  return stscript;
}