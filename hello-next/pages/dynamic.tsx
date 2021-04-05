import { GetStaticProps,GetStaticPaths } from "next";

export default function Dynamic(props) {
    return <h1>Dynamic Number - {props.myFavNum}</h1>;
}

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            myFavNum: Math.ceil(Math.random() * 10),
        },
    };
};
