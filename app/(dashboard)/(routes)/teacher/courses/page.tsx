import { Button } from "@/components/ui/button";
import Link from "next/link";

const coursesPage = () => {
    return (
        <div className="p-6">
            <Link href="/teacher/create">
                <Button className="p-6">
                    New Course
                </Button>

            </Link>

        </div>
    );
}

export default coursesPage;