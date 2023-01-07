import * as React from "react"
import { Helmet } from "react-helmet"

type HeadProps = {
  title: string;
}

const Head:React.FC<HeadProps> = ({title}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta
                name="description"
                content="A library that summarizes frequently used UIs, functions, and animations"
            />
            <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0"></meta>
            <head prefix="og: http://ogp.me/ns#" />
            <meta property="og:url" content="hoge" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="UI・Functions・Animation・Librar" />
            <meta property="og:description" content="A library that summarizes frequently used UIs, functions, and animations" />
            <meta property="og:site_name" content="UI・Functions・Animation・Librar" />
            <meta property="og:image" content="OGPに掲載する画像" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/yakuhanjp@3.4.1/dist/css/yakuhanjp-noto.min.css"/>
        </Helmet>
    )
}

export default Head