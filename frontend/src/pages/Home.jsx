import About from '../components/About';
import Timeline from '../components/Timeline';
import Themes from '../components/Themes';
import Prizes from '../components/Prizes';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <About />
            <Timeline />
            <Themes />
            <Prizes />
            <Sponsors />
            <Footer />
        </>
    );
}
