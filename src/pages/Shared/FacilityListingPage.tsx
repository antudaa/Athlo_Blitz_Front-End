import FacilityCard from '../../components/ui/card/FacilityCard';
import { motion } from 'framer-motion';
import { useGetAllFacilitiesQuery } from '../../redux/features/facility/facilityApi';
import Loading from '../../components/Global/Loading';
import { IFacility } from '../../types/Facility/facility.type';
import PaginationComponent from '../../components/ui/Pagination/Pagination';
import { useState } from 'react';
import DebounceSearch from '../../hooks/debounceSearchHook';
import SearchComponent from '../../components/ui/Search/SearchComponent';
import FilterComponent from '../../components/ui/Filter/FilterComponent';
import SortComponent from '../../components/ui/Sort/SortComponent';
import ErrorComponent from '../../components/ui/error/ErrorComponent';

const FacilityListingPage = () => {
    // Animation variants for the cards
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    const [searchTerm, setSearchTerm] = useState('');
    const [sort, setSort] = useState('');
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState('');
    const [limit] = useState(6);

    const debouncedSearchTerm = DebounceSearch(searchTerm, 500);
    const { data: { data: facilityData } = { data: [], total: 0 }, isLoading: facilityLoading, error } = useGetAllFacilitiesQuery({ searchTerm: debouncedSearchTerm, sort, pricePerHour: filter, page, limit });

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
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

    if (facilityLoading) {
        return <Loading />;
    }

    if (error) {
        return <ErrorComponent message='Something went wrong! Please try again.' />;
    }

    return (
        <section className="py-24 relative">
            <div className="w-full mx-auto px-8 md:px-8 lg:px-20 mt-10">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-3 w-full max-md:max-w-md max-md:mx-auto">
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                        >
                            <SearchComponent searchTerm={searchTerm} onSearchChange={handleSearchChange} />
                        </motion.div>
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                        >
                            <FilterComponent onFilterChange={handleFilterChange} />
                        </motion.div>
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                        >
                            <SortComponent onSortChange={handleSortChange} />
                        </motion.div>
                    </div>
                    <div className="col-span-12 md:col-span-9">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
                            {facilityData?.data && facilityData?.data?.length > 0 ? (
                                facilityData?.data?.map((facility: IFacility) => (
                                    <FacilityCard facility={facility} key={facility?._id} />
                                ))
                            ) : (
                                <div className='text-center'>No facilities found</div>
                            )}
                        </div>
                    </div>
                </div>
                {/* Pagination Button  */}
                <PaginationComponent
                    current={page}
                    total={facilityData.total}
                    pageSize={limit}
                    onChange={handlePageChange}
                />
            </div>
        </section>
    );
};

export default FacilityListingPage;