"use client";

import { useState } from "react"; // 追加
import { fetchImage } from "./fetch-image";
import styles from "./styles/page.module.css";
 

// コンポーネントの引数を定義する
type CatImageProps = {
    url: string;
};
 
// 画像を表示するコンポーネント
export function CatImage({ url }: CatImageProps) {
    console.log(styles);
    const [imageUrl,setImageUrl] = useState(url);

    const refreshImage = async() => {
        setImageUrl("");
        const image = await fetchImage();
        setImageUrl(image.url);
    }

    return (
        <div className = {styles.page}>
            <button onClick = {refreshImage} className={styles.button}>
                他のにゃんこも見る
            </button>
            <div className={styles.frame}>
                {imageUrl && <img src={imageUrl} className={styles.img} />}
            </div>
        </div>
    );
}