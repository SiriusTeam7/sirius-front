import { Clock, Trophy, Target } from 'lucide-react'
import { useState } from 'react'

interface StatsPanelProps {
    total_completed_challenges: number;
    total_time: number | null;
    average_score_globals: number;
}
export function StatsPanel({ total_completed_challenges, total_time, average_score_globals }: StatsPanelProps) {
    const [statsFilter, setStatsFilter] = useState('company')

    const parsedTime = total_time ? `${Math.floor(total_time / 24)}d ${total_time % 24}h` : '0d 0h'
    const scoreOneDecimal = average_score_globals.toFixed(1)
    return (
        <div className="w-80 rounded-lg bg-gray-800 p-6 flex flex-col justify-around items-stretch">
            <h2 className="mb-4 text-xl text-white">Tu equipo en números</h2>
            <p className="mb-6 text-sm text-gray-400">Esto es lo que ha repasado tu equipo</p>

            <div className="space-y-4">
                <div className="flex items-center rounded-lg bg-gray-700 p-4">
                    <Clock className="mr-4 h-8 w-8 text-pink-400" />
                    <div>
                        <div className="text-lg font-bold text-white">{parsedTime}</div>
                        <div className="text-sm text-gray-400">Tiempo en retos</div>
                    </div>
                </div>

                <div className="flex items-center rounded-lg bg-gray-700 p-4">
                    <Trophy className="mr-4 h-8 w-8 text-green-400" />
                    <div>
                        <div className="text-lg font-bold text-white">{total_completed_challenges} retos</div>
                        <div className="text-sm text-gray-400">Completados</div>
                    </div>
                </div>

                <div className="flex items-center rounded-lg bg-gray-700 p-4">
                    <Target className="mr-4 h-8 w-8 text-orange-400" />
                    <div>
                        <div className="text-lg font-bold text-white">{scoreOneDecimal}/10</div>
                        <div className="text-sm text-gray-400">Puntaje promedio</div>
                    </div>
                </div>
            </div>
            <nav className="flex border-t border-gray-700 bg-gray-800 p-4 mt-4">
                <div className="flex gap-4">
                    <button onClick={() => setStatsFilter("company")} className={`text-white border-b-2 pb-1 ${statsFilter === 'company' ? 'border-green-500' : 'border-transparent'}`}>Company</button>
                    <button onClick={() => setStatsFilter("all")} className={`text-white border-b-2 pb-1 ${statsFilter === 'all' ? 'border-green-500' : 'border-transparent'}`}>Global</button>
                </div>
            </nav>
        </div>
    )
}

