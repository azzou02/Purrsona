import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import layingCat from '/laying-cat.png';

function Activation() {
    const [displayText, setDisplayText] = useState('');
    const [textComplete, setTextComplete] = useState(false);
    const text = "Ohhh looks like there is a cute cat, lets take a rub by clicking on it!";
    
    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < text.length) {
                setDisplayText((prev) => prev + text.charAt(index));
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
        navigate('/question-1');
    };
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-yellow-100 p-4">
            <div className="w-full max-w-xl bg-pink-100 rounded-3xl p-5 shadow-lg">
                <div className="bg-white rounded-2xl p-10 min-h-80 flex flex-col justify-between">
                    <p className="text-2xl font-bold text-left">
                        {displayText}
                    </p>
                    
                    <div className="flex justify-end">
                        {
                            textComplete && (
                                <img src={layingCat}
                                    className="h-45 p-4"
                                    alt="Sleepy Cat"
                                    onClick={handleStartClick}
                                />
                            )
                        }
                    </div>
    
                </div>
            </div>
        </div>
    );
}

export default Activation;