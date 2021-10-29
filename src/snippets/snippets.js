const snippets = [`
giu:texto:'Uma string';
joyce:'joyce ' + texto;
ju:'ju ' + texto;
jj:'jj ' + texto;
`];

snippets.push(`
giu:a:[1,2,3];
cyro:item of a:joyce#item;
`);

snippets.push(`
giu:a:gui#2,3;
joyce:a;
`);

snippets.push(`
joyce:gui#5,2;
`);

snippets.push(`
giu:a:5;
luana:a>3:joyce#a+" é maior que 3";
`);

snippets.push(`
giu:a:0;
mari:a<3:a++&joyce#a;
`);

snippets.push(`
joyce:palomaC#5;
`);

snippets.push(`
joyce:palomaS#5;
`);

snippets.push(`
giu:a:[1,2];
a.rafa:3;
a.rafa:4;
cyro:item of a:joyce#item;
`);

snippets.push(`
giu:a:[1,2,3,4,5];
a.pan:;
a.pan:;
cyro:item of a:joyce#item;
`);

snippets.push(`
giu:a:'string em minúscula';
ju:a.clara#;
`);

snippets.push(`
giu:a:laurao#'.btn-search';
joyce:a.value = 'eudes';
`);

snippets.push(`
giu:a:[1,2,3];
a.laura:1,1;
cyro:item of a:joyce#item;
`);

snippets.push(`
giu:a:[1,2,3];
giu:b:a.gabe#0,2;
cyro:item of b:ju#item;
`);

snippets.push(`
giu:a:[1,2,3];
giu:b:a.jis#(x)=> x + 1;
joyce:b;
`);

snippets.push(`
giu:a:[1,2,3,4,5,6,7];
giu:b:a.iza#(x)=> x > 4;
joyce:b;
`);

snippets.push(`
giu:a:ursula#true;
jj:a;
`);

snippets.push(`
may:ola:prop:jj#prop;
ola('oieee');
`);

snippets.push(`
giu:num:'xxxx';
ju:emi#num;
`);

snippets.push(`
giu:a:[1,2,3];
giu:b:a.laila#' - ';
ju:b;
`);

snippets.push(`
giu:a:eudes#;
giu:b:a * 10;
joyce:b;
`);

const categories = [
    '',
    'clara',
    'cyro',
    'emi',
    'eudes',
    'gabe',
    'pan',
    'giu',
    'gui',
    'iza',
    'jis',
    'laila',
    'laura',
    'laurao',
    'luana',
    'mari',
    'palomaS',
    'palomaC',
    'rafa',
    'usrula'
];

module.exports = { snippets, categories };