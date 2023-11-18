import React, { useState } from "react";
import { Card, Button, Image } from "antd";
import type { Novel } from "@/domain/novel";
import { initNovelList } from "./initNovelList";
const { Meta } = Card;

const NovelList = () => {
  const [list, setList] = useState<Novel[]>(initNovelList);
  return (
    <>
      {list.map((post) => (
        <div key={post.id}>
          <Card>
            <Meta title={post.title} description={post.description} />
            <Button>이동하기</Button>
          </Card>
        </div>
      ))}
    </>
  );
};

export default NovelList;
