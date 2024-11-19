import CourseCard from "@/modules/core/components/CourseCardt";
import { Course } from "@/modules/core/interfaces/Courses.interface";

const courses: Course[] = [
    {
        id: 1,
        course_id: 101,
        course_title: "Curso de Java",
        icon: "@/assets/curso-java.png",
        challenges_availables: 1,
    },
    {
        id: 2,
        course_id: 102,
        course_title: "Curso de Python",
        icon: "@/assets/course-english.png",
        challenges_availables: 2,
    },
];


const CourseAvailables: React.FC = () => {
    return (
        <>
            <p className="text-lg ">Repasos disponibles</p>
            <div className="flex mt-6 mb-10  gap-6">
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </>

    );
};

export default CourseAvailables;