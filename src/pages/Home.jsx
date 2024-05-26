import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
    return (
        <>
        <Header />

        <main className='grid grid-rows-9 grid-cols-8 gap-4'>
        <Card 
                title="Card 1" 
                description="This is the first card." 
                image="path/to/image1.jpg" 
                className="bg-blue-800/25 row-start-1 row-end-4 col-span-4"
            />

        <Card 
            title="Card 2"
            description="Salut tout le monde"
            className="bg-emerald-800/25 row-span-2 col-start-5 col-end-9"
        />
        <Card 
            title="Card 3"
            description="Salut tout le monde"
            className="bg-pink-800/25 row-span-3 col-start-5 col-end-7"
        />
        <Card 
            title="Card 4"
            description="Salut tout le monde"
            className="bg-yellow-800/25 row-span-3 col-start-7 col-end-9"
        />
        <Card 
            title="Card 5"
            description="Salut tout le monde"
            className="bg-yellow-800/25 row-start-4 row-end-6 col-span-4"
        />
        <Card 
            title="Card 6"
            description="Salut tout le monde"
            className="bg-yellow-800/25 row-start-6 row-end-9 col-span-4"
        />
        <Card 
            title="Card 7"
            description="Salut tout le monde"
            className="bg-yellow-800/25 row-span-2 col-start-5 col-end-9"
        />
        <Card 
            title="Card 8"
            description="Salut tout le monde"
            className="bg-yellow-800/25 row-span-2 col-start-5 col-end-9"
        />
        </main>

        <Footer />
        </>
    );
};

export default Home;