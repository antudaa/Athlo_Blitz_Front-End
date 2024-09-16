export interface TAvailableSlot {
    endTime: string;
    startTime: string;
}

const AvailableSlots = ({ startTime, endTime }: TAvailableSlot) => {
    return (
        <div className='col-span-4 md:col-span-2 flex py-3 text-center px-6 bg-indigo-50 text-indigo-600 border border-indigo-600 rounded-xl'>
            {startTime} : {endTime}
        </div>
    );
};

export default AvailableSlots;
