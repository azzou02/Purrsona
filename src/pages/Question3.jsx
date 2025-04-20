import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Question3() {
    const [displayText, setDisplayText] = useState('');
    const [textComplete, setTextComplete] = useState(false);
    const text = "Stay home or go out?";
    
    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            
            if (index < text.length) {
                setDisplayText(prev => prev + text.charAt(index));
                index++;
            } else {
                clearInterval(typingInterval);
                setTextComplete(true);
            }
        }, 50);
        return () => clearInterval(typingInterval);
    }, []);

    const navigate = useNavigate();
    
    const handleStartClick = () => {
        navigate('/question-4');
    };
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100 p-4">
            <div className="w-full max-w-xl bg-pink-100 rounded-3xl p-5 shadow-lg">
                <div className="bg-white rounded-2xl p-10 min-h-96 flex flex-col justify-between">
                    <p className="text-2xl font-bold text-left">
                        {displayText}
                    </p>
                    
                    <div className="p-4 flex flex-row justify-between">
                        <button onClick={handleStartClick}
                            className="px-12 py-2 bg-pink-300 text-white font-medium rounded-lg hover:drop-shadow-[0_0_10px_#ff84c8aa] transition">
                            Yes
                        </button>
                        <button onClick={handleStartClick}
                                className="px-6 py-2 bg-pink-300 text-white font-medium rounded-lg hover:drop-shadow-[0_0_10px_#ff84c8aa] transition">
                            Sometimes
                        </button>
                        <button onClick={handleStartClick}
                                className="px-12 py-2 bg-pink-300 text-white font-medium rounded-lg hover:drop-shadow-[0_0_10px_#ff84c8aa] transition">
                            No
                        </button>
                    </div>
                    
                </div>
            </div>

            <div className="mt-6">
                <p> 3/6 </p>
            </div>
        </div>
    );
}

export default Question3;