import { FaTrophy, FaMedal, FaAward, FaGift } from 'react-icons/fa';

const prizesData = [
    {
        place: '1st Prize',
        prize: 'Legends Will Be Rewarded',
        icon: FaTrophy,
        color: 'var(--st-cyan)',
        glow: 'var(--st-cyan-glow)',
    },
    {
        place: '2nd Prize',
        prize: 'Fortune Favors The Brave',
        icon: FaMedal,
        color: 'var(--st-red)',
        glow: 'var(--st-red-glow)',
    },
    {
        place: '3rd Prize',
        prize: 'Only The Chosen Will Know',
        icon: FaAward,
        color: 'var(--st-purple)',
        glow: 'var(--st-purple-glow)',
    },
    {
        place: 'Classified Rewards',
        prize: 'The Bounty Awaits',
        icon: FaGift,
        color: 'var(--st-cyan)',
        glow: 'var(--st-cyan-glow)',
    },
];

export default prizesData;
