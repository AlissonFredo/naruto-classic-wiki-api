"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Villages",
      [
        {
          name: "Hidden Leaf Village (Konohagakure) ",
          about: "Konohagakure is one of the Five Great Shinobi Villages and the home of many main characters in the series. It was founded by Hashirama Senju and Madara Uchiha and values the spirit of teamwork and the Will of Fire, a philosophy that encourages ninjas to protect their comrades and their home at any cost. It is known for housing the Uchiha, Hyūga, and other powerful clans.",
          url: "https://pm1.aminoapps.com/6422/1c6472bef8b560cfdd54c8da24e0e8d701e1c04f_hq.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hidden Sand Village (Sunagakure)",
          about: "Located in the arid desert of the Land of Wind, Sunagakure is famous for its ninjas skilled in sand manipulation and puppetry. Throughout the series, the village faces economic difficulties due to the country's government, leading to internal tensions. Its leader, the Kazekage, controls the village, and one of its most notable ninjas is Gaara, who becomes one of the strongest Kazekages in history.",
          url: "https://pm1.aminoapps.com/6328/7b31073f420ca52c3f55404a76926cea61b95bf6_hq.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hidden Mist Village (Kirigakure)",
          about: "Kirigakure has a dark past and was known as the 'Village of Bloody Mist' due to its former brutal ninja graduation system. It was the birthplace of legendary figures like the Seven Ninja Swordsmen of the Mist and characters like Zabuza Momochi. Over time, under Mei Terumī's leadership, the village underwent reforms and became more peaceful and prosperous.",
          url: "https://naruto-shippuden-revolution.weebly.com/uploads/1/8/4/5/18450513/718104511.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hidden Cloud Village (Kumogakure)",
          about: "Located in the mountains, Kumogakure is a powerful village with a strong military tradition. Its leader, the Raikage, has always sought to strengthen the village and ensure its superiority. Ninjas from Kumogakure are known for their Lightning Style techniques and their mastery of Raiton. Killer Bee, one of the most skilled Jinchūriki, belongs to this village and trains Naruto in controlling the Kyuubi.",
          url: "https://pm1.aminoapps.com/6938/97d2efef2c44b0444ec332aa975248ab721a87abr1-360-450v2_00.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hidden Stone Village (Iwagakure)",
          about: "Iwagakure is known for its use of Earth Style (Doton) and its disciplined, strong-willed ninjas. The leader of the village, the Tsuchikage, has always maintained a strict stance on the country's security. During the Great Ninja Wars, Iwagakure frequently clashed with Konohagakure. One of the most famous ninjas from this village is Deidara, who used explosive clay in combat.",
          url: "https://pm1.aminoapps.com/7741/bd75a7df66dda90898012dff34eb107baf1f719br4-340-170_00.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hidden Sound Village (Otogakure)",
          about: "Unlike other villages, Otogakure was not an officially recognized village by the nations. It was created by Orochimaru as a center for experiments and training for his followers. The village served as a base for his plans of revenge against Konoha. Its ninjas were loyal to him and often used forbidden techniques and body modifications.",
          url: "https://pm1.aminoapps.com/6648/4958d2ee08a45469b836454b6b2c9bb575e7d7a2_hq.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Villages", null, {});
  },
};
