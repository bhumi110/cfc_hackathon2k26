import { FaTrophy, FaMedal, FaAward, FaGift } from 'react-icons/fa';

const prizesData = [
    {
        place: '1st Prize',
        prize: '₹50,000',
        icon: FaTrophy,
        color: 'var(--st-cyan)',
        glow: 'var(--st-cyan-glow)',
    },
    {
        place: '2nd Prize',
        prize: '₹30,000',
        icon: FaMedal,
        color: 'var(--st-red)',
        glow: 'var(--st-red-glow)',
    },
    {
        place: '3rd Prize',
        prize: '₹15,000',
        icon: FaAward,
        color: 'var(--st-purple)',
        glow: 'var(--st-purple-glow)',
    },
    {
        place: 'Swags',
        prize: 'For All',
        icon: FaGift,
        color: 'var(--st-cyan)',
        glow: 'var(--st-cyan-glow)',
    },
];

export default prizesData;
