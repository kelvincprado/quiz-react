import { Question } from "@/types/Question";
import { useState } from "react";

type Props = {
    question: Question;
    count: number;
    onAnswer: (answer: number) => void;
}

export const Alternativas = ({ question, count, onAnswer}: Props) => {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

    const checkQuestion = (key: number) => {
        if (selectedAnswer === null) {
            setSelectedAnswer(key);
            
            setTimeout(() => {
                onAnswer(key);
                setSelectedAnswer(null);
            }, 2000);
        }
    }

    return(
        <div>
            <h1 className="font-bold text-2xl my-3">{count}. {question.pergunta}</h1>
            <div className="w-full p-3">
                {question.alternativas.map((item, key) => (
                    <div 
                        key={key} 
                        onClick={() => checkQuestion(key)} 

                        className = {`bg-blue-200 rounded-md border border-blue-300 px-3 py-2 text-lg mb-4 
                        ${selectedAnswer !== null ? 'cursor-auto' : 'cursor-pointer hover:opacity-60' }
                        ${selectedAnswer !== null && selectedAnswer === question.resposta && selectedAnswer === key && 'bg-green-200 border-green-300'}
                        ${selectedAnswer !== null && selectedAnswer !== question.resposta && selectedAnswer === key && 'bg-red-200 border-red-300'}

                        
                    `}>{item}</div>
                ))}
            </div>
        </div>
    );
}