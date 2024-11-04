import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';



const challenges = [
    { id: 1, title: 'Conversaciones dificiles', color: 'bg-[#CE3A40]', date: '2023-10-01' },
    { id: 2, title: 'Curso de JavaScript', color: 'bg-[#F3B3DA]', date: '2023-10-02' },
    { id: 3, title: 'Curso de CSS', color: 'bg-[#444C65]', date: '2023-10-03' },
];


const CalendarLayout = () => {

    const events = [
        { title: 'Reto 1', start: new Date(), end: new Date(), color: '#CE3A40' },
        { title: 'Reto 2', start: '2024-11-13', end: '2024-11-16', color: '#CE3A40' },
        { title: 'Reto 3', start: '2024-12-03', end: '2024-12-03', color: '#CE3A40' },
    ];
    const localizer = momentLocalizer(moment);

    const eventStyleGetter = (event: any) => {
        const backgroundColor = event.color || 'gray';
        return {
            style: {
                backgroundColor,
                borderRadius: '4px',
                opacity: 0.8,
                color: 'white',
                border: '0px',
                display: 'block',
            },
        };
    };


    return (
        <div className="p-4">
            <h2 className="title-large text-center sm:text-left">Proceso memoria espaciada</h2>
            <div className="flex flex-col sm:flex-row p-4 space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="w-full sm:w-3/4 p-4 rounded-lg bg-white shadow-md">
                    <h2 className="text-2xl font-bold mb-4 text-center sm:text-left">Calendario</h2>
                    <div className="h-80 sm:h-96 flex items-center justify-center text-gray-500">
                        <Calendar
                            localizer={localizer}
                            events={events}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: '100%', width: '100%' }}
                            eventPropGetter={eventStyleGetter}
                        />
                    </div>
                </div>

                <div className="w-full sm:w-1/4 p-4 rounded-lg shadow-md">
                    <ul className="space-y-3 sm:space-y-4">
                        {challenges.map((challenge) => (
                            <li key={challenge.id} className="flex items-center">
                                <span
                                    className={`w-4 h-4 rounded-full mr-2 sm:mr-4 ${challenge.color}`}
                                    aria-label="Color del curso"
                                ></span>
                                <p className="text-base sm:text-lg">{challenge.title}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CalendarLayout;