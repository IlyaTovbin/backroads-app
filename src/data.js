import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';

export const pageLinks = [
    {
        id: 1,
        href: '#home',
        text: 'Home'
    },
    {
        id: 2,
        href: '#about',
        text: 'About'
    },
    {
        id: 3,
        href: '#services',
        text: 'Services'
    },
    {
        id: 4,
        href: '#tours',
        text: 'Tours'
    },
];

export const socialLinks = [
    {
        id: 1,
        href: 'https://www.twitter.com',
        icon: 'fab fa-facebook'
    },
    {
        id: 2,
        href: 'https://www.twitter.com',
        icon: 'fab fa-twitter'
    },
    {
        id: 3,
        href: 'https://www.twitter.com',
        icon: 'fab fa-facebook'
    },
];

export const services = [
    // eslint-disable-next-line no-useless-concat
    { id: 1, icon: 'fas fa-wallet fa-fw', title: 'saving money', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' + 'Asperiores, officia.' },
    // eslint-disable-next-line no-useless-concat
    { id: 2, icon: 'fas fa-tree fa-fw', title: 'endless hiking', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' + 'Asperiores, officia.' },
    // eslint-disable-next-line no-useless-concat
    { id: 3, icon: 'fas fa-socks fa-fw', title: 'amazing comfort', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' + 'Asperiores, officia.' },
];

export const tours = [
    // eslint-disable-next-line no-useless-concat
    { id: 1, place: 'china', time: '6 days', price: '2100', title: 'Tibet Adventure', date: 'august 11th, 2021', image: tour1, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\n' + 'vitae tempore voluptatum maxime reprehenderit eum quod\n' + 'exercitationem fugit, qui corporis.'},
    // eslint-disable-next-line no-useless-concat
    { id: 2, place: 'russia', time: '11 days', price: '5100', title: 'Russian Adventure', date: 'august 26th, 2020', image: tour2, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\n' + 'vitae tempore voluptatum maxime reprehenderit eum quod\n' + 'exercitationem fugit, qui corporis.'},
    // eslint-disable-next-line no-useless-concat
    { id: 3, place: 'USA', time: '22 days', price: '8100', title: 'USA Adventure', date: 'august 27th, 2020', image: tour3, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\n' + 'vitae tempore voluptatum maxime reprehenderit eum quod\n' + 'exercitationem fugit, qui corporis.'},
];