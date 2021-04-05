import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

export default function FruitName(props) {
    const router = useRouter();
    if (router.isFallback) {
        return <h1>loading....</h1>;
    }
    return <h1>Hello from outer {`but value is ${props.randomValue}`} </h1>;
}

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            randomValue: Math.ceil(Math.random() * 10),
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [{ params: { name: "hello" } }, { params: { name: "world" } }],
        fallback: true,
    };
};
