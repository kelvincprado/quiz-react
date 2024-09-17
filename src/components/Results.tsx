import { Question } from "@/types/Question";

type Props = {
    questions: Question[];
    answers: number[];
}

export const Results = ({ questions, answers }: Props) => {
    return (
        <div>
            {questions.map((item, key) => (
                <div key={key} className="mb-3">
                    <div className="font-bold">{key + 1}. {item.pergunta}</div>
                    <div>
                        <span>({item.resposta === answers[key] ? 'Acertô' : 'Errrroou!'}) - </span>
                        {item.alternativas[item.resposta]}
                    </div>
                </div>
            ))}
        </div>
    );
}