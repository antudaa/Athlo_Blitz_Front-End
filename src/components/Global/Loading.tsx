import Lottie from 'lottie-react';
import LoadingAnimation from '../../../LoadingAnimation.json';

const Loading = () => {
    return (
        <section className='flex justify-center align-middle '>
            <Lottie className='w-[300px] md:w-[500px] h-[300px] md:h-[500px]' animationData={LoadingAnimation} />
        </section>
    );
};

export default Loading;