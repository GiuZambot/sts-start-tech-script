const snippets = [`
giu:a:ursula#true;
joyce:a;
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
joyce:palomac#5;
`);

snippets.push(`
joyce:palomas#5;
`);

snippets.push(`
giu:a:laurao#'.btn-executar';
joyce:a;
`);

snippets.push(`
giu:a:[1,2,3];
a.laura:1,1;
cyro:item of a:joyce#item;
`);

snippets.push(`
giu:a:[1,2,3];
giu:b:a.gabe#0,2;
cyro:item of b:joyce#item;
`);

snippets.push(`
giu:a:[1,2,3];
giu:b:a.jis#(x)=> x + 1;
joyce:b;
`);

const categories = [
    'Cap.1'
];

module.exports = { snippets, categories };