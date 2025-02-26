"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Characters",
      [
        {
          name: "Naruto Uzumaki",
          about:
            "The protagonist, a hyperactive ninja who dreams of becoming Hokage. He has the Nine-Tailed Fox sealed inside him, which grants him great power.",
          url: "https://classic.exame.com/wp-content/uploads/2018/02/naruto.gif?w=1024",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sasuke Uchiha",
          about:
            "The last surviving member of the Uchiha clan (except for his brother Itachi). He seeks revenge against Itachi and possesses the Sharingan, a powerful hereditary dojutsu.",
          url: "https://static.wikia.nocookie.net/naruto/images/e/e7/Sasuke_epi_319.png/revision/latest?cb=20130629210647&path-prefix=pt-br",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sakura Haruno",
          about:
            "Initially obsessed with Sasuke, she grows as a medical ninja under Tsunade’s guidance. Her intelligence and physical strength improve over time.",
          url: "https://pm1.aminoapps.com/6348/ed610891eb57dac8cfd98941bd05c0135bc56616_hq.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kakashi Hatake",
          about:
            "Leader of Team 7, he is an elite ninja known as the 'Copy Ninja' for his ability to copy jutsu using the Sharingan he inherited from Obito Uchiha.",
          url: "https://static.wikia.nocookie.net/naruto/images/c/ca/Kakashi_Hatake_%28Infobox_-_Naruto%29.PNG/revision/latest?cb=20221012051237&path-prefix=pt-br",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rock Lee",
          about:
            "A ninja who cannot use ninjutsu or genjutsu but makes up for it with intense physical training, becoming a master of taijutsu.",
          url: "https://static.wikia.nocookie.net/naruto/images/9/97/Rock_Lee_Part_I.png/revision/latest/scale-to-width/360?cb=20160926212512&path-prefix=pt-br",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gaara",
          about:
            "Jinchūriki of the One-Tailed Beast, Shukaku. He grew up hated by his village and became a cold, ruthless ninja until he was changed by Naruto.",
          url: "https://pm1.aminoapps.com/6424/67abc9bac7af6d2638941f7448f846478a52102d_hq.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Neji Hyuga",
          about:
            "A prodigy of the Hyuga Clan who possesses the Byakugan and specializes in the Gentle Fist fighting style. Initially believes in a fixed destiny but changes his perspective over time.",
          url: "https://i.pinimg.com/736x/85/18/b7/8518b7cb7f2d67935a09f4fbc966c8ee.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shikamaru Nara",
          about:
            "An extremely intelligent and strategic ninja, but lazy. He has the ability to manipulate shadows and excels in tactical battles.",
          url: "https://i.pinimg.com/736x/85/18/b7/8518b7cb7f2d67935a09f4fbc966c8ee.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Characters", null, {});
  },
};
