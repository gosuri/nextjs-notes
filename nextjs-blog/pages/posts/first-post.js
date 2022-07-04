import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import profilePic from '../../public/vercel.svg'
import Layout from "../../components/layout";


export default function FirstPost() {
    return (
        <>
            <Layout>
                <Head>
                    <title> First post </title>
                    <Script src="https://connect.facebook.net/en_US/sdk.js" strategy="beforeInteractive" />
                </Head>
                <h1>First Post</h1>
                <h2>
                    <Link href="/">
                        <a>Back</a>
                    </Link>
                </h2>
                <Image src={profilePic} alt="MyPic"></Image>
            </Layout>
        </>
    );
}