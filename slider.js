const rootDiv = document.querySelector('#root');

let sliderIndex = 0;

const images = [
  'https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg',
  'https://phonoteka.org/uploads/posts/2021-05/1622404546_17-phonoteka_org-p-peizazh-v-stile-piksel-art-krasivo-26.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg',
  'https://oir.mobi/uploads/posts/2021-06/1622803069_29-oir_mobi-p-peizazh-dlya-nachinayushchikh-priroda-kras-30.jpg',
  'https://static.insales-cdn.com/images/products/1/1609/213943881/lg100.jpg',
];

const frame = document.createElement('div');
frame.className = 'frame';

const cards = document.createElement('div');
cards.className = 'cards';

const triggers = document.createElement('div');
triggers.className = 'trigger';

const leftBtn = document.createElement('button');
leftBtn.innerText = '<';

const rightBtn = document.createElement('button');
rightBtn.innerText = '>';

triggers.append(leftBtn, rightBtn);

for (let elem of images) {
  const card = document.createElement('div');
  card.className = 'card';
  card.style.backgroundImage = `url(${elem})`;
  cards.append(card);
}

frame.append(cards, triggers);
rootDiv.append(frame);

function setActiveDots(index) {
  const dots = document.querySelectorAll('.rounds button');
  dots.forEach(dots => dots.classList.remove('active'));
  dots[index].classList.add('active');
}

function goRight() {
  if (sliderIndex < images.length - 1) {
    sliderIndex++;
    cards.style.transition = '0.5s';
  } else {
    sliderIndex = 0;
    if (sliderIndex == 0) {
      cards.style.transition = '0.1s';
    } else {
      cards.style.transition = '0.5s';
    }
  }
  cards.style.left = `${-1 * sliderIndex * 500}px`;
  setActiveDots(sliderIndex);
}
function goLeft() {
  if (sliderIndex != 0) {
    sliderIndex--;
    cards.style.transition = '0.5s';
  } else {
    sliderIndex = images.length - 1;
    if (sliderIndex == images.length - 1) {
      cards.style.transition = '0.1s';
    } else {
      cards.style.transition = '0.5s';
    }
  }
  cards.style.left = `${-1 * sliderIndex * 500}px`;
  setActiveDots(sliderIndex);
}

rightBtn.addEventListener('click', goRight);
leftBtn.addEventListener('click', goLeft);

function createRounds() {
  const roundsContainer = document.createElement('div');
  roundsContainer.className = 'rounds';

  for (let i = 0; i < images.length; i++) {
    const btn = document.createElement('button');
    roundsContainer.append(btn);

    btn.addEventListener('click', () => {
      sliderIndex = i;
      cards.style.left = `${-1 * sliderIndex * 500}px`;
      cards.style.transition = '0.5s';

      const buttons = btn.parentElement.childNodes;
      buttons.forEach(elem => elem.classList.remove('active'));

      btn.classList.add('active');
    });
    if (i === 0) {
      btn.classList.add('active');
    }
  }
  frame.append(roundsContainer);
}

createRounds();
