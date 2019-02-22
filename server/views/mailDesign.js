'use strict';

const courseImages = {
  java: 'https://firebasestorage.googleapis.com/v0/b/level-up-215008.appspot.com/o/Java%20cover.jpg?alt=media&token=6dd3c2de-3bae-426f-ac68-887470590072',
  js: 'https://firebasestorage.googleapis.com/v0/b/level-up-215008.appspot.com/o/Js%20cover%20web.jpg?alt=media&token=a6d7bb65-5aad-456e-b5d2-de4befaa2bd2',
  qa_automation: 'https://firebasestorage.googleapis.com/v0/b/level-up-215008.appspot.com/o/Qa%20automation%20cover.jpg?alt=media&token=3ecfea1c-0862-496e-9f28-ab0091010c8e',
    nodejs: 'https://firebasestorage.googleapis.com/v0/b/level-up-215008.appspot.com/o/nodejs.jpg?alt=media&token=be779701-fbb9-4846-a374-73443c0bf903',
};



module.exports = function (mailInfo) {

    const courseUrls = {
        java: `https://levelup.am/courses/java/${mailInfo.lang}`,
        js: `https://levelup.am/courses/js/${mailInfo.lang}`,
        qa_automation: `https://levelup.am/courses/js/${mailInfo.lang}`,
        nodejs: `https://levelup.am/courses/js/${mailInfo.lang}`,
    };

    const mailInfoTranslate = {
      uk: {
          thanks: 'Thank You',
          dear: 'Dear',
          desc: `Thanks for registration at Level Up IT Center in <span style="text-transform: capitalize;">${mailInfo.course === 'qa_automation' ? 'qa automation' : mailInfo.course}</span> course.Your application has been receive and our team will contact you soon. We are sure you’ve made a great choice.`,
          learnMore: 'Learn More About Course from',
          here: 'here',
          regards: 'Regards',
      },
      am: {
          thanks: 'Շնորհակալություն',
          dear: 'Հարգելի',
          desc: `Շնորհակալություն Level Up IT Center-ի <span style="text-transform: capitalize;">${mailInfo.course === 'qa_automation' ? 'qa automation' : mailInfo.course}</span> կուրսին միանալու համար: Ձեր հայտը գրանցվել է և շուտով մեր թիմը կապ կհաստատի Ձեզ հետ: Մենք վստահ ենք, որ Դուք հոյակապ ընտրություն եք կատարել:`,
          learnMore: 'Կարդացեք ավելին կուրսի մասին',
          here: 'այստեղից',
          regards: 'Հարգանքներով',
      },
      ru: {
          thanks: 'Спасибо',
          dear: 'Уважаемый',
          desc: `Благодарим за регистрацию на курс <span style="text-transform: capitalize;">${mailInfo.course === 'qa_automation' ? 'qa automation' : mailInfo.course}</span> в Level Up IT Center.  Мы получили Вашу заявку на участие. Наша команда в скором времени с Вами свяжется. Мы уверены, что Вы сделали правильный выбор!`,
          learnMore: 'Для предоставления более подробной информации следуйте по',
          here: 'ссылке',
          regards: 'С уважением',
      }
    };

    return `<div style="width: 100%; margin: 40px auto; max-width: 600px;border-style: solid;border-width: thin;border-color: #dadce0; overflow: hidden;border-radius: 8px">
    <div style="background-image: url(${courseImages[mailInfo.course]}); width: 100%; height: 300px;background-size: cover; background-position: center center;">

    </div>
    <div style="background-color: #fff; width: 100%; padding: 5px 30px; font-family: 'Roboto', sans-serif; box-sizing: border-box">
        <h1 style="color: #0ee4b1">${mailInfoTranslate[mailInfo.lang].thanks}</h1>
        <p style="color: #5c2be3; font-weight: 600; font-size: 20px;">${mailInfoTranslate[mailInfo.lang].dear} <span>${mailInfo.name}</span></p>
        <p style="line-height: 25px; color: #000; font-size: 15px;">
            ${mailInfoTranslate[mailInfo.lang].desc}
        </p>
        <p style="margin: 25px 0; color: #000; font-size: 15px;">${mailInfoTranslate[mailInfo.lang].learnMore} <a href=${courseUrls[mailInfo.course]} style="color: #662ffa" target="_blank">${mailInfoTranslate[mailInfo.lang].here}.</a></p>
        <p style="font-size: 15px; color: #000;">${mailInfoTranslate[mailInfo.lang].regards},</p>
        <p style="font-size: 15px; color: #000;">Level Up IT Center</p>
        <div style="width: 100%; padding: 20px; box-sizing: border-box; border-top: 1px dashed #dadce0;margin-top: 30px;">
            <h3 style="text-align: center; color: #5c2be3; margin-top: 0">Follow us</h3>
            <div style="display: table;margin: 0 auto;">
                <a href="https://www.facebook.com/levelUpItCenter/" target="_blank" style="text-decoration: none; margin-right: 25px">
                    <img src="https://firebasestorage.googleapis.com/v0/b/level-up-215008.appspot.com/o/facebook.png?alt=media&token=20a3598d-2ee3-4e92-8e11-c444d41ec69f" alt="">
                </a>
                <a href="https://www.linkedin.com/company/level-up-it-center/" target="_blank" style="text-decoration: none; margin-right: 25px">
                    <img src="https://firebasestorage.googleapis.com/v0/b/level-up-215008.appspot.com/o/linkedin.png?alt=media&token=110687b4-cb22-4bf6-ad46-48a2f125ad14" alt="">
                </a>
                <a href="https://www.instagram.com/levelup2018armenia" target="_blank" style="text-decoration: none">
                    <img src="https://firebasestorage.googleapis.com/v0/b/level-up-215008.appspot.com/o/instagram.png?alt=media&token=b18bc476-743a-4bf1-b718-7bf1d54e61f8" alt="">
                </a>
            </div>
        </div>
    </div>
</div>`
};