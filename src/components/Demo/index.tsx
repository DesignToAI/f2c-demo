import React from "react";
import styles from "./index.module.scss";

interface WatchCardProps {
  index: number;
  avatar: string;
  nickname: string;
  backgroundImage: string;
}

const WatchCard: React.FC<WatchCardProps> = ({
  index,
  avatar,
  nickname,
  backgroundImage,
}) => (
  <div className={styles.block}>
    <div className={styles.cardBg} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.cardContent}>
        <div className={styles.userInfo}>
          <div className={styles.userWrapper}>
            <div className={styles.index}>{index}</div>
            <img src={avatar} className={styles.avatar} alt={`Avatar ${index}`} />
            <div className={styles.nicknameWrapper}>
              <div className={styles.nickname}>{nickname}</div>
            </div>
          </div>
        </div>
        <div className={styles.actionWrapper}>
          <div className={styles.actionButton}>
            <div className={styles.actionText}>去围观</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const WATCH_LIST = [
  {
    avatar: require("./assets/ImageAsset4.png"),
    backgroundImage: require("./assets/ImageAsset3.png"),
  },
  {
    avatar: require("./assets/ImageAsset6.png"),
    backgroundImage: require("./assets/ImageAsset5.png"),
  },
  {
    avatar: require("./assets/ImageAsset8.png"),
    backgroundImage: require("./assets/ImageAsset7.png"),
  },
  {
    avatar: require("./assets/ImageAsset10.png"),
    backgroundImage: require("./assets/ImageAsset9.png"),
  },
  {
    avatar: require("./assets/ImageAsset12.png"),
    backgroundImage: require("./assets/ImageAsset11.png"),
  },
];

export interface DemoProps {}

export default function Demo(props: DemoProps) {
  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <div className={styles.container}>
          <div className={styles.banner}>
            <img
              src={require("./assets/ImageAsset2.png")}
              className={styles.logo}
              alt="Logo"
            />
            <div className={styles.content}>
              <div className={styles.main}>
                <div className={styles.title}>围观花火秀，获得祝福卡</div>
                <div className={styles.cardList}>
                  <div className={styles.cardWrapper}>
                    {WATCH_LIST.map((item, index) => (
                      <WatchCard
                        key={index}
                        index={index + 1}
                        avatar={item.avatar}
                        backgroundImage={item.backgroundImage}
                        nickname="昵称昵称昵称..."
                      />
                    ))}
                  </div>
                </div>
                <div className={styles.footer}>
                  <div className={styles.moreText}>点击查看更多</div>
                  <img
                    src={require("./assets/ImageAsset13.png")}
                    className={styles.arrowIcon}
                    alt="Arrow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={require("./assets/ImageAsset14.png")}
          className={styles.bottomIcon}
          alt="Bottom Icon"
        />
      </div>
    </div>
  );
}