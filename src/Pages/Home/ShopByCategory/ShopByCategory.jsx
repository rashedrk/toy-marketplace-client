import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import './ShopByCategory.css';
import { useEffect, useState } from 'react';
import ToyCards from '../ToyCards/ToyCards';

const ShopByCategory = () => {
    //load data by Teddy Category
    const [category, setCategory] = useState('teddy');
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch(`https://toy-marketplace-server-orpin.vercel.app/toys/subCategory/${category}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [category])

    return (
        <div className='p-4'>
            <h1 className='text-4xl font-bold my-16 text-center'>Shop By Category</h1>
            <Tabs className='w-full '>
                <TabList className='flex justify-center '>
                    <Tab onClick={() => setCategory('teddy')}  className='tab text-lg me-3 px-14' selectedClassName='active-tab text-xl'>Teddy</Tab>
                    <Tab onClick={() => setCategory('dinosaur')} className='tab text-lg me-3 px-14' selectedClassName='active-tab text-xl'>Dinosaur</Tab>
                    <Tab onClick={() => setCategory('cat')}  className='tab text-lg me-3 px-14' selectedClassName='active-tab text-xl'>Cat</Tab>
                </TabList>
                <hr className='mb-10 ' />
                <TabPanel className='grid gap-4 lg:grid-cols-3'>
                    {
                        toys.map(toy => <ToyCards key={toy._id} toy={toy} ></ToyCards>)
                    }
                </TabPanel>
                <TabPanel className='grid gap-3 lg:grid-cols-3'>
                    {
                        
                        toys.map(toy => <ToyCards key={toy._id} toy={toy} ></ToyCards>)
                    }
                </TabPanel>
                <TabPanel className='grid gap-4 lg:grid-cols-3'>
                    {
                        toys.map(toy => <ToyCards key={toy._id} toy={toy} ></ToyCards>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;