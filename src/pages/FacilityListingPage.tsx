import { Button, Input, Select, Spin } from 'antd';
import { useState } from 'react';


const { Search } = Input;

const FacilityListingPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sort, setSort] = useState('');
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState('');
    const [limit] = useState(6);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (value: string) => {
        setFilter(value);
    };

    const handleSortChange = (value: string) => {
        setSort(value);
    };

    const handlePageChange = (pageNumber: number) => {
        setPage(pageNumber);
    };

    return (
        <section className="py-24 ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-14 text-center">
                    <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-6 max-w-max lg:max-w-3xl lg:mx-auto">Developed from scratch for seamless online functionality</h2>
                    <p className="text-base font-normal text-gray-500 lg:max-w-2xl lg:mx-auto mb-8">Using technology to make finance simpler, smarter and more rewarding. </p>
                    <div className="flex flex-col md:flex-row gap-5 max-w-lg mx-auto md:max-w-2xl lg:max-w-5xl justify-between">
                        <div >
                            <Search
                                style={{ borderColor: '#4f46e5' }}
                                className='my-auto w-full md:w-[250px] mx-auto'
                                placeholder="input search text"
                                allowClear
                                enterButton={<Button style={{ backgroundColor: '#4f46e5', borderColor: '#4f46e5', color: '#fff' }}>Search</Button>}
                                size="large"
                                onChange={handleSearch}
                            />
                        </div>
                        <div className='flex gap-4'>
                            <div  className='flex-1'>
                                <Select
                                    className='w-full'
                                    showSearch
                                    placeholder="Sort"
                                    onChange={handleSortChange}
                                    options={[
                                        { value: 'price', label: 'Price' },
                                        { value: 'rating', label: 'Rating' },
                                        { value: 'title', label: 'Title' },
                                    ]}
                                />
                            </div>
                            <div  className='flex-1'>
                                <Select
                                    className='w-full md:w-32 md:flex'
                                    showSearch
                                    placeholder="Filter"
                                    onChange={handleFilterChange}
                                // options={
                                //     [
                                //         { value: '', label: 'All' },
                                //         ...(categoryData?.data?.data?.map((category: TCategory) => ({
                                //             value: category._id,
                                //             label: category.categoryName
                                //         })) || [])
                                //     ]
                                // }
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="font-sans py-10 px-4 mx-auto lg:max-w-5xl md:max-w-3xl sm:max-w-full">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
                            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                                <img src="https://readymadeui.com/images/product1.webp" alt="Product 1"
                                    className="h-full w-full object-cover object-top" />
                            </div>

                            <div className="p-4">
                                <h3 className="text-lg font-bold text-gray-800">Lexicon Luxe | T-shirt</h3>
                                <div className="mt-4 flex items-center flex-wrap gap-2">
                                    <h4 className="text-lg font-bold text-gray-800">$10</h4>

                                    <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block"
                                            viewBox="0 0 64 64">
                                            <path
                                                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                                data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
                            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                                <img src="https://readymadeui.com/images/product2.webp" alt="Product 2"
                                    className="h-full w-full object-cover object-top" />
                            </div>

                            <div className="p-4">
                                <h3 className="text-lg font-bold text-gray-800">Adjective Attire | T-shirt</h3>
                                <div className="mt-4 flex items-center flex-wrap gap-2">
                                    <h4 className="text-lg font-bold text-gray-800">$12</h4>

                                    <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block"
                                            viewBox="0 0 64 64">
                                            <path
                                                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                                data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
                            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                                <img src="https://readymadeui.com/images/product3.webp" alt="Product 3"
                                    className="h-full w-full object-cover object-top" />
                            </div>

                            <div className="p-4">
                                <h3 className="text-lg font-bold text-gray-800">ThreadCraft Vibes | T-shirt</h3>
                                <div className="mt-4 flex items-center flex-wrap gap-2">
                                    <h4 className="text-lg font-bold text-gray-800">$14</h4>

                                    <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block"
                                            viewBox="0 0 64 64">
                                            <path
                                                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                                data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
                            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                                <img src="https://readymadeui.com/images/product7.webp" alt="Product 3"
                                    className="h-full w-full object-cover object-top" />
                            </div>

                            <div className="p-4">
                                <h3 className="text-lg font-bold text-gray-800">Verbal Vogue Tees | T-shirt</h3>
                                <div className="mt-4 flex items-center flex-wrap gap-2">
                                    <h4 className="text-lg font-bold text-gray-800">$12</h4>

                                    <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block"
                                            viewBox="0 0 64 64">
                                            <path
                                                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                                data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
                            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                                <img src="https://readymadeui.com/images/product5.webp" alt="Product 3"
                                    className="h-full w-full object-cover object-top" />
                            </div>

                            <div className="p-4">
                                <h3 className="text-lg font-bold text-gray-800">Jargon Jungle | T-shirt</h3>
                                <div className="mt-4 flex items-center flex-wrap gap-2">
                                    <h4 className="text-lg font-bold text-gray-800">$15</h4>

                                    <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block"
                                            viewBox="0 0 64 64">
                                            <path
                                                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                                data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
                            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                                <img src="https://readymadeui.com/images/product6.webp" alt="Product 3"
                                    className="h-full w-full object-cover object-top" />
                            </div>

                            <div className="p-4">
                                <h3 className="text-lg font-bold text-gray-800">Syllable Streetwear | T-shirt</h3>
                                <div className="mt-4 flex items-center flex-wrap gap-2">
                                    <h4 className="text-lg font-bold text-gray-800">$14</h4>

                                    <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block"
                                            viewBox="0 0 64 64">
                                            <path
                                                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                                data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FacilityListingPage;