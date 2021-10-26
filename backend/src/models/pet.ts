type PetType = 'dog' | 'cat' | 'fish';
type PetSex = 'Masculino' | 'Feminino';
type Pet = {
  type: PetType,
  image: string,
  name: string,
  color: string,
  sex: PetSex
};

const data: Pet[] = [
  {
    type: 'dog',
    image: 'images/boo.jpg',
    name: 'Boo Filhote',
    color: 'Branco e Amarelo',
    sex: 'Masculino'
  },
  {
    type: 'dog',
    image: 'images/bracoitaliano.jpg',
    name: 'Braco Italiano',
    color: 'Amarelo e Branco',
    sex: 'Masculino'
  },
  {
    type: 'dog',
    image: 'images/dogvibe.jpg',
    name: 'Dog Vibe',
    color: 'Amarelo',
    sex: 'Feminino'
  },
  {
    type: 'dog',
    image: 'images/huskysiberiano.jpeg',
    name: 'Husky Siberiano',
    color: 'Branco e Marron',
    sex: 'Masculino'
  },
  {
    type: 'dog',
    image: 'images/kelpieaustraliano.jpg',
    name: 'Kelpie Australiano',
    color: 'Preto',
    sex: 'Feminino'
  },
  {
    type: 'dog',
    image: 'images/labradorfilhote.jpg',
    name: 'Labrador Filhote',
    color: 'Branco',
    sex: 'Masculino'
  },
  {
    type: 'dog',
    image: 'images/lhasaapso.jpeg',
    name: 'Ihasa Apso',
    color: 'Branco e Marron',
    sex: 'Feminino'
  },
  {
    type: 'dog',
    image: 'images/pigtail.jpg',
    name: 'Pig Tail',
    color: 'Branco',
    sex: 'Feminino'
  },
  {
    type: 'dog',
    image: 'images/saobernardo.png',
    name: 'Sao Bernardo',
    color: 'Branco e Laranja',
    sex: 'Masculino'
  },
  {
    type: 'dog',
    image: 'images/shin-tzu.jpg',
    name: 'Shin Tzu',
    color: 'Branco',
    sex: 'Feminino'
  },
  {
    type: 'cat',
    image: 'images/BrasileirodePelocurto.jpg',
    name: 'Br de Pelo curto',
    color: 'Branco e Cinza',
    sex: 'Masculino'
  },
  {
    type: 'cat',
    image: 'images/britishshorthair.jpg',
    name: 'British Shorthair',
    color: 'Cinza',
    sex: 'Feminino'
  },
  {
    type: 'cat',
    image: 'images/Chausie.jpg',
    name: 'Chausie',
    color: 'Laranja',
    sex: 'Masculino'
  },
  {
    type: 'cat',
    image: 'images/GermanRex.jpg',
    name: 'German Rex',
    color: 'Branco e Laranja',
    sex: 'Masculino'
  },
  {
    type: 'cat',
    image: 'images/munchkin.png',
    name: 'Munchkin',
    color: 'Preto e Laranja',
    sex: 'Masculino'
  },

  {
    type: 'cat',
    image: 'images/Shortair.jpg',
    name: 'Shortair',
    color: 'Branco Listrado',
    sex: 'Feminino'
  },
  {
    type: 'cat',
    image: 'images/Thai.jpg',
    name: 'Thai',
    color: 'Branco e Marron',
    sex: 'Masculino'
  },
  {
    type: 'dog',
    image: 'images/vanturco.jpg',
    name: 'Van Turco',
    color: 'Branco e Laranja',
    sex: 'Feminino'
  },
  {
    type: 'fish',
    image: 'images/betta.jpg',
    name: 'Betta',
    color: 'Vermelho',
    sex: 'Masculino'
  },
  {
    type: 'fish',
    image: 'images/coridora.jpg',
    name: 'Coridora',
    color: 'Vermelho Listrado',
    sex: 'Masculino'
  },
  {
    type: 'fish',
    image: 'images/guppy.jpg',
    name: 'Guppy',
    color: 'Azul claro  ',
    sex: 'Masculino'
  },
  {
    type: 'fish',
    image: 'images/kinguio.jpg',
    name: 'Kinguio',
    color: 'Vermelho',
    sex: 'Feminino'
  },
  {
    type: 'fish',
    image: 'images/myaquarin.jpg',
    name: 'My Aquarin',
    color: 'Azul Turqueza',
    sex: 'Masculino'
  },
  {
    type: 'fish',
    image: 'images/peixegatosiames.jpg',
    name: 'Peixe Gato Siames',
    color: 'Vermelho e branco',
    sex: 'Feminino'
  },
  {
    type: 'fish',
    image: 'images/schermetelling.jpg',
    name: 'Scherme Telling',
    color: 'Laranja Pintado',
    sex: 'Masculino'
  },
  {
    type: 'fish',
    image: 'images/vova.jpg',
    name: 'Vova',
    color: 'Laranja',
    sex: 'Feminino'
  },
  {
    type: 'dog',
    image: 'images/pastor-alemao.jpg',
    name: 'Pastor-alemão',
    color: 'Amarelo e Preto',
    sex: 'Masculino'
  },
  {
    type: 'dog',
    image: 'images/labrador.jpg',
    name: 'Labrador-retriever',
    color: 'Branco',
    sex: 'Masculino'
  },
  {
    type: 'dog',
    image: 'images/zwergspitz.jpg',
    name: 'Zwergspitz',
    color: 'Amarelo',
    sex: 'Feminino'
  },
  {
    type: 'dog',
    image: 'images/husky.jpg',
    name: 'Husky Siberiano',
    color: 'Branco e Preto',
    sex: 'Masculino'
  },
  {
    type: 'dog',
    image: 'images/golden.jpg',
    name: 'Golden Retriever',
    color: 'Amarelo',
    sex: 'Masculino'
  },
  {
    type: 'dog',
    image: 'images/poodle.jpg',
    name: 'Poodle',
    color: 'Branco',
    sex: 'Feminino'
  },
  {
    type: 'dog',
    image: 'images/bulldog.jpg',
    name: 'Bulldog',
    color: 'Branco e Amarelo',
    sex: 'Masculino'
  },
  {
    type: 'cat',
    image: 'images/persa.jpg',
    name: 'Persa',
    color: 'Amarelo',
    sex: 'Masculino'
  },
  {
    type: 'cat',
    image: 'images/mainecoon.jpg',
    name: 'Maine Coon',
    color: 'Preto e Branco',
    sex: 'Masculino'
  },
  {
    type: 'cat',
    image: 'images/bengal.jpg',
    name: 'Bengal',
    color: 'Branco, Preto e Amarelo',
    sex: 'Feminino'
  },
  {
    type: 'cat',
    image: 'images/siames.jpg',
    name: 'Siamês',
    color: 'Amarelo e Preto',
    sex: 'Masculino'
  },
  {
    type: 'cat',
    image: 'images/sphynx.jpg',
    name: 'Sphynx',
    color: 'Branco',
    sex: 'Masculino'
  },
  {
    type: 'fish',
    image: 'images/neon.jpg',
    name: 'Tetra Neon',
    color: 'Vermelho e Azul',
    sex: 'Masculino'
  },
  {
    type: 'fish',
    image: 'images/matogrosso.jpg',
    name: 'Mato Grosso',
    color: 'Laranja',
    sex: 'Masculino'
  },
  {
    type: 'fish',
    image: 'images/limpavidro.jpg',
    name: 'Limpa Vidro',
    color: 'Verde e Branco',
    sex: 'Masculino'
  },
  {
    type: 'fish',
    image: 'images/tanictis.jpg',
    name: 'Tanictis',
    color: 'Vermelho',
    sex: 'Masculino'
  },
  {
    type: 'fish',
    image: 'images/acara.jpg',
    name: 'Acará Bandeira',
    color: 'Preto',
    sex: 'Masculino'
  },
]

export const Pet = {
  // Funçãao que busca todos os Pets em ordem alfabética
  getAll: (): Pet[] => {
    return data.sort(function (a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
    });
  },

  // Função de filtro dos Pets pelo tipo
  getFromType: (type: PetType): Pet[] => {
    return data.filter(item => item.type === type);
  },

  // Função de filtro dos Pets pelo nome
  getFromName: (name: string): Pet[] => {
    // indexOF - Busca pela posição da palavra digitada e retorna true ou false
    return data.filter(
      item => item.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) > -1
    );
  }
};