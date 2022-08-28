import { useRouter } from "next/router";
import { useEffect } from "react";
import PageHead from "../../components/PageHead";

export default function About() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, [router]);

    return (
        <div>
            <PageHead title='About' />
            <h3>Still working on it...</h3>
            <p>Maybe visit sometime later?</p>
        </div>
    );
}
