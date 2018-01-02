import Link from 'next/link';
export default () => {
    return (
            <header className="header">
                <Link as="" href="/" ><a>首页</a></Link>
                <Link as="" href="/article"><a>文章</a></Link>
                <Link as="" href="/photos"><a>照片</a></Link>
                <Link as="" href="/about"><a>关于</a></Link>
            </header>
    )
}