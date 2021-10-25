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
  // Funçãao que busca todos os Pets
  getAll: (): Pet[] => {
    return data;
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