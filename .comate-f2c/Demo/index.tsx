import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";

export type IDemo = {};

export default function Demo(props: IDemo) {
  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <div className={styles.container}>
          <div className={styles.image}>
            <img
              src={require("./assets/ImageAsset2.png")}
              className={styles.image1}
              alt="Image Asset 2"
            />
            <div className={styles.content}>
              <div className={styles.main}>
                <div className={styles.text}>围观花火秀，获得祝福卡</div>
                <div className={styles.section}>
                  <div className={styles.subSection}>
                    <div className={styles.block}>
                      <div className={styles.image2}>
                        <div className={styles.div}>
                          <div className={styles.div1}>
                            <div className={styles.div2}>
                              <div className={styles.text1}>1</div>
                              <img
                                src={require("./assets/ImageAsset4.png")}
                                className={styles.image3}
                                alt="Image Asset 4"
                              />
                              <div className={styles.div3}>
                                <div className={styles.text2}>
                                  昵称昵称昵称...
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.div4}>
                            <div className={styles.div5}>
                              <div className={styles.text3}>去围观</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.block1}>
                      <div className={styles.image4}>
                        <div className={styles.div6}>
                          <div className={styles.div7}>
                            <div className={styles.div8}>
                              <div className={styles.text4}>1</div>
                              <img
                                src={require("./assets/ImageAsset6.png")}
                                className={styles.image5}
                                alt="Image Asset 6"
                              />
                              <div className={styles.div9}>
                                <div className={styles.text5}>
                                  昵称昵称昵称...
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.div10}>
                            <div className={styles.div11}>
                              <div className={styles.text6}>去围观</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.block2}>
                      <div className={styles.image6}>
                        <div className={styles.div12}>
                          <div className={styles.div13}>
                            <div className={styles.div14}>
                              <div className={styles.text7}>1</div>
                              <img
                                src={require("./assets/ImageAsset8.png")}
                                className={styles.image7}
                                alt="Image Asset 8"
                              />
                              <div className={styles.div15}>
                                <div className={styles.text8}>
                                  昵称昵称昵称...
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.div16}>
                            <div className={styles.div17}>
                              <div className={styles.text9}>去围观</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.block3}>
                      <div className={styles.image8}>
                        <div className={styles.div18}>
                          <div className={styles.div19}>
                            <div className={styles.div20}>
                              <div className={styles.text10}>1</div>
                              <img
                                src={require("./assets/ImageAsset10.png")}
                                className={styles.image9}
                                alt="Image Asset 10"
                              />
                              <div className={styles.div21}>
                                <div className={styles.text11}>
                                  昵称昵称昵称...
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.div22}>
                            <div className={styles.div23}>
                              <div className={styles.text12}>去围观</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.block4}>
                      <div className={styles.image10}>
                        <div className={styles.div24}>
                          <div className={styles.div25}>
                            <div className={styles.div26}>
                              <div className={styles.text13}>1</div>
                              <img
                                src={require("./assets/ImageAsset12.png")}
                                className={styles.image11}
                                alt="Image Asset 12"
                              />
                              <div className={styles.div27}>
                                <div className={styles.text14}>
                                  昵称昵称昵称...
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.div28}>
                            <div className={styles.div29}>
                              <div className={styles.text15}>去围观</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.section1}>
                  <div className={styles.text16}>点击查看更多</div>
                  <img
                    src={require("./assets/ImageAsset13.png")}
                    className={styles.image12}
                    alt="Image Asset 13"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={require("./assets/ImageAsset14.png")}
          className={styles.image13}
          alt="Image Asset 14"
        />
      </div>
    </div>
  );
}
