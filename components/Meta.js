import Head from 'next/head';
import stylesheet from 'static/css/base.css'
export default () => {
    return (
        <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta property="og:title" content="hahhah123"/>
            <style
                dangerouslySetInnerHTML={{ __html: stylesheet.replace(/\n/g, '') }}
            />
            <title>我的博客</title>
        </Head>
    )
}
