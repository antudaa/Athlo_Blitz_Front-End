
export interface TAvailableSlot {
    endTime: string;
    startTime: string;
    date: string;
    facility: string;
}

interface AvailableSlotsProps extends TAvailableSlot {
    onSelectSlot: (slot: TAvailableSlot) => void;
    isSelected: boolean;
}

const AvailableSlots = ({ startTime, endTime, date, facility, onSelectSlot, isSelected }: AvailableSlotsProps) => {
    const handleSelectSlot = () => {
        onSelectSlot({ startTime, endTime, date, facility });
    };

    return (
        <div className="col-span-4 md:col-span-2 flex flex-col py-3 text-center px-6 bg-indigo-50 text-indigo-600 border border-indigo-600 rounded-xl">
            <div className="font-semibold text-md mb-2">
                {startTime} - {endTime}
            </div>
            <button className={`w-full h-8 rounded-full  border-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-500 ${isSelected ? "bg-indigo-600 text-white" : "bg-white text-gray-800 border"}`} onClick={handleSelectSlot} disabled={isSelected}>
                {isSelected ? 'Selected' : 'Select Slot'}
            </button>
        </div>
    );
};

export default AvailableSlots;
