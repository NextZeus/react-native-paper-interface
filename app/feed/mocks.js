let cards = [
  {
    type: 'update',
    user: {
      name: 'John\nAppleseed',
      picture: 'http://lorempixel.com/80/80/people/1/',
    },
    card: {
        image:require('../imgs/1.jpg'),
        text: "I am working on implementing Facebook Paper like interactions today."
    }
  },
  {
    type: 'photo',
    user: {
      name: 'Vinay\nSingh',
      picture: 'http://lorempixel.com/80/80/people/2/',
    },
    card: {
        image:require('../imgs/2.jpg'),
        text: "Gotta munch on some thing while I get this to work."
    }
  },
  {
    type: 'question',
    user: {
      name: 'Ravi\nAnand',
      picture: 'http://lorempixel.com/80/80/people/3/',
    },
    card: {
        image:require('../imgs/3.jpg'),
        text: "Is it really possible that animations can be paused in flight to keep the interface always responsive?"
    }
  },
  {
    type: 'deadline',
    user: {
      name: 'John\nAppleseed',
      picture: 'http://lorempixel.com/80/80/people/4/',
    },
    card: {
        image:require('../imgs/4.jpg'),
        text: "Gotta ship this soon!"
    }
  },
  {
    type: 'photo',
    user: {
      name: 'Vinay\nSingh',
      picture: 'http://lorempixel.com/80/80/people/5/',
    },
    card: {
        image:require('../imgs/5.jpg'),
        text: "If this works, I need a party!"
    }
  },
  {
    type: 'question',
    user: {
      name: 'Ravi\nAnand',
      picture: 'http://lorempixel.com/80/80/people/6/',
    },
    card: {
        image:require('../imgs/6.jpg'),
        text: "The Animated library for React Native is pretty amazing, right?"
    }
  },
  {
    type: 'photo',
    user: {
      name: 'Vinay\nSingh',
      picture: 'http://lorempixel.com/80/80/people/7/',
    },
    card: {
      image: require('../imgs/7.jpg'),
      text: "Looks like there is something to eat here."
    }
  },
];

module.exports = cards;
