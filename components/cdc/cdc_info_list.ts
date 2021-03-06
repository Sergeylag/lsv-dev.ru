import noFoto from '../../public/img/NoFoto.png'
import couch from '../../public/img/cdc/services/couch.svg'
import buildings from '../../public/img/cdc/services/buildings.svg'
import notes from '../../public/img/cdc/services/notes.svg'
import schedule from '../../public/img/cdc/schedule.svg'
import prodoctorov from '../../public/img/cdc/review/prodoctorov.svg'
import s01 from '../../public/img/cdc/media/s01.jpg'
import s02 from '../../public/img/cdc/media/s02.jpg'
import s03 from '../../public/img/cdc/media/s03.jpg'
import s04 from '../../public/img/cdc/media/s04.jpg'
import s05 from '../../public/img/cdc/media/s05.jpg'
import s06 from '../../public/img/cdc/media/s06.jpg'

export const headerTitle = 'Консультативно-диагностический центр'

export const headerLinks = [
    {link: '#', text: 'Сотрудники отделения'},
    {link: '#', text: 'Информация для пациентов'},
    {link: '#', text: 'Отзывы об отделении'},
]

export const headCard = {
    position: 'Заведующий отделением',
    src: noFoto.src,
    fio: 'Халилов Александр Рафикович',
    link: "/doctors/1"
}

export const headContact = {
    contacts: [
        {href: 'tel:+74958703612', text: '+7 (495) 870-36-12'},
        {href: 'mailto:ovd-gkb50@yandex.ru', text: 'ovd-gkb50@yandex.ru'},
    ],
    btnHref: '/cdc/appointment',
    action: [
        {tag: 'p', href: '#', text: 'вам потребуется скан направления из поликлиники', src:'#'},
        {tag: 'a', href: '/cdc/schedule', text: 'Актуальное расписание', src:schedule.src},
    ]
}

export const about = [// блок не отрендерится если массив будет пуст
    'Консультативно-диагностический центр – это многопрофильное структурное подразделение ' +
    'ГКБ им. С.И. Спасокукоцкого, предназначенное для оказания медицинской помощи пациентам, ' +
    'направленным из учреждений амбулаторно-поликлинического звена г. Москвы и регионов России.',
    'В КДЦ ведут прием ведущие специалисты стационара, применяется современное оборудование и' +
    ' новейшие методики диагностики, что позволяет быстро и точно поставить пациентам верный диагноз.',
    'Если выявленное заболевание требует хирургического вмешательства и терапевтического лечения,' +
    ' пациента направят на госпитализацию в одно из стационарных отделений больницы.',
    'В КДЦ работает кабинет ранней диагностики онкозаболеваний предстательной железы.',
    'Регулярно проводятся Дни открытых дверей по урологии и гинекологии, хирургии, эндокринологии и другим направлениям.'
]

export const services = {
    active: true, headTag: 'h3', bodyTag: 'li', headText: 'В КДЦ пациент может получить:', list: [
        'Диагностическую и специализированную консультативную помощь;',
        'Первичную медико-санитарную помощь на основе общей врачебной практики;',
        'Комплексное решение диагностических вопросов с одновременным привлечением квалифицированных ' +
        'специалистов для оптимизации сроков обследования и лечения;'
    ]
}

export const textForServices = [// блок не отрендерится если массив будет пуст
    'Специалисты КДЦ ведут динамическое наблюдение за состоянием здоровья хронически больных по рекомендациям и ' +
    'на основе разработанных алгоритмов. Врачи КДЦ проводят отбор пациентов для проведения лечебно-диагностических ' +
    'мероприятий с применением высокоэффективных медицинских технологий.'
]

export const specializations = {
    active: true, headTag: 'h2', bodyTag: 'a', headText: 'Отделения КДЦ', list: [
        {link: '#', text: 'Эндоскопическое отделение'},
        {link: '#', text: 'Лаборатория радиоизотопной даигностики'},
        {link: '#', text: 'Отделение функциональной диагностики'},
        {link: '#', text: 'Отделение ультрозвуковой диагностики'},
        {link: '#', text: 'Клинико-диагностическая лаборатория'},
        {link: '#', text: 'Отделение лучевой диагностики'},
        {link: '#', text: 'Эндоскопическое'},
    ]
}

export const servicesForPatients = {
    active:true, headText:'Информация для пациентов', list:[
        {src:couch.src, link:'/patients/research', textLink:'Как подготовиться к инструментальным методам исследования'},
        {src:buildings.src, link:'/patients/health-capital', textLink:'Как получить медицинскую помощь жителям регионов России'},
        {src:notes.src, link:'#', textLink:'Какие документы необходимы при обращении в КДЦ'},
    ]
}

export const doctors = [  // блок не отрендерится если массив будет пуст
    {src:noFoto.src, href:'#', fio:'Шамин Алексей Иванович', position:'врачь-хирург', qualification:'д.м.н., профессор', experience:'10 лет'},
    {src:noFoto.src, href:'#', fio:'Шамин Алексей Иванович', position:'врачь-хирург', qualification:'', experience:'10 лет'},
    {src:noFoto.src, href:'#', fio:'Шамин Алексей Иванович', position:'врачь-хирург', qualification:'д.м.н., профессор', experience:'10 лет'},
    {src:noFoto.src, href:'#', fio:'Шамин Алексей Иванович', position:'врачь-хирург', qualification:'', experience:'10 лет'},
    {src:noFoto.src, href:'#', fio:'Шамин Алексей Иванович', position:'врачь-хирург', qualification:'д.м.н., профессор', experience:'10 лет'},
]

export const testimonials = [
    {src:prodoctorov.src, title:'Мария Сергеевна', text:'Я глубоко благодарен великолепным хирургам - академику ' +
            'Дмитрию Юрьевичу Пушкарю, проф. Александру Викторовичу Говорову, лечащему врачу Александру... Олеговичу…',
        link:'/testimonials/1'},
    {src:prodoctorov.src, title:'Anonym2345', text:'В больницу попала по направлению на консультацию, а затем на' +
            ' операцию. Врач Мишустин Александр Михайлович всё подробно объяснил, помог настроиться морально. Очень…',
        link:'/testimonials/1'},
    {src:prodoctorov.src, title:'Мария Сергеевна', text:'Я глубоко благодарен великолепным хирургам - академику ' +
            'Дмитрию Юрьевичу Пушкарю, проф. Александру Викторовичу Говорову, лечащему врачу Александру... Олеговичу…',
        link:'/testimonials/1'},
    {src:prodoctorov.src, title:'Сергей Викторович', text:'В больницу попала по направлению на консультацию, а затем на' +
            ' операцию. Врач Мишустин Александр Михайлович всё подробно объяснил, помог настроиться морально. Очень…',
        link:'/testimonials/1'},
]

export const media = [
    {item:'iframe', src:'//www.youtube.com/embed/2u_IJOtE6nQ' },
    {item:'img', src:s01.src },
    {item:'img', src:s02.src },
    {item:'img', src:s03.src },
    {item:'img', src:s04.src },
    {item:'img', src:s05.src },
    {item:'img', src:s06.src },
]

export const expandingList = {
    active: false,
    list: []
}