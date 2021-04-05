import { useRouter } from "next/router";

export default function FruitName() {
    const router = useRouter();
    const fruitName = router.query.subname;

    function takeMeHome() {
        router.push("/");
    }

    return (
        <h1>
            {`You are searching for ${fruitName}`}
            <button onClick={takeMeHome}>Home</button>
        </h1>
    );
}
