import React from 'react';
import { Link } from 'react-router-dom';
import foto from '../../assets/foto1.png';
import ProductCard from '../../elements/ProductCard/ProductCard';
import noski1 from '../../assets/noski1.webp';
import noski2 from '../../assets/noski2.webp';
import noski3 from '../../assets/noski3.webp';
import noski4 from '../../assets/noski4.webp';

import './Main.css';

const Main = () => {
  return (
    <div className='main_container'>
      <h2>Український бред шкартепток та нижньої білизни </h2>
      <p className='text'>
        Dodo Socks – це сімейна справа з мрією створювати якісні та красиві
        шкарпетки в Україні Все почалося з того, як Марія та Денис вирішили, що
        хочуть створити щось трохи більше ніж просто шкарпетки. Вони хотіли
        створити шкарпетки, які будуть не тільки якісними, але і дарувати
        емоції: радість, посмішку та любов.
      </p>
      <div className='redirect_container'>
        <Link className='kill_link' to='/products'>
          <h3>Переглянути наші товари &#8594;</h3>
        </Link>
      </div>

      <div className='items_block'>
        <ProductCard img={noski1} title='nosok1' price='300 грн' />
        <ProductCard img={noski2} title='nosok2' price='200 грн' />
        <ProductCard img={noski3} title='nosok3' price='300 грн' />
        <ProductCard img={noski4} title='nosok4' price='400 грн' />
        <ProductCard img={noski1} title='nosok5' price='300 грн' />
      </div>
      <div className='redirect_container'>
        <Link className='kill_link' to='/contacts'>
          <h3>Звʼязатися з нами &#8594;</h3>
        </Link>
      </div>
      <p className='text'>
        Зараз кожен бокс це окрема історія.Отримуючи свій бокс, ви отримуєте не
        тільки шкарпетки, які будуть довго вам слугувати, але й частинку душі
        нашої команди. Для створення кожного боксу ми співпрацюємо з різними
        українськими художниками та дизайнерами. Dodo socks пройшов довгий шлях
        пошуку кращих технологій, матеріалів, обладнання для вас. Щоб з’явитися
        на світ наша шкарпетка проходить через кілька десятків рук, кожні з яких
        виконують свою незамінну роль. У виробництві використовується
        високопродуктивне обладнання чеських, французьких та італійських фірм,
        сировина провідних європейських, українських та турецьких виробників,
        висококваліфікований інженерний і виробничий персонал. Іноді на
        створення одного боксу може піти більше ніж пів року.
      </p>
      <div className='foto_container'>
        <img src={foto} alt='foto' />
      </div>
      <p className='text'>
        Коли ми розробляли труси, то слухали рекомендації урологів, щоб створити
        не тільки стильну чоловічу білизну, але і таку, яка буде нести здоров’я
        свому власнику. Легкість, комфорт, терморегуляція – буди нашою ціллю.
        Дизайн розробляється разом з нашими художниками, та є унікальним. Ми
        намагаємось надати атмосферу місця, де завжди вас чекають, нададуть всю
        інформацію, і як найшвидше відправлять не просто шкарпетки, а частинку
        душі
      </p>
    </div>
  );
};

export default Main;
